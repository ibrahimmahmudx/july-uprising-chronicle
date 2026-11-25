import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { heroBg } from "@/data/heroImage";
import { martyrsData } from "@/data/martyrs";
import featuredImg from "@/data/featuredImg";
import dictatorSmall from "@/data/dictatorImg";
import { Calendar, Clock, Users, ArrowRight, ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useLang, toBnDigits, type Lang } from "@/i18n";

const T: Record<
  Lang,
  {
    stats: { icon: typeof Calendar; label: string; value: string; color: string; note: string }[];
    timelinePreview: { date: string; title: string; desc: string }[];
    heroAlt: string;
    heroTitle: string;
    dictatorAlt: string;
    heroSubtitle: string;
    featuredAlt: string;
    featuredKey: string;
    featuredRest: string;
    featuredDate: string;
    featuredTitle: string;
    featuredBody: string;
    featuredLink: string;
    nahidDateLine: string;
    nahidName: string;
    nahidAlt: string;
    nahidRole: string;
    nahidCredit: string;
    nahidPara1: string;
    nahidPara2Lead: string;
    nahidPara2Bold: string;
    nahidPara2Rest: string;
    nahidPara3: string;
    timelinePreviewKey: string;
    timelinePreviewRest: string;
    fullTimeline: string;
  }
