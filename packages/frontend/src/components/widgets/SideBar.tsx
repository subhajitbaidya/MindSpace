// components/Sidebar.tsx
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="block px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                History
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
