from langchain.chat_models import init_chat_model
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
import asyncio


class LLM:
    def __init__(self, model):
        self.model = model
        self.llm = init_chat_model(
            model=self.model,
            model_provider="ollama",
            temparature=0.5,
        )

        self.prompt = ChatPromptTemplate.from_messages([
            ("system", "You are a helpful assistant who answwers everything witthin 100 words."),
            ("human", "{input}")
        ])
        self.parser = StrOutputParser()

        self.chain = self.prompt | self.llm | self.parser

    async def generate(self, prompt: str) -> str:
        response = await self.chain.ainvoke({"input": prompt})
        return response


if __name__ == "__main__":
    llm = LLM("gemma3:4b")
    result = asyncio.run(llm.generate("Who are you?"))
    print(result)
