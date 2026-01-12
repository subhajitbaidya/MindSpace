import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Send, Paperclip, Smile } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (text: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="border-t p-4 bg-white">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <Button type="button" variant="ghost" size="icon" className="shrink-0">
          <Paperclip className="w-5 h-5" />
        </Button>
        <Button type="button" variant="ghost" size="icon" className="shrink-0">
          <Smile className="w-5 h-5" />
        </Button>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1"
        />
        <Button
          type="submit"
          size="icon"
          disabled={!message.trim()}
          className="shrink-0"
        >
          <Send className="w-5 h-5" />
        </Button>
      </form>
    </div>
  );
}
