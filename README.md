
  # QA Portfolio

  This is a code bundle for QA Portfolio. The original project is available at https://www.figma.com/design/WImZEHDhCKiSNquhF0ZAgi/QA-Portfolio.

## Live site

https://murdadrum.github.io/Qaportfolio/

## Running the code

If you just cloned the repo, initialize submodules first:

```bash
git submodule update --init --recursive
```

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Python test setup (pytest + Playwright)

Create and activate a local virtual environment, then install pytest + Playwright:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -U pip pytest playwright pytest-playwright
python -m playwright install
```

In VS Code, select the interpreter at `.venv/bin/python`.

## Testing

Run pytest from the repo root:

```bash
pytest
```

### Playwright UI + link validation

Start the dev server in one terminal:

```bash
npm run dev
```

Then run the Playwright baseline test in another:

```bash
BASE_URL=http://localhost:5173 pytest tests/playwright/test_ui_links.py
```

To include external link checks:

```bash
CHECK_EXTERNAL=1 BASE_URL=http://localhost:5173 pytest tests/playwright/test_ui_links.py
```
  
