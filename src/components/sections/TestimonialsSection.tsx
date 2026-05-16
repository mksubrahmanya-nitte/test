'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    course: "MBA, Class of 2024",
    company: "TCS",
    role: "Business Analyst",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
    text: "The practical exposure and industry connections I gained at JG University were invaluable. The faculty's mentorship helped me secure a top placement at TCS right after my final exams."
  },
  {
    name: "Rahul Verma",
    course: "B.Tech CS, Class of 2023",
    company: "Amazon",
    role: "SDE I",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200",
    text: "The state-of-the-art tech labs and hands-on curriculum prepared me perfectly for the corporate world. The coding culture on campus is absolutely phenomenal."
  },
  {
    name: "Neha Gupta",
    course: "BBA, Class of 2025",
    company: "ICICI Bank",
    role: "Management Trainee",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    text: "JG University gave me a platform to discover my leadership potential. The global exchange program broadened my horizons and gave me a competitive edge."
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality
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
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-3">Alumni Success</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">Hear From Our Achievers</h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Slider */}
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

          {/* Controls */}
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
