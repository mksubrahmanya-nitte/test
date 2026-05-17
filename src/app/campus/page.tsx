
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CampusPage() {
  
  const [currentLeft, setCurrentLeft] = useState(0);
  const [currentRight, setCurrentRight] = useState(0);
  const [upcomingLeft, setUpcomingLeft] = useState(0);
  const [upcomingRight, setUpcomingRight] = useState(0);

  const currentImagesLeft = [
    'images/campus/3.jpg',
    'images/campus/4.jpg',
    'images/campus/5.jpg',
    'images/campus/6.jpg',
    'images/campus/7.jpg',
    'images/campus/8.jpg'
  ];

  const currentImagesRight = [
    'images/campus/9.jpg',
    'images/campus/10.jpg',
    'images/campus/11.jpg',
    'images/campus/12.jpg',
    'images/campus/13.jpg'
  ];

  const upcomingImagesLeft = [
    'images/1.png',
    'images/2.png',
    'images/3.png',
    'images/4.png',
    'images/5.png',
    'images/7.png',
    'images/9.png',
    'images/10.png'
  ];

  const upcomingImagesRight = [
    'images/CRM08261.JPG',
    'images/CRM08221.JPG',
    'images/CRM08304.jpg',
    'images/CRM08212.JPG',
    'images/CRM08255.JPG'
  ];

  const prevSlide = (curr: number, set: React.Dispatch<React.SetStateAction<number>>, len: number) => {
    set((curr - 1 + len) % len);
  };

  const nextSlide = (curr: number, set: React.Dispatch<React.SetStateAction<number>>, len: number) => {
    set((curr + 1) % len);
  };

  return (
    <main className="min-h-screen bg-white pt-28 pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-6">
          <nav className="text-xs md:text-sm text-gray-500 mb-2 flex items-center gap-1 font-medium font-sans">
            <Link href="/" className="hover:text-red-700 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800">Campus</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-sans">
            Campus
          </h1>
        </div>

        <div className="mb-8">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed font-normal font-sans">
            The university's main campus is located at Asia Campus on Drive-In Road in Ahmedabad. It is situated in the centre of the city and has quick access to the metro and other local transportation.
          </p>
        </div>

        {/* ??$$$ - Current Campus Sliders (Side-by-Side) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          {/* Left Slider */}
          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-gray-100 shadow-sm border border-gray-100 group">
            <img
              src={`/${currentImagesLeft[currentLeft]}`}
              alt="Drive-in Road Campus View A"
              className="w-full h-full object-cover"
            />
            
            {/* Cyan Navigation Circles */}
            <button
              onClick={() => prevSlide(currentLeft, setCurrentLeft, currentImagesLeft.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#5bc0de]/90 hover:bg-[#5bc0de] text-white flex items-center justify-center shadow-md cursor-pointer transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={() => nextSlide(currentLeft, setCurrentLeft, currentImagesLeft.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#5bc0de]/90 hover:bg-[#5bc0de] text-white flex items-center justify-center shadow-md cursor-pointer transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Right Slider */}
          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-gray-100 shadow-sm border border-gray-100 group">
            <img
              src={`/${currentImagesRight[currentRight]}`}
              alt="Drive-in Road Campus View B"
              className="w-full h-full object-cover"
            />
            
            {/* Cyan Navigation Circles */}
            <button
              onClick={() => prevSlide(currentRight, setCurrentRight, currentImagesRight.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#5bc0de]/90 hover:bg-[#5bc0de] text-white flex items-center justify-center shadow-md cursor-pointer transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={() => nextSlide(currentRight, setCurrentRight, currentImagesRight.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#5bc0de]/90 hover:bg-[#5bc0de] text-white flex items-center justify-center shadow-md cursor-pointer transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

        </div>

        {/* ??$$$ - Horizontal 4 Pink Icons Row */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:gap-24 py-8 mb-12 border-b border-gray-100">
          {[
            { name: 'IIoT Lab', img: 'images/lab.png' },
            { name: 'R&D + Incubation', img: 'images/r&d.png' },
            { name: 'Tech-enabled Library', img: 'images/library.png' },
            { name: 'Wi-Fi Enabled Campus', img: 'images/wi-fi-campus.png' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center">
              <img
                src={`/${item.img}`}
                alt={item.name}
                className="w-16 h-16 md:w-20 md:h-20 object-contain mb-3"
              />
              <span className="text-xs md:text-sm font-semibold text-gray-800 tracking-wide font-sans">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 font-sans">
            Health Facilities
          </h2>
          <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed mb-6 font-normal font-sans">
            The university provides essential health support services on campus including medical consultation rooms, a dedicated first-aid and emergency care area, and access to basic diagnostic tools.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Medical Consultation Rooms',
              'First-aid Room / Emergency Care Area',
              'First-aid Kits',
              'Vital Sign Monitors (BP, Pulse Oximeter, Thermometer)'
            ].map((cardText, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-lg p-5 min-h-[90px] flex items-center justify-center text-center shadow-sm"
              >
                <span className="text-[13px] md:text-[14px] font-semibold text-gray-700 leading-snug font-sans">
                  {cardText}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 font-sans">
            Facilities For Differently-Abled
          </h2>
          <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed mb-6 font-normal font-sans">
            The campus is thoughtfully designed to be inclusive and accessible for differently-abled individuals through structural enhancements and support facilities.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Campus is Differently Abled Friendly',
              'Ramps with Handrails at Entrances/Exits and Key Areas',
              'Accessible Toilets with Grab Bars and Western Commodes',
              'Elevators/Lifts for Easy Access to All Floors'
            ].map((cardText, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-lg p-5 min-h-[90px] flex items-center justify-center text-center shadow-sm"
              >
                <span className="text-[13px] md:text-[14px] font-semibold text-gray-700 leading-snug font-sans">
                  {cardText}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 font-sans">
            Library
          </h2>
          <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed mb-6 font-normal font-sans">
            A comprehensive and robust library module has been developed within the university’s ERP system, ensuring seamless access to academic resources.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              'ERP Integrated Digital Library Access',
              'Academic Journals and Research Material',
              'Quiet Reading Areas and Workstations'
            ].map((cardText, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-lg p-5 min-h-[90px] flex items-center justify-center text-center shadow-sm"
              >
                <span className="text-[13px] md:text-[14px] font-semibold text-gray-700 leading-snug font-sans">
                  {cardText}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 border-t border-gray-100 pt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 font-sans">
            Upcoming Campus
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8 font-normal font-sans">
            JG University’s new campus is coming up near Uvarsad, Gandhinagar on the SG Highway – one of the major highways connecting the cities of Ahmedabad and Gandhinagar. The campus is less than 18 kilometers from Ahmedabad Airport and approximately 25 kilometers from Ahmedabad Railway Station. The campus will be equipped with various amenities such as wifi, a multipurpose auditorium, a tech-enabled library, a fitness area, and an incubation and entrepreneurship center to support students' educational and learning needs.
          </p>

          {/* ??$$$ - Upcoming Campus Sliders (Side-by-Side) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            
            {/* Left Slider: Architectural Renders */}
            <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-gray-100 shadow-sm border border-gray-100 group">
              <img
                src={`/${upcomingImagesLeft[upcomingLeft]}`}
                alt="Upcoming Campus Architect Blueprint Render"
                className="w-full h-full object-cover"
              />
              
              {/* Cyan Navigation Circles */}
              <button
                onClick={() => prevSlide(upcomingLeft, setUpcomingLeft, upcomingImagesLeft.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#5bc0de]/90 hover:bg-[#5bc0de] text-white flex items-center justify-center shadow-md cursor-pointer transition-colors z-10"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>
              <button
                onClick={() => nextSlide(upcomingLeft, setUpcomingLeft, upcomingImagesLeft.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#5bc0de]/90 hover:bg-[#5bc0de] text-white flex items-center justify-center shadow-md cursor-pointer transition-colors z-10"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Right Slider: Gandhinagar Site Progress */}
            <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-gray-100 shadow-sm border border-gray-100 group">
              <img
                src={`/${upcomingImagesRight[upcomingRight]}`}
                alt="Upcoming Campus Gandhinagar Site Construction View"
                className="w-full h-full object-cover"
              />
              
              {/* Cyan Navigation Circles */}
              <button
                onClick={() => prevSlide(upcomingRight, setUpcomingRight, upcomingImagesRight.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#5bc0de]/90 hover:bg-[#5bc0de] text-white flex items-center justify-center shadow-md cursor-pointer transition-colors z-10"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>
              <button
                onClick={() => nextSlide(upcomingRight, setUpcomingRight, upcomingImagesRight.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#5bc0de]/90 hover:bg-[#5bc0de] text-white flex items-center justify-center shadow-md cursor-pointer transition-colors z-10"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

          </div>

          {/* ??$$$ - Horizontal 7 Pink Icons Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 lg:gap-16 py-8">
            {[
              { name: 'IIoT Lab', img: 'images/lab.png' },
              { name: 'R&D + Incubation', img: 'images/r&d.png' },
              { name: 'Tech-enabled Library', img: 'images/library.png' },
              { name: 'Wi-Fi Enabled Campus', img: 'images/wi-fi-campus.png' },
              { name: 'Multipurpose Auditorium', img: 'images/cinema.png' },
              { name: 'Sports Facility', img: 'images/sports.png' },
              { name: 'Fitness Area', img: 'images/fitness.png' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center max-w-[110px]">
                <img
                  src={`/${item.img}`}
                  alt={item.name}
                  className="w-16 h-16 object-contain mb-3"
                />
                <span className="text-[11px] md:text-xs font-semibold text-gray-800 leading-snug tracking-wide font-sans">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </main>
  );
}
