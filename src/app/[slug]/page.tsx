'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, Info, Briefcase, Globe, Landmark, Cpu, Code } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { getProgrammeData } from '@/data/programmes';

export default function ProgrammeDetailPage() {
  const params = useParams();
  const slug = (params.slug as string).replace(/\.html$/, '');
  
  const data = getProgrammeData(slug);
  
  if (!data) return <div className="min-h-screen flex items-center justify-center font-bold text-2xl">Programme not found</div>;

  let heroBg = data.image || "/images/partnership.jpg";
  if (!data.image) {
    if (slug.includes('bba') || slug.includes('bca') || slug.includes('bcom') || slug.includes('b-tech') || slug.includes('imba') || slug.includes('imca')) {
      heroBg = "/images/ug-programmes.jpg";
    } else if (slug.includes('mba') || slug.includes('mca') || slug.includes('mcom') || slug.includes('msc')) {
      heroBg = "/images/pg-programmes.jpg";
    }
  }

  return (
    <main className="min-h-screen bg-white">

      <section className="relative h-[290px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            alt={data.headerSubtitle || data.title}
            fill
            className="object-cover object-center brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center pt-8">
          <h2 className="text-white text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-3 drop-shadow-lg font-sans">
            {data.headerSubtitle || data.tagline}
          </h2>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-widest drop-shadow-xl font-sans">
            {data.title}
          </h1>
        </div>
      </section>

      <section className="bg-white border-b border-gray-100 py-12 md:py-16">
        <div className="max-w-[1140px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border-[1.5px] border-pink-200 bg-pink-50/30 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h3 className="text-[15.5px] font-bold text-gray-800 tracking-wide mb-1 font-sans">Course Commencement</h3>
            <p className="text-[13.5px] font-medium text-gray-500 font-sans">{data.courseCommencement || "Upcoming Academic Year"}</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border-[1.5px] border-purple-200 bg-purple-50/30 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-[15.5px] font-bold text-gray-800 tracking-wide mb-1 font-sans">Duration</h3>
            <p className="text-[13.5px] font-medium text-gray-500 font-sans">{data.duration}</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border-[1.5px] border-amber-200 bg-amber-50/30 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-[15.5px] font-bold text-gray-800 tracking-wide mb-1 font-sans">Eligibility</h3>
            <p className="text-[13.5px] font-medium text-gray-500 font-sans">{data.eligibility}</p>
          </div>
        </div>
      </section>

      <section className="max-w-[1140px] mx-auto px-6 py-16 md:py-20 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6 font-sans">
              {data.title}
            </h2>
            <div className="space-y-4 text-gray-600 text-[14.5px] leading-relaxed font-sans">
              {data.description ? (
                data.description.map((para, i) => (
                  <p key={i} className={i === data.description!.length - 1 ? "font-semibold text-gray-800" : ""}>{para}</p>
                ))
              ) : (
                <p>The {data.title} at JG University is designed to create "{data.tagline}". Our curriculum is built on NEP 2020 foundations, emphasizing immersive learning and industry readiness.</p>
              )}
            </div>
          </div>
          <div className="lg:col-span-5 relative h-[300px] md:h-[350px] rounded-xl overflow-hidden shadow-md border border-gray-100">
            <Image
              src={heroBg}
              alt={data.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-6 font-sans">
            Fee Structure
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-150 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-extrabold text-gray-800 text-[16px] font-sans">Tuition Fee</h4>
                <p className="text-[19px] text-red-700 font-extrabold mt-1 font-sans">{data.fees}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <a 
                href="/fees-structure.pdf" 
                className="px-6 py-2.5 rounded-lg bg-red-700 text-white text-[13.5px] font-bold hover:bg-red-800 transition-colors shadow-sm font-sans"
              >
                Download Syllabus & Fees PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {(data.eligibilityType === 'split-boxes' || data.eligibilityText) && (
        <section className="max-w-[1140px] mx-auto px-6 py-12 bg-white">
          <h2 className="text-3xl font-bold text-black mb-6 font-sans">
            Eligibility
          </h2>
          {data.eligibilityText && (
            <div className="space-y-4 text-gray-700 text-[14.5px] leading-relaxed font-sans mb-8">
              {data.eligibilityText.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          )}

          {data.eligibilityType === 'split-boxes' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
              <div className="border border-sky-300/80 rounded-lg py-4 px-6 flex items-center justify-center bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all hover:border-sky-400">
                <span className="text-[14px] text-gray-800 font-sans text-center">
                  For open category candidates <strong className="font-extrabold text-black ml-1 font-sans">{data.eligibilityOpen || "50%"}</strong>
                </span>
              </div>
              <div className="border border-sky-300/80 rounded-lg py-4 px-6 flex items-center justify-center bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all hover:border-sky-400">
                <span className="text-[14px] text-gray-800 font-sans text-center">
                  For reserved category candidates <strong className="font-extrabold text-black ml-1 font-sans">{data.eligibilityReserved || "45%"}</strong>
                </span>
              </div>
            </div>
          )}
        </section>
      )}

      {data.specializationsObj ? (
        <section className="bg-gray-50 py-16 border-y border-gray-100">
          <div className="max-w-[1140px] mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-4 font-sans">Specialization / Electives Offered</h2>
              <p className="text-[14px] text-gray-500 font-semibold leading-relaxed font-sans">
                Curate your learning path under our premium active specializations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
              {data.specializationsObj.map((spec, idx) => (
                <div 
                  key={idx} 
                  className={`p-6 rounded-xl shadow-sm border border-gray-150 transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-white`}
                >
                  <div className={`w-10 h-10 rounded-xl ${spec.iconBg || 'bg-gray-50'} ${spec.iconColor || 'text-gray-600'} flex items-center justify-center mb-4 flex-shrink-0`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-extrabold text-[15px] text-gray-800 mb-2 leading-snug font-sans">{spec.name}</h4>
                  <p className="text-[12.5px] text-gray-500 font-medium leading-relaxed font-sans">{spec.desc}</p>
                </div>
              ))}
            </div>

            {data.specializationNote && (
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-extrabold text-red-700 text-[14px] uppercase tracking-wider mb-4 font-sans">Important note :</h4>
                <ol className="space-y-3 text-[13px] text-gray-500 font-medium list-decimal pl-4 leading-relaxed font-sans">
                  {data.specializationNote.map((note, i) => (
                    <li key={i}>{note}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </section>
      ) : data.specializationsStr && (
        <section className="bg-gray-50 py-16 border-y border-gray-100">
          <div className="max-w-[1140px] mx-auto px-6">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
              <Briefcase size={24} className="text-secondary" /> Areas of Focus
            </h3>
            <div className="flex flex-wrap gap-3">
              {data.specializationsStr.map((spec, i) => (
                <span key={i} className="px-6 py-2 bg-primary/5 text-primary rounded-full font-bold text-sm border border-primary/10">
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="max-w-[1140px] mx-auto px-6 py-16 md:py-24 bg-white">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-4 font-sans">Programme Highlights</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.highlightsObj ? data.highlightsObj.map((h, idx) => (
            <div key={idx} className="flex gap-4 p-5 rounded-xl border border-gray-150 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5 text-red-600 font-bold text-[12px] uppercase">
                {h.label[0]}
              </div>
              <div className="flex-grow">
                <h4 className="font-extrabold text-gray-800 text-[14px] mb-1 capitalize font-sans">{h.label}</h4>
                <p className="text-[13.5px] text-gray-600 leading-relaxed font-medium font-sans">{h.text}</p>
                {h.exitDetails && (
                  <ul className="mt-3 grid grid-cols-2 gap-2 pl-4 list-disc text-[12.5px] text-gray-500 font-semibold font-sans">
                    {h.exitDetails.map((exit, eIdx) => (
                      <li key={eIdx}>{exit}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )) : data.highlightsStr?.map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
               <CheckCircle2 className="text-green-500" size={20} />
               <span className="text-sm font-medium text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {(data.objectives || data.outcomes) && (
        <section className="bg-gray-50 py-16 border-y border-gray-100">
          <div className="max-w-[1140px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {data.objectives && (
              <div>
                <h2 className="text-2xl font-extrabold text-black mb-6 font-sans">Objectives</h2>
                <div className="space-y-4">
                  {data.objectives.map((obj, idx) => (
                    <div key={idx} className="p-4 bg-white rounded-xl border border-gray-150 flex gap-3 shadow-sm">
                      <span className="font-bold text-red-700 text-[14px] flex-shrink-0 mt-0.5">{idx + 1}.</span>
                      <p className="text-[13.5px] text-gray-600 font-medium leading-relaxed font-sans">{obj}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {data.outcomes && (
              <div>
                <h2 className="text-2xl font-extrabold text-black mb-6 font-sans">Outcomes</h2>
                <div className="space-y-4">
                  {data.outcomes.map((out, idx) => (
                    <div key={idx} className="p-4 bg-white rounded-xl border border-gray-150 flex gap-3 shadow-sm">
                      <span className="font-bold text-[#0066cc] text-[14px] flex-shrink-0 mt-0.5">{idx + 1}.</span>
                      <p className="text-[13.5px] text-gray-600 font-medium leading-relaxed font-sans">{out}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {data.advantages && (
        <section className="max-w-[1140px] mx-auto px-6 py-16 md:py-24 bg-white">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-4 font-sans">Advantages</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.advantages.map((adv, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl border border-gray-150 shadow-sm hover:shadow-md transition-all duration-350">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center mb-4 flex-shrink-0 text-amber-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h5 className="text-[11.5px] font-bold text-gray-400 uppercase tracking-wider mb-1 font-sans">{adv.label}</h5>
                <h4 className="font-extrabold text-[15.5px] text-gray-800 mb-2 leading-snug font-sans">{adv.title}</h4>
                <p className="text-[12.5px] text-gray-500 leading-relaxed font-semibold font-sans">{adv.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {!data.advantages && data.exitOptions && (
        <section className="bg-gray-50 py-16 border-y border-gray-100">
           <div className="max-w-[1140px] mx-auto px-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Info size={20} className="text-secondary" /> NEP 2020 Exit Pathways
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {data.exitOptions.map((opt, i) => (
                   <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 text-center shadow-sm">
                      <p className="text-xs font-bold text-primary mb-1">{opt.year}</p>
                      <p className="text-sm font-black text-gray-900">{opt.award}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      )}

      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-4 font-sans">Admission Process</h2>
          <p className="text-[14.5px] text-gray-500 font-semibold max-w-3xl mx-auto mb-10 leading-relaxed font-sans">
            Our Admission process enables us to meticulously give importance to every individual applying. The admission of the applicant will majorly be based on our admission process scores.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link 
              href="/admission-open" 
              className="px-8 py-3 rounded-xl bg-red-700 text-white font-extrabold text-[14px] tracking-wider hover:bg-red-800 transition-colors shadow-md font-sans animate-pulse"
            >
              Apply Now
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3 rounded-xl border-2 border-red-700 text-red-700 font-extrabold text-[14px] tracking-wider hover:bg-red-50 transition-colors shadow-sm font-sans"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
