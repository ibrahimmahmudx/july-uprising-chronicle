import { useState } from "react";
import Layout from "@/components/Layout";
import { X } from "lucide-react";
import { galleryPhotos } from "@/data/gallery";

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Layout>
      <section className="py-20">
        <div className="page-container">
          <div className="mb-4">
            <h1 className="text-4xl sm:text-5xl font-black text-foreground">
              <span className="text-primary text-glow-green">Gallery</span>
            </h1>
            <p className="text-muted-foreground mt-3">
              Authentic photographs of the July 2024 mass uprising — collected from Wikimedia Commons ({galleryPhotos.length} photos).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryPhotos.map((img, i) => (
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

          <p className="text-muted-foreground text-xs mt-10 text-center">
            All photos are from Wikimedia Commons. Click on a photo to see its author and licence (CC BY / CC BY-SA / CC0).
          </p>
        </div>
      </section>

      {selected !== null && (
        <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelected(null)}>
          <button className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors" onClick={() => setSelected(null)}>
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={galleryPhotos[selected].src} alt={galleryPhotos[selected].caption} className="w-full rounded-lg" />
            <p className="text-center text-foreground mt-4 text-sm">{galleryPhotos[selected].caption}</p>
            <p className="text-center text-muted-foreground mt-1 text-xs">
              Photo: {galleryPhotos[selected].credit} —{" "}
              <a href={galleryPhotos[selected].source} target="_blank" rel="noreferrer" className="underline hover:text-primary">
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
