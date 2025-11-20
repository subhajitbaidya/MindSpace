import {
  BookOpen,
  PenLine,
  ShoppingCart,
  Anvil,
  LibraryBig,
} from "lucide-react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/home" className="flex items-center gap-2 no-underline">
            <LibraryBig className="h-8 w-8 text-black-600" />
            <span className="text-2xl text-black-900 font-semibold">
              MindSpace
            </span>
          </NavLink>

          <div className="flex items-center gap-6">
            <NavLink
              to="products"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <BookOpen className="h-5 w-5" />
              <span>Books</span>
            </NavLink>

            <NavLink
              to="journal"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <PenLine className="h-5 w-5" />
              <span>Journal</span>
            </NavLink>

            <NavLink
              to="community"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <Anvil className="h-5 w-5" />
              <span>Community</span>
            </NavLink>

            <NavLink
              to="therapistagent"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Therapist</span>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
