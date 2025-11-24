from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from app.AI.agent import TherapistAgent
import asyncio


app = FastAPI()


@app.websocket("/agent")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    agent = TherapistAgent('deepseek-v3.1:671b-cloud', 'ollama')

    try:
        while True:
            data = await websocket.receive_text()
            print(f"Received: {data}")

            # Running method in thread pool
            response = await asyncio.to_thread(agent.invoke, data)

            await websocket.send_text(response)

    except WebSocketDisconnect:
        print("Client disconnected")
    except Exception as e:
        print(f"Error: {e}")
        await websocket.close()
