/*
// Old ProgrammesSection code commented out:
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const programmeCards = [
  {
    title: "UG Programmes",
    color: "bg-[#9370db]", // Lavender/Purple
    image: "/images/ug-programmes.jpg",
    link: "/bba.html"
  },
  {
    title: "PG Programmes",
    color: "bg-[#ff69b4]", // Pink
    image: "/images/pg-programmes.jpg",
    link: "/mba.html"
  },
  {
    title: "Doctoral",
    color: "bg-[#800000]", // Maroon
    image: "/images/phd-programmes.jpg",
    link: "/doctoral-programmes.html"
  },
  {
    title: "Certificate Courses",
    color: "bg-[#00ced1]", // Light Blue
    image: "/images/certificate-courses.jpg",
    link: "/metaverse.html"
  }
];

export default function ProgrammesSection() {
  return (
    <section id="programmes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 border-b-2 border-gray-100 pb-4">Programmes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programmeCards.map((card, index) => (
            <motion.div 
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer h-64"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => window.location.href = card.link}
            >
              <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              
              <div className="absolute bottom-6 left-0 right-0 px-4">
                <div className={`${card.color} text-white py-3 px-4 rounded-md text-center font-bold text-lg shadow-lg group-hover:brightness-110 transition-all`}>
                  {card.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
*/

// ??$$$ newer code
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
