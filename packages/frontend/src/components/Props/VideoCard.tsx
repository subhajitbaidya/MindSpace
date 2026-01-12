import { Play, Clock, User } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { type MeditationVideo } from "../../Pages/MeditatePage";

interface VideoCardProps {
  video: MeditationVideo;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Card className="group overflow-hidden bg-white/80 backdrop-blur border-indigo-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-linear-to-br from-indigo-100 to-purple-100">
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="size-16 rounded-full bg-white/90 flex items-center justify-center backdrop-blur">
            <Play className="size-8 text-indigo-600 ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <Badge className="bg-white/90 text-indigo-900 backdrop-blur border-0">
            {video.category}
          </Badge>
        </div>

        {/* Duration */}
        <div className="absolute bottom-3 right-3">
          <div className="bg-black/70 text-white px-2 py-1 rounded flex items-center gap-1 text-sm backdrop-blur">
            <Clock className="size-3" />
            {video.duration}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-slate-900 mb-2 line-clamp-1">{video.title}</h3>
        <p className="text-sm text-slate-600 mb-3 line-clamp-2">
          {video.description}
        </p>

        <div className="flex items-center gap-2 text-sm text-slate-500">
          <User className="size-4" />
          <span>{video.instructor}</span>
        </div>
      </div>
    </Card>
  );
}
