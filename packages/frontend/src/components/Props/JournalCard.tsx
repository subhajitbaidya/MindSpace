import { Calendar } from "lucide-react";

interface JournalEntryProps {
  image: string;
  title: string;
  content: string;
  date: string;
}

export function JournalEntry({
  image,
  title,
  content,
  date,
}: JournalEntryProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-video w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
          <Calendar className="w-4 h-4" />
          <time dateTime={date}>{date}</time>
        </div>
        <h2 className="text-2xl mb-3">{title}</h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {content}
        </p>
      </div>
    </article>
  );
}
