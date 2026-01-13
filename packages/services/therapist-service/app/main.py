from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from langchain_ollama import ChatOllama

app = FastAPI()

model = ChatOllama(
    model="deepseek-r1:1.5b",
    streaming=True
)


@app.websocket("/agent")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()

    try:
        while True:
            data = await websocket.receive_json()
            prompt = data.get("prompt")

            # stream tokens
            async for chunk in model.astream(prompt):
                if chunk.content:
                    await websocket.send_json({
                        "type": "token",
                        "content": chunk.content
                    })

            # signal completion
            await websocket.send_json({
                "type": "end"
            })

    except WebSocketDisconnect:
        print("Client disconnected")
