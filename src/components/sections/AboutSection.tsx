

"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);

  return (
    <section id="discover" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 leading-snug mb-4">
              Welcome to <span className="text-red-700">JG University</span> the Best University in Ahmedabad
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base text-justify">
              JG University is a New Age Tech-Driven University offering programmes that evolve as per future industry demand, thus enabling its students to get into employment or self-employment seamlessly. It is a UGC approved University sponsored by the ASIA Charitable Trust, Which has been in the field of education since 1965, successfully managing 17 colleges and 3 schools.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

            <div className="w-full sm:w-[300px] h-[300px] relative rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-black">
              {!isPlaying1 ? (
                <div 
                  className="w-full h-full relative cursor-pointer group"
                  onClick={() => setIsPlaying1(true)}
                >
                  <img 
                    src="https://img.youtube.com/vi/QuRupPh1kAU/hqdefault.jpg" 
                    alt="JG University Video Thumbnail 1" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button 
                    className="absolute top-50% left-50% -translate-x-1/2 -translate-y-1/2 bg-black/70 hover:bg-red-700 text-white rounded-full w-[60px] h-[60px] flex items-center justify-center text-2xl transition-colors shadow-lg"
                    style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                  >
                    ▶
                  </button>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/QuRupPh1kAU?autoplay=1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              )}
            </div>

            <div className="w-full sm:w-[300px] h-[300px] relative rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-black">
              {!isPlaying2 ? (
                <div 
                  className="w-full h-full relative cursor-pointer group"
                  onClick={() => setIsPlaying2(true)}
                >
                  <img 
                    src="https://img.youtube.com/vi/P5sIw2tbjYQ/hqdefault.jpg" 
                    alt="JG University Video Thumbnail 2" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button 
                    className="absolute top-50% left-50% -translate-x-1/2 -translate-y-1/2 bg-black/70 hover:bg-red-700 text-white rounded-full w-[60px] h-[60px] flex items-center justify-center text-2xl transition-colors shadow-lg"
                    style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                  >
                    ▶
                  </button>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/P5sIw2tbjYQ?autoplay=1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
