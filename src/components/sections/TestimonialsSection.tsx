

"use client";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "It gives me great pleasure to say with pride that I have completed my graduation from JG. This incredible blessing, brilliant faculty members and students is a very critical which gives me an opportunity to. Your training is to appreciate the efforts of the faculty members and staff to support me to become a Marine Director.",
    name: "Dhaval Gosai",
    role: "Ex-Intern / Manager-Venus",
  },
  {
    quote:
      "JG University gave me a platform to discover my leadership potential. The global exchange program broadened my horizons.",
    name: "Alumni Student",
    role: "School of Management",
  },
];

export default function TestimonialsSection() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  return (
    <section className="py-14 px-4 bg-gray-50 text-gray-700" id="testimonials">
      <div className="max-w-3xl mx-auto">

        <p className="text-xs font-bold tracking-widest uppercase text-gray-400 text-center mb-6">
          Alumni Success
        </p>
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10 border-b border-gray-200 pb-4">JG Alumni Testimonials</h2>

        <div className="bg-white rounded-2xl p-8 shadow-md relative">

          <span className="absolute top-6 left-8 text-7xl text-yellow-400 font-serif leading-none select-none opacity-80">
            "
          </span>
          <p className="text-gray-700 text-sm leading-relaxed pt-10 mb-6">{t.quote}</p>
          <div>
            <p className="font-bold text-gray-900 text-sm">{t.name}</p>
            <p className="text-xs text-gray-400">{t.role}</p>
          </div>

          {/* Navigation buttons (bottom right) */}
          <div className="absolute bottom-6 right-8 flex gap-2">
            <button
              onClick={() => setI((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-9 h-9 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center text-lg font-bold"
            >
              ‹
            </button>
            <button
              onClick={() => setI((prev) => (prev + 1) % testimonials.length)}
              className="w-9 h-9 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center text-lg font-bold"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
