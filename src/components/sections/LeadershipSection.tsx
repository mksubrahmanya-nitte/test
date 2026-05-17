

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const leaders = [
  {
    name: "M.P. Chandran",
    title: "President, JG University",
    image: "/images/m-p-chandran.jpg",
    layout: "text-left", 
    bio: `M.P Chandran is a postgraduate in management with more than 30 years of experience in senior and board-level positions in public and private sectors in India and abroad. He is the Chairperson of the Education Task Force, Gujarat Chamber of Commerce and Industry. He is also the chairman of ASIA Charitable Trust (ACT). ACT owns and successfully runs 3 schools, 17 colleges, and JG University.`,
    buttonText: "View President's Message",
    modalTitle: "President's Message",
    message: [
      "Knowledge is the power that no one can take away from you. The education system of today needs to be upgraded to impart knowledge that is not only cognitive but also experiential so as to help students shape their future, with their ability to match employment/self-employment requirements. Education must focus on nurturing the youth with the capabilities to acquire knowledge and skills that will help them learn and become eminent practitioners.",
      "JG University empowers its students not to restrict themselves rather explore and gain wisdom beyond the pages of books. University’s pedagogy is designed to match the everyday challenges and at the same time bring out the academic brilliance of knowledge seekers.",
      "All the best!"
    ]
  },
  {
    name: "Dr. CA Achyut Dani",
    title: "Director General, JG University",
    image: "/images/achyut-dani.jpg",
    layout: "image-left", 
    bio: `Dr. CA Achyut Dani has more than 21 years of experience and expertise in academics and industry. He holds a doctorate in management and commerce and is also a research guide. He has been a fellow member of the Committee for Review of Education and Training (CRET) of the Institute of Chartered Accountants of India, a senior mentor and faculty at Academic Staff college. Gujarat University, National Academy of Direct Taxes, DTRTI (Direct Taxes Regional Training Institute), CEI - Confederation of Entrepreneurship Initiatives and with Mission Mentors for strategic management and international collaborations. He is on the Governing Council of the Asian-African Chambers of Commerce & Industry. He is on the Commission Board of CIAC Global and Passion Vista Publications as Senior Board Member, a premium publication house in Asia, Africa, Europe, North America, UK, and UAE. To his credit, he has multiple awards and recognitions for his contribution to the field of education including the Bharat Jyoti Award (National), the Gem of CA Profession Award (ICAI) and the Brilliance in Education Award (CCS). He has authored Textbooks and Self Study Books on Accountancy for the Gujarat Higher Secondary Education Board and numerous reference books on Financial Reporting, Cost Accounting, and Taxation.`,
    buttonText: "View DG's Message",
    modalTitle: "Director-General's Message",
    message: [
      "Excellence is a matter of choice. If we choose to be excellent, we will be for sure. JG University aims to bring excellence in everything that it does, be it for students, faculty, staff, parents or any of its stakeholders. We stand by the idea of knowledge beyond books and provide students a real-life experience with an industry-relevant curriculum. The University desires to strike an equilibrium between state-of-the-art infrastructure and high-quality education that is recognised globally. We have a focused and dedicated environment that ensures a successful future for our students. Our commitment towards our students is reflected in the resources we bring to them and the mentorship we provide them at every stage to become global change leaders with appropriate skills and values."
    ]
  },
];

export default function LeadershipSection() {
  const [activeLeader, setActiveLeader] = useState<typeof leaders[0] | null>(null);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto" id="discover">
      <h2 className="text-2xl font-bold text-gray-900 mb-10 border-b-2 border-gray-100 pb-4">Our Leaders</h2>
      <div className="flex flex-col gap-10">
        {leaders.map((leader) => (
          <div
            key={leader.name}
            className={`flex flex-col md:flex-row gap-8 items-start ${
              leader.layout === "image-left" ? "md:flex-row-reverse" : ""
            }`}
          >

            <div className="flex-1">
              <p className="font-semibold text-lg text-gray-900">{leader.name}</p>
              <p className="text-sm text-gray-500 mb-4">{leader.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-5 text-justify">{leader.bio}</p>
              <button
                onClick={() => setActiveLeader(leader)}
                className="px-5 py-2 rounded text-white text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md cursor-pointer"
                style={{ backgroundColor: "#7c3aed" }}
              >
                {leader.buttonText} →
              </button>
            </div>

            <div className="flex-shrink-0 w-full md:w-64">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeLeader && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 cursor-pointer transition-opacity duration-300"
          onClick={() => setActiveLeader(null)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative z-10 overflow-hidden border border-gray-100 p-6 md:p-8 cursor-default animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >

            <button 
              onClick={() => setActiveLeader(null)}
              className="absolute top-4 right-4 p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors z-20 cursor-pointer"
            >
              <X size={20} />
            </button>

            <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3 mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-purple-600 rounded-full"></span>
              {activeLeader.modalTitle}
            </h3>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {activeLeader.message.map((paragraph, index) => (
                <p key={index} className="text-gray-700 text-[15px] leading-relaxed text-justify">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 border-t border-gray-100 pt-4 flex flex-col items-end">
              <p className="font-bold text-gray-900">{activeLeader.name}</p>
              <p className="text-xs text-gray-500">{activeLeader.title}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
