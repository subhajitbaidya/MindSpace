from pydantic import BaseModel


class AgentRequest(BaseModel):
    prompt: str


class AgentResponse(BaseModel):
    output: str