> = {
  en: {
    stats: [
      { icon: Calendar, label: "Total Events", value: "120+", color: "text-primary", note: "" },
      { icon: Clock, label: "Days of Protest", value: "26", color: "text-primary", note: "" },
      { icon: Users, label: "Martyrs", value: "1000+", color: "text-accent", note: "This number is updated regularly" },
    ],
    timelinePreview: [
      { date: "1 July 2024", title: "Quota Reform Movement Begins", desc: "University students take to the streets demanding quota reform." },
      { date: "16 July 2024", title: "Widespread Clashes", desc: "Fierce clashes erupt between police and students across the country." },
      { date: "19 July 2024", title: "Internet Shutdown", desc: "The government cuts off internet access nationwide." },
      { date: "5 August 2024", title: "Fall of the Government", desc: "Faced with the mass movement, the Prime Minister resigns and leaves the country." },
    ],
    heroAlt: "July Uprising",
    heroTitle: "July Uprising",
    dictatorAlt: "The Autocrat",
    heroSubtitle:
      "On a path stained with blood, a new dawn of freedom — the unstoppable awakening of Bangladesh's students and people",
    featuredAlt: "Key event",
    featuredKey: "Key",
    featuredRest: " Event",
    featuredDate: "5 August 2024",
    featuredTitle: "The Government Falls Amid the Mass Uprising",
    featuredBody:
      "After 26 long days of protest, the indomitable courage and sacrifice of millions of people brought down the autocratic government. This day marked the beginning of a new chapter in the history of Bangladesh.",
    featuredLink: "View the full timeline",
    nahidDateLine: "3 August 2024 — The Turning Point",
    nahidName: "Nahid Islam",
    nahidAlt: "Nahid Islam",
    nahidRole: "The Voice of the One-Point Demand",
    nahidCredit: "Photo: Nahid Hossain / CC BY-SA 4.0 — Wikimedia Commons",
    nahidPara1:
      "As a central coordinator of the Anti-Discrimination Student Movement, Nahid Islam became the strategic mind and public face of the uprising's decisive phase. While the regime answered protests with bullets, internet blackouts and mass arrests, it was his calm, disciplined leadership that kept a generation united behind a single demand.",
    nahidPara2Lead: "On 3 August 2024, standing before a sea of protesters at the Central Shaheed Minar in Dhaka, he announced the movement's ",
    nahidPara2Bold: "one-point demand",
    nahidPara2Rest:
      ": the resignation of Sheikh Hasina and her government. That single declaration transformed a quota-reform protest into a nationwide uprising — within two days, fifteen years of authoritarian rule collapsed.",
    nahidPara3:
      "After the victory, he joined the interim government as an adviser, carrying the uprising's mandate into the work of rebuilding the state.",
    timelinePreviewKey: "Timeline",
    timelinePreviewRest: "Preview",
    fullTimeline: "Full Timeline",
  },
  bn: {
    stats: [
      { icon: Calendar, label: "মোট ঘটনা", value: "১২০+", color: "text-primary", note: "" },
      { icon: Clock, label: "আন্দোলনের দিন", value: "২৬", color: "text-primary", note: "" },
      { icon: Users, label: "শহীদ", value: "১০০০+", color: "text-accent", note: "এই সংখ্যা নিয়মিত আপডেট হচ্ছে" },
    ],
    timelinePreview: [
      { date: "১ জুলাই ২০২৪", title: "কোটা সংস্কার আন্দোলন শুরু", desc: "বিশ্ববিদ্যালয়ের ছাত্ররা কোটা সংস্কারের দাবিতে রাজপথে নামেন।" },
      { date: "১৬ জুলাই ২০২৪", title: "ব্যাপক সংঘর্ষ", desc: "সারাদেশে পুলিশ ও ছাত্রদের মধ্যে তীব্র সংঘর্ষ হয়।" },
      { date: "১৯ জুলাই ২০২৪", title: "ইন্টারনেট বন্ধ", desc: "সরকার সারাদেশে ইন্টারনেট সংযোগ বিচ্ছিন্ন করে।" },
      { date: "৫ আগস্ট ২০২৪", title: "সরকারের পতন", desc: "গণআন্দোলনের মুখে প্রধানমন্ত্রী পদত্যাগ করেন এবং দেশ ত্যাগ করেন।" },
    ],
    heroAlt: "জুলাই অভ্যুত্থান",
    heroTitle: "জুলাই অভ্যুত্থান",
    dictatorAlt: "স্বৈরাচার",
    heroSubtitle:
      "রক্তে রাঙানো পথে, স্বাধীনতার নতুন ভোর — বাংলাদেশের ছাত্র-জনতার অপ্রতিরোধ্য জাগরণ",
    featuredAlt: "মুখ্য ঘটনা",
    featuredKey: "মুখ্য",
    featuredRest: " ঘটনা",
    featuredDate: "৫ আগস্ট ২০২৪",
    featuredTitle: "গণজাগরণে সরকারের পতন",
    featuredBody:
      "দীর্ঘ ২৬ দিনের আন্দোলনের পর, লক্ষ লক্ষ মানুষের অদম্য সাহস ও ত্যাগের ফলে স্বৈরাচারী সরকারের পতন ঘটে। এই দিনটি বাংলাদেশের ইতিহাসে একটি নতুন অধ্যায়ের সূচনা করে।",
    featuredLink: "সম্পূর্ণ টাইমলাইন দেখুন",
    nahidDateLine: "৩ আগস্ট ২০২৪ — মোড় ঘোরার মুহূর্ত",
    nahidName: "নাহিদ ইসলাম",
    nahidAlt: "নাহিদ ইসলাম",
    nahidRole: "এক দফা দাবির কণ্ঠস্বর",
    nahidCredit: "ছবি: Nahid Hossain / CC BY-SA 4.0 — Wikimedia Commons",
    nahidPara1:
      "বৈষম্যবিরোধী ছাত্র আন্দোলনের কেন্দ্রীয় সমন্বয়কদের একজন হিসেবে নাহিদ ইসলাম হয়ে ওঠেন অভ্যুত্থানের চূড়ান্ত পর্বের কৌশলগত মস্তিষ্ক ও জনসম্মুখের মুখ। শাসকগোষ্ঠী যখন বিক্ষোভের জবাব দিচ্ছিল গুলি, ইন্টারনেট বন্ধ ও গণগ্রেপ্তার দিয়ে, তখন তাঁরই শান্ত ও শৃঙ্খলাবদ্ধ নেতৃত্ব একটি পুরো প্রজন্মকে একটিমাত্র দাবির পেছনে ঐক্যবদ্ধ রেখেছিল।",
    nahidPara2Lead: "২০২৪ সালের ৩ আগস্ট, ঢাকার কেন্দ্রীয় শহীদ মিনারে বিক্ষোভকারীদের এক জনসমুদ্রের সামনে দাঁড়িয়ে তিনি আন্দোলনের ",
    nahidPara2Bold: "এক দফা দাবি",
    nahidPara2Rest:
      " ঘোষণা করেন: শেখ হাসিনা ও তাঁর সরকারের পদত্যাগ। সেই একটিমাত্র ঘোষণাই কোটা সংস্কার আন্দোলনকে রূপ দেয় দেশব্যাপী গণঅভ্যুত্থানে — দুই দিনের মধ্যেই পনেরো বছরের স্বৈরশাসনের পতন ঘটে।",
    nahidPara3:
      "বিজয়ের পর তিনি অন্তর্বর্তী সরকারে উপদেষ্টা হিসেবে যোগ দেন এবং অভ্যুত্থানের ম্যান্ডেটকে রাষ্ট্র পুনর্গঠনের কাজে এগিয়ে নিয়ে যান।",
    timelinePreviewKey: "টাইমলাইন",
    timelinePreviewRest: "প্রিভিউ",
    fullTimeline: "সম্পূর্ণ টাইমলাইন",
  },
};

