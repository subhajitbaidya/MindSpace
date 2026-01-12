import {
  BookOpen,
  PenLine,
  Anvil,
  LibraryBig,
  Brain,
  BotIcon,
  MenuIcon,
} from "lucide-react";
import { NavLink } from "react-router";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <NavLink
            to="/home"
            className="flex items-center gap-2 no-underline pt-10 pb-6"
          >
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
              to="meditate"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <Brain className="h-5 w-5" />
              <span>Mindfullness</span>
            </NavLink>

            <NavLink
              to="therapistagent"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <BotIcon className="h-5 w-5" />
              <span>Therapist</span>
            </NavLink>

            <Button
              variant="ghost"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <MenuIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
