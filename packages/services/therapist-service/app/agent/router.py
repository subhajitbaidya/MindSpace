from app.agent.classifier import ConversationState


def route_message(state: ConversationState):
    if state.message_type == "emotional":
        return "emotional_agent"
    return "logical_agent"
