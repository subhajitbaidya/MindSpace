import { Button } from "@mui/material";
import Logo from "../../Brand/Logo";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Elevate your reading journey. Discover, buy, and sell books with
              ease and trust — only on{" "}
              <span className="text-white font-semibold">TechVibe Books</span>.
            </p>

            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                <button
                  key={idx}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
                >
                  <Icon
                    className="text-gray-300 hover:text-white transition-colors"
                    size={18}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About Us", "Products", "Reviews", "Blog", "Careers"].map(
                (text, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-all duration-200"
                    >
                      {text}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-5">Support</h4>
            <ul className="space-y-3">
              {[
                "Help Center",
                "Track Order",
                "Shipping Info",
                "Return Policy",
              ].map((text, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-all duration-200"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-5">
              Contact Info
            </h4>
            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-indigo-400" />
                <span>hello@techvibe.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-indigo-400" />
                <span>+91 (91) 6423-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-indigo-400" />
                <span>Kolkata, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">TechVibe</span>. All rights
            reserved.
          </p>

          <div className="flex gap-6 text-sm">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-500 hover:text-white transition-all duration-200"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
