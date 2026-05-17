'use client';

import React from 'react';
import { Users, Camera, Hash, Briefcase, Play, MessageCircle, Phone } from 'lucide-react';

/* ??$$$ newer code - using transform:rotate for clean horizontal text rendering */
export default function FloatingWidgets() {
  /* Shared styles for the vertical pill tabs */
  const pillBase = "fixed z-50 bg-[#b31b1b] text-white text-[11px] sm:text-xs font-semibold tracking-wider whitespace-nowrap rounded-full shadow-lg hover:bg-[#8f1515] transition-colors cursor-pointer";

  return (
    <>
      {/* LEFT - Free Psychometric Test */}
      <a
        href="#"
        className={pillBase}
        style={{
          top: '35%',
          left: '-48px',
          padding: '7px 16px',
          transform: 'rotate(-90deg)',
        }}
      >
        Free Psychometric Test
      </a>

      {/* Social Icons */}
      <div className="fixed left-0 top-[65%] -translate-y-1/2 z-50">
        <div className="bg-white rounded-r-full py-3 px-2 shadow-lg flex flex-col gap-3 border border-gray-100 border-l-0">
          <a href="#" className="w-8 h-8 rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:scale-110 transition-transform">
            <Users size={16} fill="currentColor" />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-[#e1306c] text-white flex items-center justify-center hover:scale-110 transition-transform">
            <Camera size={16} />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-[#1da1f2] text-white flex items-center justify-center hover:scale-110 transition-transform">
            <Hash size={16} fill="currentColor" />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:scale-110 transition-transform">
            <Briefcase size={16} fill="currentColor" />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-[#ff0000] text-white flex items-center justify-center hover:scale-110 transition-transform">
            <Play size={16} fill="currentColor" />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-[#25d366] text-white flex items-center justify-center hover:scale-110 transition-transform">
            <MessageCircle size={16} fill="currentColor" />
          </a>
        </div>
      </div>

      {/* RIGHT - Apply Now */}
      <a
        href="/admission-open"
        className={pillBase}
        style={{
          top: '35%',
          right: '-18px',
          padding: '7px 16px',
          transform: 'rotate(90deg)',
        }}
      >
        Apply Now
      </a>

      {/* RIGHT - Enquire Now */}
      <a
        href="/admission-open"
        className={pillBase}
        style={{
          top: '50%',
          right: '-24px',
          padding: '7px 16px',
          transform: 'rotate(90deg)',
        }}
      >
        Enquire Now
      </a>

      {/* Bottom right action buttons */}
      <div className="fixed right-4 bottom-10 z-50 flex flex-col items-end gap-4">
        <a href="#" className="w-12 h-12 rounded-full bg-[#00a651] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
          <Phone size={20} fill="currentColor" />
        </a>
        <a href="#" className="w-14 h-14 rounded-full bg-[#b31b1b] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg border-2 border-white relative overflow-hidden">
           <div className="flex flex-col items-center justify-center leading-none">
             <span className="text-[10px] font-bold">ASK</span>
             <span className="text-sm font-black">JG</span>
           </div>
        </a>
      </div>
    </>
  );
}
