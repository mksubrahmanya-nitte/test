

"use client";
import React from 'react';

const strengths = [
  {
    icon: "🔬",
    iconBg: "#9370db",
    title: "Interdisciplinary Approach",
    description:
      "Students from a wide range of background receive education in management with different perspective that creates opportunities of understanding.",
  },
  {
    icon: "💡",
    iconBg: "#ff69b4",
    title: "Immersive & Experiential Learning",
    description:
      "Experience from a real-world projects to develop knowledge for in-depth learning.",
  },
  {
    icon: "📚",
    iconBg: "#00ced1",
    title: "Whole Brain Learning Pedagogy",
    description:
      "The program is designed to give students opportunities to grow skill based focus and ensures much richer experience.",
  },
  {
    icon: "🏆",
    iconBg: "#f59e0b",
    title: "Faculty From Academia & Industry",
    description:
      "Students are exposed to professional industry professors who develop unique academic knowledge and research experience.",
  },
];

export default function OurStrengths() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto" id="strengths">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-4">Our Strengths</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {strengths.map((s) => (
          <div key={s.title} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div
              className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl"
              style={{ backgroundColor: s.iconBg + "22", border: `2px solid ${s.iconBg}` }}
            >
              {s.icon}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1 text-base">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
