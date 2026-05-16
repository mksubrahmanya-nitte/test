'use client';

import React from 'react';
import { Search, Menu } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    'Programmes', 'Campus', 'Industry Linkage', 'Collaborations', 
    'Discover Us', 'Media', 'Career', 'Contact Us'
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          {/* Logo Container - Popping out effect */}
          <div className="flex-shrink-0 flex items-center h-full relative">
            <a 
              href="/" 
              className={`flex items-center gap-4 group transition-all duration-300 origin-top-left ${
                isScrolled ? 'scale-100 mt-0' : 'scale-[1.8] mt-12 bg-white p-4 rounded-b-3xl shadow-2xl'
              }`}
            >
              <div className="h-12 w-auto transition-all duration-300">
                <img 
                  src="/images/logo-animation.svg" 
                  alt="JG University Brain" 
                  className="h-full w-auto"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-[#c21400] leading-none tracking-tighter">JG</span>
                <span className="text-[10px] font-bold text-[#d1ad3e] uppercase tracking-[0.2em] leading-tight">University</span>
                {!isScrolled && (
                  <span className="text-[6px] font-bold text-gray-500 uppercase tracking-[0.1em] mt-0.5 italic">Excellence by Choice</span>
                )}
              </div>
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
