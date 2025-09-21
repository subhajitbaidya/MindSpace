import { Button } from "@mui/material";
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
    <footer className="text-gray-600">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
              MindMap
            </h3>

            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                <Button
                  key={idx}
                  variant="text"
                  size="small"
                  sx={{
                    color: "#fff",
                    minWidth: 40,
                    padding: 0,
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                  }}
                >
                  <Icon size={20} />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Products", "Reviews", "Blog", "Careers"].map(
                (text, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-black/80 hover:text-white transition-colors"
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
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {["Help Center", "Track Order"].map((text, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={20} />
                <span>hello@mindmap.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} />
                <span>+91 (91) 6423-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} />
                <span>Kolkata, India</span>
              </div>
            </div>
            <br />
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 TechVibe. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
