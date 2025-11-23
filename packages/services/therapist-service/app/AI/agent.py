from langchain.chat_models import init_chat_model
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate


class TherapistAgent:
    def __init__(self, agent, provider):
        self.agent = agent
        self.provider = provider
        self.llm = init_chat_model(
            model=self.agent,
            model_provider=self.provider
        )
        self.parser = StrOutputParser()

        self.prompt = ChatPromptTemplate.from_messages([
            ("system", "You are a helpful assistant who answwers everything witthin 100 words."),
            ("human", "{input}")
        ])

        self.chain = self.prompt | self.llm | self.parser

    def invoke(self, query):
        response = self.chain.invoke({"input": query})
        return response
