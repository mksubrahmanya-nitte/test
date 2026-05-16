'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, BookOpen, GraduationCap, Users, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ProgrammeDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Format slug for display (e.g. "bba-hons" -> "BBA Hons")
  const title = slug
    .replace(/-/g, ' ')
    .replace(/\.html$/, '')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Banner */}
      <section className="bg-primary py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1523050335456-c38a89b7828a?auto=format&fit=crop&q=80&w=1400" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <nav className="flex mb-8 text-sm text-white/60 font-bold uppercase tracking-widest">
              <a href="/" className="hover:text-white">Home</a>
              <span className="mx-2">/</span>
              <span className="text-secondary">Programmes</span>
              <span className="mx-2">/</span>
              <span className="text-white">{title}</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">{title}</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-medium leading-relaxed">
              Equip yourself with the skills and knowledge to lead in the {title} industry with our world-class curriculum.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">Programme Overview</h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                The {title} programme at JG University is designed to bridge the gap between traditional academia and modern industry requirements. Our curriculum is built on the foundations of the National Education Policy (NEP) 2020, focusing on experiential learning, interdisciplinary studies, and global exposure.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <BookOpen className="text-primary mb-4" size={32} />
                  <h3 className="font-bold text-xl mb-2">Curriculum</h3>
                  <p className="text-gray-600 text-sm">Industry-aligned courses focusing on the latest technologies and methodologies.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <GraduationCap className="text-primary mb-4" size={32} />
                  <h3 className="font-bold text-xl mb-2">Outcome</h3>
                  <p className="text-gray-600 text-sm">Seamless transition into professional careers or higher specialized studies.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <Users className="text-primary mb-4" size={32} />
                  <h3 className="font-bold text-xl mb-2">Faculty</h3>
                  <p className="text-gray-600 text-sm">Mentorship from seasoned academicians and top-tier industry professionals.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <Lightbulb className="text-primary mb-4" size={32} />
                  <h3 className="font-bold text-xl mb-2">Research</h3>
                  <p className="text-gray-600 text-sm">Opportunities to work on real-world projects and capstone innovations.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h3>
              <ul className="space-y-4 mb-12">
                {[
                  "100% Placement Assistance with top global brands",
                  "Experiential learning through industry use-cases",
                  "Modern infrastructure and high-tech lab facilities",
                  "Collaborations with foreign universities for student exchange",
                  "Focus on holistic development and creative thinking"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Sticky CTA Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Apply for Admission</h3>
                <p className="text-gray-600 mb-8 text-sm">
                  Join the 2026-27 batch and kickstart your career with JG University's {title} programme.
                </p>
                
                <div className="space-y-4 mb-8 text-sm font-bold uppercase tracking-widest text-gray-400">
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span>Duration</span>
                    <span className="text-gray-900">3/4 Years</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span>Level</span>
                    <span className="text-gray-900">Undergraduate</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span>Mode</span>
                    <span className="text-gray-900">Full Time</span>
                  </div>
                </div>

                <Button 
                  className="w-full py-6 text-lg"
                  onClick={() => window.location.href = '/admission-open'}
                >
                  Apply Now <ArrowRight className="ml-2" />
                </Button>
                
                <p className="mt-6 text-center text-xs text-gray-400">
                  Limited seats available for the 2026 session.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
