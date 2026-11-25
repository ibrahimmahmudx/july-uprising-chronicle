import Layout from "@/components/Layout";

const sections = [
  {
    title: "What Was the July Uprising?",
    content:
      "The student movement that began in Bangladesh in July 2024, demanding reform of the quota system in government jobs, later grew into a vast mass uprising. Hundreds of students and ordinary citizens gave their lives and etched this movement into the pages of history.",
  },
  {
    title: "Why Did the Uprising Happen?",
    content:
      "An unjust quota system in government jobs, years of repression, the absence of democracy, and the young generation's frustration about their future forced students onto the streets. Even after armed attacks by the police and the ruling party, the movement did not stop.",
  },
  {
    title: "Impact and Outcomes",
    content:
      "On 5 August 2024, the government that had held power for 15 years fell. This uprising opened a new chapter in the history of Bangladesh and became a symbol of the strength and courage of the young generation.",
  },
];

const About = () => (
  <Layout>
    <section className="py-20">
      <div className="page-container max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
          <span className="text-primary text-glow-green">About</span>
        </h1>
        <div className="gradient-line h-1 w-24 rounded-full mb-12" />

        <div className="space-y-12">
          {sections.map((s, i) => (
            <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.2}s`, opacity: 0 }}>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {i === 2 && <span className="text-accent text-glow-red">{s.title.split(" ")[0]} </span>}
                {i === 2 ? s.title.split(" ").slice(1).join(" ") : s.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">{s.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
