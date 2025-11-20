import { Heart, LibraryBig } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8 items-center">
          <div className="col-span-1 flex items-center gap-2">
            <LibraryBig className="h-6 w-6 text-purple-400" />
            <span className="text-xl">MindSpace.Inc</span>
          </div>

          <div className="col-span-2 text-gray-400"></div>

          <div className="col-span-1 flex justify-end">
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-sm transition">
              Donate
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 MindSpace. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Made with <Heart className="h-4 w-4 inline text-red-400" /> for
            mental wellness
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <p className="text-xs text-gray-400 text-center">
            MindSpace provides educational resources and is not a substitute for
            professional mental health care. If you're experiencing a mental
            health crisis, please contact emergency services or a crisis hotline
            immediately.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
