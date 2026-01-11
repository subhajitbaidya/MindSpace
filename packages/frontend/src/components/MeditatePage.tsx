import { useState } from "react";
import { VideoCard } from "./widgets/VideoCard";
import { PageHeader } from "./widgets/PageHeader";
// import Searchbar from "./widgets/Searchbar";

export interface MeditationVideo {
  id: string;
  title: string;
  duration: string;
  category: string;
  instructor: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}

const meditationVideos: MeditationVideo[] = [
  {
    id: "1",
    title: "Morning Mindfulness",
    duration: "10 min",
    category: "Mindfulness",
    instructor: "Sarah Chen",
    thumbnail: "meditation morning",
    videoUrl: "#",
    description:
      "Start your day with clarity and purpose through guided mindfulness practice.",
  },
  {
    id: "2",
    title: "Deep Breathing for Stress Relief",
    duration: "15 min",
    category: "Breathing",
    instructor: "Michael Rose",
    thumbnail: "breathing yoga",
    videoUrl: "#",
    description:
      "Learn powerful breathing techniques to manage stress and anxiety.",
  },
  {
    id: "3",
    title: "Body Scan Meditation",
    duration: "20 min",
    category: "Body Scan",
    instructor: "Emma Wilson",
    thumbnail: "peaceful meditation",
    videoUrl: "#",
    description: "A complete body awareness meditation for deep relaxation.",
  },
  {
    id: "4",
    title: "Loving Kindness Practice",
    duration: "12 min",
    category: "Loving Kindness",
    instructor: "David Kumar",
    thumbnail: "nature peace",
    videoUrl: "#",
    description:
      "Cultivate compassion for yourself and others with this heart-opening practice.",
  },
  {
    id: "5",
    title: "Sleep Meditation",
    duration: "25 min",
    category: "Sleep",
    instructor: "Lisa Anderson",
    thumbnail: "sleep peaceful",
    videoUrl: "#",
    description:
      "Drift into restful sleep with this calming bedtime meditation.",
  },
  {
    id: "6",
    title: "Walking Meditation",
    duration: "8 min",
    category: "Movement",
    instructor: "James Park",
    thumbnail: "walking nature",
    videoUrl: "#",
    description:
      "Bring mindfulness to movement with this gentle walking meditation.",
  },
  {
    id: "7",
    title: "Chakra Balancing",
    duration: "30 min",
    category: "Energy",
    instructor: "Priya Sharma",
    thumbnail: "chakra meditation",
    videoUrl: "#",
    description:
      "Balance your energy centers through guided visualization and breathwork.",
  },
  {
    id: "8",
    title: "Quick Mindful Break",
    duration: "5 min",
    category: "Mindfulness",
    instructor: "Sarah Chen",
    thumbnail: "calm meditation",
    videoUrl: "#",
    description:
      "A brief meditation perfect for busy schedules and work breaks.",
  },
];

const categories = [
  "All",
  "Mindfulness",
  "Breathing",
  "Body Scan",
  "Loving Kindness",
  "Sleep",
  "Movement",
  "Energy",
];

export default function MeditatePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVideos = meditationVideos.filter((video) => {
    const matchesCategory =
      selectedCategory === "All" || video.category === selectedCategory;
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pb-10 bg-linear-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <PageHeader
          text="Mindfullness"
          description="Meditate daily from our curated collections, track your progress"
        />
        {/* <Searchbar /> */}
        {/* Search Bar */}
        {/* <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
          <Input
            type="text"
            placeholder="Search meditations or instructors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/80 backdrop-blur border-indigo-200 focus:border-indigo-400"
          />
        </div> */}

        {/* Category Filters */}
        {/* <div className="mb-8 flex items-center gap-3 flex-wrap">
          <Filter className="size-5 text-slate-600" />
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer transition-all ${
                selectedCategory === category
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "hover:bg-indigo-100 border-indigo-300"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div> */}

        {/* Video Grid */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-slate-500">
              No meditations found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
