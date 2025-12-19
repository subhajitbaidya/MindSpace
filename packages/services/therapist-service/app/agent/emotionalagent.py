from app.agent.classifier import ConversationState
from app.agent.llm import LLM

llm = LLM('gpt-oss:120b-cloud')


async def emotional_agent(state: ConversationState):
    last = state.messages[-1].content

    reply = llm.invoke([
        {"role": "system", "content": """
            You are a compassionate therapist. Respond with empathy.
        """},
        {"role": "user", "content": last}
    ])

    return {"messages": [{"role": "assistant", "content": reply.content}]}
