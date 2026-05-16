'use client';

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  "IBM", "ISRO", "SAC", "Yudiz", "TCS", "ICICI Bank", "Viacom18", "Godrej",
  "Infosys", "Wipro", "Amazon", "Microsoft"
];

export default function PartnersMarquee() {
  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest">
          Trusted by Industry Leaders
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20
          }}
        >
          {/* Double the array for seamless looping */}
          {[...partners, ...partners].map((partner, index) => (
            <div 
              key={index} 
              className="mx-8 md:mx-16 flex items-center justify-center min-w-[120px]"
            >
              <span className="text-2xl md:text-3xl font-bold text-gray-300 hover:text-gray-500 transition-colors cursor-default">
                {partner}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
