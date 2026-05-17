/*
// Old AboutSection code commented out:
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to <span className="text-primary">JG University</span> the Best University in Ahmedabad
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
              JG University is a New Age Tech-Driven University offering programmes that evolve as per future industry demand, thus enabling its students to get into employment or self-employment seamlessly.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
              It is a UGC approved University sponsored by the ASIA Charitable Trust, Which has been in the field of education since 1965, successfully managing 17 colleges and 3 schools.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg border-2 border-gray-100 relative group cursor-pointer">
              <img 
                src="/images/Untitled-1.webp" 
                alt="Students learning" 
                className="object-cover w-full h-full group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
                   <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-primary border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg border-2 border-gray-100 relative group cursor-pointer">
              <img 
                src="/images/Untitled-2 (2).webp" 
                alt="Group discussion" 
                className="object-cover w-full h-full group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
                   <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-primary border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
*/

// ??$$$ newer code
"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="discover" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 leading-snug mb-4">
              Welcome to <span className="text-red-700">JG University</span> the Best University in Ahmedabad
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
              JG University is a New Age Multi-Stream University offering programmes that enable to get into employment or self-entrepreneurship. It is a joint commission of the state government and sponsored by the IMA Chancellor Trust, which has been in the field of education since 1960, successfully managing 7 colleges and b-schools.
            </p>
          </motion.div>

          {/* Double Thumbnails */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg border-2 border-gray-100 relative group cursor-pointer">
              <img 
                src="/images/Untitled-1.webp" 
                alt="Students learning" 
                className="object-cover w-full h-full group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
                   <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-red-700 border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg border-2 border-gray-100 relative group cursor-pointer">
              <img 
                src="/images/Untitled-2 (2).webp" 
                alt="Group discussion" 
                className="object-cover w-full h-full group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
                   <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-red-700 border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
