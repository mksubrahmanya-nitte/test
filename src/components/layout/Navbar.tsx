/*
// Old Navbar code commented out:
'use client';

import React from 'react';
import { Search, Menu, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
  
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      title: 'Programmes',
      links: [
        { name: 'BBA / Integrated MBA', href: '/bba' },
        { name: 'MBA / M.Com', href: '/mba' },
        { name: 'BCA / Integrated MCA', href: '/bca' },
        { name: 'B.Tech / Engineering', href: '/b-tech' },
        { name: 'M.Sc Forensic', href: '/bsc-hons-imsc-forensic-science' },
        { name: 'Digital Marketing', href: '/digital-marketing' },
        { name: 'Metaverse / Web3', href: '/metaverse' }
      ]
    },
    {
      title: 'Discover Us',
      links: [
        { name: 'Why Us', href: '/why-us' },
        { name: 'Our DNA', href: '/our-dna' },
        { name: 'FAQs', href: '/faq' },
        { name: 'Faculty', href: '/faculty' }
      ]
    },
    {
      title: 'Collaborations',
      links: [
        { name: 'Carleton University', href: '/collaborations' },
        { name: 'Industry Linkage', href: '/collaborations' }
      ]
    },
    { title: 'Campus', href: '/campus' },
    { title: 'Contact Us', href: '/#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          <div className="flex-shrink-0 flex items-center h-full relative">
            <a 
              href="/" 
              className={`flex items-center gap-4 group transition-all duration-300 origin-top-left ${
                isScrolled ? 'scale-100 mt-0' : 'scale-[1.8] mt-12 bg-white p-4 rounded-b-3xl shadow-2xl'
              }`}
            >
              <div className="h-10 w-auto transition-all duration-300">
                <img 
                  src="/images/logo-animation.svg" 
                  alt="JG University Brain" 
                  className="h-full w-auto"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-[#c21400] leading-none tracking-tighter">JG</span>
                <span className="text-[8px] font-bold text-[#d1ad3e] uppercase tracking-[0.2em] leading-tight">University</span>
              </div>
            </a>
          </div>

          <div className="hidden xl:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div 
                key={item.title} 
                className="relative group"
                onMouseEnter={() => item.links && setActiveMenu(item.title)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a
                  href={item.href || '#'}
                  className="text-gray-800 hover:text-primary font-bold text-xs uppercase tracking-widest transition-colors whitespace-nowrap flex items-center gap-1"
                >
                  {item.title}
                  {item.links && <ChevronDown size={12} className="group-hover:rotate-180 transition-transform" />}
                </a>

                {item.links && activeMenu === item.title && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 w-64 bg-white shadow-2xl border border-gray-100 rounded-2xl py-4 mt-2"
                  >
                    {item.links.map((link) => (
                      <a 
                        key={link.name} 
                        href={link.href}
                        className="block px-6 py-3 text-xs font-bold text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors uppercase tracking-widest"
                      >
                        {link.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <button 
              className="bg-[#c21400] hover:bg-red-700 text-white font-black py-3 px-8 rounded-lg text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-red-200"
              onClick={() => window.location.href = '/admission-open'}
            >
              Admission
            </button>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="border border-gray-200 rounded-full py-2 px-6 pr-10 text-xs w-48 focus:outline-none focus:ring-1 focus:ring-primary transition-all bg-gray-50"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>

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
*/

// ??$$$ newer code
"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/logo.png" alt="JG University" width={80} height={60} className="object-contain" />
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-widest uppercase text-gray-700">
          <Link href="#programmes" className="hover:text-red-700 transition-colors">Programmes</Link>
          <Link href="#discover" className="hover:text-red-700 transition-colors">Discover Us</Link>
          <Link href="#collaborations" className="hover:text-red-700 transition-colors">Collaborations</Link>
          <Link href="#campus" className="hover:text-red-700 transition-colors">Campus</Link>
          <Link href="#contact" className="hover:text-red-700 transition-colors">Contact Us</Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button className="text-gray-500 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <Link
            href="/admission-open"
            className="px-5 py-2 rounded-lg text-white text-sm font-bold tracking-wider uppercase transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#c21400" }}
          >
            Admission
          </Link>
        </div>
      </div>
    </nav>
  );
}
