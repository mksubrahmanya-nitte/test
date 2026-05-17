'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Info, Briefcase, Globe, Landmark } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function MBAPage() {
  const data = {
    title: "MBA",
    tagline: "Leadership in the Digital Age",
    duration: "2 Years",
    fees: "₹ 60,000/- per semester",
    eligibility: "Graduation with 50% (Open) / 45% (Reserved)",
    specializations: ["Digital Marketing", "International Business", "Business Intelligence", "HR Analytics", "Finance"],
    highlights: [
      "Case-study based global learning",
      "Executive Mentorship by Industry Leaders",
      "Strategic Leadership Labs",
      "International Immersion Opportunities"
    ],
    exitOptions: [
      { year: "1 Year", award: "PG Diploma" },
      { year: "2 Years", award: "MBA Degree" }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-primary pt-32 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/pg-programmes.jpg" className="w-full h-full object-cover" alt="MBA Background" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-7xl font-black mb-4 uppercase tracking-tighter">{data.title}</h1>
            <p className="text-xl md:text-3xl text-secondary font-bold tracking-widest uppercase">{data.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Duration</p>
                <p className="text-lg font-black text-gray-900">{data.duration}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Fees</p>
                <p className="text-lg font-black text-primary">{data.fees}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Eligibility</p>
                <p className="text-sm font-bold text-gray-700">{data.eligibility}</p>
              </div>
           </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black text-gray-900 mb-8">Programme Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-12">
                Our MBA programme is designed to prepare the next generation of global leaders. With a focus on digital-age leadership and strategic thinking, students are exposed to high-impact learning experiences and real-world business challenges.
              </p>

              {/* Exit Options */}
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Info size={20} className="text-secondary" /> Programme Milestones
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-12">
                 {data.exitOptions.map((opt, i) => (
                   <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                      <p className="text-xs font-bold text-primary mb-1">{opt.year}</p>
                      <p className="text-lg font-black text-gray-900">{opt.award}</p>
                   </div>
                 ))}
              </div>

              {/* Specializations */}
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Briefcase size={20} className="text-secondary" /> Specializations Offered
              </h3>
              <div className="flex flex-wrap gap-3 mb-12">
                 {data.specializations.map((spec, i) => (
                   <span key={i} className="px-6 py-2 bg-primary/5 text-primary rounded-full font-bold text-sm border border-primary/10">
                     {spec}
                   </span>
                 ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {data.highlights.map((item, i) => (
                   <div key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                      <CheckCircle2 className="text-green-500" size={20} />
                      <span className="text-sm font-medium text-gray-700">{item}</span>
                   </div>
                 ))}
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-gray-900 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-black mb-4">Admissions Open 2026-27</h3>
                <p className="text-white/60 mb-8 text-sm">Elevate your career. Register for our MBA programme today.</p>
                <Button 
                  className="w-full py-4 rounded-xl text-lg font-black bg-secondary hover:bg-amber-500 text-gray-900"
                  onClick={() => window.location.href = '/admission-open'}
                >
                  APPLY NOW
                </Button>
                <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                   <div className="flex items-center gap-3">
                      <Globe className="text-secondary" size={20} />
                      <span className="text-sm font-bold">International Immersion</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <Landmark className="text-secondary" size={20} />
                      <span className="text-sm font-bold">Executive Mentorship</span>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
