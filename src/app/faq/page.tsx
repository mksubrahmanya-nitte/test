'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, Mail, MessageSquare } from 'lucide-react';

const faqCategories = [
  {
    id: 'about',
    title: 'About',
    faqs: [
      { q: "Is JG University NEP 2020 Compliant?", a: "Yes, JG University is fully compliant with the National Education Policy (NEP) 2020, offering flexible entry/exit options and an interdisciplinary approach." },
      { q: "What is the Credit System?", a: "We follow the Choice Based Credit System (CBCS) as mandated by UGC, allowing students to choose from a wide range of elective courses." },
      { q: "What are the hostel facilities?", a: "JG University provides assistance for safe and comfortable hostel accommodations near the campus for both boys and girls." }
    ]
  },
  {
    id: 'admissions',
    title: 'Admissions',
    faqs: [
      { q: "When do admissions start for 2026-27?", a: "Admissions for the 2026-27 session are currently open. Early application is encouraged due to limited seats." },
      { q: "What is the admission procedure?", a: "The procedure involves online registration, followed by a document review and, in some cases, a personal interview or entrance test." }
    ]
  },
  {
    id: 'ug',
    title: 'Under Graduate',
    faqs: [
      { q: "What UG programmes are offered?", a: "We offer BBA, BCA, B.Com, B.Tech, and B.Sc. (Hons) in various specializations." },
      { q: "Can I exit after 3 years in a 4-year Hons programme?", a: "Yes, as per NEP 2020, you can exit with a Bachelor's degree after 3 years or continue for a 4th year to earn an Honours degree." }
    ]
  }
  // Additional categories can be added here...
];

function AccordionItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        className="w-full py-6 flex justify-between items-center text-left hover:text-primary transition-colors group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-gray-800 group-hover:text-primary">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-400 group-hover:text-primary"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-24 bg-[#003366] text-white py-20 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex justify-center mb-4 text-xs font-bold text-white/60 uppercase tracking-widest">
            <a href="/" className="hover:text-white">Discover Us</a>
            <span className="mx-2">/</span>
            <span className="text-white">FAQs</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">Frequently Asked Questions</h1>
        </div>
      </section>

      {/* Tabs & Accordion */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all ${
                activeTab === cat.id 
                ? 'bg-primary text-white shadow-lg' 
                : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-100'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          {faqCategories.find(c => c.id === activeTab)?.faqs.map((faq, idx) => (
            <AccordionItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </section>

      {/* Counseling Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-black mb-12">Talk to our Counsellors</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-8 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10">
                 <Phone className="text-secondary mb-4" size={32} />
                 <p className="text-sm font-bold text-white/60 uppercase mb-2">Call Us</p>
                 <p className="text-xl font-black">+91 91041 55000</p>
              </div>
              <div className="flex flex-col items-center p-8 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10">
                 <Mail className="text-secondary mb-4" size={32} />
                 <p className="text-sm font-bold text-white/60 uppercase mb-2">Email Us</p>
                 <p className="text-xl font-black">admissions@jguni.in</p>
              </div>
              <div className="flex flex-col items-center p-8 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10">
                 <MessageSquare className="text-secondary mb-4" size={32} />
                 <p className="text-sm font-bold text-white/60 uppercase mb-2">WhatsApp</p>
                 <p className="text-xl font-black">+91 91041 55000</p>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
