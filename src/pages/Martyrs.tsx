import { useState } from "react";
import Layout from "@/components/Layout";
import { User, Search } from "lucide-react";
import { martyrsData } from "@/data/martyrs";

const Martyrs = () => {
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
            The <span className="text-accent text-glow-red">Martyrs</span>
          </h1>
          <p className="text-muted-foreground mb-10">
            They gave their lives to make this uprising succeed. This is the official list of{" "}
            {martyrsData.length} martyrs of the July–August 2024 uprising, published in the Bangladesh
            Gazette by the Ministry of Liberation War Affairs. Names are shown in the original Bengali
            script, as printed in the gazette.
          </p>

          <div className="relative max-w-md mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name (Bengali) or district…"
              className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50"
            />
          </div>
          <p className="text-muted-foreground text-sm mb-6">
            Showing {filtered.length} of {martyrsData.length} martyrs
          </p>

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
            <p className="text-muted-foreground text-center py-10">No martyr matches your search.</p>
          )}

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
