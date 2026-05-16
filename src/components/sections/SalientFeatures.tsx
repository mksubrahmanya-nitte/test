'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Globe, Award, Target, Users, Lightbulb, TrendingUp, ShieldCheck } from 'lucide-react';

const features = [
  { icon: BookOpen, title: 'Multidisciplinary Approach', desc: 'Seamlessly blend arts, science, and technology.' },
  { icon: Globe, title: 'Global Exposure', desc: 'Exchange programs with top international universities.' },
  { icon: Award, title: 'UGC Recognized', desc: 'Fully compliant with all national educational standards.' },
  { icon: Target, title: 'Industry-Aligned Curriculum', desc: 'Syllabus designed in collaboration with corporate leaders.' },
  { icon: Users, title: 'Expert Faculty', desc: 'Learn from academicians and industry veterans.' },
  { icon: Lightbulb, title: 'Incubation Center', desc: 'Support for student startups and entrepreneurial ventures.' },
  { icon: TrendingUp, title: '100% Placement Assistance', desc: 'Dedicated cell for internships and final placements.' },
  { icon: ShieldCheck, title: 'Choice Based Credit System', desc: 'Flexibility to choose subjects according to your interests.' },
];

export default function SalientFeatures() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Salient Features</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900">Why Choose JG University?</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-secondary hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
