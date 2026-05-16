'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronRight, Cpu, Shield, Coins, Monitor, HeartPulse, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

type Category = 'UG' | 'PG' | 'Doctoral' | 'Certificate';

const programmes = [
  // UG
  { title: "B.Tech in Computer Science", school: "School of Engineering", category: "UG" },
  { title: "BBA in Finance", school: "School of Management", category: "UG" },
  { title: "B.Com (Hons.)", school: "School of Commerce", category: "UG" },
  { title: "BCA (Data Science)", school: "School of Computing", category: "UG" },
  { title: "B.Tech in AI & ML", school: "School of Engineering", category: "UG" },
  
  // PG
  { title: "MBA in Marketing", school: "School of Management", category: "PG" },
  { title: "MCA", school: "School of Computing", category: "PG" },
  { title: "M.Com", school: "School of Commerce", category: "PG" },
  { title: "M.Tech in Cyber Security", school: "School of Engineering", category: "PG" },
  
  // Doctoral
  { title: "Ph.D. in Management", school: "School of Management", category: "Doctoral" },
  { title: "Ph.D. in Computer Science", school: "School of Computing", category: "Doctoral" },
  
  // Certificate (Special Treatment)
  { title: "Blockchain & Web3", school: "Center of Excellence", category: "Certificate", icon: Coins, color: "bg-blue-500" },
  { title: "Metaverse Design", school: "Center of Excellence", category: "Certificate", icon: Sparkles, color: "bg-purple-500" },
  { title: "Cyber Security Pro", school: "Center of Excellence", category: "Certificate", icon: Shield, color: "bg-red-500" },
  { title: "Healthcare IT", school: "Center of Excellence", category: "Certificate", icon: HeartPulse, color: "bg-green-500" },
  { title: "IoT Architecture", school: "Center of Excellence", category: "Certificate", icon: Cpu, color: "bg-orange-500" },
  { title: "Full Stack Dev", school: "Center of Excellence", category: "Certificate", icon: Monitor, color: "bg-indigo-500" },
];

export default function ProgrammesSection() {
  const [activeTab, setActiveTab] = useState<Category>('UG');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProgrammes = programmes.filter(p => 
    p.category === activeTab && 
    (p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.school.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="programmes" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Academic Excellence</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900">Our Programmes</h3>
          </div>
          
          <div className="relative w-full md:w-72">
            <input 
              type="text" 
              placeholder="Search programmes..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-12 p-1 bg-gray-100 rounded-xl inline-flex w-full sm:w-auto">
          {['UG', 'PG', 'Doctoral', 'Certificate'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as Category)}
              className={`flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === tab 
                  ? 'bg-white text-primary shadow-sm' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {tab} {tab === 'Certificate' && '🚀'}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredProgrammes.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="col-span-full flex flex-col items-center justify-center py-20 text-gray-400"
              >
                <Search size={48} className="mb-4 opacity-20" />
                <p className="text-xl">No programmes found matching "{searchTerm}"</p>
              </motion.div>
            ) : (
              filteredProgrammes.map((prog, index) => {
                if (prog.category === 'Certificate') {
                  const Icon = prog.icon || Sparkles;
                  return (
                    <motion.div
                      key={prog.title}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="group bg-gray-900 rounded-2xl p-6 relative overflow-hidden border border-gray-800 hover:border-gray-600 transition-colors"
                    >
                      <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl opacity-20 ${prog.color || 'bg-white'}`}></div>
                      
                      <div className="flex justify-between items-start mb-12">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${prog.color} bg-opacity-20`}>
                          <Icon size={24} className={prog.color?.replace('bg-', 'text-')} />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider">
                          HOT SKILL
                        </span>
                      </div>
                      
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">{prog.title}</h4>
                      <p className="text-gray-400 text-sm mb-6">{prog.school}</p>
                      
                      <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800">
                        View Curriculum
                      </Button>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={prog.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">{prog.school}</span>
                      <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">{prog.title}</h4>
                    </div>
                    
                    <div className="flex items-center text-sm font-semibold text-gray-500 group-hover:text-primary transition-colors cursor-pointer mt-4 border-t border-gray-50 pt-4">
                      Explore Details <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
