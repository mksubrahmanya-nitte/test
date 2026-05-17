// ??$$$
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, ChevronLeft, ChevronRight, X, ZoomIn, ArrowLeft } from 'lucide-react';
import { initiativesData, Initiative } from '@/data/initiatives';

// ??$$$ - Helper function to extract or guess event year
const getInitiativeYear = (title: string): string => {
  const lowercase = title.toLowerCase();
  if (lowercase.includes('2024') || lowercase.includes("'24") || lowercase.endsWith(' 24')) {
    return '2024';
  }
  if (lowercase.includes('2023') || lowercase.includes("'23") || lowercase.endsWith(' 23')) {
    return '2023';
  }
  // Default fallback
  return '2023';
};

export default function InitiativesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<'All' | '2024' | '2023'>('All');
  
  // ??$$$ - Lightbox State
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    initiativeTitle: string;
    images: string[];
    currentIndex: number;
  }>({
    isOpen: false,
    initiativeTitle: '',
    images: [],
    currentIndex: 0,
  });

  // ??$$$ - Keyboard listeners for Lightbox navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox.isOpen) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        navigateLightbox(1);
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox]);

  const openLightbox = (initiative: Initiative, index: number) => {
    setLightbox({
      isOpen: true,
      initiativeTitle: initiative.title,
      images: initiative.images,
      currentIndex: index,
    });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const navigateLightbox = (direction: number) => {
    setLightbox((prev) => {
      if (!prev.isOpen || prev.images.length === 0) return prev;
      let newIndex = prev.currentIndex + direction;
      if (newIndex >= prev.images.length) {
        newIndex = 0;
      } else if (newIndex < 0) {
        newIndex = prev.images.length - 1;
      }
      return { ...prev, currentIndex: newIndex };
    });
  };

  // ??$$$ - Filter the initiatives based on year and search query
  const filteredInitiatives = initiativesData.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const year = getInitiativeYear(item.title);
    const matchesYear = selectedYear === 'All' || year === selectedYear;
    return matchesSearch && matchesYear;
  });

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16 font-sans">
      {/* ??$$$ - Hero Section */}
      <div className="relative bg-gradient-to-r from-red-800 to-amber-700 py-16 md:py-20 text-white overflow-hidden shadow-lg mb-10">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm font-semibold transition-colors group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4">
            Initiatives by JGUNI
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed font-light">
            Explore the workshops, seminars, community drives, and vibrant campus events shaping the holistic growth of our learners.
          </p>
        </div>
      </div>

      {/* ??$$$ - Main Content Container */}
      <div className="max-w-7xl mx-auto px-6">
        {/* ??$$$ - Search & Filtering Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-10 flex flex-col md:flex-row gap-5 items-center justify-between">
          <div className="relative w-full md:w-96">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </span>
            <input
              type="text"
              placeholder="Search initiatives..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm transition-all"
            />
          </div>

          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            {(['All', '2024', '2023'] as const).map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex-shrink-0 cursor-pointer ${
                  selectedYear === year
                    ? 'bg-red-700 text-white shadow-md shadow-red-700/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-800'
                }`}
              >
                {year === 'All' ? 'All Initiatives' : `${year} Events`}
              </button>
            ))}
          </div>
        </div>

        {/* ??$$$ - Grid List of Initiatives */}
        <div className="space-y-12">
          {filteredInitiatives.length > 0 ? (
            filteredInitiatives.map((item, idx) => {
              const year = getInitiativeYear(item.title);
              return (
                <motion.section
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8"
                >
                  {/* ??$$$ - Card Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-800 leading-snug flex-1">
                      {item.title}
                    </h2>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-50 text-amber-700 border border-amber-100/50 self-start md:self-auto flex-shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      {year}
                    </span>
                  </div>

                  {/* ??$$$ - Image Gallery Slider Container */}
                  <div className="relative group/slider">
                    <div 
                      id={`slider-${idx}`}
                      className="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-none scroll-smooth py-1"
                    >
                      {item.images.map((imgUrl, imgIdx) => (
                        <div 
                          key={imgIdx} 
                          className="flex-shrink-0 w-72 md:w-80 h-48 md:h-52 rounded-xl overflow-hidden relative shadow-sm border border-slate-100 group/image snap-start cursor-pointer"
                          onClick={() => openLightbox(item, imgIdx)}
                        >
                          <img
                            src={imgUrl}
                            alt={`${item.title} - Image ${imgIdx + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center">
                            <ZoomIn className="text-white w-8 h-8 drop-shadow-md" />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Navigation Buttons for Slider (Hidden if only 1 image) */}
                    {item.images.length > 1 && (
                      <>
                        <button
                          onClick={() => {
                            const slider = document.getElementById(`slider-${idx}`);
                            if (slider) slider.scrollBy({ left: -300, behavior: 'smooth' });
                          }}
                          className="absolute left-[-16px] top-1/2 -translate-y-1/2 bg-white text-slate-700 hover:text-red-700 w-10 h-10 rounded-full flex items-center justify-center shadow-lg border border-slate-100 hover:scale-105 active:scale-95 transition-all opacity-0 group-hover/slider:opacity-100 pointer-events-auto cursor-pointer z-10"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => {
                            const slider = document.getElementById(`slider-${idx}`);
                            if (slider) slider.scrollBy({ left: 300, behavior: 'smooth' });
                          }}
                          className="absolute right-[-16px] top-1/2 -translate-y-1/2 bg-white text-slate-700 hover:text-red-700 w-10 h-10 rounded-full flex items-center justify-center shadow-lg border border-slate-100 hover:scale-105 active:scale-95 transition-all opacity-0 group-hover/slider:opacity-100 pointer-events-auto cursor-pointer z-10"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>
                </motion.section>
              );
            })
          ) : (
            <div className="bg-white rounded-2xl border border-slate-150 py-16 px-6 text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-4 border border-slate-100">
                <Search className="w-7 h-7 text-slate-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-700 mb-1">No initiatives found</h3>
              <p className="text-sm text-slate-400">
                We couldn't find any events matching "{searchQuery}" in year {selectedYear}. Try clearing filters!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ??$$$ - Premium Framer Motion Lightbox Modal */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center p-4 select-none z-[9999]"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all border border-white/5 cursor-pointer z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header / Caption inside Modal */}
            <div className="absolute top-5 left-5 right-16 text-white text-left z-40 max-w-4xl">
              <h3 className="text-lg md:text-xl font-bold line-clamp-1 pr-6">
                {lightbox.initiativeTitle}
              </h3>
              <p className="text-xs text-white/50 mt-1">
                Image {lightbox.currentIndex + 1} of {lightbox.images.length}
              </p>
            </div>

            {/* Main Interactive Image Frame */}
            <div className="relative w-full max-w-5xl h-[70vh] md:h-[80vh] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={lightbox.currentIndex}
                  src={lightbox.images[lightbox.currentIndex]}
                  alt={lightbox.initiativeTitle}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="max-w-full max-h-full object-contain rounded-lg drop-shadow-2xl"
                />
              </AnimatePresence>

              {/* Navigation Controls inside Lightbox */}
              {lightbox.images.length > 1 && (
                <>
                  <button
                    onClick={() => navigateLightbox(-1)}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white hover:text-red-400 bg-white/5 hover:bg-white/15 w-12 h-12 rounded-full flex items-center justify-center border border-white/10 hover:scale-105 active:scale-95 transition-all cursor-pointer z-50"
                  >
                    <ChevronLeft className="w-7 h-7" />
                  </button>
                  <button
                    onClick={() => navigateLightbox(1)}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white hover:text-red-400 bg-white/5 hover:bg-white/15 w-12 h-12 rounded-full flex items-center justify-center border border-white/10 hover:scale-105 active:scale-95 transition-all cursor-pointer z-50"
                  >
                    <ChevronRight className="w-7 h-7" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail dots at the bottom for quick select */}
            {lightbox.images.length > 1 && (
              <div className="absolute bottom-5 flex gap-2 max-w-full overflow-x-auto px-4 py-2 scrollbar-none">
                {lightbox.images.map((_, imgIdx) => (
                  <button
                    key={imgIdx}
                    onClick={() => setLightbox(prev => ({ ...prev, currentIndex: imgIdx }))}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      lightbox.currentIndex === imgIdx ? 'bg-red-500 scale-125' : 'bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
