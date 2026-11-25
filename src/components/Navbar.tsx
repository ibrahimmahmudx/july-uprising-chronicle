import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLang } from "@/i18n";

const navItems = [
  { label: { en: "Home", bn: "হোম" }, path: "/" },
  { label: { en: "Timeline", bn: "টাইমলাইন" }, path: "/timeline" },
  { label: { en: "Gallery", bn: "গ্যালারি" }, path: "/gallery" },
  { label: { en: "About", bn: "সম্পর্কে" }, path: "/about" },
  { label: { en: "Martyrs", bn: "শহীদ" }, path: "/martyrs" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang } = useLang();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="page-container flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold text-primary text-glow-green">
          {lang === "bn" ? "জুলাই অভ্যুত্থান" : "July Uprising"}
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label[lang]}
            </Link>
          ))}
          <button
            onClick={() => setLang(lang === "en" ? "bn" : "en")}
            className="text-sm font-semibold border border-border rounded-full px-3 py-1 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            aria-label={lang === "en" ? "Switch to Bengali" : "Switch to English"}
          >
            {lang === "en" ? "বাংলা" : "EN"}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setLang(lang === "en" ? "bn" : "en")}
            className="text-sm font-semibold border border-border rounded-full px-3 py-1 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            aria-label={lang === "en" ? "Switch to Bengali" : "Switch to English"}
          >
            {lang === "en" ? "বাংলা" : "EN"}
          </button>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border animate-fade-in">
          <div className="page-container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label[lang]}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
