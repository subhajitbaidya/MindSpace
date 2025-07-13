from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()


class Employee(BaseModel):
    id: 1
    name: str
    age: int
    descrption: str


data: List[Employee] = []
