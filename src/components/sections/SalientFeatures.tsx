/*
// Old SalientFeatures code commented out:
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const features = [
  { text: "National Education Policy (NEP) 2020 & UGC Compliant Programmes", icon: "/images/mortarboard.png" },
  { text: "Collaboration with Foreign Universities for Exchange", icon: "/images/partnership.jpg" },
  { text: "Full Pay On-The-Job Training Opportunities", icon: "/images/opportunities.png" },
  { text: "State-of-the-art Modern Labs & Infrastructure", icon: "/images/lab.png" },
  { text: "Resourceful Library & Digital Learning Center", icon: "/images/library.png" },
  { text: "24*7 Wi-Fi Enabled High-Tech Campus", icon: "/images/wi-fi-campus.png" },
  { text: "Advanced R&D Center for Innovation", icon: "/images/r&d.png" },
  { text: "Industry-Led Capstone Projects", icon: "/images/presentation.png" }
];

export default function SalientFeatures() {
  return (
    <section className="py-20 bg-[#f8fbff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-10 border-b-2 border-gray-200 pb-4">
          JG University Salient Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="w-16 h-16 mb-4 p-3 bg-blue-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src={feature.icon} alt="Feature" className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-700 text-sm font-semibold leading-tight">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
*/

// ??$$$ newer code
const features = [
  "National Education Policy (NEP) 2020 & UGC Compliant Programmes",
  "Cutting-edge Interdisciplinary Curriculum for Co-create Delivery",
  "Top 10+ Straight Forward Programmes",
  "National Level Project",
  "Faculty Members with Industry Experience and Academic Expertise",
  "Circles of Experience using Academic Idea of Learning and Emerging Technology",
  "Choice of Specialization at Options (Specialization)",
  "100% Accessibility of Syllabus to Students and Faculty Members",
];

const Chevron = () => (
  <svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
  </svg>
);

export default function SalientFeatures() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto" id="features">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-4">JG University Salient Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        {features.map((f) => (
          <div key={f} className="flex items-start gap-3">
            <Chevron />
            <span className="text-sm text-gray-700 leading-relaxed">{f}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
