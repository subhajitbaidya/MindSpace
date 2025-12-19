class WordCountTool:
    """A simple example tool."""

    async def run(self, prompt: str) -> str:
        count = len(prompt.split())
        return f"WordCountTool: The prompt contains {count} words."
