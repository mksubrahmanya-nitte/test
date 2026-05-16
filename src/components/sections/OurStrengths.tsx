'use client';

import React from 'react';
import { motion } from 'framer-motion';

const strengths = [
  {
    title: "Interdisciplinary Approach",
    description: "Students from a wide range of backgrounds connect, ideate and solve problems with different conceptual structures and methods of understanding.",
    color: "bg-[#e1306c]", // Pinkish
    icon: "/images/opportunities.png"
  },
  {
    title: "Immersive & Experiential Learning",
    description: "Exposure to real-life projects to develop hands-on expertise.",
    color: "bg-[#6a1b9a]", // Purple
    icon: "/images/learning.png"
  },
  {
    title: "Whole Brain Learning Pedagogy",
    description: "Pedagogy that empower learners to acquire future-proof technical skills and moulds them into creative thinkers.",
    color: "bg-[#039be5]", // Blue
    icon: "/images/mortarboard.png"
  },
  {
    title: "Faculty from Academia & Industry",
    description: "Inspiration by dynamic, brilliant scholars with vast academic knowledge and real-world experience.",
    color: "bg-[#fbc02d]", // Yellow
    icon: "/images/presentation.png"
  }
];

export default function OurStrengths() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 border-b-2 border-gray-100 pb-4">Our Strengths</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((item, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`${item.color} w-20 h-20 rounded-full flex items-center justify-center p-4 mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <img src={item.icon} alt={item.title} className="w-full h-full object-contain brightness-0 invert" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 h-14 flex items-center justify-center">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
