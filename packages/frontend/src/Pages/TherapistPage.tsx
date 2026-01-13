import { useState } from "react";
import { ChatMessages } from "../components/Props/ChatMessages";
import { AIInput } from "../components/ui/ai-input";
import { useEffect, useRef } from "react";
import { BotIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      const parsed = JSON.parse(event.data);

      if (parsed.type === "token") {
        setMessages((prev) => {
          const last = prev[prev.length - 1];

          // append token to last agent message
          if (last?.sender === "agent") {
            return [
              ...prev.slice(0, -1),
              { ...last, text: last.text + parsed.content },
            ];
          }

          // create new agent message
          return [
            ...prev,
            {
              id: Date.now().toString(),
              text: parsed.content,
              sender: "agent",
              timestamp: new Date(),
            },
          ];
        });
      }

      if (parsed.type === "end") {
        setIsTyping(false);
      }
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
          <div className="flex items-center justify-between p-4 border-b bg-white">
            <div className="flex items-center gap-3">
              <BotIcon />
              <div>
                <h2 className="font-semibold">Therapist AI</h2>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-white-100 text-green-700"
                  >
                    Free tier
                  </Badge>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <MoreVertical className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <ChatMessages messages={messages} isTyping={isTyping} />
      </div>
      <div className="p-4">
        <AIInput onSubmit={handleSendMessage} />
      </div>
    </div>
  );
}