const Index = () => {
  const { lang } = useLang();
  const t = T[lang];
  const stats = t.stats;
  const timelinePreview = t.timelinePreview;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <img src={heroBg} alt={t.heroAlt} className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        <div className="relative z-10 page-container flex items-center min-h-[90vh]">
          <div className="animate-fade-in py-16 md:py-0 w-full">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white text-left">
                {t.heroTitle}
              </h1>
              <img
                src={dictatorSmall}
                alt={t.dictatorAlt}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover shrink-0 border-2 border-border"
              />
            </div>
            <p className="text-lg sm:text-xl text-white/85 max-w-xl mb-8 text-left">
              {t.heroSubtitle}
            </p>
            <div className="gradient-line h-1 w-48 rounded-full" />
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white scroll-cue">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* Martyrs name ticker */}
      <section className="border-b border-border bg-foreground py-4 overflow-hidden" aria-label="Names of the martyrs">
        <p className="text-center text-accent text-xs font-semibold tracking-widest mb-2">
          {lang === "bn"
            ? `${toBnDigits(martyrsData.length)} শহীদের স্মরণে`
            : `IN MEMORY OF THE ${martyrsData.length} MARTYRS`}
        </p>
        <div className="marquee-track text-white/70 text-sm">
          {[0, 1].map((half) => (
            <span key={half} className="inline-flex">
              {martyrsData.map((m, i) => (
                <span key={i} className="mx-3">
                  {m.name} <span className="text-accent mx-1">•</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <Reveal>
        <div className="page-container grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-lg p-8 text-center animate-slide-up hover:glow-green transition-shadow duration-300">
              <s.icon className={`mx-auto mb-4 ${s.color}`} size={32} />
              <p className={`text-4xl font-black ${s.color} mb-2`}>{s.value}</p>
              <p className="text-muted-foreground text-sm">{s.label}</p>
              {s.note && <p className="text-muted-foreground/60 text-xs mt-1">{s.note}</p>}
            </div>
          ))}
        </div>
        </Reveal>
      </section>

      {/* Featured */}
      <section className="py-16">
        <div className="page-container">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            <span className="text-accent text-glow-red">{t.featuredKey}</span>{t.featuredRest}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden glow-green">
              <img src={featuredImg} alt={t.featuredAlt} className="w-full h-72 object-cover" loading="lazy" width={1280} height={720} />
            </div>
            <div className="animate-fade-in">
              <p className="text-primary text-sm font-semibold mb-2">{t.featuredDate}</p>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t.featuredTitle}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t.featuredBody}
              </p>
              <Link to="/timeline" className="inline-flex items-center gap-2 text-primary hover:underline font-semibold">
                {t.featuredLink} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured: Nahid Islam */}
      <section className="py-16">
        <div className="page-container">
          <Reveal>
        <div className="grid md:grid-cols-3 gap-8 items-center bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:-translate-y-1 hover:glow-green transition-all duration-300">
            <div className="rounded-lg overflow-hidden glow-green">
              <img
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Nahid_Islam_in_2024.jpg/960px-Nahid_Islam_in_2024.jpg"
                alt={t.nahidAlt}
                className="w-full h-96 object-cover object-top"
                loading="lazy"
                width={960}
                height={1329}
              />
              <p className="text-muted-foreground/60 text-[11px] mt-2">
                {t.nahidCredit}
              </p>
            </div>
            <div className="md:col-span-2 animate-fade-in">
              <p className="text-primary text-sm font-semibold mb-2">{t.nahidDateLine}</p>
              <h3 className="text-3xl font-bold text-foreground mb-1">{t.nahidName}</h3>
              <p className="text-accent font-semibold mb-4">{t.nahidRole}</p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t.nahidPara1}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t.nahidPara2Lead}
                <span className="text-foreground font-semibold">{t.nahidPara2Bold}</span>
                {t.nahidPara2Rest}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.nahidPara3}
              </p>
            </div>
          </div>
        </Reveal>
        </div>
      </section>

      {/* Timeline Preview */}
      <section className="py-16">
        <div className="page-container">
          <h2 className="text-3xl font-bold text-foreground mb-10">
            {t.timelinePreviewKey} <span className="text-primary text-glow-green">{t.timelinePreviewRest}</span>
          </h2>
          <Reveal>
          <div className="space-y-6">
            {timelinePreview.map((item, i) => (
              <div
                key={i}
                className="flex gap-6 items-start bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors duration-300"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="w-3 h-3 rounded-full bg-primary mt-2 shrink-0 animate-pulse-glow" />
                <div>
                  <p className="text-primary text-sm font-semibold mb-1">{item.date}</p>
                  <h4 className="text-foreground font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          </Reveal>
          <div className="mt-8 text-center">
            <Link to="/timeline" className="inline-flex items-center gap-2 text-primary hover:underline font-semibold">
              {t.fullTimeline} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
