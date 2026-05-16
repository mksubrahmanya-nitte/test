'use client';

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1: SST */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">School of Science & Technology</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">iMSc (IT-Specialization)</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">MSc (IT-Specialization)</a></li>
            </ul>
          </div>

          {/* Column 2: Research */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">School of Research & Innovation</h3>
            <p className="text-xs font-bold text-gray-400 mb-2 uppercase">Ph.D Programmes</p>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Commerce</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Management</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Computing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Interdisciplinary</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Law</a></li>
            </ul>
          </div>

          {/* Column 3: Design & Others */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">School of Design</h3>
            <p className="text-xs font-bold text-gray-400 mb-2 uppercase">B.Design(Hons)</p>
            <ul className="space-y-3 text-sm mb-6">
              <li><a href="#" className="hover:text-primary transition-colors">UI/UX</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Game Design</a></li>
            </ul>
            
            <h3 className="font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">Other</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Masters in Aviation, Hospitality & Travel Management</a></li>
            </ul>
          </div>

          {/* Column 4: Digital Skills */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">Digital Skills</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cyber Security</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Robotic Process Automation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Industrial IoT</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Full Stack Architect</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Azure DevOps</a></li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary shrink-0 mt-1" />
                <span>ASIA Campus, Drive In Rd, Thaltej, Ahmedabad-380054, Gujarat, India.</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary shrink-0" />
                <span>connect@jguni.in, admission@jguni.in</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary shrink-0" />
                <span>+91 7567 7567 58/59</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="border-t border-gray-100 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-gray-500 uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">Mandatory Disclosure</a>
            <a href="#" className="hover:text-primary transition-colors">Terms and Conditions</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">A Handbook on Basics of Cyber Hygiene</a>
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} JG University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
