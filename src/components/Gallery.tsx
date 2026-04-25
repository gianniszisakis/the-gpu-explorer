import { useState, useEffect } from "react";
import { images } from "../data/images";

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  //disable background scroll when image is open
  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selected]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selected === null) return;

      if (e.key === "Escape") {
        setSelected(null);
      }

      if (e.key === "ArrowRight") {
        setSelected((prev) =>
          prev === images.length - 1 ? 0 : (prev ?? 0) + 1,
        );
      }

      if (e.key === "ArrowLeft") {
        setSelected((prev) =>
          prev === 0 ? images.length - 1 : (prev ?? 0) - 1,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center my-8 
               text-blue-400 tracking-tight
               drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"
      >
        Superposition Results
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            loading="lazy"
            onClick={() => setSelected(index)}
            className="w-full h-48 object-cover rounded-xl cursor-pointer
                       hover:scale-105 transition-transform duration-300 bg-neutral-800"
          />
        ))}
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={images[selected]}
            className="max-w-[95vw] max-h-[85vh] object-contain rounded-xl shadow-2xl animate-fade"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setSelected(null)}
          >
            ✕
          </button>

          <button
            className="absolute left-5 text-white text-4xl"
            onClick={(e) => {
              e.stopPropagation();
              setSelected((prev) =>
                prev === 0 ? images.length - 1 : (prev ?? 0) - 1,
              );
            }}
          >
            ‹
          </button>

          <button
            className="absolute right-5 text-white text-4xl"
            onClick={(e) => {
              e.stopPropagation();
              setSelected((prev) =>
                prev === images.length - 1 ? 0 : (prev ?? 0) + 1,
              );
            }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
