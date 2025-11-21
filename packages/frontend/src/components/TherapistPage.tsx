import { useState, useEffect, useRef } from "react";
import { ChatMessages } from "./widgets/ChatMessages";
import { ChatHeader } from "./widgets/ChatHeader";
import { AIInput } from "./ui/ai-input";

export interface Message {
  id: string;
  text: string;
  sender: "user" | "agent";
  timestamp: Date;
}

export default function TherapistPage() {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const ws = useRef<WebSocket | null>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! How can I help you today?",
      sender: "agent",
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  // Auto-scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages]);

  // WebSocket setup
  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8000/agent");

    ws.current.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    ws.current.onmessage = (event) => {
      const serverMsg: Message = JSON.parse(event.data);
      setMessages((prev) => [...prev, serverMsg]);
      setIsTyping(false);
    };

    ws.current.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    ws.current.onclose = () => {
      console.log("WebSocket closed");
    };

    return () => ws.current?.close();
  }, []);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };

    // Add user message locally
    setMessages((prev) => [...prev, newMessage]);

    // Send to server
    ws.current?.send(JSON.stringify(newMessage));

    // Indicate typing until server responds
    setIsTyping(true);
  };

  return (
    <div className="flex max-w-full rounded-lg shadow-lg h-[700px] flex-col overflow-hidden max-h-screen bg-gray-50 p-4">
      <div ref={messagesEndRef} className="grow overflow-y-auto px-4">
        <div className="flex-none sticky top-0 bg-gray-50 z-10">
          <ChatHeader />
        </div>

        <ChatMessages messages={messages} isTyping={isTyping} />
      </div>

      <div className="p-4">
        <AIInput onSubmit={handleSendMessage} />
      </div>
    </div>
  );
}
