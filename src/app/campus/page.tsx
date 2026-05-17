'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Wifi, Book, Box, Cpu, Zap, Shield } from 'lucide-react';

const facilities = [
  {
    title: "Smart Classrooms",
    icon: Box,
    desc: "Fully air-conditioned, digitally enabled classrooms designed for interactive and immersive learning experiences.",
    image: "/images/Untitled-10.webp"
  },
  {
    title: "24/7 Laboratories",
    icon: Cpu,
    desc: "State-of-the-art computer labs and specialized forensic/science laboratories accessible to students around the clock.",
    image: "/images/Untitled-8.webp"
  },
  {
    title: "Modern Library",
    icon: Book,
    desc: "A vast collection of digital and physical resources, journals, and research papers in a quiet, conducive environment.",
    image: "/images/campus_library.png"
  },
  {
    title: "High-Speed Connectivity",
    icon: Wifi,
    desc: "Gigabit-speed Wi-Fi across the entire campus, ensuring seamless access to online resources and research tools.",
    image: "/images/wi-fi-campus.png"
  }
];

export default function CampusPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-24 bg-[#003366] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img src="/images/slider_2.png" alt="Campus Hero" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex mb-4 text-xs font-bold text-white/60 uppercase tracking-widest">
            <a href="/" className="hover:text-white">Home</a>
            <span className="mx-2">/</span>
            <span className="text-white">Campus</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">Our Campus</h1>
        </div>
      </section>

      {/* Infrastructure Overview */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Infrastructure</h2>
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">World-Class Tech-Enabled Ecosystem</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              JG University's campus is designed to be more than just a place of study; it is an incubator for the "Whole Brain" philosophy. With 24/7 access to specialized labs and digital resources, we ensure that learning never stops.
            </p>
            <div className="grid grid-cols-2 gap-8">
               <div className="flex items-start gap-3">
                  <div className="bg-blue-50 p-2 rounded-lg text-primary"><Zap size={20} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900">24/7 Labs</h4>
                    <p className="text-xs text-gray-500">Always open for innovation</p>
                  </div>
               </div>
               <div className="flex items-start gap-3">
                  <div className="bg-blue-50 p-2 rounded-lg text-primary"><Shield size={20} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Secure Campus</h4>
                    <p className="text-xs text-gray-500">Safe and inclusive environment</p>
                  </div>
               </div>
            </div>
          </motion.div>
          <div className="relative">
             <img src="/images/Untitled-9.webp" alt="Campus View" className="rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-16 text-center">Core Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {facilities.map((item, idx) => (
              <motion.div 
                key={idx}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row group hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="w-full md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                   <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      <item.icon size={20} />
                   </div>
                   <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                   <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
