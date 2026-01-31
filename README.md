
  # QA Portfolio

  This is a code bundle for QA Portfolio. The original project is available at https://www.figma.com/design/WImZEHDhCKiSNquhF0ZAgi/QA-Portfolio.

## Running the code

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
  
