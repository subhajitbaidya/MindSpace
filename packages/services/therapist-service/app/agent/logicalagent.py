from app.agent.classifier import ConversationState


async def logical_agent(llm, state: ConversationState):
    last = state.messages[-1].content

    reply = llm.invoke([
        {"role": "system", "content": """
            You are a logical assistant. Provide direct factual answers.
        """},
        {"role": "user", "content": last}
    ])

    return {"messages": [{"role": "assistant", "content": reply.content}]}
