from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from app.schemas.agent_schemas import AgentRequest, AgentResponse
from app.agent.agent import Agent

router = APIRouter()
agent = Agent()


@router.websocket("")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()

    try:
        while True:
            data = await websocket.receive_json()

            message = data["prompt"]

            output = await agent.run(message)

            await websocket.send_json({"output": output})

    except WebSocketDisconnect:
        print("Client disconnected")

    except Exception as e:
        print(f"WebSocket Error: {e}")
        await websocket.close()
