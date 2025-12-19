from fastapi import FastAPI
# from app.AI.agent import TherapistAgent
from app.routes.agentrouter import router


app = FastAPI(title="LLM Agent")

app.include_router(router, prefix="/agent", tags=["Agent"])


@app.get("/health")
def health():
    return {"status": "ok"}
