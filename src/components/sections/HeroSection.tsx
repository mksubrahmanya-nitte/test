'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { id: 1, src: '/images/Untitled-3.webp', alt: 'JG University Award' },
  { id: 2, src: '/images/Untitled-12.webp', alt: 'Campus Life' },
  { id: 3, src: '/images/Untitled-1.webp', alt: 'Admission Open' },
  { id: 4, src: '/images/Untitled-2 (2).webp', alt: 'Industry Linkage' },
  { id: 5, src: '/images/Untitled-4.webp', alt: 'Collaborations' },
  { id: 6, src: '/images/Untitled-5.webp', alt: 'Discover Us' },
  { id: 7, src: '/images/Untitled-8.webp', alt: 'Career' },
  { id: 8, src: '/images/Untitled-9.webp', alt: 'Media' },
  { id: 9, src: '/images/Untitled-10.webp', alt: 'Contact Us' },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[80vh] overflow-hidden bg-gray-100 mt-24">
      {/* Slides */}
      <div 
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full w-full h-full relative">
            <img 
              src={slide.src} 
              alt={slide.alt} 
              className="w-full h-full object-cover object-top"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prev}
        className="absolute left-10 md:left-24 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors"
      >
        <ChevronLeft size={64} strokeWidth={1} />
      </button>
      <button 
        onClick={next}
        className="absolute right-10 md:right-24 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors"
      >
        <ChevronRight size={64} strokeWidth={1} />
      </button>

      {/* Dots (optional but good for UX) */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${idx === currentSlide ? 'bg-white' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </section>
  );
}
