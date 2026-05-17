'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function OurDNAPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-24 bg-[#003366] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img src="/images/Untitled-12.webp" alt="Our DNA" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex mb-4 text-xs font-bold text-white/60 uppercase tracking-widest">
            <a href="/" className="hover:text-white">Discover Us</a>
            <span className="mx-2">/</span>
            <span className="text-white">Our DNA</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">Our DNA</h1>
        </div>
      </section>

      {/* Heritage & Trust */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Our Heritage</h2>
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">ASIA Charitable Trust</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Ahmedabad South Indian Association (ASIA) Charitable Trust was established in 1965 with the vision of providing high-quality education to all sectors of society. Today, it manages over 20 institutions ranging from schools to post-graduate colleges.
            </p>
            <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-primary">
               <p className="text-gray-900 font-bold italic">
                 "Education is the most powerful weapon which you can use to change the world."
               </p>
            </div>
          </motion.div>
          <div className="relative">
             <img src="/images/CRM08261-fin.webp" alt="Trust Campus" className="rounded-3xl shadow-2xl" />
             <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-primary font-black text-4xl">55+</p>
                <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">Years of Excellence</p>
             </div>
          </div>
        </div>
      </section>

      {/* AIU Membership */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-12">
             <div className="w-48 h-48 bg-gray-50 rounded-full flex items-center justify-center p-8">
                <img src="/images/logo.png" alt="AIU Logo" className="w-full h-auto grayscale" />
             </div>
             <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Association of Indian Universities (AIU)</h3>
                <p className="text-gray-600 leading-relaxed">
                  JG University is a proud member of the Association of Indian Universities (AIU). This membership ensures that our degrees are recognized for higher education and government employment across India and abroad.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Philosophy: Born to Excel */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Our Philosophy</h2>
        <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-12">Born to Excel by Choice</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "Curiosity", desc: "Instilling a lifelong desire to learn and discover." },
             { title: "Creativity", desc: "Encouraging out-of-the-box thinking and innovation." },
             { title: "Community", desc: "Prioritizing social responsibility and global impact." }
           ].map((item, idx) => (
             <div key={idx} className="p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
