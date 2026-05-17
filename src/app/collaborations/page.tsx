'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Shield, Brain, Activity, Landmark, Globe, Database, Cpu, Rocket } from 'lucide-react';

const focusAreas = [
  { name: "Cyber Security", icon: Shield, color: "bg-[#e1306c]" },
  { name: "Artificial Intelligence", icon: Brain, color: "bg-[#6a1b9a]" },
  { name: "HealthTech", icon: Activity, color: "bg-[#039be5]" },
  { name: "Fintech", icon: Landmark, color: "bg-[#fbc02d]" },
  { name: "Global Entrepreneurship", icon: Globe, color: "bg-[#ff6b6b]" },
  { name: "InfoTech Management", icon: Database, color: "bg-[#845ef7]" },
  { name: "Data Science", icon: Cpu, color: "bg-[#339af0]" },
  { name: "Emerging Tech", icon: Rocket, color: "bg-[#fcc419]" }
];

const schools = [
  {
    name: "School of Management",
    courses: ["BBA", "MBA", "PGD in Banking & Finance"]
  },
  {
    name: "School of Investigative & Applied Sciences",
    courses: ["M.Sc. Cyber Security", "Forensic Science", "Clinical Embryology"]
  },
  {
    name: "School of Engineering",
    courses: ["B.Tech CSE (AI & ML)", "B.Tech CSE (Big Data)", "Computer Engineering"]
  },
  {
    name: "School of Law",
    courses: ["LL.M.", "LL.B."]
  }
];

export default function CollaborationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-24 bg-[#003366] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img src="/images/partnership.jpg" alt="Partnership" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex mb-4 text-xs font-bold text-white/60 uppercase tracking-widest">
            <a href="/" className="hover:text-white">Home</a>
            <span className="mx-2">/</span>
            <span className="text-white">Collaborations</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">Collaborations</h1>
        </div>
      </section>

      {/* International Collaboration */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Study in India & International Students</h2>
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">Carleton University, Ottawa, Canada</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              JG University has partnered with Carleton University through the Canada-India Centre for Excellence (CICE). This collaboration focuses on joint research, curriculum development, and providing students with global exposure and certifications that are recognized internationally.
            </p>
            <div className="flex gap-4">
               <div className="px-6 py-3 bg-gray-100 rounded-lg font-bold text-gray-700">Joint Certifications</div>
               <div className="px-6 py-3 bg-gray-100 rounded-lg font-bold text-gray-700">Student Exchange</div>
            </div>
          </div>
          <div className="bg-gray-50 p-12 rounded-3xl flex items-center justify-center">
             <img src="/images/ibm.png" alt="CICE" className="h-32 object-contain grayscale" /> 
          </div>
        </div>
      </section>

      {/* Strategic Focus Areas */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-16">Strategic Collaboration Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {focusAreas.map((area, idx) => (
              <motion.div 
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center group hover:shadow-xl transition-all"
                whileHover={{ y: -5 }}
              >
                <div className={`${area.color} w-16 h-16 rounded-full flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <area.icon size={28} />
                </div>
                <h4 className="font-bold text-gray-900">{area.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools Directory Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">Academic Schools & Programmes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {schools.map((school, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-lg font-bold text-primary border-b-2 border-primary/20 pb-2">{school.name}</h4>
              <ul className="space-y-2">
                {school.courses.map((course, cIdx) => (
                  <li key={cIdx} className="text-gray-600 hover:text-primary cursor-pointer transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
