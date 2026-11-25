import { useState } from "react";
import Layout from "@/components/Layout";
import { X, Search } from "lucide-react";
import { galleryPhotos } from "@/data/gallery";
import { useLang, type Lang } from "@/i18n";

const PAGE_SIZE = 60;

const T: Record<
  Lang,
  {
    heading: string;
    intro: (count: number) => string;
    searchPlaceholder: string;
    empty: string;
    loadMore: (shown: number, total: number) => string;
    footerNote: string;
    photoLabel: string;
  }
> = {
  en: {
    heading: "Gallery",
    intro: (count) =>
      `Authentic photographs of the July 2024 mass uprising — collected from Wikimedia Commons (${count} photos).`,
    searchPlaceholder: "Search photos or photographers…",
    empty: "No photos match your search.",
    loadMore: (shown, total) => `Load more photos (${shown} of ${total})`,
    footerNote:
      "All photos are from Wikimedia Commons. Click on a photo to see its author and licence (CC BY / CC BY-SA / CC0).",
    photoLabel: "Photo",
  },
  bn: {
    heading: "গ্যালারি",
    intro: (count) =>
      `জুলাই ২০২৪-এর গণঅভ্যুত্থানের আসল ছবি — Wikimedia Commons থেকে সংগৃহীত (${count}টি ছবি)।`,
    searchPlaceholder: "ছবি বা আলোকচিত্রী খুঁজুন…",
    empty: "আপনার খোঁজের সাথে মিলে এমন কোনো ছবি পাওয়া যায়নি।",
    loadMore: (shown, total) => `আরও ছবি দেখুন (${total}টির মধ্যে ${shown}টি দেখানো হয়েছে)`,
    footerNote:
      "সব ছবি Wikimedia Commons থেকে নেওয়া। ছবিতে ক্লিক করলে আলোকচিত্রীর নাম ও লাইসেন্স (CC BY / CC BY-SA / CC0) দেখা যাবে।",
    photoLabel: "ছবি",
  },
};

const Gallery = () => {
  const { lang } = useLang();
  const t = T[lang];
  const [selected, setSelected] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const q = query.trim().toLowerCase();
  const filtered = q
    ? galleryPhotos.filter(
        (p) => p.caption.toLowerCase().includes(q) || p.credit.toLowerCase().includes(q)
      )
    : galleryPhotos;
  const shown = filtered.slice(0, visible);

  return (
    <Layout>
      <section className="py-20">
        <div className="page-container">
          <div className="mb-4">
            <h1 className="text-4xl sm:text-5xl font-black text-foreground">
              <span className="text-primary text-glow-green">{t.heading}</span>
            </h1>
            <p className="text-muted-foreground mt-3">
              {t.intro(galleryPhotos.length)}
            </p>
          </div>

          <div className="relative max-w-md mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisible(PAGE_SIZE);
              }}
              placeholder={t.searchPlaceholder}
              className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {shown.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelected(i)}
                className="group relative rounded-lg overflow-hidden cursor-pointer border border-border hover:border-primary/40 transition-all duration-300 hover:glow-green"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-foreground text-sm font-medium">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-muted-foreground text-center py-10">{t.empty}</p>
          )}

          {visible < filtered.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="bg-card border border-border hover:border-primary/50 text-foreground font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                {t.loadMore(shown.length, filtered.length)}
              </button>
            </div>
          )}

          <p className="text-muted-foreground text-xs mt-10 text-center">
            {t.footerNote}
          </p>
        </div>
      </section>

      {selected !== null && shown[selected] && (
        <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelected(null)}>
          <button className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors" onClick={() => setSelected(null)}>
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={shown[selected].src} alt={shown[selected].caption} className="w-full rounded-lg" />
            <p className="text-center text-foreground mt-4 text-sm">{shown[selected].caption}</p>
            <p className="text-center text-muted-foreground mt-1 text-xs">
              {t.photoLabel}: {shown[selected].credit} —{" "}
              <a href={shown[selected].source} target="_blank" rel="noreferrer" className="underline hover:text-primary">
                Wikimedia Commons
              </a>
            </p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
