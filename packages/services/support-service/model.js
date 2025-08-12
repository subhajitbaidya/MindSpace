import ollama from "ollama";

const generateResponse = async (query) => {
  const message = { role: "user", content: query };
  const response = await ollama.chat({
    model: "deepseek-r1:1.5b",
    messages: [message],
  });

  return response.message.content;
};

export default generateResponse;
