import requests
from app.core.config import settings


def query_ollama(prompt: str) -> str:
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={"model": settings.OLLAMA_MODEL,
              "prompt": prompt, "stream": False}
    )
    return response.json().get("response", "")
