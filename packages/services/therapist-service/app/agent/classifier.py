from typing import Optional, Literal
from langgraph.graph import MessagesState
from pydantic import BaseModel


class ConversationState(MessagesState):
    message_type: Optional[Literal["emotional", "logical"]] = None


class MessageClassifier(BaseModel):
    message_type: Literal["emotional", "logical"]


async def classify_message(llm, state: ConversationState):
    last_user_message = state.messages[-1].content

    structured_llm = llm.with_structured_output(MessageClassifier)

    result = structured_llm.invoke([
        {
            "role": "system",
            "content": """Classify user message as:
            emotional — if emotional, sad, stressed, overwhelmed.
            logical — if factual, technical, or seeking information."""
        },
        {"role": "user", "content": last_user_message}
    ])

    return {"message_type": result.message_type}
