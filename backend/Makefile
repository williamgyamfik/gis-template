# Makefile for FastAPI project

# Create the virtual environment
venv:
	uv venv

# Install dependencies
install:
	uv pip install -r requirements.txt

# Update dependencies
update:
	uv pip install --upgrade -r requirements.txt

# Freeze dependencies
freeze:
	uv pip freeze > requirements.txt

# Run the application
run:
	$(VENV_DIR)/bin/uvicorn main:app --host 0.0.0.0 --port 8000

.PHONY: venv install update freeze run

