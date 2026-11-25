import { useState } from "react";
import Layout from "@/components/Layout";
import { User, Search } from "lucide-react";
import { martyrsData } from "@/data/martyrs";
import DistrictMap from "@/components/DistrictMap";
import Reveal from "@/components/Reveal";
import { useLang, toBnDigits, type Lang } from "@/i18n";

const T: Record<
  Lang,
  {
    headingLead: string;
    headingAccent: string;
    subtitle: (count: number) => string;
    searchPlaceholder: string;
    showing: (shown: number, total: number) => string;
    empty: string;
    sourceNote: string;
  }
> = {
  en: {
    headingLead: "The",
    headingAccent: "Martyrs",
    subtitle: (count) =>
      `They gave their lives to make this uprising succeed. This is the official list of ${count} martyrs of the July–August 2024 uprising, published in the Bangladesh Gazette by the Ministry of Liberation War Affairs. Names are shown in the original Bengali script, as printed in the gazette.`,
    searchPlaceholder: "Search by name (Bengali) or district…",
    showing: (shown, total) => `Showing ${shown} of ${total} martyrs`,
    empty: "No martyr matches your search.",
    sourceNote:
      'Source: Bangladesh Gazette (Extraordinary), "July–August Mass Uprising 2024 Martyrs Gazette", Ministry of Liberation War Affairs, Government of Bangladesh — 15 January 2025.',
  },
  bn: {
    headingLead: "শহীদদের",
    headingAccent: "তালিকা",
    subtitle: (count) =>
      `এই অভ্যুত্থানকে সফল করতে তাঁরা নিজেদের জীবন দিয়েছেন। এটি জুলাই–আগস্ট ২০২৪-এর গণঅভ্যুত্থানের ${toBnDigits(count)} জন শহীদের সরকারি তালিকা, যা মুক্তিযুদ্ধ বিষয়ক মন্ত্রণালয় বাংলাদেশ গেজেটে প্রকাশ করেছে। নামগুলো গেজেটে ছাপা মূল বাংলা হরফেই দেখানো হয়েছে।`,
    searchPlaceholder: "নাম (বাংলা) বা জেলা দিয়ে খুঁজুন…",
    showing: (shown, total) =>
      `${toBnDigits(total)} জন শহীদের মধ্যে ${toBnDigits(shown)} জন দেখানো হচ্ছে`,
    empty: "আপনার খোঁজের সাথে মিলে এমন কোনো শহীদ পাওয়া যায়নি।",
    sourceNote:
      "সূত্র: বাংলাদেশ গেজেট (অতিরিক্ত), “জুলাই–আগস্ট গণঅভ্যুত্থান ২০২৪ শহীদ গেজেট”, মুক্তিযুদ্ধ বিষয়ক মন্ত্রণালয়, বাংলাদেশ সরকার — ১৫ জানুয়ারি ২০২৫।",
  },
};

const Martyrs = () => {
  const { lang } = useLang();
  const t = T[lang];
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const filtered = q
    ? martyrsData.filter(
        (m) => m.name.includes(query.trim()) || m.district.toLowerCase().includes(q)
      )
    : martyrsData;

  return (
    <Layout>
      <section className="py-20">
        <div className="page-container">
          <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            {t.headingLead} <span className="text-accent text-glow-red">{t.headingAccent}</span>
          </h1>
          <p className="text-muted-foreground mb-10">
            {t.subtitle(martyrsData.length)}
          </p>

          <div className="relative max-w-md mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50"
            />
          </div>
          <p className="text-muted-foreground text-sm mb-6">
            {t.showing(filtered.length, martyrsData.length)}
          </p>

          <div className="mb-10">
            <Reveal>
              <DistrictMap />
            </Reveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {filtered.map((m, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-4 text-center hover:border-accent/30 transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${(i % 24) * 0.03}s`, opacity: 0 }}
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mx-auto mb-2">
                  <User className="text-muted-foreground" size={18} />
                </div>
                <h3 className="text-foreground font-semibold text-sm leading-tight mb-0.5">{m.name}</h3>
                <p className="text-muted-foreground text-xs">{m.district}</p>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-muted-foreground text-center py-10">{t.empty}</p>
          )}

          <p className="text-muted-foreground text-xs mt-10 text-center">
            {t.sourceNote}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Martyrs;
