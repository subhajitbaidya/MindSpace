from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI()


class Employee(BaseModel):
    id: int
    name: str
    age: int
    description: str


data: List[Employee] = []


@app.get('/users')
def get_users():
    return data


@app.post('/users')
def add_users(user: Employee):
    data.append(user)
    return data


@app.put('/users/{user_id}')
def update_users(user_id: int, updated_user: Employee):
    for index, user in enumerate(data):
        if user.id == user_id:
            data[index] = updated_user
            return data

    return HTTPException(status_code=401, detail="not found")


@app.delete('/users/{user_id}')
def delete_users(user_id: int):
    for index, value in enumerate(data):
        if value.id == user_id:
            deleted = data.remove(index)
            return deleted
    return HTTPException(status_code=401, detail="not found")
