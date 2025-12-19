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
  const socketRef = useRef<WebSocket | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! How can I help you today?",
      sender: "agent",
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
    },
  ]);

  // Websocket connection
  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:8000/agent");
    socketRef.current = newSocket;

    newSocket.onopen = () => {
      console.log("Connected");
    };

    newSocket.onmessage = (event) => {
      setIsTyping(false);
      const parsed = JSON.parse(event.data);
      const messageText = parsed.output;
      const agentResponse: Message = {
        id: Date.now().toString(),
        text: messageText,
        sender: "agent",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, agentResponse]);
    };

    newSocket.onerror = (err) => {
      console.error(err);
      setIsTyping(false);
    };

    return () => newSocket.close();
  }, []);

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

    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({ prompt: text }));
    } else {
      console.error("WebSocket not connected");
      setIsTyping(false);
    }
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
