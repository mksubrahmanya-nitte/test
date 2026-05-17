'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Users, ShieldCheck, Globe, Cpu, Home, Rocket, Search, Star } from 'lucide-react';

const advantages = [
  { title: "Futuristic Programmes", icon: Rocket, desc: "Curriculum designed for the next generation of industry needs." },
  { title: "Collaborative Learning", icon: Users, desc: "Focus on peer-to-peer and industry-linked projects." },
  { title: "Outstanding Faculty", icon: Star, desc: "Experienced academics and industry practitioners." },
  { title: "Industry Adoption", icon: ShieldCheck, desc: "Co-designed curriculum with top industry leaders." },
  { title: "International Exposure", icon: Globe, desc: "Global perspectives and potential partnerships." },
  { title: "Tech-Enabled Campus", icon: Cpu, desc: "Smart classrooms and advanced 24x7 laboratory facilities." },
  { title: "Hostel Facility Assistance", icon: Home, desc: "Support for student accommodation and safety." },
  { title: "Incubation Support", icon: Zap, desc: "Encouraging entrepreneurship and startup growth." },
  { title: "Research Facilitation", icon: Search, desc: "Support for academic and applied research projects." },
  { title: "JGiet Status", icon: CheckCircle, desc: "Recognition of our unique and rigorous educational status." }
];

const pillars = [
  { title: "Arts & Science", desc: "Bringing together creative expression and scientific rigor.", color: "bg-red-500" },
  { title: "Creativity & Logic", desc: "Synthesizing imaginative thinking with structured logic.", color: "bg-blue-500" },
  { title: "Intuition & Rationality", desc: "Merging gut feeling with data-driven decision making.", color: "bg-purple-500" },
  { title: "Emotions & Analytics", desc: "Blending empathy with deep analytical insights.", color: "bg-amber-500" }
];

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-24 bg-[#003366] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img src="/images/Untitled-5.webp" alt="Why Us" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex mb-4 text-xs font-bold text-white/60 uppercase tracking-widest">
            <a href="/" className="hover:text-white">Discover Us</a>
            <span className="mx-2">/</span>
            <span className="text-white">Why Us</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">Why JG University?</h1>
        </div>
      </section>

      {/* Reinventing Learning */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Reinventing Learning</h2>
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">Becoming Whole Brain Change Makers</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              JG University is not just about degrees; it's about transformation. We believe in nurturing the "Whole Brain"—the unique intersection where logic meets creativity.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our immersive learning pedagogy ensures that students don't just learn theory; they live it through industry use-cases, experiential projects, and global mentorship.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <div key={idx} className={`${pillar.color} p-8 rounded-3xl text-white shadow-xl hover:scale-105 transition-transform`}>
                <h4 className="font-bold mb-2">{pillar.title}</h4>
                <p className="text-xs text-white/80">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">The JG Advantage</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Specific reasons why JG University is the preferred choice for future-ready education.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {advantages.map((adv, idx) => (
              <motion.div 
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <adv.icon size={24} />
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-2">{adv.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
