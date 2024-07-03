# Commands used to generate this template

## Frontend

```bash
yarn create vite 
```

Input:

```text
✔ Project name: … frontend
✔ Select a framework: › React
✔ Select a variant: › TypeScript + SWC
```

```bash
cd frontend/
yarn set version latest
yarn config set nodeLinker node-modules
```

Paste the following in `.gitignore`

```text
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions

# Swap the comments on the following lines if you wish to use zero-installs
# In that case, don't forget to run `yarn config set enableGlobalCache false`!
# Documentation here: https://yarnpkg.com/features/caching#zero-installs

#!.yarn/cache
.pnp.*
```

## Backend

```bash
mkdir backend 
```

Create virtual environment

```bash
# for installing uv check https://github.com/astral-sh/uv
uv venv
uv pip install fastapi
```

Create `main.py` with the following content:

```python
from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
```

```bash
source .venv/bin/activate 
fastapi dev main.py 
```
