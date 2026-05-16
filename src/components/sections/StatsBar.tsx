'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '17+', label: 'Colleges' },
  { value: '3', label: 'Schools' },
  { value: '20+', label: 'Years of Excellence' },
  { value: '50+', label: 'Expert Faculty' },
];

export default function StatsBar() {
  return (
    <section className="bg-primary text-white py-12 relative z-20 -mt-10 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-2xl shadow-2xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            className="flex flex-col items-center justify-center text-center space-y-2 border-r last:border-0 border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="text-4xl md:text-5xl font-bold text-secondary">{stat.value}</span>
            <span className="text-sm md:text-base font-medium uppercase tracking-wider">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
