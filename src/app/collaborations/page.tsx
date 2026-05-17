import React from 'react';

export default function CollaborationsPage() {
  const domains = [
    { img: "/images/c1.png", title: "Cyber Security" },
    { img: "/images/c2.png", title: "Artificial Intelligence & Machine Learning" },
    { img: "/images/c6.png", title: "HealthTech" },
    { img: "/images/c3.png", title: "Fintech" },
    { img: "/images/c4.png", title: "Global Entrepreneurship" },
    { img: "/images/c7.png", title: "InfoTech Management" },
    { img: "/images/c5.png", title: "Data Science and Business Analytics" }
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Hero Banner */}
      <section className="relative h-[290px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/collaborations.jpg"
            alt="Collaborations"
            className="w-full h-full object-cover object-center brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center pt-8">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-widest drop-shadow-xl font-sans">
            Collaborations
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-black uppercase">
              Study in India and International Students
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center mb-16">
            <div className="md:col-span-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-4">
                JG and Carleton University
              </h2>
              <p className="text-gray-600 text-justify leading-relaxed text-[15px]">
                Carleton University is a comprehensive university located in the Capital of Canada, Ottawa, Ontario. It offers 65 programs in areas as diverse as public affairs, journalism, film studies, engineering, high technology and international studies. Carleton university has more than 2,800 professors and staff members and 28,000 students. Carleton’s creative, interdisciplinary, and global approach to research has led to many significant discoveries and creative works in science and technology, business, governance, public policy, and the arts.
                <br /><br />
                The Canada-India Centre for Excellence (CICE) at Carleton University is partnering with JGUNI to offer CICE joint certificates to students.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-center">
              <div className="border border-gray-200 p-2 rounded-xl shadow-sm bg-white">
                <img 
                  src="/images/canada-india.jpg" 
                  alt="Canada-India Centre for Excellence" 
                  className="w-full h-auto rounded-lg object-contain"
                />
              </div>
            </div>
          </div>

          {/* Domains Section */}
          <div className="border-t border-gray-100 pt-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold text-black">
                Training courses will be from multiple domains
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {domains.map((domain, idx) => (
                <div key={idx} className="flex flex-col items-center text-center max-w-[200px] w-full p-4">
                  <div className="w-24 h-24 flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110">
                    <img src={domain.img} alt={domain.title} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-[17px] font-extrabold text-gray-800 leading-tight">
                    {domain.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center max-w-4xl mx-auto">
            <p className="text-gray-600 text-[15px] leading-relaxed font-medium">
              The world is getting increasingly smaller as new technologies emerge, and educational institutions must keep up with the pace. We plan to initiate a student exchange programme at JGUNI to enhance and enrich your educational experience.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
