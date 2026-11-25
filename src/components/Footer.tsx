import { useLang } from "@/i18n";

const Footer = () => {
  const { lang } = useLang();

  return (
    <footer className="border-t border-border py-12 mt-20">
      <div className="page-container text-center">
        <p className="text-primary font-bold text-lg text-glow-green mb-2">
          {lang === "bn" ? "জুলাই অভ্যুত্থান" : "July Uprising"}
        </p>
        <p className="text-muted-foreground text-sm">
          {lang === "bn"
            ? "স্মরণে, শ্রদ্ধায়, অঙ্গীকারে — বাংলাদেশের ছাত্র-জনতার অভ্যুত্থান ২০২৪"
            : "In memory, in reverence, in resolve — the student-people's uprising of Bangladesh, 2024"}
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="text-muted-foreground text-sm">
            {lang === "bn" ? "স্মৃতিসৌধটি শেয়ার করুন:" : "Share this memorial:"}
          </span>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fjuly-uprising-chronicle.vercel.app%2F" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary text-sm font-medium">Facebook</a>
          <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fjuly-uprising-chronicle.vercel.app%2F&text=July%20Uprising%20%E2%80%94%20Bangladesh%27s%202024%20Student-People%27s%20Mass%20Uprising" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary text-sm font-medium">X</a>
          <a href="https://wa.me/?text=July%20Uprising%20%E2%80%94%20Bangladesh%27s%202024%20mass%20uprising%20memorial%3A%20https%3A%2F%2Fjuly-uprising-chronicle.vercel.app%2F" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary text-sm font-medium">WhatsApp</a>
          <a href="https://t.me/share/url?url=https%3A%2F%2Fjuly-uprising-chronicle.vercel.app%2F&text=July%20Uprising%20%E2%80%94%20Bangladesh%27s%202024%20mass%20uprising%20memorial" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary text-sm font-medium">Telegram</a>
        </div>
        <p className="text-muted-foreground text-sm mt-6">
          Created by{" "}
          <a
            href="https://ibrahimmahmud.pro.bd"
            target="_blank"
            rel="noreferrer"
            className="text-foreground font-semibold hover:text-primary hover:underline"
          >
            Ibrahim Mahmud
          </a>
        </p>
        <div className="gradient-line h-px w-32 mx-auto mt-6 rounded-full opacity-50" />
      </div>
    </footer>
  );
};

export default Footer;
