import { Search, Filter } from "lucide-react";

export const PageHeader = ({
  text,
  description,
}: {
  text: string;
  description: string;
}) => {
  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-foreground">{text}</h1>
        <p className="text-muted-foreground mt-1">{description}</p>
      </div>

      <div className="flex gap-3">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            size={18}
          />
          <input
            type="text"
            placeholder="type here..."
            className="pl-10 pr-4 py-2 rounded-lg bg-card border border-transparent focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all w-full md:w-64"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-transparent hover:border-border transition-colors text-foreground">
          <Filter size={18} />
          <span>Filter</span>
        </button>
      </div>
    </header>
  );
};
