'use client';

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: "IBM", logo: "/images/ibm.png" },
  { name: "ISRO", logo: "/images/isro.png" },
  { name: "SAC", logo: "/images/sac.png" },
  { name: "Yudiz", logo: "/images/yudiz.png" },
  { name: "Coding", logo: "/images/coding.png" },
  { name: "Dev", logo: "/images/dev.png" },
  { name: "Aventure", logo: "/images/aventure.png" },
  { name: "Samy", logo: "/images/samy.png" },
  { name: "Asian African", logo: "/images/asian-african.png" },
  { name: "Virtual Height", logo: "/images/virtual-height.png" },
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
              className="mx-8 md:mx-16 flex items-center justify-center min-w-[150px]"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer" 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
