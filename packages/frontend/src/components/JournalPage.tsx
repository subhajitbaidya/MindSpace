import { useState } from "react";
import {
  Calendar,
  Save,
  Trash2,
  Smile,
  Meh,
  Frown,
  PlusCircle,
  Sparkles,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Textarea } from "./ui/textarea";
import CalendarWidget from "./widgets/CalenderWidget";
import { Checkbox } from "./ui/checkbox";
import { Upload } from "lucide-react";

type Mood = "great" | "okay" | "struggling";

interface JournalEntry {
  id: number;
  date: string;
  mood: Mood;
  content: string;
  prompt: string;
}

const journalPrompts = [
  "What am I grateful for today?",
  "What is one small victory I achieved today?",
  "How am I feeling right now, and why?",
  "What would I tell a friend who is going through what I'm experiencing?",
  "What boundaries do I need to set for my wellbeing?",
  "What brought me peace or joy today?",
  "What challenge did I face today, and how did I cope?",
  "What do I need to forgive myself for?",
];

export function JournalPage() {
  const [entries, setEntries] = useState<JournalEntry[]>([
    {
      id: 1,
      date: "2025-10-11",
      mood: "great",
      content:
        "Today I practiced mindfulness for 10 minutes and it really helped me feel centered. I'm proud of myself for making time for this.",
      prompt: "What am I grateful for today?",
    },
    {
      id: 2,
      date: "2025-10-10",
      mood: "okay",
      content:
        "Had some ups and downs today. Working on being gentle with myself during difficult moments.",
      prompt: "How am I feeling right now, and why?",
    },
  ]);

  const [currentEntry, setCurrentEntry] = useState("");
  const [currentMood, setCurrentMood] = useState<Mood>("okay");
  const [currentPrompt, setCurrentPrompt] = useState(journalPrompts[0]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const getRandomPrompt = () => {
    const randomPrompt =
      journalPrompts[Math.floor(Math.random() * journalPrompts.length)];
    setCurrentPrompt(randomPrompt);
  };

  const saveEntry = () => {
    if (!currentEntry.trim()) return;

    const newEntry: JournalEntry = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      mood: currentMood,
      content: currentEntry,
      prompt: currentPrompt,
    };

    setEntries([newEntry, ...entries]);
    setCurrentEntry("");
    setCurrentMood("okay");
  };

  const deleteEntry = (id: number) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const getMoodIcon = (mood: Mood) => {
    switch (mood) {
      case "great":
        return <Smile className="h-5 w-5 text-green-600" />;
      case "struggling":
        return <Frown className="h-5 w-5 text-red-600" />;
      default:
        return <Meh className="h-5 w-5 text-yellow-600" />;
    }
  };

  const getMoodColor = (mood: Mood) => {
    switch (mood) {
      case "great":
        return "bg-green-100 text-green-700 border-green-200";
      case "struggling":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-linear-to-r from-purple-600 to-teal-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-white mb-4">Your Personal Journal</h1>
          <p className="text-xl text-white/90">
            A safe space to process your thoughts and feelings
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* New Entry Card */}
        <Card className="p-8 mb-12 border-purple-200 shadow-lg">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl text-gray-900">New Entry</h2>
              <Button
                variant="outline"
                onClick={() => setShowCalendar((prev) => !prev)}
                className="flex items-center gap-2 text-gray-600"
              >
                <Calendar className="h-5 w-5" />
                <span>
                  {selectedDate.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </Button>

              {showCalendar && (
                <div className="absolute right-0 mt-30 z-50 bg-white rounded-lg shadow-lg">
                  <CalendarWidget
                    selectedDate={selectedDate}
                    onDateChange={(date) => {
                      if (date) {
                        setSelectedDate(date);
                        setShowCalendar(false); // hide calendar on select
                      }
                    }}
                  />
                </div>
              )}
            </div>

            {/* Mood Selector */}
            <div>
              <label className="block mb-3 text-gray-700">
                How are you feeling today?
              </label>
              <div className="flex gap-3">
                <button
                  onClick={() => setCurrentMood("great")}
                  className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                    currentMood === "great"
                      ? "border-green-600 bg-green-50"
                      : "border-gray-200 hover:border-green-300"
                  }`}
                >
                  <Smile
                    className={`h-8 w-8 mx-auto mb-2 ${
                      currentMood === "great"
                        ? "text-green-600"
                        : "text-gray-400"
                    }`}
                  />
                  <p className="text-sm">Great</p>
                </button>
                <button
                  onClick={() => setCurrentMood("okay")}
                  className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                    currentMood === "okay"
                      ? "border-yellow-600 bg-yellow-50"
                      : "border-gray-200 hover:border-yellow-300"
                  }`}
                >
                  <Meh
                    className={`h-8 w-8 mx-auto mb-2 ${
                      currentMood === "okay"
                        ? "text-yellow-600"
                        : "text-gray-400"
                    }`}
                  />
                  <p className="text-sm">Okay</p>
                </button>
                <button
                  onClick={() => setCurrentMood("struggling")}
                  className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                    currentMood === "struggling"
                      ? "border-red-600 bg-red-50"
                      : "border-gray-200 hover:border-red-300"
                  }`}
                >
                  <Frown
                    className={`h-8 w-8 mx-auto mb-2 ${
                      currentMood === "struggling"
                        ? "text-red-600"
                        : "text-gray-400"
                    }`}
                  />
                  <p className="text-sm">Struggling</p>
                </button>
              </div>
            </div>

            {/* Journal Prompt */}
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-purple-700 mb-1">
                    Today's Prompt:
                  </p>
                  <p className="text-purple-900 italic">{currentPrompt}</p>
                </div>
                <Button
                  onClick={getRandomPrompt}
                  variant="outline"
                  size="sm"
                  className="border-purple-300 text-purple-700 hover:bg-purple-100"
                >
                  <Sparkles className="h-4 w-4 mr-1" />
                  upload images
                </Button>
              </div>
            </div>

            {/* Text Area */}
            <div>
              <Textarea
                value={currentEntry}
                onChange={(e) => setCurrentEntry(e.target.value)}
                placeholder="Write your thoughts here... Remember, this is a judgment-free space. Be honest with yourself."
                className="min-h-[200px] resize-y border-purple-200 focus:border-purple-400 rounded-lg"
              />
            </div>

            {/* Save Button */}
            <div className="flex justify-end items-center gap-6">
              <input type="file" className="hidden" />
              <div className="flex items-center gap-2">
                <Checkbox className="border-black" />
                <p className="text-sm">share your article with the community</p>
              </div>

              <Button
                onClick={saveEntry}
                disabled={!currentEntry.trim()}
                className="bg-purple-600 hover:bg-purple-700 px-8 py-6 rounded-lg"
              >
                <Save className="h-5 w-5 mr-2" />
                Save Entry
              </Button>
            </div>
          </div>
        </Card>

        {/* Previous Entries */}
        <div>
          <h2 className="text-2xl text-gray-900 mb-6">Previous Entries</h2>

          {entries.length === 0 ? (
            <Card className="p-12 text-center border-purple-100">
              <PlusCircle className="h-16 w-16 text-purple-300 mx-auto mb-4" />
              <p className="text-xl text-gray-600">No entries yet</p>
              <p className="text-gray-500 mt-2">
                Start journaling to track your mental health journey
              </p>
            </Card>
          ) : (
            <div className="space-y-6">
              {entries.map((entry) => (
                <Card
                  key={entry.id}
                  className="p-6 border-purple-100 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg border ${getMoodColor(
                          entry.mood
                        )}`}
                      >
                        {getMoodIcon(entry.mood)}
                      </div>
                      <div>
                        <p className="text-gray-900">
                          {new Date(entry.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                        <p className="text-sm text-purple-600 italic">
                          "{entry.prompt}"
                        </p>
                      </div>
                    </div>
                    <Button
                      onClick={() => deleteEntry(entry.id)}
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {entry.content}
                  </p>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Support Message */}
        <Card className="mt-12 p-6 bg-linear-to-r from-purple-50 to-teal-50 border-purple-200">
          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <Sparkles className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-gray-900 mb-2">Remember</h3>
              <p className="text-gray-700">
                Journaling is a powerful tool for self-reflection and healing.
                There's no right or wrong way to journal. Be patient and kind
                with yourself as you explore your thoughts and feelings.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default JournalPage;
