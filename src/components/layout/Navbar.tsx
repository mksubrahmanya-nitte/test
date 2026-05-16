'use client';

import React from 'react';
import { Search, Menu } from 'lucide-react';

export default function Navbar() {
  const navLinks = [
    'Programmes', 'Campus', 'Industry Linkage', 'Collaborations', 
    'Discover Us', 'Media', 'Career', 'Contact Us'
  ];

  return (
    <nav className="bg-white w-full z-40 border-b border-gray-200 shadow-sm relative">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center h-full py-2">
            <a href="#" className="h-full flex items-center">
              <img 
                src="/images/jg_logo.png" 
                alt="JG University" 
                className="h-[80px] w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-gray-800 hover:text-primary font-medium text-sm transition-colors whitespace-nowrap"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              className="bg-[#f5a623] hover:bg-[#d98c14] text-gray-900 font-bold py-2 px-6 rounded text-sm transition-colors shadow-sm"
              onClick={() => window.location.href = '/admission-open.html'}
            >
              Admission
            </button>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="border border-gray-300 rounded-full py-1.5 px-4 pr-10 text-sm w-48 focus:outline-none focus:border-primary"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button className="text-gray-900 p-2">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
