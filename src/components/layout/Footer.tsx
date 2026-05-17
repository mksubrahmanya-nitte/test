/*
// Old Footer code commented out:
'use client';

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-12">
          
          <div>
            <h3 className="font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">School of Science & Technology</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">iMSc (IT-Specialization)</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">MSc (IT-Specialization)</a></li>
            </ul>
          </div>

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
*/

// ??$$$ newer code
const programmes = {
  Undergraduate: ["BBA", "BBA Hons", "Integrated MBA", "BCA", "BCA Hons", "Integrated MCA", "B.Tech"],
  Postgraduate: ["MBA", "MBA Executive", "M.Com", "M.Com Hons"],
  "Other Programmes": ["iMSc IT", "MSc IT", "PhD", "B.Design UI/UX", "Game Design", "Aviation Hospitality"],
  "Quick Links": ["Discover Us", "Campus", "Collaborations", "Contact", "Privacy"],
};

const schools = [
  {
    name: "School of Management",
    courses: ["BBA - 3 years, 6 semesters", "BBA Hons - 4 years, 8 semesters", "International Trade & Finance - 3 years, 6 semesters", "MBA - 2 years, 4 semesters", "MBA Executive - 1 year, 2 semesters"],
  },
  {
    name: "School of Investigative and Applied Sciences (SIAS)",
    courses: ["B.Sc IT - 3 years, 6 semesters", "B.Sc Forensic Science - 3 years, 6 semesters", "M.Sc IT", "M.Sc Forensic Science", "MSc - Cyber Security & Digital Forensics", "MSc - Data Science & Analytics", "Ph.D - Investigative & Applied Sciences"],
  },
  {
    name: "School of Engineering",
    courses: ["B.Tech - 4 years, 8 semesters", "B.Tech (Hons.) - 5 years, 10 semesters", "M.Tech - 2 years, 4 semesters", "B.Sc - 3 years, 6 semesters", "M.Sc - 2 years, 4 semesters", "Ph.D. - 3 years, 6 semesters"],
  },
  {
    name: "School of Commerce",
    courses: ["B.Com - 3 years, 6 semesters", "B.Com (Hons.) - 4 years, 8 semesters", "M.Com - 2 years, 4 semesters", "M.Com (Hons.) - 3 years, 6 semesters"],
  },
  {
    name: "School of Science & Technology",
    courses: ["BSc Robotics & Automation", "BCA", "BCA Hons", "Integrated MCA", "MCA", "MSc IT", "MSc Cyber Security", "Ph.D in Science & Technology"],
  },
  {
    name: "School of Research & Innovation",
    courses: ["iMSc IT", "MSc IT", "Ph.D"],
  },
  {
    name: "School of Design",
    courses: ["BDesign - 4 Years, 8 Semesters", "Game Design", "UX & Product", "Communication Design"],
  },
  {
    name: "School of Computing",
    courses: ["BCA - 3 years", "BCA Hons", "MCA", "MSc IT"],
  },
  {
    name: "School of Law",
    courses: ["LLB - 3 years, 6 semesters", "LLB Hons", "BA LLB"],
  },
  {
    name: "Digital Technology",
    courses: ["B.Design", "Game Design", "UX Design"],
  },
  {
    name: "School of Aviation & Hospitality",
    courses: ["Aviation Hospitality", "Hotel Management", "Tourism Management", "Airport Ground Staff Management"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* Programme columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 border-b border-gray-700 pb-10">
          {Object.entries(programmes).map(([col, links]) => (
            <div key={col}>
              <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-4">{col}</h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* School grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 border-b border-gray-700 pb-10">
          {schools.map((school) => (
            <div key={school.name}>
              <h5 className="text-white font-semibold text-xs mb-2">{school.name}</h5>
              <ul className="space-y-1">
                {school.courses.slice(0, 5).map((c) => (
                  <li key={c} className="text-xs text-gray-500">{c}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="flex flex-col md:flex-row gap-6 mb-8 text-xs text-gray-400">
          <div>
            <p className="font-semibold text-gray-300 mb-1">📍 Ahmedabad</p>
            <p>S.G. Highway, Ahmedabad - 380060<br/>Near Shukan Mall</p>
          </div>
          <div>
            <p className="font-semibold text-gray-300 mb-1">📞 Phone Number</p>
            <p>+91 79 6677 6677</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© 2024 JG University. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400">Impressions/Disclosures</a>
            <a href="#" className="hover:text-gray-400">Terms and Conditions</a>
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">A Campaign on Basis of Choice Always</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
