/*
// Old LeadershipSection code commented out:
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
*/

// ??$$$ newer code - Restored authentic bios and added premium interactive modal messages for Guiding the Vision
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const leaders = [
  {
    name: "M.P. Chandran",
    title: "President, JG University",
    image: "/images/m-p-chandran.jpg",
    layout: "text-left", // text left, image right
    bio: `M.P Chandran is a postgraduate in management with more than 30 years of experience in senior and board-level positions in public and private sectors in India and abroad. He is the Chairperson of the Education Task Force, Gujarat Chamber of Commerce and Industry. He is also the chairman of ASIA Charitable Trust (ACT). ACT owns and successfully runs 3 schools, 17 colleges, and JG University.`,
    buttonText: "View President's Message",
    modalTitle: "President's Message",
    message: [
      "Knowledge is the power that no one can take away from you. The education system of today needs to be upgraded to impart knowledge that is not only cognitive but also experiential so as to help students shape their future, with their ability to match employment/self-employment requirements. Education must focus on nurturing the youth with the capabilities to acquire knowledge and skills that will help them learn and become eminent practitioners.",
      "JG University empowers its students not to restrict themselves rather explore and gain wisdom beyond the pages of books. University’s pedagogy is designed to match the everyday challenges and at the same time bring out the academic brilliance of knowledge seekers.",
      "All the best!"
    ]
  },
  {
    name: "Dr. CA Achyut Dani",
    title: "Director General, JG University",
    image: "/images/achyut-dani.jpg",
    layout: "image-left", // image left, text right
    bio: `Dr. CA Achyut Dani has more than 21 years of experience and expertise in academics and industry. He holds a doctorate in management and commerce and is also a research guide. He has been a fellow member of the Committee for Review of Education and Training (CRET) of the Institute of Chartered Accountants of India, a senior mentor and faculty at Academic Staff college. Gujarat University, National Academy of Direct Taxes, DTRTI (Direct Taxes Regional Training Institute), CEI - Confederation of Entrepreneurship Initiatives and with Mission Mentors for strategic management and international collaborations. He is on the Governing Council of the Asian-African Chambers of Commerce & Industry. He is on the Commission Board of CIAC Global and Passion Vista Publications as Senior Board Member, a premium publication house in Asia, Africa, Europe, North America, UK, and UAE. To his credit, he has multiple awards and recognitions for his contribution to the field of education including the Bharat Jyoti Award (National), the Gem of CA Profession Award (ICAI) and the Brilliance in Education Award (CCS). He has authored Textbooks and Self Study Books on Accountancy for the Gujarat Higher Secondary Education Board and numerous reference books on Financial Reporting, Cost Accounting, and Taxation.`,
    buttonText: "View DG's Message",
    modalTitle: "Director-General's Message",
    message: [
      "Excellence is a matter of choice. If we choose to be excellent, we will be for sure. JG University aims to bring excellence in everything that it does, be it for students, faculty, staff, parents or any of its stakeholders. We stand by the idea of knowledge beyond books and provide students a real-life experience with an industry-relevant curriculum. The University desires to strike an equilibrium between state-of-the-art infrastructure and high-quality education that is recognised globally. We have a focused and dedicated environment that ensures a successful future for our students. Our commitment towards our students is reflected in the resources we bring to them and the mentorship we provide them at every stage to become global change leaders with appropriate skills and values."
    ]
  },
];

export default function LeadershipSection() {
  const [activeLeader, setActiveLeader] = useState<typeof leaders[0] | null>(null);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto" id="discover">
      <h2 className="text-2xl font-bold text-gray-900 mb-10 border-b-2 border-gray-100 pb-4">Our Leaders</h2>
      <div className="flex flex-col gap-10">
        {leaders.map((leader) => (
          <div
            key={leader.name}
            className={`flex flex-col md:flex-row gap-8 items-start ${
              leader.layout === "image-left" ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text side */}
            <div className="flex-1">
              <p className="font-semibold text-lg text-gray-900">{leader.name}</p>
              <p className="text-sm text-gray-500 mb-4">{leader.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-5 text-justify">{leader.bio}</p>
              <button
                onClick={() => setActiveLeader(leader)}
                className="px-5 py-2 rounded text-white text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md cursor-pointer"
                style={{ backgroundColor: "#7c3aed" }}
              >
                {leader.buttonText} →
              </button>
            </div>
            {/* Image side */}
            <div className="flex-shrink-0 w-full md:w-64">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Premium Message Modal */}
      {activeLeader && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 cursor-pointer transition-opacity duration-300"
          onClick={() => setActiveLeader(null)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative z-10 overflow-hidden border border-gray-100 p-6 md:p-8 cursor-default animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setActiveLeader(null)}
              className="absolute top-4 right-4 p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors z-20 cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Modal Title */}
            <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3 mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-purple-600 rounded-full"></span>
              {activeLeader.modalTitle}
            </h3>

            {/* Messages */}
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {activeLeader.message.map((paragraph, index) => (
                <p key={index} className="text-gray-700 text-[15px] leading-relaxed text-justify">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Footer Signature */}
            <div className="mt-8 border-t border-gray-100 pt-4 flex flex-col items-end">
              <p className="font-bold text-gray-900">{activeLeader.name}</p>
              <p className="text-xs text-gray-500">{activeLeader.title}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
