import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { heroBg } from "@/data/heroImage";
import featuredImg from "@/assets/featured-event.jpg";
import dictatorSmall from "@/assets/dictator-small.png";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";

const stats = [
  { icon: Calendar, label: "Total Events", value: "120+", color: "text-primary", note: "" },
  { icon: Clock, label: "Days of Protest", value: "26", color: "text-primary", note: "" },
  { icon: Users, label: "Martyrs", value: "1000+", color: "text-accent", note: "This number is updated regularly" },
];

const timelinePreview = [
  { date: "1 July 2024", title: "Quota Reform Movement Begins", desc: "University students take to the streets demanding quota reform." },
  { date: "16 July 2024", title: "Widespread Clashes", desc: "Fierce clashes erupt between police and students across the country." },
  { date: "19 July 2024", title: "Internet Shutdown", desc: "The government cuts off internet access nationwide." },
  { date: "5 August 2024", title: "Fall of the Government", desc: "Faced with the mass movement, the Prime Minister resigns and leaves the country." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] overflow-hidden">
      <img src={heroBg} alt="July Uprising" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10 page-container flex items-center min-h-[90vh]">
        <div className="animate-fade-in py-16 md:py-0 w-full">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-primary text-glow-green text-left">
              July Uprising
            </h1>
            <img
              src={dictatorSmall}
              alt="The Autocrat"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover shrink-0 border-2 border-border"
            />
          </div>
          <p className="text-lg sm:text-xl text-foreground/80 max-w-xl mb-8 text-left">
            On a path stained with blood, a new dawn of freedom — the unstoppable awakening of Bangladesh's students and people
          </p>
          <div className="gradient-line h-1 w-48 rounded-full" />
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-20">
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
    </section>

    {/* Featured */}
    <section className="py-16">
      <div className="page-container">
        <h2 className="text-3xl font-bold text-foreground mb-8">
          <span className="text-accent text-glow-red">Key</span> Event
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden glow-green">
            <img src={featuredImg} alt="Key event" className="w-full h-72 object-cover" loading="lazy" width={1280} height={720} />
          </div>
          <div className="animate-fade-in">
            <p className="text-primary text-sm font-semibold mb-2">5 August 2024</p>
            <h3 className="text-2xl font-bold text-foreground mb-4">The Government Falls Amid the Mass Uprising</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              After 26 long days of protest, the indomitable courage and sacrifice of millions of people brought down the autocratic government.
              This day marked the beginning of a new chapter in the history of Bangladesh.
            </p>
            <Link to="/timeline" className="inline-flex items-center gap-2 text-primary hover:underline font-semibold">
              View the full timeline <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Featured: Nahid Islam */}
    <section className="py-16">
      <div className="page-container">
        <div className="grid md:grid-cols-3 gap-8 items-center bg-card border border-border rounded-lg p-8 hover:border-primary/30 transition-colors duration-300">
          <div className="rounded-lg overflow-hidden glow-green">
            <img
              src="https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Nahid_Islam_in_2024.jpg/960px-Nahid_Islam_in_2024.jpg"
              alt="Nahid Islam"
              className="w-full h-96 object-cover object-top"
              loading="lazy"
              width={960}
              height={1329}
            />
            <p className="text-muted-foreground/60 text-[11px] mt-2">
              Photo: Nahid Hossain / CC BY-SA 4.0 — Wikimedia Commons
            </p>
          </div>
          <div className="md:col-span-2 animate-fade-in">
            <p className="text-primary text-sm font-semibold mb-2">3 August 2024 — The Turning Point</p>
            <h3 className="text-3xl font-bold text-foreground mb-1">Nahid Islam</h3>
            <p className="text-accent font-semibold mb-4">The Voice of the One-Point Demand</p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a central coordinator of the Anti-Discrimination Student Movement, Nahid Islam became the
              strategic mind and public face of the uprising's decisive phase. While the regime answered
              protests with bullets, internet blackouts and mass arrests, it was his calm, disciplined
              leadership that kept a generation united behind a single demand.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              On 3 August 2024, standing before a sea of protesters at the Central Shaheed Minar in Dhaka,
              he announced the movement's <span className="text-foreground font-semibold">one-point demand</span>:
              the resignation of Sheikh Hasina and her government. That single declaration transformed a
              quota-reform protest into a nationwide uprising — within two days, fifteen years of
              authoritarian rule collapsed.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              After the victory, he joined the interim government as an adviser, carrying the uprising's
              mandate into the work of rebuilding the state.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Timeline Preview */}
    <section className="py-16">
      <div className="page-container">
        <h2 className="text-3xl font-bold text-foreground mb-10">
          Timeline <span className="text-primary text-glow-green">Preview</span>
        </h2>
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
        <div className="mt-8 text-center">
          <Link to="/timeline" className="inline-flex items-center gap-2 text-primary hover:underline font-semibold">
            Full Timeline <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
