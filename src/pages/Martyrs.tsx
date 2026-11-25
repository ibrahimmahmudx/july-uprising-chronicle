import Layout from "@/components/Layout";
import { User } from "lucide-react";
import { martyrsData } from "@/data/martyrs";

const Martyrs = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="page-container">
          <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            The <span className="text-accent text-glow-red">Martyrs</span>
          </h1>
          <p className="text-muted-foreground mb-10">
            They gave their lives to make this uprising succeed. This is the official list of{" "}
            {martyrsData.length} martyrs of the July–August 2024 uprising, published in the Bangladesh
            Gazette by the Ministry of Liberation War Affairs. Names are shown in the original Bengali
            script, as printed in the gazette.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {martyrsData.map((m, i) => (
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

          <p className="text-muted-foreground text-xs mt-10 text-center">
            Source: Bangladesh Gazette (Extraordinary), "July–August Mass Uprising 2024 Martyrs Gazette",
            Ministry of Liberation War Affairs, Government of Bangladesh — 15 January 2025.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Martyrs;
