'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const leaders = [
  {
    name: "M.P. Chandran",
    role: "President, JG University",
    image: "/images/m-p-chandran.jpg",
    bio: "M.P Chandran is a postgraduate in management with more than 30 years of experience in senior and board-level positions in public and private sectors in India and abroad.",
    fullBio: "M.P Chandran is a postgraduate in management with more than 30 years of experience in senior and board-level positions in public and private sectors in India and abroad. He is the Chairperson of the Education Task Force, Gujarat Chamber of Commerce and Industry. He is also the chairman of ASIA Charitable Trust (ACT). ACT owns and successfully runs 3 schools, 17 colleges, and JG University."
  },
  {
    name: "Dr. CA Achyut Dani",
    role: "Director General, JG University",
    image: "/images/achyut-dani.jpg",
    bio: "Dr. CA Achyut Dani has more than 21 years of experience and expertise in academics and industry. He holds a doctorate in management and commerce.",
    fullBio: "Dr. CA Achyut Dani has more than 21 years of experience and expertise in academics and industry. He holds a doctorate in management and commerce and is also a research guide. He has authored Textbooks and Self Study Books on Accountancy for the Gujarat Higher Secondary Education Board and numerous reference books on Financial Reporting, Cost Accounting, and Taxation."
  }
];

export default function LeadershipSection() {
  const [selectedLeader, setSelectedLeader] = useState<typeof leaders[0] | null>(null);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Our Leaders</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900">Guiding the Vision</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div 
              key={index}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onClick={() => setSelectedLeader(leader)}
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-2xl font-bold text-white mb-1">{leader.name}</h4>
                  <p className="text-secondary font-medium">{leader.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 line-clamp-3 mb-4">{leader.bio}</p>
                <span className="text-primary font-semibold group-hover:text-primary-hover flex items-center">
                  Read Full Profile <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedLeader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLeader(null)}
            />
            <motion.div 
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative z-10 overflow-hidden flex flex-col sm:flex-row"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
            >
              <button 
                onClick={() => setSelectedLeader(null)}
                className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-gray-100 rounded-full z-20 transition-colors"
              >
                <X size={20} className="text-gray-900" />
              </button>
              
              <div className="w-full sm:w-2/5 h-64 sm:h-auto">
                <img src={selectedLeader.image} alt={selectedLeader.name} className="w-full h-full object-cover" />
              </div>
              <div className="w-full sm:w-3/5 p-8 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-1">{selectedLeader.name}</h4>
                <p className="text-primary font-medium mb-6">{selectedLeader.role}</p>
                <p className="text-gray-600 leading-relaxed">{selectedLeader.fullBio}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
