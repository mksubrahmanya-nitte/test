'use client';

import React, { useState, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function AdmissionPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 font-sans">
      <div 
        className="relative bg-primary rounded-xl shadow-2xl w-full max-w-md border-2 border-white/20 overflow-hidden cursor-pointer"
        onClick={() => {
          setIsOpen(false);
          router.push('/admission-open');
        }}
      >
        {/* Close Button */}
        <button 
          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 z-10"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}
        >
          <X size={16} className="text-primary" />
        </button>

        <div className="p-8 flex flex-col items-center text-center">
          {/* Logo Area */}
          <div className="mb-6 flex items-center justify-center bg-white p-2 rounded w-full">
             <img src="/images/jg_logo.png" alt="JG University" className="h-12 object-contain" />
          </div>
          
          <p className="text-white text-[10px] mb-8 font-medium uppercase tracking-widest">Sponsored by ASIA Charitable Trust</p>

          {/* Admissions Open Box */}
          <div className="bg-white rounded-2xl w-full py-6 px-4 shadow-inner mb-6">
            <h2 className="text-primary text-3xl font-black mb-2 uppercase leading-none">Admissions Open</h2>
            <p className="text-primary text-2xl font-bold tracking-tighter">2026-27</p>
          </div>

          {/* Triple Bouncing Arrows */}
          <div className="flex flex-col items-center -space-y-4 mb-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, 10, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              >
                <ChevronDown className="text-white w-10 h-10" strokeWidth={3} />
              </motion.div>
            ))}
          </div>

          {/* Click Here Box */}
          <div className="bg-white rounded-xl w-full py-4 px-4 shadow-md">
            <p className="text-primary text-xl font-black uppercase tracking-tight">Click Here To Apply Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}
