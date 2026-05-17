'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
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
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 cursor-pointer"
      onClick={() => setIsOpen(false)}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          router.push('/admission-open');
        }}
      >

        <button 
          className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors z-20"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}
        >
          <X size={20} className="text-gray-900" />
        </button>

        <img 
          src="/images/26-27-admission.png" 
          alt="Admissions Open 2026-27" 
          className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
        />
      </motion.div>
    </div>
  );
}
