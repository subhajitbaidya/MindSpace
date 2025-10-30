import { BookOpen, Heart, PenLine, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-purple-600" />
            <span className="text-2xl text-purple-900">MindSpace</span>
          </div>

          <div className="flex items-center gap-6">
            <button
            // onClick={() => setCurrentPage("home")}
            >
              <BookOpen className="h-5 w-5" />
              <span>Home</span>
            </button>

            <button>
              <BookOpen className="h-5 w-5" />
              <span>Books</span>
            </button>

            <button>
              <PenLine className="h-5 w-5" />
              <span>Journal</span>
            </button>

            <div className="flex items-center gap-2 ml-4 px-3 py-2 bg-red-50 text-red-700 rounded-lg">
              <Phone className="h-4 w-4" />
              <span className="text-sm">Crisis: 988</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
