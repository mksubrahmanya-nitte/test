'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

const facultyMembers = [
  { name: "Ms. Aarti", role: "Assistant Professor", image: "/images/aarti-1.jpg" },
  { name: "Ms. Delnaz", role: "Assistant Professor", image: "/images/delnaz-1.jpg" },
  { name: "Dr. Dinesh", role: "Associate Professor", image: "/images/dinesh-1.jpg" },
  { name: "Mr. Hitesh", role: "Assistant Professor", image: "/images/hitesh-1.png" },
  { name: "Mr. Harshil", role: "Assistant Professor", image: "/images/harshil-1 (1).jpg" },
  { name: "Mr. Jaydeep", role: "Assistant Professor", image: "/images/jaydeep-1.jpg" },
  { name: "Dr. Jigar", role: "Professor", image: "/images/jigar-1.jpg" },
  { name: "Ms. Megha", role: "Dean", image: "/images/megha-1.jpg" },
  { name: "Dr. Minnie Matthew", role: "Professor", image: "/images/faculty/minnie-mattheew.jpg" },
  { name: "Ms. Mona", role: "Assistant Professor", image: "/images/mona-1.jpg" },
  { name: "Ms. Namika", role: "Assistant Professor", image: "/images/namika-1.png" },
  { name: "Mr. Niku", role: "Assistant Professor", image: "/images/niku-1.jpg" },
  { name: "Ms. Nirali", role: "Assistant Professor", image: "/images/nirali-1.jpg" },
  { name: "Mr. Pratik", role: "Assistant Professor", image: "/images/pratik-1 (1).jpg" },
  { name: "Ms. Pushpa", role: "Assistant Professor", image: "/images/pushpa-1.jpg" },
  { name: "Dr. Sanjay", role: "Professor", image: "/images/sanjay-1.png" },
  { name: "Mr. Parag", role: "Assistant Professor", image: "/images/parag-1.png" },
  { name: "Ms. Urvi", role: "Assistant Professor", image: "/images/urvi-1.jpg" },
  { name: "Mr. Vaibhav", role: "Assistant Professor", image: "/images/vaibhav-1.jpg" }
];

export default function FacultyPage() {
  const [search, setSearch] = useState('');

  const filteredFaculty = facultyMembers.filter(f => 
    f.name.toLowerCase().includes(search.toLowerCase()) || 
    f.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Distinguished Faculty</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the visionaries, researchers, and industry experts dedicated to shaping the next generation of leaders.
          </p>
          
          <div className="mt-8 max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="Search by name or role..." 
              className="w-full px-6 py-3 rounded-full border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredFaculty.map((faculty, idx) => (
            <motion.div 
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={faculty.image} 
                  alt={faculty.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{faculty.name}</h3>
                <p className="text-primary font-medium text-sm">{faculty.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
