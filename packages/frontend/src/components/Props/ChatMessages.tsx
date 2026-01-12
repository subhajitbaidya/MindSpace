import { useEffect, useRef } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Avatar } from "../ui/avatar";
import type { Message } from "../../Pages/TherapistPage";
import { Bot } from "lucide-react";

interface ChatMessagesProps {
  messages: Message[];
  isTyping: boolean;
}

export function ChatMessages({ messages, isTyping }: ChatMessagesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <ScrollArea className="flex-1 p-4">
      <div ref={scrollRef} className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.sender === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {message.sender === "agent" && (
              <Avatar className="w-8 h-8">
                <Bot />
              </Avatar>
            )}
            <div
              className={`flex flex-col ${
                message.sender === "user" ? "items-end" : "items-start"
              } max-w-[70%]`}
            >
              <div
                className={`rounded-2xl px-4 py-2.5 ${
                  message.sender === "user"
                    ? "bg-[#EBA2BF] text-gray-900"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <p>{message.text}</p>
              </div>
              <span className="text-xs text-gray-500 mt-1 px-1">
                {formatTime(message.timestamp)}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3">
            <Avatar className="w-8 h-8">
              <Bot />
            </Avatar>
            <div className="bg-gray-100 rounded-2xl px-4 py-3">
              <div className="flex gap-1">
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </ScrollArea>
  );
}
