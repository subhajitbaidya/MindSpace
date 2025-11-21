from langchain.chat_models import init_chat_model


class TherapistAgent:
    def __init__(self, agent, provider):
        self.agent = agent
        self.provider = provider

    def initialize_agent(self, query):
        llm = init_chat_model(
            model=self.agent,
            model_provider=self.provider
        )

        response = llm.invoke(query)
        return response.content


if __name__ == "__main__":
    agent = TherapistAgent('gemma3:4b', 'ollama')
    print(type(agent.initialize_agent("who are you, answer in one line")))
