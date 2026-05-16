'use client';

import React from 'react';
import { Users, Camera, Hash, Briefcase, Play, MessageCircle, Phone, MessageSquare } from 'lucide-react';

export default function FloatingWidgets() {
  return (
    <>
      {/* LEFT SIDE WIDGETS */}
      <div className="fixed left-0 top-[30%] transform -translate-y-1/2 z-50 flex flex-col items-start gap-4">
        {/* Psychometric Test Tab */}
        <a 
          href="#" 
          className="bg-[#b31b1b] text-white font-medium text-sm tracking-wide rounded-r-xl py-6 px-1.5 shadow-md flex items-center justify-center hover:bg-[#8f1515] transition-colors"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Free Psychometric Test
        </a>
      </div>

      <div className="fixed left-0 top-[65%] transform -translate-y-1/2 z-50">
        {/* Social Icons Pill */}
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


      {/* RIGHT SIDE WIDGETS */}
      <div className="fixed right-0 top-[40%] transform -translate-y-1/2 z-50 flex flex-col items-end gap-6">
        {/* Apply/Enquire Tabs */}
        <a 
          href="/admission-open" 
          className="bg-[#b31b1b] text-white font-medium text-sm tracking-wide rounded-l-xl py-6 px-1.5 shadow-md flex items-center justify-center hover:bg-[#8f1515] transition-colors"
          style={{ writingMode: 'vertical-rl' }}
        >
          Apply Now
        </a>
        <a 
          href="/admission-open" 
          className="bg-[#b31b1b] text-white font-medium text-sm tracking-wide rounded-l-xl py-6 px-1.5 shadow-md flex items-center justify-center hover:bg-[#8f1515] transition-colors"
          style={{ writingMode: 'vertical-rl' }}
        >
          Enquire Now
        </a>
      </div>

      <div className="fixed right-4 bottom-10 z-50 flex flex-col items-end gap-4">
        {/* Action Icons Stack */}
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
