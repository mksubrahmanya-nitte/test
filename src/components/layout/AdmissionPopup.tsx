'use client';

import React, { useState, useEffect } from 'react';
import { X, ChevronsDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AdmissionPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Show popup shortly after load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div 
        className="relative bg-[#b31b1b] rounded-xl shadow-2xl w-full max-w-md border-2 border-white/20 overflow-hidden cursor-pointer"
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
          <X size={16} className="text-[#b31b1b]" />
        </button>

        <div className="p-8 flex flex-col items-center text-center">
          {/* Logo Area */}
          <div className="mb-6 flex items-center justify-center bg-white p-2 rounded w-full">
             <img src="/images/jg_logo.png" alt="JG University" className="h-12 object-contain" />
          </div>
          
          <p className="text-white text-xs mb-8">Sponsored by ASIA Charitable Trust</p>

          {/* Admissions Open Box */}
          <div className="bg-white rounded-2xl w-full py-6 px-4 shadow-inner mb-6">
            <h2 className="text-[#b31b1b] text-3xl font-black mb-2">Admissions Open</h2>
            <p className="text-[#b31b1b] text-2xl font-bold">2026-27</p>
          </div>

          {/* Arrows */}
          <ChevronsDown className="text-white w-16 h-16 mb-6 animate-bounce" />

          {/* Click Here Box */}
          <div className="bg-white rounded-xl w-full py-4 px-4 shadow-md">
            <p className="text-[#b31b1b] text-xl font-black uppercase">Click Here To Apply Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}
