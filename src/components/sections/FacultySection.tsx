/*
// Old FacultySection code commented out:
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const facultyList = [
  { name: "Ms. Priyanka Mehta", role: "Dean, School of Management", image: "/images/megha-1.jpg" },
  { name: "Dr. Rajesh Kumar", role: "Professor, School of Computing", image: "/images/jigar-1.jpg" },
  { name: "Dr. Vikram Singh", role: "HOD, School of Engineering", image: "/images/vaibhav-1.jpg" },
  { name: "Dr. Aarti", role: "Asst. Professor", image: "/images/aarti-1.jpg" },
  { name: "Dr. Dinesh", role: "Asst. Professor", image: "/images/dinesh-1.jpg" },
];

export default function FacultySection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % facultyList.length);
  const prev = () => setIndex((index - 1 + facultyList.length) % facultyList.length);

  return (
    <section id="faculty" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 border-b-2 border-gray-100 pb-4">Faculty Members</h2>
        
        <div className="relative flex items-center justify-center">
          <button onClick={prev} className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 text-primary">
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex items-center gap-8 justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="flex flex-col items-center"
              >
                <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white mb-6">
                  <img src={facultyList[index].image} alt={facultyList[index].name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center p-6 bg-primary text-white rounded-xl shadow-xl min-w-[300px]">
                  <h4 className="text-xl font-bold">{facultyList[index].name}</h4>
                  <p className="text-sm text-secondary font-bold uppercase tracking-widest mt-2">{facultyList[index].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={next} className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 text-primary">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
*/

// ??$$$ newer code
"use client";
import { useState } from "react";
import Image from "next/image";

const faculty = [
  { name: "Dr. Priyanka Mehta", role: "Dept. of Management", image: "/images/megha-1.jpg" },
  { name: "Dr. Namita Patel",   role: "School of Management", image: "/images/namika-1.png" },
  { name: "Dr. Ritu Shah",      role: "Dept. of Commerce",    image: "/images/aarti-1.jpg" },
  { name: "Dr. Rajesh Kumar",   role: "Dept. of Computing",   image: "/images/jigar-1.jpg" },
];

export default function FacultySection() {
  const [center, setCenter] = useState(1);
  const len = faculty.length;

  const left  = (center - 1 + len) % len;
  const right = (center + 1) % len;

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto" id="faculty">
      <h2 className="text-2xl font-bold text-gray-900 mb-10 border-b-2 border-gray-100 pb-4">Faculty Members</h2>
      <div className="flex items-center justify-center gap-6">
        {/* Left arrow */}
        <button
          onClick={() => setCenter((c) => (c - 1 + len) % len)}
          className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center text-lg flex-shrink-0 font-bold"
        >
          ‹
        </button>

        {/* Cards */}
        <div className="flex items-center gap-4">
          {/* Left card */}
          <div className="w-40 opacity-70 scale-90 transition-all duration-300 hidden sm:block">
            <FacultyCard member={faculty[left]} active={false} />
          </div>
          {/* Center card */}
          <div className="w-52 scale-105 transition-all duration-300">
            <FacultyCard member={faculty[center]} active={true} />
          </div>
          {/* Right card */}
          <div className="w-40 opacity-70 scale-90 transition-all duration-300 hidden sm:block">
            <FacultyCard member={faculty[right]} active={false} />
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={() => setCenter((c) => (c + 1) % len)}
          className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center text-lg flex-shrink-0 font-bold"
        >
          ›
        </button>
      </div>
    </section>
  );
}

function FacultyCard({ member, active }: { member: typeof faculty[0]; active: boolean }) {
  return (
    <div className={`rounded-xl overflow-hidden border-2 transition-all ${active ? "border-red-600" : "border-transparent"}`}>
      <div className="relative h-56 w-full">
        <Image src={member.image} alt={member.name} fill className="object-cover object-top" />
      </div>
      {active && (
        <div className="bg-red-600 text-white text-center py-2 px-3">
          <p className="font-bold text-sm">{member.name}</p>
          <p className="text-xs opacity-80">{member.role}</p>
        </div>
      )}
    </div>
  );
}
