import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GraduationCap, Menu, X, BookOpen, Clock, Heart, Shield } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Academics", path: "/academics" },
    { label: "Campus & Life", path: "/campus-life" },
    { label: "Admissions & Fees", path: "/admissions" },
    { label: "Contact & Inquiries", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav id="app-navbar" className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Brand section */}
          <div className="flex-shrink-0 flex items-center">
            <Link id="nav-brand-link" to="/" className="flex items-center space-x-3 group">
              <div className="p-2 bg-emerald-700 text-white rounded-xl shadow-md group-hover:bg-emerald-800 transition-colors">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <span className="block text-xl font-bold text-gray-900 tracking-tight group-hover:text-emerald-800 transition-colors">
                  Conceptual
                </span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-emerald-600 -mt-1">
                  School System
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Link options */}
          <div className="hidden md:flex md:space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                id={`nav-link-${link.label.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                to={link.path}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 h-full ${
                  isActive(link.path)
                    ? "border-emerald-600 text-emerald-700"
                    : "border-transparent text-gray-500 hover:text-emerald-700 hover:border-gray-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              id="nav-action-cta"
              to="/admissions"
              className="ml-4 inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-semibold rounded-xl text-white bg-emerald-700 hover:bg-emerald-800 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              Apply Online
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-hidden"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu panel */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden border-b border-gray-100 bg-white shadow-lg animate-fadeIn">
          <div className="pt-2 pb-4 space-y-1 px-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                id={`mobile-nav-link-${link.label.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block pl-3 pr-4 py-3 border-l-4 text-base font-semibold rounded-r-lg transition-all ${
                  isActive(link.path)
                    ? "bg-emerald-50 border-emerald-600 text-emerald-800"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-gray-150">
              <Link
                id="mobile-nav-action-cta"
                to="/admissions"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-emerald-700 hover:bg-emerald-800 transition-colors"
              >
                Apply Online
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
