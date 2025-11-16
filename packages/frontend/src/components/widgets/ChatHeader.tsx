import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { MoreVertical } from "lucide-react";
import { Button } from "../ui/button";

export function ChatHeader() {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-white">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" />
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-semibold">Sarah Anderson</h2>
          <div className="flex items-center gap-2">
            <Badge
              variant="secondary"
              className="bg-green-100 text-green-700 hover:bg-green-100"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
              Online
            </Badge>
            <span className="text-gray-500 text-sm">Support Agent</span>
          </div>
        </div>
      </div>
      <Button variant="ghost" size="icon">
        <MoreVertical className="w-5 h-5" />
      </Button>
    </div>
  );
}
