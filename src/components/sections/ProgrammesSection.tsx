

"use client";
import React from 'react';

const programmes = [
  {
    label: "Undergraduate",
    color: "#9370db",
    image: "/images/ug-programmes.jpg",
  },
  {
    label: "Programmes",
    color: "#c21400",
    image: "/images/pg-programmes.jpg",
  },
  {
    label: "Doctoral",
    color: "#800000",
    image: "/images/phd-programmes.jpg",
  },
  {
    label: "Certificate Courses",
    color: "#00ced1",
    image: "/images/certificate-courses.jpg",
  },
];

export default function ProgrammesSection() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto" id="programmes">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-4">Programmes</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {programmes.map((prog) => (
          <div key={prog.label} className="relative rounded-xl overflow-hidden h-48 group cursor-pointer shadow-md">
            <img
              src={prog.image}
              alt={prog.label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30" />
            <span
              className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-white text-xs font-bold"
              style={{ backgroundColor: prog.color }}
            >
              {prog.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
