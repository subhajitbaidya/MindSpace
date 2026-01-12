import { useState, useRef } from "react";
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
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Textarea } from "../components/ui/textarea";
import CalendarWidget from "../components/Props/CalenderWidget";
import { Checkbox } from "../components/ui/checkbox";
import { useNavigate } from "react-router";

type Mood = "great" | "okay" | "struggling";

interface JournalEntry {
  _id: string;
  date: Date;
  mood: Mood;
  title: string;
  content: string;
  consent: boolean;
}

type JournalPayload = {
  date: Date;
  mood: Mood;
  title: string;
  content: string;
  consent: boolean;
};

export function JournalPage() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [currentEntry, setCurrentEntry] = useState("");
  const [currentMood, setCurrentMood] = useState<Mood>("okay");
  const [currentTitle, setCurrentTitle] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectConsent, setSelectedConsent] = useState(false);
  const [saved, setSaved] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const resetForm = () => {
    setCurrentEntry("");
    setCurrentMood("okay");
    setCurrentTitle("");
    setSelectedConsent(false);
    setSaved(false);
  };

  const saveEntry = async () => {
    if (!currentEntry.trim()) return;

    const payload: JournalPayload = {
      date: selectedDate,
      mood: currentMood,
      title: currentTitle,
      content: currentEntry,
      consent: selectConsent,
    };

    try {
      const response = await fetch("/api/v0/journal/savepost", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to save entry");

      const data = await response.json();
      console.log(data);

      setEntries((prev) => [data.data, ...prev]);
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteEntry = (id: string) => {
    setEntries((prev) => prev.filter((entry) => entry._id !== id));
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

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/v0/upload", {
        method: "POST",
        body: formData,
        credentials: "include", // ✅ send cookies (JWT)
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      console.log("Uploaded image URL:", data.url);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen py-20 pt-10 bg-linear-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-black">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* New Entry Card */}
        <Card className="p-8 mb-12 border-purple-200 shadow-lg">
          <div className="space-y-6">
            <div className="relative flex items-center justify-between">
              <h2 className="text-2xl text-gray-900 font-medium">
                New Journal Entry
              </h2>
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
                      if (!date) return;

                      setSelectedDate(date);
                      setShowCalendar(false);
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
                  <input
                    className="border-none outline-none focus:outline-none focus:ring-0"
                    placeholder="Enter journal title"
                    onChange={(e) => setCurrentTitle(e.target.value)}
                  />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleButtonClick}
                  disabled={loading}
                  className="border-purple-300 text-purple-700 hover:bg-purple-100"
                >
                  <Sparkles className="h-4 w-4 mr-1" />
                  {loading ? "Uploading..." : "Upload Media"}
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleFileChange}
                />
              </div>
            </div>

            {/* Text Area */}
            <div>
              <Textarea
                value={currentEntry}
                onChange={(e) => setCurrentEntry(e.target.value)}
                placeholder="Write your thoughts here.."
                className="min-h-[200px] resize-y border-purple-200 focus:border-purple-400 rounded-lg"
              />
            </div>

            {/* Save Button */}
            <div className="flex justify-end items-center gap-6">
              <input type="file" className="hidden" />
              <div className="flex items-center gap-2">
                <Checkbox
                  className="border-black"
                  checked={selectConsent}
                  onCheckedChange={(checked) =>
                    setSelectedConsent(Boolean(checked))
                  }
                  disabled={saved}
                />
                <p className="text-sm">share with community</p>
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
            </Card>
          ) : (
            <div className="space-y-6">
              {entries.map((entry) => (
                <Card
                  key={entry._id}
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
                          "{entry.title}"
                        </p>
                      </div>
                    </div>
                    <Button
                      onClick={() => deleteEntry(entry._id)}
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
                  <Button
                    variant="outline"
                    onClick={() => navigate("/home/userjournals")}
                  >
                    see more
                  </Button>
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
    </section>
  );
}

export default JournalPage;
