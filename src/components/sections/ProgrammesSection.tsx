'use client';

import React from 'react';
import { motion } from 'framer-motion';

const programmeCards = [
  {
    title: "UG Programmes",
    color: "bg-[#9370db]", // Lavender/Purple
    image: "https://images.unsplash.com/photo-1523050335456-c38a89b7828a?auto=format&fit=crop&q=80&w=400&h=300",
    link: "/bba.html"
  },
  {
    title: "PG Programmes",
    color: "bg-[#ff69b4]", // Pink
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400&h=300",
    link: "/mba.html"
  },
  {
    title: "Doctoral",
    color: "bg-[#800000]", // Maroon
    image: "https://images.unsplash.com/photo-1521791136064-7986c295944b?auto=format&fit=crop&q=80&w=400&h=300",
    link: "/doctoral-programmes.html"
  },
  {
    title: "Certificate Courses",
    color: "bg-[#00ced1]", // Light Blue
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400&h=300",
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
