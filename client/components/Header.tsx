import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fafa8349848c54ba896d9db0371c7e441%2Fdcc880883d84406883262fabaf350606?format=webp&width=800"
              alt="Allo Electro Services Logo"
              className="w-10 h-10 object-contain"
            />
            <div className="hidden sm:flex flex-col">
              <h1 className="text-sm font-bold text-slate-900 dark:text-white">
                Allo Electro Services
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Réparation Électroménager
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <a
              href="#services"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-orange-400 transition font-medium text-sm"
            >
              Services
            </a>
            <a
              href="#marques"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-orange-400 transition font-medium text-sm"
            >
              Marques
            </a>
            <a
              href="#zones"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-orange-400 transition font-medium text-sm"
            >
              Zones
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-orange-400 transition font-medium text-sm"
            >
              Avis
            </a>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-orange-400 transition font-medium text-sm"
            >
              Contact
            </a>
          </nav>

          {/* Right side - Theme toggle and mobile menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition text-gray-700 dark:text-gray-300"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 pt-2 border-t border-gray-200 dark:border-slate-800">
            <a
              href="#services"
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#marques"
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Marques
            </a>
            <a
              href="#zones"
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Zones
            </a>
            <a
              href="#testimonials"
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Avis
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
