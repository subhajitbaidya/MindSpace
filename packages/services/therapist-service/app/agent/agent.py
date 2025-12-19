from app.agent.llm import LLM
from app.agent.tools import WordCountTool
from app.agent.retriever import Retriever
from app.agent.classifier import ConversationState, classify_message
from app.agent.emotionalagent import emotional_agent
from app.agent.logicalagent import logical_agent
from app.agent.router import route_message


class Agent:

    def __init__(self):
        self.llm = LLM("gemma3:4b")
        self.tools = [WordCountTool()]
        self.retriever = Retriever()

    async def run(self, prompt: str) -> str:

        state: ConversationState = {
            "message_type": None
        }

        state["message_type"] = classify_message(self.llm, state)

        route = route_message(state)

        if route == "emotional":
            return emotional_agent(self.llm, state)

        return logical_agent(self.llm, state)
