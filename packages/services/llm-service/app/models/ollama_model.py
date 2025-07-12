from ollama import chat

stream = chat(
    model='llama3.2',
    messages=[{'role': 'user',
               'content': 'I am a pretty looking girl, what should I wear for my friends wedding? Answer in one sentence'}],
    stream=True,
)

for chunk in stream:
    print(chunk['message']['content'], end='', flush=True)
