'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const facultyList = [
  { name: "Dr. Rajesh Kumar", role: "Dean", school: "School of Computing", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300" },
  { name: "Prof. Anita Desai", role: "Professor", school: "School of Management", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300" },
  { name: "Dr. Vikram Singh", role: "HOD", school: "School of Engineering", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300" },
  { name: "Prof. Meera Patel", role: "Assoc. Professor", school: "School of Commerce", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300" },
  { name: "Dr. Amit Shah", role: "Professor", school: "School of Computing", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300&h=300" },
  { name: "Dr. Sneha Rao", role: "Asst. Professor", school: "School of Management", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300&h=300" },
];

const schools = ["All", "School of Computing", "School of Management", "School of Engineering", "School of Commerce"];

export default function FacultySection() {
  const [activeSchool, setActiveSchool] = useState("All");

  const filteredFaculty = activeSchool === "All" 
    ? facultyList 
    : facultyList.filter(f => f.school === activeSchool);

  return (
    <section id="faculty" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Academic Pillars</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900">Our Distinguished Faculty</h3>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {schools.map(school => (
            <button
              key={school}
              onClick={() => setActiveSchool(school)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeSchool === school
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
              }`}
            >
              {school}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <AnimatePresence>
            {filteredFaculty.map((faculty) => (
              <motion.div
                key={faculty.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100 cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={faculty.image} 
                    alt={faculty.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{faculty.name}</h4>
                  <p className="text-xs text-primary font-medium">{faculty.role}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
