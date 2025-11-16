import { Card } from "../ui/card";
import { Avatar } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Heart, MessageCircle, Bookmark } from "lucide-react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

interface JournalCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  coverImage: string;
  category: string;
  date: string;
  likes: number;
  comments: number;
  isLiked?: boolean;
  isBookmarked?: boolean;
  onLike?: (id: string) => void;
  onBookmark?: (id: string) => void;
}

export function JournalCard({
  id,
  title,
  excerpt,
  author,
  coverImage,
  category,
  date,
  likes,
  comments,
  isLiked = false,
  isBookmarked = false,
  onLike,
  onBookmark,
}: JournalCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        {/* <ImageWithFallback
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        /> */}
        <Badge className="absolute top-3 left-3">{category}</Badge>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center gap-3">
          <Avatar className="size-10">
            {/* <ImageWithFallback
              src={author.avatar}
              alt={author.name}
              className="w-full h-full object-cover"
            /> */}
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm truncate">{author.name}</p>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
        </div>

        <div>
          <h3 className="mb-1.5 line-clamp-2">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex items-center gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onLike?.(id);
              }}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Heart
                className={`size-4 ${
                  isLiked ? "fill-red-500 text-red-500" : ""
                }`}
              />
              <span>{likes}</span>
            </button>
            <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <MessageCircle className="size-4" />
              <span>{comments}</span>
            </button>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onBookmark?.(id);
            }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Bookmark
              className={`size-4 ${isBookmarked ? "fill-current" : ""}`}
            />
          </button>
        </div>
      </div>
    </Card>
  );
}
