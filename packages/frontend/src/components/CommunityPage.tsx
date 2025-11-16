import { useState } from "react";
import { JournalCard } from "./widgets/JournalWidget";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Search, TrendingUp } from "lucide-react";

interface Journal {
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
  isLiked: boolean;
  isBookmarked: boolean;
}

const mockJournals: Journal[] = [
  {
    id: "1",
    title: "Finding Peace in Daily Reflection",
    excerpt:
      "Today I realized that taking just 10 minutes each morning to reflect has transformed my entire outlook on life. The simple act of putting pen to paper...",
    author: {
      name: "Sarah Mitchell",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    coverImage:
      "https://images.unsplash.com/photo-1579017308347-e53e0d2fc5e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsJTIwd3JpdGluZ3xlbnwxfHx8fDE3NjE4NTg4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Wellness",
    date: "2 days ago",
    likes: 234,
    comments: 18,
    isLiked: false,
    isBookmarked: false,
  },
  {
    id: "2",
    title: "A Journey Through the Mountains",
    excerpt:
      "The crisp mountain air filled my lungs as I reached the summit. This hike taught me more about perseverance than any book ever could...",
    author: {
      name: "Alex Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    coverImage:
      "https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYxODExMzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Travel",
    date: "3 days ago",
    likes: 412,
    comments: 32,
    isLiked: false,
    isBookmarked: false,
  },
  {
    id: "3",
    title: "Morning Rituals That Changed My Life",
    excerpt:
      "Coffee, journaling, and quiet contemplation. These three simple things have become my anchor in a chaotic world. Let me share what I've learned...",
    author: {
      name: "Emma Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    coverImage:
      "https://images.unsplash.com/photo-1501848055256-c05f5545c9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxNzY1MjY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Lifestyle",
    date: "5 days ago",
    likes: 567,
    comments: 45,
    isLiked: false,
    isBookmarked: false,
  },
  {
    id: "4",
    title: "Exploring Hidden Corners of the World",
    excerpt:
      "Every destination has stories waiting to be discovered. Today's adventure took me to places I never imagined existed, and the experiences will stay with me forever...",
    author: {
      name: "Marcus Thompson",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    coverImage:
      "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzYxODM2OTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Adventure",
    date: "1 week ago",
    likes: 891,
    comments: 67,
    isLiked: false,
    isBookmarked: false,
  },
  {
    id: "5",
    title: "Sunset Reflections on Life's Journey",
    excerpt:
      "Watching the sun dip below the mountain peaks, I found myself contemplating the paths we choose and the roads less traveled. Here's what nature taught me...",
    author: {
      name: "Olivia Park",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    },
    coverImage:
      "https://images.unsplash.com/photo-1625465004402-d16eb1e01960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzYxODMyMzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Inspiration",
    date: "1 week ago",
    likes: 723,
    comments: 54,
    isLiked: false,
    isBookmarked: false,
  },
  {
    id: "6",
    title: "City Lights and Night Thoughts",
    excerpt:
      "The urban landscape at night has a magic of its own. Walking through illuminated streets, I discovered that inspiration can be found anywhere...",
    author: {
      name: "James Wilson",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    coverImage:
      "https://images.unsplash.com/photo-1495407123977-951ef41c11fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGNpdHl8ZW58MXx8fHwxNzYxODE5NDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Urban",
    date: "2 weeks ago",
    likes: 456,
    comments: 28,
    isLiked: false,
    isBookmarked: false,
  },
];

const categories = [
  "All",
  "Wellness",
  "Travel",
  "Lifestyle",
  "Adventure",
  "Inspiration",
  "Urban",
];

export default function CommunityPage() {
  const [journals, setJournals] = useState<Journal[]>(mockJournals);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleLike = (id: string) => {
    setJournals(
      journals.map((journal) =>
        journal.id === id
          ? {
              ...journal,
              isLiked: !journal.isLiked,
              likes: journal.isLiked ? journal.likes - 1 : journal.likes + 1,
            }
          : journal
      )
    );
  };

  const handleBookmark = (id: string) => {
    setJournals(
      journals.map((journal) =>
        journal.id === id
          ? { ...journal, isBookmarked: !journal.isBookmarked }
          : journal
      )
    );
  };

  const filteredJournals = journals.filter((journal) => {
    const matchesCategory =
      selectedCategory === "All" || journal.category === selectedCategory;
    const matchesSearch =
      journal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      journal.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      journal.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 z-10">
        <div className="container max-w-7xl mx-auto px-4 py-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search journals, authors, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </header>

      <main className="container max-w-7xl mx-auto px-4 py-8">
        {/* Category Filters */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer whitespace-nowrap"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Journal Grid */}
        {filteredJournals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJournals.map((journal) => (
              <JournalCard
                key={journal.id}
                {...journal}
                onLike={handleLike}
                onBookmark={handleBookmark}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              No journals found matching your criteria.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
