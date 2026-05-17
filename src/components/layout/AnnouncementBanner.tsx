/*
// Old code commented out:
import React from 'react';

export default function AnnouncementBanner() {
  return (
    <div className="bg-secondary text-white px-4 py-2 text-center text-sm font-medium relative z-50">
      <p>
        Admissions Open 2026-27 |{' '}
        <a href="#apply" className="underline font-bold hover:text-primary transition-colors">
          Apply Now
        </a>
      </p>
    </div>
  );
}
*/

// ??$$$ newer code
export default function AnnouncementBanner() {
  return (
    <div className="w-full bg-gray-50 border-b border-gray-200 py-1.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <nav className="flex items-center gap-6 text-xs tracking-widest uppercase text-gray-500 font-medium">
          <a href="#programmes" className="hover:text-gray-800 transition-colors">Programmes</a>
          <a href="#campus" className="hover:text-gray-800 transition-colors">Campus</a>
          <a href="#collaborations" className="hover:text-gray-800 transition-colors">Collaborations</a>
          <a href="#discover" className="hover:text-gray-800 transition-colors">Discover Us</a>
          <a href="#media" className="hover:text-gray-800 transition-colors">Media</a>
          {/* ??$$$ newer code */}
          {/* <a href="#career" className="hover:text-gray-800 transition-colors">Career</a> */}
          <a href="/career.html" className="hover:text-gray-800 transition-colors">Career</a>
          {/* ??$$$ newer code */}
          {/* <a href="#contact" className="hover:text-gray-800 transition-colors">Contact Us</a> */}
          <a href="/contact-us.html" className="hover:text-gray-800 transition-colors">Contact Us</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="/apply"
            className="px-4 py-1 rounded-full border border-yellow-600 text-yellow-700 text-xs font-semibold tracking-wide hover:bg-yellow-50 transition-colors"
          >
            Apply Now
          </a>
          <a
            href="/enquire"
            className="px-4 py-1 rounded-full border border-yellow-600 text-yellow-700 text-xs font-semibold tracking-wide hover:bg-yellow-50 transition-colors"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </div>
  );
}
