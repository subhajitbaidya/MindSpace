from fastapi import FastAPI, WebSocket
from app.AI.agent import TherapistAgent
import json


app = FastAPI()


@app.websocket("/agent")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    agent = TherapistAgent('gemma3:4b', 'ollama')

    while True:
        data = await websocket.receive_text()
        response = agent.initialize_agent(data)
        await websocket.send_text(json.dumps(response))
