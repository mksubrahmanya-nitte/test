'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const featureList = [
  "National Education Policy (NEP) 2020 & UGC Compliant Programmes",
  "Collaboration with Foreign Universities for Curriculum, Delivery, and Student Exchange",
  "Full Pay On-The-Job Training Opportunities",
  "Course-Embedded Capstone Projects",
  "Faculty Members with Industry Experience and Academic Expertise",
  "Hands-on Experience using Industry Use-Cases and Emerging Tech",
  "Cross-Cultural and Cross-Sectoral Internships",
  "24*7 Accessibility of Facilities to Students and Faculty Members"
];

export default function SalientFeatures() {
  return (
    <section className="py-20 bg-[#f8fbff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-10 border-b-2 border-gray-200 pb-4">
          JG University Salient Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {featureList.map((feature, index) => (
            <motion.div 
              key={index}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="mt-1 shrink-0">
                <ChevronRight size={18} className="text-[#0066cc]" strokeWidth={3} />
              </div>
              <p className="text-gray-700 text-sm md:text-base font-medium">
                {feature}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
