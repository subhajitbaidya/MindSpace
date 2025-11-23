from fastapi import FastAPI, WebSocket
from app.AI.agent import TherapistAgent
import json


app = FastAPI()


@app.websocket("/agent")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()

    while True:
        data = await websocket.receive_text()
        print(data)
        print(type(data))

        await websocket.send_text("hello from websocket string")
