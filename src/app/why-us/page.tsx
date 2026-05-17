import React from 'react';

export default function WhyUsPage() {
  const advantages = [
    { img: "/images/adv1.png", title: "Futuristic Programmes" },
    { img: "/images/adv6.png", title: "Collaborative Learning" },
    { img: "/images/adv7.png", title: "Outstanding Faculty" },
    { img: "/images/adv5.png", title: "Industry Adoption" },
    { img: "/images/adv16.png", title: "International Exposure" },
    { img: "/images/adv2.png", title: "Tech-Enabled Campus" },
    { img: "/images/adv17.png", title: "Hostel Facility Assistance" },
    { img: "/images/adv12.png", title: "Incubation Support System" },
    { img: "/images/adv8.png", title: "Research Facilitation" },
    { img: "/images/adv9.png", title: "JGiet Status" }
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Hero Banner */}
      <section className="relative h-[290px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/why-us-banner.jpg"
            alt="why-us-banner"
            className="w-full h-full object-cover object-center brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center pt-8">
          <h3 className="text-white text-lg md:text-xl font-bold tracking-widest uppercase mb-2 drop-shadow-md">
            Discover Us
          </h3>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-widest drop-shadow-xl font-sans">
            Why Us
          </h1>
        </div>
      </section>

      {/* Reinventing Learning */}
      <section className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-6 uppercase">
            Reinventing Learning
          </h1>
          <p className="text-gray-600 text-[15px] text-justify leading-relaxed mb-12">
            At JG University, experiential and immersive learning is at the core. The programmes offered aim to prepare students to solve real-world problems using technology, creativity and innovation. Our pedagogy is co-designed with industry stalwarts; the curriculum is focused on employability, enhancing soft & hard skills and exposure to real-life projects across various industries. The objective is to ensure students are ready for tomorrow's workplace by creating <b>Whole Brain Change Makers</b> - technologically sound professionals, creative thinkers, and socially conscious citizens who will strive to lead changes in the industry and society.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-pink-50 border border-pink-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between text-center gap-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-extrabold text-gray-800 w-full md:w-[45%]">
                Bringing Arts and Science Together
              </h3>
              <div className="hidden md:block w-px h-16 bg-pink-200"></div>
              <div className="md:hidden h-px w-16 bg-pink-200"></div>
              <h3 className="text-xl font-extrabold text-gray-800 w-full md:w-[45%]">
                Synthesizing Creativity and Logic
              </h3>
            </div>
            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between text-center gap-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-extrabold text-gray-800 w-full md:w-[45%]">
                Merging Intuition and Rationality
              </h3>
              <div className="hidden md:block w-px h-16 bg-purple-200"></div>
              <div className="md:hidden h-px w-16 bg-purple-200"></div>
              <h3 className="text-xl font-extrabold text-gray-800 w-full md:w-[45%]">
                Blending Emotions and Analytics
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50 border-y border-gray-200" id="vision">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-8">
              <h1 className="text-3xl font-extrabold text-black mb-4 uppercase">
                Vision
              </h1>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                Enabling students to explore infinite possibilities to become global change leaders with appropriate skills and values.
              </p>
              
              <h1 className="text-3xl font-extrabold text-black mb-4 uppercase mt-8">
                Mission
              </h1>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                To impart World Class Education to Enable, Empower and Enrich the youth to be ethically & socially responsible practitioners of tomorrow.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-center">
              <img 
                src="/images/vision.jpg" 
                alt="vision" 
                className="w-full max-w-[250px] rounded-full shadow-lg border border-gray-100 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-12 text-center uppercase">
            Advantages
          </h1>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-6 mb-12">
            {advantages.map((adv, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-2 group">
                <div className="w-20 h-20 mb-4 transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105">
                  <img src={adv.img} alt={adv.title} className="w-full h-full object-contain drop-shadow-sm" />
                </div>
                <h3 className="text-[15px] font-extrabold text-gray-800 leading-snug">
                  {adv.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center border-t border-gray-100 pt-8 mt-4">
            <p className="text-gray-600 text-[15px] leading-relaxed font-medium">
              These advantages provide students the freedom to innovate and experiment with new things. Along with earning a degree, students will also become independent, self-assured, and career-ready.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
