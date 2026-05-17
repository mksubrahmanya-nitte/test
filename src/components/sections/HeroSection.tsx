

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/JGYCF.webp",
    title: "JG YOF 1.0",
  },
  {
    image: "/images/JGYCF21.webp",
    title: "JG YOF 1.0",
  },
  {
    image: "/images/slider_1.png",
    title: "JG YOF 1.0",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[920px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={i === 0}
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-end pb-16 px-8">
            <h1 className="text-white text-5xl font-black tracking-tight drop-shadow-2xl">
              {slide.title}
            </h1>
          </div>
        </div>
      ))}

      <button
        onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center z-10 text-xl font-bold"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrent((c) => (c + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center z-10 text-xl font-bold"
      >
        ›
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}
