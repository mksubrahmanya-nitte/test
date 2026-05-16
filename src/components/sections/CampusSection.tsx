'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';
import { Button } from '../ui/Button';

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800", alt: "Campus aerial view", span: "md:col-span-2 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800", alt: "Graduation day", span: "col-span-1" },
  { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800", alt: "Students in lab", span: "col-span-1" },
  { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800", alt: "Tech lab", span: "col-span-1" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", alt: "Student group", span: "col-span-1" },
];

export default function CampusSection() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section id="campus" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Life at JG</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900">Vibrant Campus Experience</h3>
        </div>

        {/* Video Highlight */}
        <motion.div 
          className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-16 cursor-pointer group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={() => setVideoModalOpen(true)}
        >
          <img src="https://images.unsplash.com/photo-1525926477800-7a3b10316ac6?auto=format&fit=crop&q=80&w=1600" alt="Campus Video" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
              <Play className="text-white ml-2" size={32} />
            </div>
          </div>
          <div className="absolute bottom-8 left-8">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-2 inline-block">WATCH TOUR</span>
            <h4 className="text-3xl font-bold text-white">Experience JG University</h4>
          </div>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${img.span}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setLightboxImg(img.src)}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 mix-blend-multiply"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <button 
              onClick={() => setLightboxImg(null)}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>
            <motion.img 
              src={lightboxImg} 
              alt="Lightbox" 
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            />
          </div>
        )}

        {/* Video Modal */}
        {videoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <button 
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>
            <motion.div 
              className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
