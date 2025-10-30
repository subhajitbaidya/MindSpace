import { Heart, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-purple-400" />
              <span className="text-xl">MindSpace</span>
            </div>
            <p className="text-gray-400">
              Supporting your mental health journey, one book at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Crisis Resources */}
          <div>
            <h3 className="mb-4">Crisis Resources</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-red-400">988 Suicide & Crisis Lifeline</p>
                  <p className="text-sm">Call or text 988</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-purple-400">Crisis Text Line</p>
                  <p className="text-sm">Text HOME to 741741</p>
                </div>
              </div>
            </div>
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
