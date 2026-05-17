'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Users, Camera, Briefcase, Hash, Play, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';

export default function AdmissionPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] font-sans">
      <Navbar />

      {/* Hero with Registration Form */}
      <section className="pt-24 pb-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.1)] p-8 max-w-xl w-full border border-gray-100">
              <div className="flex flex-col items-center mb-6">
                 <img src="/images/logo.png" alt="JG University" className="h-16 mb-4" />
                 <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-4">Sponsored by ASIA Charitable Trust</p>
                 <h2 className="text-primary text-xl font-black uppercase tracking-tight">Register Now For Admission</h2>
              </div>
              
              <div className="space-y-4">
                <input type="text" placeholder="Full Name (As per SSC / HSC Marksheet)" className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                <div className="flex gap-2">
                  <div className="w-24 px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-lg text-sm flex items-center gap-2">
                    <img src="https://flagcdn.com/in.svg" className="w-5" alt="IN" />
                    <span>+91</span>
                  </div>
                  <input type="text" placeholder="Phone Number" className="flex-1 px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <input type="email" placeholder="Email Id" className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                <select className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-lg text-sm text-gray-500 focus:outline-none">
                  <option>Select Academic Year</option>
                  <option>2026-27</option>
                </select>
                <select className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-lg text-sm text-gray-500 focus:outline-none">
                  <option>Select Level of Programme</option>
                </select>
                <select className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-lg text-sm text-gray-500 focus:outline-none">
                  <option>Select School</option>
                </select>
                <select className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-lg text-sm text-gray-500 focus:outline-none">
                  <option>Select Program</option>
                </select>
                
                <div className="flex items-start gap-2 py-2">
                   <input type="checkbox" className="mt-1" id="terms" />
                   <label htmlFor="terms" className="text-[10px] text-gray-500 leading-tight italic">
                     *I agree to receive information regarding my submitted application by signing up on <a href="#" className="text-blue-500">https://jguni.in/</a>
                   </label>
                </div>

                <div className="flex items-center gap-4 pt-2">
                   <button className="flex-1 py-3 text-xs font-bold text-primary uppercase hover:underline">Existing User? Login</button>
                   <button className="flex-1 py-3 bg-[#cc3333] text-white text-xs font-bold uppercase rounded shadow-lg hover:bg-red-800 transition-colors">Register Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Sidebars */}
        <div className="fixed left-0 top-1/3 z-40 hidden xl:flex flex-col">
           <div className="bg-[#cc3333] text-white px-2 py-8 rounded-r-xl [writing-mode:vertical-lr] rotate-180 font-bold text-xs uppercase tracking-widest cursor-pointer shadow-lg">
             Free Psychometric Test
           </div>
           <div className="mt-4 flex flex-col gap-2 p-2 bg-white rounded-r-xl shadow-lg border border-gray-100">
              {[Users, Camera, Briefcase, Hash, Play, MessageCircle].map((Icon, i) => (
                <button key={i} className="p-2 hover:bg-gray-50 rounded text-gray-600 hover:text-primary transition-colors">
                  <Icon size={18} />
                </button>
              ))}
           </div>
        </div>

        <div className="fixed right-0 top-1/4 z-40 hidden xl:flex flex-col gap-4">
           <div className="bg-[#cc3333] text-white px-3 py-10 rounded-l-xl [writing-mode:vertical-lr] font-bold text-xs uppercase tracking-widest cursor-pointer shadow-lg">
             Apply Now
           </div>
           <div className="bg-[#cc3333] text-white px-3 py-10 rounded-l-xl [writing-mode:vertical-lr] font-bold text-xs uppercase tracking-widest cursor-pointer shadow-lg">
             Enquire Now
           </div>
           <button className="bg-green-500 text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-transform mr-4">
              <Phone size={24} />
           </button>
        </div>
      </section>

      {/* Programme Directory */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-[13px] leading-tight">
            
            {/* Column 1 */}
            <div className="space-y-8">
               <div>
                  <h3 className="text-primary font-black mb-4 border-b-2 border-primary/10 pb-2">School of Management</h3>
                  <div className="space-y-4">
                     <div>
                       <p className="font-bold text-gray-800">BBA (Hons) - 4 years, 8 semesters</p>
                       <p className="text-gray-400 text-[11px]">Bachelor of Business Administration</p>
                     </div>
                     <div>
                       <p className="font-bold text-gray-800">iMBA - 5 years, 10 semesters</p>
                       <p className="text-gray-400 text-[11px]">Integrated BBA + MBA</p>
                     </div>
                     <div>
                       <p className="font-bold text-gray-800">MBA - 2 years, 4 semesters</p>
                       <p className="text-gray-400 text-[11px]">Master of Business Administration</p>
                     </div>
                  </div>
               </div>
               <div>
                  <h3 className="text-primary font-black mb-4 border-b-2 border-primary/10 pb-2">School of Law</h3>
                  <div className="space-y-4">
                     <div>
                       <p className="font-bold text-gray-800">LL.B. - 3 years, 6 semesters</p>
                       <p className="text-gray-400 text-[11px]">Bachelor of Legislative Law</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-8">
               <div>
                  <h3 className="text-primary font-black mb-4 border-b-2 border-primary/10 pb-2">Applied Sciences (SIAS)</h3>
                  <div className="space-y-4">
                     <div>
                       <p className="font-bold text-gray-800">iM.Sc. - Forensic Science - 5 years</p>
                       <p className="text-gray-400 text-[11px]">Integrated B.Sc. + M.Sc. Forensic Science</p>
                     </div>
                     <div>
                       <p className="font-bold text-gray-800">M.Sc. - Cyber Security - 2 years</p>
                       <p className="text-gray-400 text-[11px]">Master of Science - Cyber Security</p>
                     </div>
                  </div>
               </div>
               <div>
                  <h3 className="text-primary font-black mb-4 border-b-2 border-primary/10 pb-2">School of Design</h3>
                  <div className="space-y-4">
                     <div>
                       <p className="font-bold text-gray-800">B.Design - UI/UX - 4 years</p>
                       <p className="text-gray-400 text-[11px]">Bachelor of Design - UI/UX</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-8">
               <div>
                  <h3 className="text-primary font-black mb-4 border-b-2 border-primary/10 pb-2">School of Engineering</h3>
                  <div className="space-y-4">
                     <div>
                       <p className="font-bold text-gray-800">B.Tech - CSE - 4 years</p>
                       <p className="text-gray-400 text-[11px]">Bachelor of Technology - Computer Science</p>
                     </div>
                     <div>
                       <p className="font-bold text-gray-800">B.Tech - AI & ML - 4 years</p>
                       <p className="text-gray-400 text-[11px]">Bachelor of Technology - Artificial Intelligence</p>
                     </div>
                  </div>
               </div>
               <div>
                  <h3 className="text-primary font-black mb-4 border-b-2 border-primary/10 pb-2">Emerging Technology</h3>
                  <div className="space-y-2 font-bold text-gray-800">
                     <p>Metaverse</p>
                     <p>Data Science, AI-ML</p>
                     <p>Blockchain</p>
                     <p>Digital Marketing</p>
                     <p>Cyber Security</p>
                  </div>
               </div>
            </div>

            {/* Column 4 */}
            <div className="space-y-8">
               <div>
                  <h3 className="text-primary font-black mb-4 border-b-2 border-primary/10 pb-2">School of Computing</h3>
                  <div className="space-y-4">
                     <div>
                       <p className="font-bold text-gray-800">BCA (Hons) - 4 years</p>
                       <p className="text-gray-400 text-[11px]">Bachelor of Computer Applications</p>
                     </div>
                     <div>
                       <p className="font-bold text-gray-800">iMCA - 5 years</p>
                       <p className="text-gray-400 text-[11px]">Integrated BCA + MCA</p>
                     </div>
                  </div>
               </div>
               <div>
                  <h3 className="text-primary font-black mb-4 border-b-2 border-primary/10 pb-2">Aviation & Hospitality</h3>
                  <div className="space-y-4">
                     <div>
                       <p className="font-bold text-gray-800">Integrated BBA + MBA - 5 years</p>
                       <p className="text-gray-400 text-[11px]">Aviation & Travel Management</p>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[13px]">
             <div className="flex items-start gap-3">
                <div className="text-red-500 mt-1"><CheckCircle2 size={16} /></div>
                <div>
                   <p className="font-black uppercase tracking-widest text-gray-400 mb-2">Campus</p>
                   <p className="font-bold text-gray-800 leading-relaxed">ASIA Campus, Drive In Rd, Thaltej, Ahmedabad-380054, Gujarat, India.</p>
                </div>
             </div>
             <div className="flex items-start gap-3">
                <div className="text-red-500 mt-1"><CheckCircle2 size={16} /></div>
                <div>
                   <p className="font-black uppercase tracking-widest text-gray-400 mb-2">Official Email-ID</p>
                   <p className="font-bold text-gray-800 leading-relaxed italic underline">connect@jguni.in admission@jguni.in</p>
                </div>
             </div>
             <div className="flex items-start gap-3">
                <div className="text-red-500 mt-1"><CheckCircle2 size={16} /></div>
                <div>
                   <p className="font-black uppercase tracking-widest text-gray-400 mb-2">Phone Number</p>
                   <p className="font-bold text-gray-800 leading-relaxed">+91 7567 7567 58/59</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
