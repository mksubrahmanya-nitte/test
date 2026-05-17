'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, BookOpen, GraduationCap, Users, Lightbulb, Landmark, Info, Briefcase, Globe } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Data mapping for different programmes
const programmeData: Record<string, any> = {
  'bba': {
    title: "BBA / BBA (Hons)",
    tagline: "Whole Brain Change Makers",
    duration: "3 / 4 Years",
    fees: "₹ 40,000/- per semester",
    eligibility: "10+2 with 45% (Open) / 40% (Reserved)",
    specializations: ["Business Analytics", "Finance", "HRM", "Marketing", "Entrepreneurship"],
    highlights: [
      "NEP 2020 Compliant with multiple exit options",
      "Course-embedded capstone projects",
      "Rural Immersion Programme",
      "Industrial Immersion & Internships"
    ],
    exitOptions: [
      { year: "1 Year", award: "Certificate" },
      { year: "2 Years", award: "Diploma" },
      { year: "3 Years", award: "BBA Degree" },
      { year: "4 Years", award: "BBA (Hons) Degree" }
    ]
  },
  'mba': {
    title: "MBA",
    tagline: "Leadership in the Digital Age",
    duration: "2 Years",
    fees: "₹ 60,000/- per semester",
    eligibility: "Graduation with 50% (Open) / 45% (Reserved)",
    specializations: ["Digital Marketing", "International Business", "Business Intelligence"],
    highlights: [
      "Case-study based learning",
      "Global industry exposure",
      "Executive mentorship",
      "Strategic leadership labs"
    ],
    exitOptions: [
      { year: "1 Year", award: "PG Diploma" },
      { year: "2 Years", award: "MBA Degree" }
    ]
  },
  'metaverse': {
    title: "Metaverse",
    tagline: "School of Emerging Technology",
    duration: "1 - 6 Months",
    fees: "₹ 10,000 - 60,000/-",
    eligibility: "Open to Students & Professionals",
    specializations: ["AR/VR Development", "3D Modeling", "Blockchain Integration"],
    highlights: [
      "24/7 Access to JG Cloud Lab",
      "Project-based immersive learning",
      "Industry leader collaborations",
      "Beginner to Expert pathways"
    ],
    certificationLevels: [
      { level: "Bridge Course", duration: "1 Month", fee: "₹ 10,000/-" },
      { level: "Intermediate", duration: "2 Months", fee: "₹ 40,000/-" },
      { level: "Expert", duration: "3 Months", fee: "₹ 60,000/-" }
    ],
    exitOptions: [
      { year: "1 Mo", award: "Foundation Cert" },
      { year: "3 Mo", award: "Intermediate Cert" },
      { year: "6 Mo", award: "Expert Cert" }
    ]
  },
  'blockchain': {
    title: "Blockchain Technology",
    tagline: "Next-Gen Decentralized Web",
    duration: "3 Months",
    fees: "₹ 45,000/-",
    eligibility: "Basic Programming Knowledge",
    specializations: ["Smart Contracts", "Web3", "DApps"],
    highlights: [
      "Hands-on with Ethereum & Solidiity",
      "Real-world DApp development",
      "Web3 architectural design"
    ],
    exitOptions: [{ year: "3 Months", award: "Certification" }]
  },
  'b-tech': {
    title: "B.Tech CSE (AI & ML)",
    tagline: "Engineering the Future",
    duration: "4 Years",
    fees: "₹ 55,000/- per semester",
    eligibility: "10+2 with Physics, Maths & Chem/CS",
    specializations: ["AI & ML", "Cyber Security", "Big Data", "Cloud Computing"],
    highlights: [
      "Industry-embedded curriculum",
      "Focus on practical engineering labs",
      "Collaboration with Yudiz & IBM"
    ],
    exitOptions: [
      { year: "1 Year", award: "Certificate" },
      { year: "2 Years", award: "Diploma" },
      { year: "3 Years", award: "B.Sc. CS" },
      { year: "4 Years", award: "B.Tech Degree" }
    ]
  },
  'bsc-hons-imsc-forensic-science': {
    title: "M.Sc. Forensic Science",
    tagline: "Solving Crimes with Science",
    duration: "5 Years (Integrated)",
    fees: "₹ 45,000/- per semester",
    eligibility: "10+2 Science Stream",
    specializations: ["Crime Scene Investigation", "Digital Forensics", "Toxicology"],
    highlights: ["Advanced forensic laboratory", "Internships with investigative agencies", "Integrated 5-year master's pathway"],
    exitOptions: [{ year: "3 Years", award: "B.Sc. Forensic" }, { year: "5 Years", award: "M.Sc. Forensic" }]
  },
  'imba': {
    title: "Integrated MBA",
    tagline: "Management Excellence from Day One",
    duration: "5 Years",
    fees: "₹ 42,000/- per semester",
    eligibility: "10+2 with 45%",
    specializations: ["Marketing", "Finance", "HR", "Digital Business"],
    highlights: ["Integrated UG+PG curriculum", "Early industry exposure", "Capstone projects in final year"],
    exitOptions: [{ year: "3 Years", award: "BBA" }, { year: "5 Years", award: "MBA" }]
  },
  'imca': {
    title: "Integrated MCA",
    tagline: "Computing Power Integrated",
    duration: "5 Years",
    fees: "₹ 38,000/- per semester",
    eligibility: "10+2 with Maths/Stats",
    specializations: ["Software Engineering", "Cloud Computing", "AI"],
    highlights: ["Seamless transition to Masters", "Practical coding labs", "Industry internships"],
    exitOptions: [{ year: "3 Years", award: "BCA" }, { year: "5 Years", award: "MCA" }]
  },
  'bcom': {
    title: "B.Com / B.Com (Hons)",
    tagline: "Financial Literacy for Leaders",
    duration: "3 / 4 Years",
    fees: "₹ 30,000/- per semester",
    eligibility: "10+2 Commerce/Science",
    specializations: ["Accounting", "Banking", "Insurance"],
    highlights: ["Tally & GST Certifications", "Mock Stock Trading", "Industrial Visits"],
    exitOptions: [{ year: "1 Year", award: "Certificate" }, { year: "3 Years", award: "B.Com" }, { year: "4 Years", award: "B.Com (Hons)" }]
  },
  'llb': {
    title: "LL.B.",
    tagline: "Justice Through Knowledge",
    duration: "3 Years",
    fees: "₹ 45,000/- per semester",
    eligibility: "Graduation with 45%",
    specializations: ["Corporate Law", "Criminal Law", "Intellectual Property"],
    highlights: ["Moot Court practice", "Legal aid clinics", "Internships with top law firms"],
    exitOptions: [{ year: "3 Years", award: "LL.B. Degree" }]
  },
  'digital-marketing': {
    title: "Digital Marketing",
    tagline: "Master the Digital Landscape",
    duration: "3 Months",
    fees: "₹ 25,000/-",
    eligibility: "Open to All",
    specializations: ["SEO", "SEM", "Social Media", "Analytics"],
    highlights: ["Live project experience", "Google Ads certification prep", "Agency-led workshops"],
    exitOptions: [{ year: "3 Months", award: "Certification" }]
  },
  'cyber-security': {
    title: "Cyber Security",
    tagline: "Protecting the Digital Frontier",
    duration: "4 Months",
    fees: "₹ 35,000/-",
    eligibility: "Basic IT Knowledge",
    specializations: ["Ethical Hacking", "Network Security", "Risk Management"],
    highlights: ["Red Teaming exercises", "Certified instructor-led", "Vulnerability assessment labs"],
    exitOptions: [{ year: "4 Months", award: "Certification" }]
  },
  'full-stack-architect': {
    title: "Full Stack Architect",
    tagline: "Build Scalable Web Solutions",
    duration: "6 Months",
    fees: "₹ 50,000/-",
    eligibility: "Programming Foundation",
    specializations: ["MERN Stack", "Next.js", "Cloud Deployment"],
    highlights: ["Architecture-first approach", "End-to-end product builds", "Code review by experts"],
    exitOptions: [{ year: "6 Months", award: "Certification" }]
  },
  'imsc-it': {
    title: "Integrated M.Sc. IT",
    tagline: "Technology Synergy",
    duration: "5 Years",
    fees: "₹ 40,000/- per semester",
    eligibility: "10+2 Science/Commerce (Maths)",
    specializations: ["Software Development", "Data Analytics", "IoT"],
    highlights: ["Seamless 5-year curriculum", "Project-centric learning", "Focus on emerging tech"],
    exitOptions: [{ year: "3 Years", award: "B.Sc. IT" }, { year: "5 Years", award: "M.Sc. IT" }]
  },
  'mca': {
    title: "MCA",
    tagline: "Advanced Computing Professionals",
    duration: "2 Years",
    fees: "₹ 45,000/- per semester",
    eligibility: "BCA/B.Sc. CS/B.Tech",
    specializations: ["Application Development", "Cloud Systems", "AI & ML"],
    highlights: ["Advanced software engineering labs", "Industry-ready curriculum", "High placement focus"],
    exitOptions: [{ year: "2 Years", award: "MCA Degree" }]
  },
  'mcom': {
    title: "M.Com",
    tagline: "Specialized Financial Masters",
    duration: "2 Years",
    fees: "₹ 25,000/- per semester",
    eligibility: "B.Com Degree",
    specializations: ["Accountancy", "Business Management"],
    highlights: ["Advanced financial accounting", "Research methodology focus", "Practical auditing exposure"],
    exitOptions: [{ year: "2 Years", award: "M.Com Degree" }]
  }
};

