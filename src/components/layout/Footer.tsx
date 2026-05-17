
import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

const schoolsData = [
  {
    name: "School of Management",
    courses: [
      { name: "BBA (Hons) - 4 years, 8 semesters", href: "/bba" },
      { name: "iMBA - 5 years, 10 semesters", href: "/imba" },
      { name: "iMBA - Global Business - 5 years, 10 semesters", href: "/imba" },
      { name: "iMBA - International Trade & Finance - 5 years, 10 semesters", href: "/ibbamba" },
      { name: "BBA (Hons) - International Trade & Finance - 4 years, 8 semesters", href: "/bba-hons-itrade-finance" },
      { name: "MBA - 2 years, 4 semesters", href: "/mba" },
      { name: "Masters in International Trade & Finance - 2 years, 4 semesters", href: "/mba-international-trade-finance" },
      { name: "PGD - Banking & Finance - 1 year, 2 semesters", href: "#" }
    ]
  },
  {
    name: "School of Investigative and Applied Sciences (SIAS)",
    courses: [
      { name: "iM.Sc. - Forensic Science - 5 years, 10 semesters", href: "/bsc-hons-imsc-forensic-science" },
      { name: "iM.Sc. - Cyber Security & Digital Forensics - 5 years, 10 semesters", href: "/bsc-hons-imsc-cyber-digital-forensic" },
      { name: "iM.Sc. - Reproductive Biology & Clinical Embryology - 5 years, 10 semesters", href: "/bsc-hons-imsc-clinical-embryology" },
      { name: "M.Sc. - Cyber Security & Digital Forensics - 2 years, 4 semesters", href: "/msc-cyber" },
      { name: "M.Sc. - Forensic Science & Technology - 2 years, 4 semesters", href: "/msc-forensic" },
      { name: "M.Sc. - Clinical Embryology & ART - 2 years, 4 semesters", href: "/msc-clinic" }
    ]
  },
  {
    name: "School of Engineering",
    courses: [
      { name: "B.Tech - CSE - 4 years, 8 semesters", href: "/b-tech" },
      { name: "B.Tech - IT - 4 years, 8 semesters", href: "/b-tech-it" },
      { name: "B.Tech - AI & DS - 4 years, 8 semesters", href: "/btech-data-science" },
      { name: "B.Tech - AI & ML - 4 years, 8 semesters", href: "/btech-artificial-intelligence" },
      { name: "B.Tech - CE - 4 years, 8 semesters", href: "/btech-computer-engineering" },
      { name: "B.Tech - CSE - AI - 4 years, 8 semesters", href: "/btech-cse-ai" },
      { name: "B.Tech - CSE - AI & ML - 4 years, 8 semesters", href: "/btech-cse-ai-ml" },
      { name: "B.Tech - CSE - BDA - 4 years, 8 semesters", href: "/btech-cse-big-data" }
    ]
  },
  {
    name: "School of Commerce",
    courses: [
      { name: "B.Com (Hons) - 4 years, 8 semesters", href: "/bcom" },
      { name: "B.Com (Hons) with ACCA - 4 Years, 8 Semesters", href: "/bcom-hons-acca" },
      { name: "M.Com (Hons) - 2 years, 4 semesters", href: "/mcom" }
    ]
  },
  {
    name: "School of Computing",
    courses: [
      { name: "BCA (Hons) - 4 years, 8 semesters", href: "/bca" },
      { name: "iMSc (IT) - 5 years, 10 semesters", href: "/imsc-it" },
      { name: "iMCA - 5 years, 10 semesters", href: "/imca" },
      { name: "MCA - 2 years, 4 semesters", href: "/mca" },
      { name: "MCA - AI & Full Stack Development - 2 Years, 4 Semesters", href: "/mca" }
    ]
  },
  {
    name: "School of Law",
    courses: [
      { name: "LL.M. - 2 years, 4 semesters", href: "#" },
      { name: "LL.B. - 3 years, 6 semesters", href: "/llb" }
    ]
  },
  {
    name: "School of Science & Technology",
    courses: [
      { name: "iMSc (IT-Specialization) - 5 years, 10 Semesters", href: "/imsc-it" },
      { name: "MSc (IT-Specialization) - 2 years, 4 Semesters", href: "#" }
    ]
  },
  {
    name: "School of Research & Innovation (Ph.D Programmes)",
    courses: [
      { name: "Commerce", href: "/doctoral-programmes" },
      { name: "Management", href: "/doctoral-programmes" },
      { name: "Computing", href: "/doctoral-programmes" },
      { name: "Interdisciplinary", href: "/doctoral-programmes" },
      { name: "Law", href: "/doctoral-programmes" }
    ]
  },
  {
    name: "School of Design",
    courses: [
      { name: "B.Design - UI/UX - 3 years, 6 semesters", href: "#" },
      { name: "B.Design(Hons) - UI/UX - 4 years, 8 semesters", href: "#" },
      { name: "B.Design - Game Design - 3 years, 6 semesters", href: "#" },
      { name: "B.Design(Hons) - Game Design - 4 years, 8 semesters", href: "#" }
    ]
  },
  {
    name: "School of Emerging Technology",
    courses: [
      { name: "Metaverse", href: "/metaverse" },
      { name: "Data Science, AI-ML", href: "/data-science-ai-ml" },
      { name: "Mobile applications (Flutter & React Native)", href: "/mobile-applications" },
      { name: "Blockchain", href: "/blockchain" },
      { name: "Digital Marketing", href: "/digital-marketing" },
      { name: "Cyber Security", href: "/cyber-security" },
      { name: "Robotic Process Automation", href: "/robotic-process-automation" },
      { name: "Industrial IoT", href: "/industrial-iot" },
      { name: "Full Stack Architect", href: "/full-stack-architect" },
      { name: "Azure DevOps", href: "/azure-devops" }
    ]
  },
  {
    name: "School of Aviation & Hospitality",
    courses: [
      { name: "Integrated BBA + MBA - 5 years, 10 semesters", href: "/ibbambaaht" },
      { name: "Masters in Aviation, Hospitality & Travel Management - 2 years, 4 semesters", href: "/mahtm" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12 border-b border-gray-800 pb-12">
          {schoolsData.map((school) => (
            <div key={school.name} className="flex flex-col">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-gray-850 pb-2">
                {school.name}
              </h4>
              <ul className="space-y-2">
                {school.courses.map((course, idx) => (
                  <li key={idx}>
                    {course.href === '#' ? (
                      <span className="text-xs text-gray-500 cursor-default">{course.name}</span>
                    ) : (
                      <Link href={course.href} className="text-xs text-gray-400 hover:text-white transition-colors">
                        {course.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-xs text-gray-400">
          <div className="flex gap-3">
            <MapPin size={18} className="text-[#0066cc] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-300 mb-1">Ahmedabad Campus</p>
              <p className="leading-relaxed">ASIA Campus, Drive In Rd, Thaltej, Ahmedabad-380054, Gujarat, India</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Mail size={18} className="text-[#0066cc] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-300 mb-1">Official Email-ID</p>
              <p className="leading-relaxed">
                <a href="mailto:connect@jguni.in" className="hover:text-white transition-colors">connect@jguni.in</a>
                {" | "}
                <a href="mailto:admission@jguni.in" className="hover:text-white transition-colors">admission@jguni.in</a>
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Phone size={18} className="text-[#0066cc] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-300 mb-1">Phone Number</p>
              <p className="leading-relaxed font-medium">+91 7567 7567 58/59</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="text-gray-400">
            © 2022 JG University All Rights Reserved
          </p>
          
          <div className="flex flex-wrap gap-4 lg:gap-6 justify-center text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">A Handbook on Basics of Cyber Hygiene</a>
          </div>

          <p className="text-gray-500">
            Powered by: N2N Solutions
          </p>
        </div>

      </div>
    </footer>
  );
}
