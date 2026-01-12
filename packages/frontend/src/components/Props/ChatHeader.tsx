import { BotIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { MoreVertical } from "lucide-react";
import { Button } from "../ui/button";

export function ChatHeader() {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-white">
      <div className="flex items-center gap-3">
        <BotIcon />
        <div>
          <h2 className="font-semibold">Therapist AI</h2>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-white-100 text-green-700">
              Free tier
            </Badge>
          </div>
        </div>
      </div>
      <Button variant="ghost" size="icon">
        <MoreVertical className="w-5 h-5" />
      </Button>
    </div>
  );
}
