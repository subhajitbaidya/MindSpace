from fastapi import APIRouter, Depends
from app.schemas.chat import PromptRequest, PromptResponse
from app.services.inference import run_inference

router = APIRouter()


@router.post("/chat", response_model=PromptResponse)
def chat_endpoint(request: PromptRequest):
    return run_inference(request.prompt)
