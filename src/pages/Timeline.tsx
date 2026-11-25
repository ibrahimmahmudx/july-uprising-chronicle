import Layout from "@/components/Layout";

const events = [
  { date: "1 July 2024", title: "Quota Reform Movement Begins", desc: "Students at the University of Dhaka and other universities begin protesting for quota reform." },
  { date: "7 July 2024", title: "The Movement Intensifies", desc: "The protests spread across the country, with huge student marches on the streets." },
  { date: "15 July 2024", title: "Police Crackdown", desc: "Police and the Chhatra League jointly attack the protesters." },
  { date: "16 July 2024", title: "Bloody Clashes", desc: "Many are killed and injured in fierce clashes in Dhaka and across the country." },
  { date: "18 July 2024", title: "Curfew Imposed", desc: "The government imposes a nationwide curfew and deploys the army." },
  { date: "19 July 2024", title: "Internet Cut Off", desc: "Internet access is shut down completely across the country." },
  { date: "21 July 2024", title: "Supreme Court Verdict", desc: "The Supreme Court rules in favour of quota reform." },
  { date: "4 August 2024", title: "The Final Mass Uprising", desc: "Millions of people pour onto the streets of Dhaka. One point, one demand — the fall of the government." },
  { date: "5 August 2024", title: "Fall of the Government", desc: "The Prime Minister resigns and flees the country. The people are victorious." },
];

const Timeline = () => (
  <Layout>
    <section className="py-20">
      <div className="page-container">
        <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
          <span className="text-primary text-glow-green">Timeline</span>
        </h1>
        <p className="text-muted-foreground mb-12 max-w-xl">The key events of the July Uprising, in chronological order.</p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px gradient-line opacity-30" />

          <div className="space-y-12">
            {events.map((ev, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 animate-fade-in ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-2 md:mt-0 glow-green z-10" />

                  {/* Card */}
                  <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors duration-300">
                      <p className="text-primary text-sm font-semibold mb-2">{ev.date}</p>
                      <h3 className="text-foreground font-bold text-lg mb-2">{ev.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{ev.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Timeline;