export default function ProgrammeDetailPage() {
  const params = useParams();
  const slug = (params.slug as string).replace(/\.html$/, '');
  
  // Get data or fallback to generic
  const data = programmeData[slug] || {
    title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    tagline: "Innovating for a Better Future",
    duration: "3 Years",
    fees: "TBD",
    eligibility: "10+2 or equivalent",
    specializations: ["Core Studies"],
    highlights: ["NEP 2020 Compliant", "Industry-led Curriculum", "Modern Infrastructure"],
    exitOptions: [{ year: "Final Year", award: "Degree" }]
  };

  // Decide hero background based on slug
  let heroBg = "/images/partnership.jpg";
  if (slug.includes('bba') || slug.includes('bca') || slug.includes('bcom') || slug.includes('b-tech')) {
    heroBg = "/images/ug-programmes.jpg";
  } else if (slug.includes('mba') || slug.includes('mca') || slug.includes('mcom') || slug.includes('msc')) {
    heroBg = "/images/pg-programmes.jpg";
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-primary pt-32 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBg} className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-7xl font-black mb-4 uppercase tracking-tighter">{data.title}</h1>
            <p className="text-xl md:text-3xl text-secondary font-bold tracking-widest uppercase">{data.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Duration</p>
                <p className="text-lg font-black text-gray-900">{data.duration}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Fees</p>
                <p className="text-lg font-black text-primary">{data.fees}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Eligibility</p>
                <p className="text-sm font-bold text-gray-700">{data.eligibility}</p>
              </div>
           </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black text-gray-900 mb-8">Programme Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-12">
                The {data.title} at JG University is designed to create "{data.tagline}". Our curriculum is built on NEP 2020 foundations, emphasizing immersive learning and industry readiness.
              </p>

              {/* NEP Exit Options */}
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Info size={20} className="text-secondary" /> NEP 2020 Exit Pathways
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                 {data.exitOptions.map((opt: any, i: number) => (
                   <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                      <p className="text-xs font-bold text-primary mb-1">{opt.year}</p>
                      <p className="text-sm font-black text-gray-900">{opt.award}</p>
                   </div>
                 ))}
              </div>

              {/* Certification Levels (for short courses) */}
              {data.certificationLevels && (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-secondary" /> Certification Pathways
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                     {data.certificationLevels.map((lvl: any, i: number) => (
                       <div key={i} className="bg-white p-6 rounded-2xl border-2 border-gray-50 hover:border-secondary transition-colors shadow-sm">
                          <p className="text-xs font-black text-secondary uppercase tracking-widest mb-2">{lvl.level}</p>
                          <div className="flex justify-between items-end">
                             <div>
                                <p className="text-sm text-gray-400">Duration</p>
                                <p className="font-bold text-gray-900">{lvl.duration}</p>
                             </div>
                             <div className="text-right">
                                <p className="text-sm text-gray-400">Fee</p>
                                <p className="font-black text-primary">{lvl.fee}</p>
                             </div>
                          </div>
                       </div>
                     ))}
                  </div>
                </>
              )}

              {/* Specializations */}
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Briefcase size={20} className="text-secondary" /> Specializations Offered
              </h3>
              <div className="flex flex-wrap gap-3 mb-12">
                 {data.specializations.map((spec, i) => (
                   <span key={i} className="px-6 py-2 bg-primary/5 text-primary rounded-full font-bold text-sm border border-primary/10">
                     {spec}
                   </span>
                 ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {data.highlights.map((item, i) => (
                   <div key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                      <CheckCircle2 className="text-green-500" size={20} />
                      <span className="text-sm font-medium text-gray-700">{item}</span>
                   </div>
                 ))}
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-gray-900 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-black mb-4">Admissions Open 2026-27</h3>
                <p className="text-white/60 mb-8 text-sm">Join a community of global leaders. Limited seats available for the upcoming session.</p>
                <Button 
                  className="w-full py-4 rounded-xl text-lg font-black bg-secondary hover:bg-amber-500 text-gray-900"
                  onClick={() => window.location.href = '/admission-open'}
                >
                  APPLY NOW
                </Button>
                <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                   <div className="flex items-center gap-3">
                      <Globe className="text-secondary" size={20} />
                      <span className="text-sm font-bold">Global Exposure</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <Landmark className="text-secondary" size={20} />
                      <span className="text-sm font-bold">Industry Tie-ups</span>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
