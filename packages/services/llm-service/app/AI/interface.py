from app.core.config import settings
from app.models.ollama_model import query_ollama
from app.models.rag_model import query_rag


def run_inference(prompt: str):
    if settings.USE_RAG:
        result = query_rag(prompt)
    else:
        result = query_ollama(prompt)
    return {"response": result}
