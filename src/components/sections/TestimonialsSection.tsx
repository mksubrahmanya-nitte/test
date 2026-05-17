/*
// Old TestimonialsSection code commented out:
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Jigar Dan",
    course: "MBA Alumnus",
    company: "Industry Leader",
    role: "Senior Professional",
    image: "/images/jigar-dan.jpg",
    text: "The practical exposure and industry connections I gained at JG University were invaluable. The faculty's mentorship helped me secure a top placement right after my final exams."
  },
  {
    name: "Parth Raval",
    course: "BBA Alumnus",
    company: "Global Solutions",
    role: "Tech Consultant",
    image: "/images/parth-raval.jpg",
    text: "The state-of-the-art tech labs and hands-on curriculum prepared me perfectly for the corporate world. The coding culture on campus is absolutely phenomenal."
  },
  {
    name: "Disha Thaker",
    course: "PG Alumna",
    company: "Creative Agency",
    role: "Lead Designer",
    image: "/images/disha-thaker.jpg",
    text: "JG University gave me a platform to discover my leadership potential. The global exchange program broadened my horizons and gave me a competitive edge."
  },
  {
    name: "Yatendra",
    course: "IMSc IT Alumnus",
    company: "Tech Giant",
    role: "Data Scientist",
    image: "/images/yatendra.jpg",
    text: "The IMSc IT program at JG University is truly unique. It combines theory with extreme practicals, giving us an edge in the tech industry."
  },
  {
    name: "Krishna Soni",
    course: "MCom Alumna",
    company: "Finance Corp",
    role: "Accountant",
    image: "/images/krishna-soni.jpg",
    text: "The accounting and finance depth here is amazing. I felt fully prepared for my professional career."
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-3">Alumni Success</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">Hear From Our Achievers</h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 rounded-3xl p-8 md:p-12 border border-gray-700 shadow-2xl relative"
              >
                <Quote className="absolute top-8 right-8 text-gray-700 opacity-50" size={64} />
                
                <p className="text-xl md:text-2xl text-gray-300 italic mb-10 relative z-10 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-white">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm text-gray-400">{testimonials[currentIndex].course}</p>
                    </div>
                  </div>
                  
                  <div className="text-right hidden sm:block">
                    <p className="text-sm text-gray-400">Placed at</p>
                    <p className="text-lg font-bold text-secondary">{testimonials[currentIndex].company}</p>
                    <p className="text-xs text-gray-500">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-6 mt-8">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${idx === currentIndex ? 'bg-secondary' : 'bg-gray-600'}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
*/

// ??$$$ newer code
"use client";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "It gives me great pleasure to say with pride that I have completed my graduation from JG. This incredible blessing, brilliant faculty members and students is a very critical which gives me an opportunity to. Your training is to appreciate the efforts of the faculty members and staff to support me to become a Marine Director.",
    name: "Dhaval Gosai",
    role: "Ex-Intern / Manager-Venus",
  },
  {
    quote:
      "JG University gave me a platform to discover my leadership potential. The global exchange program broadened my horizons.",
    name: "Alumni Student",
    role: "School of Management",
  },
];

export default function TestimonialsSection() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  return (
    <section className="py-14 px-4 bg-gray-50 text-gray-700" id="testimonials">
      <div className="max-w-3xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-bold tracking-widest uppercase text-gray-400 text-center mb-6">
          Alumni Success
        </p>
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10 border-b border-gray-200 pb-4">JG Alumni Testimonials</h2>

        {/* Quote card */}
        <div className="bg-white rounded-2xl p-8 shadow-md relative">
          {/* Gold quote mark */}
          <span className="absolute top-6 left-8 text-7xl text-yellow-400 font-serif leading-none select-none opacity-80">
            "
          </span>
          <p className="text-gray-700 text-sm leading-relaxed pt-10 mb-6">{t.quote}</p>
          <div>
            <p className="font-bold text-gray-900 text-sm">{t.name}</p>
            <p className="text-xs text-gray-400">{t.role}</p>
          </div>

          {/* Navigation buttons (bottom right) */}
          <div className="absolute bottom-6 right-8 flex gap-2">
            <button
              onClick={() => setI((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-9 h-9 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center text-lg font-bold"
            >
              ‹
            </button>
            <button
              onClick={() => setI((prev) => (prev + 1) % testimonials.length)}
              className="w-9 h-9 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center text-lg font-bold"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
