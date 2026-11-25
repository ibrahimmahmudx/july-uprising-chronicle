import { useState } from "react";
import { districtShapes, districtMapViewBox } from "@/data/districtMap";

const MAX = Math.max(...districtShapes.map((d) => d.count));

const DistrictMap = () => {
  const [hovered, setHovered] = useState<{ name: string; count: number } | null>(null);
  const top = [...districtShapes].sort((a, b) => b.count - a.count).slice(0, 5);

  return (
    <div className="bg-card border border-border rounded-lg p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-foreground mb-2">
        Martyrs by <span className="text-accent text-glow-red">District</span>
      </h2>
      <p className="text-muted-foreground text-sm mb-6">
        The uprising was nationwide — hover over the map to see how many martyrs each district gave.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="relative">
          <svg viewBox={districtMapViewBox} className="w-full max-w-md mx-auto" role="img" aria-label="Map of Bangladesh districts coloured by martyr count">
            {districtShapes.map((d) => (
              <path
                key={d.name}
                d={d.paths.join(" ")}
                className="cursor-pointer transition-opacity duration-150"
                style={{
                  fill: "hsl(0 100% 59%)",
                  fillOpacity: d.count === 0 ? 0.05 : 0.12 + 0.83 * Math.sqrt(d.count / MAX),
                  stroke: "hsl(var(--border))",
                  strokeWidth: 0.7,
                  opacity: hovered && hovered.name !== d.name ? 0.55 : 1,
                }}
                onMouseEnter={() => setHovered({ name: d.name, count: d.count })}
                onMouseLeave={() => setHovered(null)}
              >
                <title>{`${d.name}: ${d.count} martyrs`}</title>
              </path>
            ))}
          </svg>
          <div className="h-6 text-center mt-2">
            {hovered ? (
              <p className="text-foreground text-sm font-semibold">
                {hovered.name} — <span className="text-accent">{hovered.count} martyrs</span>
              </p>
            ) : (
              <p className="text-muted-foreground text-xs">Darker red = more martyrs</p>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-foreground font-semibold mb-3">Districts that gave the most</h3>
          <ul className="space-y-2">
            {top.map((d) => (
              <li
                key={d.name}
                className="flex items-center justify-between bg-secondary/50 border border-border rounded-lg px-4 py-2.5"
                onMouseEnter={() => setHovered({ name: d.name, count: d.count })}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="text-foreground text-sm font-medium">{d.name}</span>
                <span className="text-accent font-bold">{d.count}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-xs mt-4 leading-relaxed">
            Counts are from the permanent addresses in the official gazette list (798 of the 834 martyrs
            have a recorded home district). Four districts — Bandarban, Maulvibazar, Meherpur and
            Rangamati — show no martyrs in the gazette.
          </p>
          <p className="text-muted-foreground/60 text-[11px] mt-3">
            District boundaries: UN OCHA / Bangladesh Bureau of Statistics (COD-AB), CC BY-IGO.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DistrictMap;
