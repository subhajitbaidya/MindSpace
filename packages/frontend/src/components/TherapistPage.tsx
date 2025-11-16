import { useState } from "react";
import { ChatHeader } from "./widgets/ChatHeader";
import { ChatMessages } from "./widgets/ChatMessages";
import { ChatInput } from "./widgets/ChatInput";

export interface Message {
  id: string;
  text: string;
  sender: "user" | "agent";
  timestamp: Date;
}

export default function TherapistPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! How can I help you today?",
      sender: "agent",
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
    },
    {
      id: "2",
      text: "Hi! I have a question about my recent order.",
      sender: "user",
      timestamp: new Date(Date.now() - 1000 * 60 * 4),
    },
    {
      id: "3",
      text: "Of course! I'd be happy to help you with that. Could you please provide me with your order number?",
      sender: "agent",
      timestamp: new Date(Date.now() - 1000 * 60 * 3),
    },
    {
      id: "4",
      text: "Sure, it's #ORD-12345",
      sender: "user",
      timestamp: new Date(Date.now() - 1000 * 60 * 2),
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);

    // Simulate agent typing and response
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const agentResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thank you! Let me look that up for you.",
        sender: "agent",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, agentResponse]);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-4xl h-[700px] bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
        <ChatHeader />
        <ChatMessages messages={messages} isTyping={isTyping} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
