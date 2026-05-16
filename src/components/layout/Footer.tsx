import React from 'react';
import { Share2, Globe, MessageCircle, Users, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center text-white font-bold text-xl">
                JG
              </div>
              <span className="font-bold text-xl text-white">JG University</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering the next generation of leaders with world-class education, state-of-the-art facilities, and a commitment to excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Users size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#programmes" className="hover:text-primary transition-colors">Programmes</a></li>
              <li><a href="#admissions" className="hover:text-primary transition-colors">Admissions 2026</a></li>
              <li><a href="#campus" className="hover:text-primary transition-colors">Campus Life</a></li>
              <li><a href="#placements" className="hover:text-primary transition-colors">Placements</a></li>
            </ul>
          </div>

          {/* Schools */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Schools</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-primary transition-colors">School of Management</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">School of Commerce</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">School of Computing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">School of Engineering</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Doctoral Studies</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                <span>JG Campus of Excellence, SG Highway, Ahmedabad, Gujarat 380054</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={20} />
                <span>admissions@jguni.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} JG University. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
