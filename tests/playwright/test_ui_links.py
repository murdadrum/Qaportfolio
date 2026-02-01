import os
from urllib.parse import urljoin, urlparse

import pytest
from playwright.sync_api import expect


BASE_URL = os.getenv("BASE_URL", "http://localhost:5173").rstrip("/")
CHECK_EXTERNAL = os.getenv("CHECK_EXTERNAL", "0") == "1"
EXTERNAL_SKIP_DOMAINS = {
    domain.strip().lower()
    for domain in os.getenv("EXTERNAL_SKIP_DOMAINS", "linkedin.com").split(",")
    if domain.strip()
}

SECTION_IDS = ["hero", "about", "skills", "expertise", "projects", "contact"]


def _is_external(url: str) -> bool:
    base = urlparse(BASE_URL)
    target = urlparse(url)
    return bool(target.netloc) and target.netloc != base.netloc


def _is_skipped_external(url: str) -> bool:
    target = urlparse(url)
    domain = target.netloc.lower()
    return any(domain == skip or domain.endswith(f".{skip}") for skip in EXTERNAL_SKIP_DOMAINS)


def _normalize_href(href: str) -> str:
    return href.strip()


@pytest.fixture(params=["desktop", "mobile"])
def viewport_context(request, browser, playwright):
    name = request.param
    if name == "desktop":
        context = browser.new_context(viewport={"width": 1280, "height": 800})
    else:
        device = playwright.devices["iPhone 13"]
        context = browser.new_context(**device)
    yield name, context
    context.close()


def test_ui_smoke_across_viewports(viewport_context):
    name, context = viewport_context
    page = context.new_page()

    page.goto(BASE_URL, wait_until="networkidle")

    # Core sections should render on both desktop and mobile.
    for section_id in SECTION_IDS:
        expect(page.locator(f"#{section_id}")).to_be_visible()

    # Basic hero content check.
    expect(page.get_by_role("heading", level=1, name="Software QA Engineer")).to_be_visible()

    # Navigation behavior differs by viewport.
    menu_toggle = page.get_by_role("button", name="Toggle mobile menu")
    if name == "mobile":
        expect(menu_toggle).to_be_visible()
        menu_toggle.click()
        expect(page.get_by_role("menuitem", name="About")).to_be_visible()
        expect(page.get_by_role("menuitem", name="Projects")).to_be_visible()
    else:
        expect(menu_toggle).to_be_hidden()
        expect(page.get_by_role("button", name="About")).to_be_visible()
        expect(page.get_by_role("button", name="Projects")).to_be_visible()

    page.close()


def test_links_are_valid(viewport_context):
    _, context = viewport_context
    page = context.new_page()
    page.goto(BASE_URL, wait_until="networkidle")

    hrefs = page.eval_on_selector_all(
        "a[href]",
        "els => els.map(e => e.getAttribute('href'))",
    )

    seen = set()
    broken = []

    for raw in hrefs:
        if not raw:
            continue
        href = _normalize_href(raw)
        if not href or href in seen:
            continue
        seen.add(href)

        if href.startswith(("mailto:", "tel:", "javascript:")):
            continue

        if href.startswith("#"):
            if page.locator(href).count() == 0:
                broken.append(f"Missing in-page anchor: {href}")
            continue

        url = urljoin(f"{BASE_URL}/", href)

        if _is_external(url):
            if CHECK_EXTERNAL:
                if _is_skipped_external(url):
                    continue
                resp = page.request.get(url, timeout=10_000)
                if resp.status >= 400:
                    broken.append(f"External link {url} returned {resp.status}")
            else:
                parsed = urlparse(url)
                if parsed.scheme not in ("http", "https"):
                    broken.append(f"External link has invalid scheme: {url}")
            continue

        resp = page.request.get(url, timeout=10_000)
        if resp.status >= 400:
            broken.append(f"Internal link {url} returned {resp.status}")

    page.close()
    assert not broken, "Broken links found:\n" + "\n".join(broken)
