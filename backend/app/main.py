from typing import Union

from fastapi import FastAPI, HTTPException
from models import Item

app = FastAPI()


items = {}

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/items/", response_model=Item)
def create_item(item: Item):
    item_id = len(items) + 1
    items[item_id] = item
    return item

@app.get("/items/{item_id}", response_model=Item)
def read_item(item_id: int):
    if item_id in items:
        return items[item_id]
    raise HTTPException(status_code=404, detail="Item not found")

@app.put("/items/{item_id}", response_model=Item)
def update_item(item_id: int, item: Item):
    if item_id in items:
        items[item_id] = item
        return item
    raise HTTPException(status_code=404, detail="Item not found")

@app.delete("/items/{item_id}", response_model=Item)
def delete_item(item_id: int):
    if item_id in items:
        return items.pop(item_id)
    raise HTTPException(status_code=404, detail="Item not found")