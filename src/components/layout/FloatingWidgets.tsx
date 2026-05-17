'use client';

import React from 'react';
import { Users, Camera, Hash, Briefcase, Play, MessageCircle, Phone } from 'lucide-react';
// ??$$$ newer code — Ask JG Chatbot integration
import AskJGChatbot from './AskJGChatbot';

/* ??$$$ newer code - using transform:rotate for clean horizontal text rendering */
export default function FloatingWidgets() {
  /* Shared styles for the vertical pill tabs */
  const pillBase = "fixed z-50 bg-[#b31b1b] text-white text-[14px] sm:text-[16px] font-medium tracking-wider whitespace-nowrap rounded-full shadow-lg hover:bg-[#8f1515] transition-colors cursor-pointer";

  const pillBase1 = "fixed z-50 bg-white text-black text-[14px] sm:text-[16px] font-medium tracking-wider whitespace-nowrap rounded-full shadow-lg hover:bg-gray-100 transition-colors cursor-pointer";
  return (
    <>
      {/* LEFT - Free Psychometric Test */}
      <a
        href="#"
        className={pillBase}
        style={{
          top: '45%',
          left: '-90px',
          padding: '6px 20px',
          transform: 'rotate(-90deg)',
        }}
      >
        Free Psychometric Test
      </a>

      {/* ??$$$ newer code - Converted social container to a rotated white pillBase1 matching Free Psychometric Test */}
      <div
        className={`${pillBase1} flex flex-row-reverse items-center gap-2`}
        style={{
          top: '79%',
          left: '-75px',
          padding: '6px 10px',
          transform: 'rotate(-90deg)',
        }}
      >
        <div style={{ transform: 'rotate(90deg)' }}>
          <a
            href="https://www.facebook.com/JGUnIIndia"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[26px] h-[26px] rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
            title="Facebook"
          >
            <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] fill-current">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
        <div style={{ transform: 'rotate(90deg)' }}>
          <a
            href="https://www.instagram.com/jguniversity"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[26px] h-[26px] rounded-full bg-[#e1306c] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
            title="Instagram"
          >
            <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] stroke-current stroke-2 fill-none" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
        </div>
        <div style={{ transform: 'rotate(90deg)' }}>
          <a
            href="https://twitter.com/_JGUniversity"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[26px] h-[26px] rounded-full bg-[#1da1f2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
            title="X (Twitter)"
          >
            <svg viewBox="0 0 24 24" className="w-[11px] h-[11px] fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
        <div style={{ transform: 'rotate(90deg)' }}>
          <a
            href="https://www.linkedin.com/company/99373780/admin/feed/posts/?feedType=following"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[26px] h-[26px] rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] fill-current">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
        <div style={{ transform: 'rotate(90deg)' }}>
          <a
            href="https://www.youtube.com/channel/UCyR1OyKN8l2Srj5G0H1WRyg/featured"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[26px] h-[26px] rounded-full bg-[#ff0000] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
            title="YouTube"
          >
            <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-current">
              <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.525 3.545 12 3.545 12 3.545s-7.525 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.025 0 12 0 12s0 3.975.502 5.837a3.003 3.003 0 0 0 2.11 2.11C4.475 20.455 12 20.455 12 20.455s7.525 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.975 24 12 24 12s0-3.975-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
        <div style={{ transform: 'rotate(90deg)' }}>
          <a
            href="https://wa.me/+917567756758"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[26px] h-[26px] rounded-full bg-[#25d366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
            title="WhatsApp"
          >
            <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-current">
              <path d="M12.004 2C6.48 2 2.001 6.477 2.001 12c0 1.891.525 3.66 1.439 5.178L2.004 22l4.981-1.309A9.946 9.946 0 0 0 12.004 22c5.524 0 10.002-4.477 10.002-10S17.528 2 12.004 2zm0 18.302c-1.745 0-3.415-.461-4.877-1.332l-.35-.209-2.92.766.78-2.846-.229-.364a8.261 8.261 0 0 1-1.267-4.317c0-4.577 3.725-8.302 8.303-8.302S20.306 7.423 20.306 12c0 4.577-3.725 8.302-8.302 8.302zm4.567-6.237c-.25-.124-1.477-.729-1.707-.812-.229-.084-.396-.124-.563.125-.166.249-.646.812-.792.977-.146.166-.292.187-.542.063-.25-.125-1.05-.386-2.001-1.233-.74-.66-1.24-1.475-1.385-1.724-.146-.25-.015-.385.11-.51.113-.112.25-.291.375-.436.125-.145.166-.249.25-.415.083-.167.042-.312-.021-.437-.063-.125-.563-1.353-.771-1.852-.203-.488-.41-.422-.563-.43-.146-.008-.313-.008-.479-.008-.167 0-.438.062-.667.312-.229.249-.875.852-.875 2.078 0 1.226.896 2.41 1.021 2.576.125.167 1.762 2.69 4.269 3.771.596.257 1.062.411 1.425.526.6.19 1.144.163 1.576.099.48-.072 1.477-.603 1.686-1.184.209-.582.209-1.08.146-1.184-.063-.104-.229-.166-.479-.291z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* RIGHT - Apply Now */}
      <a
        href="/admission-open"
        className={pillBase}
        style={{
          top: '35%',
          right: '-25px',
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
          top: '60%',
          right: '-34px',
          padding: '7px 16px',
          transform: 'rotate(90deg)',
        }}
      >
        Enquire Now
      </a>

      {/* ??$$$ newer code — Phone call button (z-[60] avoids mobile.css hiding .fixed.z-50) */}
      <a id="phone-cta" href="tel:+917567756758" className="fixed right-5 bottom-[110px] z-[60] w-12 h-12 rounded-full bg-[#00a651] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
        <Phone size={20} fill="currentColor" />
      </a>
      {/* ??$$$ newer code — old bottom-right container replaced */}
      {/* <div className="fixed right-4 bottom-10 z-50 flex flex-col items-end gap-4">
        <a href="#" className="w-12 h-12 rounded-full bg-[#00a651] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
          <Phone size={20} fill="currentColor" />
        </a>
        <a href="#" className="w-14 h-14 rounded-full bg-[#b31b1b] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg border-2 border-white relative overflow-hidden">
           <div className="flex flex-col items-center justify-center leading-none">
             <span className="text-[10px] font-bold">ASK</span>
             <span className="text-sm font-black">JG</span>
           </div>
        </a>
      </div> */}

      {/* ??$$$ newer code — Ask JG Chatbot (modular component) */}
      <AskJGChatbot />
    </>
  );
}
