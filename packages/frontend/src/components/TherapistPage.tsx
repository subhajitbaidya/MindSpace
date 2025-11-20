import { useState } from "react";
import { ChatMessages } from "./widgets/ChatMessages";
import { ChatHeader } from "./widgets/ChatHeader";
import { AIInput } from "./ui/ai-input";
import { useEffect, useRef } from "react";

export interface Message {
  id: string;
  text: string;
  sender: "user" | "agent";
  timestamp: Date;
}

export default function TherapistPage() {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! How can I help you today?",
      sender: "agent",
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
    },
  ]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages]);

  const [isTyping, setIsTyping] = useState(false);
  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };

    // Use functional update here
    setMessages((prev) => [...prev, newMessage]);

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
    <div className="flex max-w-full rounded-lg shadow-lg h-[700px] flex-col overflow-hidden max-h-screen bg-gray-50 p-4">
      {/* Scrollable messages container */}
      <div ref={messagesEndRef} className="grow overflow-y-auto px-4">
        <div className="flex-none sticky top-0 bg-gray-50 z-10">
          <ChatHeader />
        </div>

        <ChatMessages messages={messages} isTyping={isTyping} />
      </div>

      {/* Fixed input container outside scrollable area */}
      <div className="p-4">
        <AIInput onSubmit={handleSendMessage} />
      </div>
    </div>
  );
}
