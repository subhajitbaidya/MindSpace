import { JournalEntry } from "../components/Props/JournalCard";

const journalEntries = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1725452119206-f04b8fdfe034?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG5hdHVyZSUyMGpvdXJuYWx8ZW58MXx8fHwxNzY4MTQyMDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "A Quiet Morning by the Lake",
    content:
      "Today I woke up early to catch the sunrise by the lake. The stillness of the water and the soft light filtering through the trees created a moment of perfect peace. It reminded me how important it is to slow down and appreciate the simple beauty around us.\n\nI sat there for almost an hour, just listening to the birds and watching the mist slowly lift off the water. These quiet moments are becoming my favorite part of the day.",
    date: "January 10, 2026",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1617037201980-ddc9c1ebbd83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBtb3JuaW5nJTIwcm91dGluZXxlbnwxfHx8fDE3NjgxNDIwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Sunday Morning Ritual",
    content:
      "There's something magical about Sunday mornings. The world moves slower, and I can take my time with my coffee and thoughts. Today I tried a new Ethiopian blend - it has notes of blueberry and chocolate that paired perfectly with the book I've been reading.\n\nI'm grateful for these small rituals that anchor my week. They remind me that life isn't just about the big moments, but also about savoring the everyday pleasures.",
    date: "January 7, 2026",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1697728408412-667233d26d8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBtb3VudGFpbnMlMjB0cmF2ZWx8ZW58MXx8fHwxNzY4MTQyMDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Mountain Sunset",
    content:
      "Reached the summit just as the sun began its descent. The view was absolutely breathtaking - layers of mountains fading into the distance, painted in shades of purple and gold. All the effort of the climb melted away in that moment.\n\nI realized that the best views really do come after the hardest climbs. This journey has taught me so much about perseverance and the rewards of pushing beyond my comfort zone.",
    date: "January 5, 2026",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1706195546853-a81b6a190daf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMHJlYWRpbmclMjBjb3p5fGVufDF8fHx8MTc2ODEyMTE5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Lost in Pages",
    content:
      "Spent the entire rainy afternoon curled up with a new novel. There's something profoundly comforting about getting lost in a good story while the rain patters against the window. The outside world fades away, and I'm transported to another time and place.\n\nReading has always been my favorite form of travel. Today I visited 19th century London without ever leaving my cozy reading nook.",
    date: "January 3, 2026",
  },
];

export default function UserJournals() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-black">
      {/* Journal Entries */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {journalEntries.map((entry) => (
            <JournalEntry
              key={entry.id}
              image={entry.image}
              title={entry.title}
              content={entry.content}
              date={entry.date}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
