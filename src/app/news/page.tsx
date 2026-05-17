
'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { motion as motionFramer, AnimatePresence as AnimatePresenceFramer } from 'framer-motion';
import { Search, Calendar, ChevronLeft, ChevronRight, X, ArrowLeft, ZoomIn } from 'lucide-react';
import { newsData, NewsItem } from '@/data/news';

export default function NewsPage() {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<'All' | '2024' | '2023' | '2022'>('All');
  const [activeImage, setActiveImage] = useState<{ itemIndex: number; imgIndex: number } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeImage) return;
      
      const currentItem = filteredNews[activeImage.itemIndex];
      if (!currentItem) return;

      if (e.key === 'Escape') {
        setActiveImage(null);
      } else if (e.key === 'ArrowRight') {
        const nextImgIndex = (activeImage.imgIndex + 1) % currentItem.images.length;
        setActiveImage({ ...activeImage, imgIndex: nextImgIndex });
      } else if (e.key === 'ArrowLeft') {
        const prevImgIndex = (activeImage.imgIndex - 1 + currentItem.images.length) % currentItem.images.length;
        setActiveImage({ ...activeImage, imgIndex: prevImgIndex });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImage]);

  const filteredNews = useMemo(() => {
    return newsData.filter((item, index) => {
      
      let matchesYear = true;
      if (selectedYear !== 'All') {
        matchesYear = item.title.includes(selectedYear);
      }

      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesYear && matchesSearch;
    });
  }, [searchQuery, selectedYear]);

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeImage) return;
    const currentItem = filteredNews[activeImage.itemIndex];
    const prevIndex = (activeImage.imgIndex - 1 + currentItem.images.length) % currentItem.images.length;
    setActiveImage({ ...activeImage, imgIndex: prevIndex });
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeImage) return;
    const currentItem = filteredNews[activeImage.itemIndex];
    const nextIndex = (activeImage.imgIndex + 1) % currentItem.images.length;
    setActiveImage({ ...activeImage, imgIndex: nextIndex });
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16 font-sans">

      <div className="relative h-[280px] md:h-[320px] w-full flex items-center justify-center overflow-hidden shadow-md">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/news/banner.jpg"
            alt="News at JG University"
            className="w-full h-full object-cover brightness-[0.55]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/85 hover:text-white mb-4 text-sm font-semibold transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-widest drop-shadow-lg uppercase font-sans">
            News & Events
          </h1>
          <p className="text-white/95 text-sm md:text-base font-medium max-w-2xl mt-3 tracking-wide leading-relaxed font-sans">
            Explore latest workshops, clean drives, seminars, sports achievements, and campus updates.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm flex flex-col md:flex-row gap-5 items-center justify-between">

          <div className="flex bg-slate-100 p-1.5 rounded-xl gap-1.5 w-full md:w-auto">
            {(['All', '2024', '2023', '2022'] as const).map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`flex-1 md:flex-none px-5 py-2 text-xs font-extrabold uppercase tracking-widest rounded-lg transition-all cursor-pointer ${
                  selectedYear === year
                    ? 'bg-red-700 text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="relative w-full md:max-w-md">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search news by title or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 pl-11 pr-5 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent focus:bg-white transition-all font-sans"
            />
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10">
        <AnimatePresenceFramer mode="wait">
          {filteredNews.length > 0 ? (
            <motionFramer.div
              key="news-grid"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {filteredNews.map((item, itemIndex) => {
                
                const dateMatch = item.title.match(/-\s*(\d+(?:[a-z]{2})?(?:\s*&\s*\d+(?:[a-z]{2})?)?\s*[A-Za-z]+,?\s*\d{4})/i) ||
                                  item.title.match(/-\s*([A-Za-z]+\s*\d{1,2},?\s*\d{4})/i);
                const dateText = dateMatch ? dateMatch[1] : 'Recent Activity';

                return (
                  <motionFramer.div
                    key={`${item.title}-${itemIndex}`}
                    className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm flex flex-col hover:shadow-md hover:border-slate-200/60 transition-all duration-300 group"
                  >

                    <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                      <div className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
                        {item.images.map((imagePath, imgIndex) => (
                          <div
                            key={imagePath}
                            onClick={() => setActiveImage({ itemIndex, imgIndex })}
                            className="w-full h-full flex-shrink-0 snap-start snap-always relative cursor-zoom-in overflow-hidden group/img"
                          >
                            <img
                              src={`/${imagePath}`}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-slate-800 shadow-lg scale-90 group-hover/img:scale-100 transition-all">
                                <ZoomIn className="w-4 h-4" />
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {item.images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full flex gap-1.5 z-10 pointer-events-none">
                          {item.images.map((_, dotIdx) => (
                            <div key={dotIdx} className="w-1.5 h-1.5 rounded-full bg-white/70" />
                          ))}
                        </div>
                      )}

                      {item.images.length > 1 && (
                        <div className="absolute top-4 right-4 bg-red-700/90 text-white font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-sm backdrop-blur-sm">
                          {item.images.length} Photos
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex flex-col flex-1">

                      <div className="flex items-center gap-1.5 text-xs font-bold text-red-700 uppercase tracking-widest mb-3">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{dateText}</span>
                      </div>

                      <h3 className="text-[15px] font-black text-slate-800 leading-snug group-hover:text-red-700 transition-colors uppercase tracking-wide flex-1 font-sans">
                        {item.title.split(' - ')[0]}
                      </h3>
                    </div>
                  </motionFramer.div>
                );
              })}
            </motionFramer.div>
          ) : (
            <motionFramer.div
              key="empty-state"
              className="text-center py-20 bg-white rounded-3xl border border-slate-100 p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-slate-300 text-5xl mb-4">🔍</div>
              <h4 className="text-lg font-bold text-slate-700">No news articles match your search</h4>
              <p className="text-slate-400 text-sm mt-1 max-w-sm mx-auto">
                Try selecting a different filter year or typing other keywords in the search bar.
              </p>
            </motionFramer.div>
          )}
        </AnimatePresenceFramer>
      </div>

      <AnimatePresenceFramer>
        {activeImage !== null && (() => {
          const currentItem = filteredNews[activeImage.itemIndex];
          const activePath = currentItem.images[activeImage.imgIndex];

          return (
            <motionFramer.div
              key="lightbox"
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center p-4 md:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
            >

              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-[110]">
                <div className="text-white max-w-[80%]">
                  <h4 className="text-sm md:text-base font-black truncate uppercase tracking-wider">
                    {currentItem.title.split(' - ')[0]}
                  </h4>
                  <p className="text-xs text-white/60 font-semibold mt-0.5">
                    Photo {activeImage.imgIndex + 1} of {currentItem.images.length}
                  </p>
                </div>
                <button
                  onClick={() => setActiveImage(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white flex items-center justify-center cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative max-w-5xl w-full h-[65vh] flex items-center justify-center">

                {currentItem.images.length > 1 && (
                  <button
                    onClick={showPrevImage}
                    className="absolute left-0 md:-left-16 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center border border-white/10 cursor-pointer transition-colors z-[120]"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}

                <motionFramer.img
                  key={activePath}
                  src={`/${activePath}`}
                  alt={currentItem.title}
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/5"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                />

                {currentItem.images.length > 1 && (
                  <button
                    onClick={showNextImage}
                    className="absolute right-0 md:-right-16 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center border border-white/10 cursor-pointer transition-colors z-[120]"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                )}

              </div>
            </motionFramer.div>
          );
        })()}
      </AnimatePresenceFramer>
    </main>
  );
}
