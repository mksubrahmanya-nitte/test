'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Discover JG University</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              A Legacy of <span className="text-secondary">Excellence</span> & Innovation
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At JG University, we are committed to fostering an environment where innovation meets tradition. Our multidisciplinary approach to education equips students with the skills and mindset needed to thrive in a rapidly changing world.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over two decades of educational heritage, we blend rigorous academics with practical, industry-focused learning, guided by top-tier faculty and state-of-the-art facilities.
            </p>
            <Button variant="outline" className="group">
              Read Our Full Story 
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
               <img 
                src="/images/campus_library.png" 
                alt="Students in library" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
            
            {/* Floating decorative element */}
            <motion.div 
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl hidden md:block"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-xl">
                  A+
                </div>
                <div>
                  <p className="font-bold text-gray-900">UGC Recognized</p>
                  <p className="text-sm text-gray-500">Top Tier University</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
