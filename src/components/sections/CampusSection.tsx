/*
// Old CampusSection code commented out:
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';
import { Button } from '../ui/Button';

const galleryImages = [
  { src: "/images/CRM08261-fin.webp", alt: "Campus aerial view", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/CRM0SCENE.webp", alt: "Campus life", span: "col-span-1" },
  { src: "/images/CRM08304-fin.webp", alt: "Students in lab", span: "col-span-1" },
  { src: "/images/CRM08212-fin.webp", alt: "Tech lab", span: "col-span-1" },
  { src: "/images/CRM08255-fin.webp", alt: "Student group", span: "col-span-1" },
  { src: "/images/campus/3.jpg", alt: "Modern Classroom", span: "col-span-1" },
  { src: "/images/campus/4.jpg", alt: "Auditorium", span: "col-span-1" },
  { src: "/images/campus/5.jpg", alt: "Campus Garden", span: "col-span-1" },
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
*/

/*
// Old campusFeatures code commented out:
const campusFeatures = [
  { label: "5+ Café",         icon: "🏪", stat: "5+" },
  { label: "R&D - Academics", icon: "🔬", stat: "R&D" },
  { label: "Tech-enabled Library", icon: "📚", stat: "" },
  { label: "18-70 Student Campus", icon: "🎓", stat: "18-70" },
];

export default function CampusSection() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto" id="campus">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-4">Campus</h2>

      // Two-column images
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
          <img src="/images/campus_library.png" alt="JG Campus Lounge" className="w-full h-full object-cover" />
        </div>
        <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
          <img src="/images/CRM0SCENE.webp" alt="JG Campus Hallway" className="w-full h-full object-cover" />
        </div>
      </div>

      // 4 circular feature buttons
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {campusFeatures.map((f) => (
          <button
            key={f.label}
            className="flex flex-col items-center gap-2 group focus:outline-none"
          >
            <div className="w-16 h-16 rounded-full bg-pink-100 border-2 border-pink-300 flex items-center justify-center text-2xl group-hover:bg-pink-200 transition-colors shadow-sm">
              {f.icon}
            </div>
            <span className="text-xs font-semibold text-gray-600 text-center max-w-[80px]">{f.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
*/

// ??$$$ newer code
const IIoTLabIcon = () => (
  <svg className="w-10 h-10 text-[#de1f61]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="18" y="22" width="26" height="26" rx="4" />
    <rect x="26" y="30" width="10" height="10" fill="currentColor" fillOpacity="0.1" />
    <path d="M24 14v8M32 14v8M40 14v8M24 48v8M32 48v8M40 48v8M10 28h8M10 36h8M10 44h8M44 28h8M44 36h8M44 44h8" />
    <path d="M47 17a6 6 0 0 1 6-6" />
    <path d="M52 22a11 11 0 0 1 11-11" />
  </svg>
);

const RDIncubationIcon = () => (
  <svg className="w-10 h-10 text-[#de1f61]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 26h8v26h-8zM44 26h8v26h-8z" />
    <path d="M24 20h16v32H24z" />
    <circle cx="32" cy="30" r="5" fill="currentColor" fillOpacity="0.1" />
    <path d="M32 35v10" />
    <path d="M20 26h24M16 26l16-8 16 8" />
  </svg>
);

const TechLibraryIcon = () => (
  <svg className="w-10 h-10 text-[#de1f61]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 46c10-2 20 2 22 4 2-2 12-6 22-4V18c-10-2-20 2-22 4-2-2-12-6-22-4z" />
    <path d="M32 22v28" />
    <path d="M32 28v-9" />
    <circle cx="32" cy="16" r="3" fill="currentColor" />
    <path d="M32 26c-3-3-8-2-10-5" />
    <circle cx="20" cy="19" r="3" fill="currentColor" />
    <path d="M32 26c3-3 8-2 10-5" />
    <circle cx="42" cy="19" r="3" fill="currentColor" />
  </svg>
);

const WifiCampusIcon = () => (
  <svg className="w-10 h-10 text-[#de1f61]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 50h40M16 34h32M16 34v16M48 34v16M24 34v16M40 34v16" />
    <path d="M12 34l20-12 20 12" />
    <path d="M30 22v-6h4v6" />
    <path d="M26 11a8 8 0 0 1 12 0" />
    <path d="M22 7a14 14 0 0 1 20 0" />
  </svg>
);

const campusFeatures = [
  { label: "IIoT Lab", icon: <IIoTLabIcon /> },
  { label: "R&D + Incubation", icon: <RDIncubationIcon /> },
  { label: "Tech-enabled Library", icon: <TechLibraryIcon /> },
  { label: "Wi-Fi Enabled Campus", icon: <WifiCampusIcon /> },
];

export default function CampusSection() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto" id="campus">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-4">Campus</h2>

      {/* Two-column images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
          <img src="/images/campus_library.png" alt="JG Campus Lounge" className="w-full h-full object-cover" />
        </div>
        <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
          <img src="/images/CRM0SCENE.webp" alt="JG Campus Hallway" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* 4 circular feature buttons */}
      <div className="flex items-center justify-center gap-12 md:gap-16 flex-wrap mt-10">
        {campusFeatures.map((f) => (
          <div
            key={f.label}
            className="flex flex-col items-center gap-3 w-40 text-center group cursor-pointer"
          >
            <div className="w-20 h-20 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-center shadow-sm">
              {f.icon}
            </div>
            <span className="text-sm font-semibold text-gray-700 leading-snug tracking-wide group-hover:text-red-700 transition-colors">
              {f.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

