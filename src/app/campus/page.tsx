import React from 'react';

export default function CampusPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Hero Banner matching live site */}
      <section className="relative h-[290px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/campus-banner.jpg"
            alt="Campus Banner"
            className="w-full h-full object-cover object-center brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center pt-8">
          <h3 className="text-white text-lg md:text-xl font-bold tracking-widest uppercase mb-2 drop-shadow-md">
            JG University
          </h3>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-widest drop-shadow-xl font-sans">
            Campus
          </h1>
        </div>
      </section>

      {/* Main Campus Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-4 uppercase">Campus</h1>
          <p className="text-gray-600 text-justify mb-10 leading-relaxed">
            The university's main campus is located at Asia Campus on Drive-In Road in Ahmedabad. It is situated in the centre of the city and has quick access to the metro and other local transportation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-xl overflow-hidden shadow-md">
               <img src="/images/campus/3.jpg" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" alt="campus" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
               <img src="/images/CRM08261.JPG" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" alt="campus" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-red-700 p-4 mb-3 flex items-center justify-center">
                <img src="/images/lab.png" className="w-10 h-10 object-contain" alt="IIoT Lab" />
              </div>
              <p className="font-bold text-gray-800">IIoT Lab</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-red-700 p-4 mb-3 flex items-center justify-center">
                <img src="/images/r&d.png" className="w-10 h-10 object-contain" alt="R&D + Incubation" />
              </div>
              <p className="font-bold text-gray-800">R&D + Incubation</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-red-700 p-4 mb-3 flex items-center justify-center">
                <img src="/images/library.png" className="w-10 h-10 object-contain" alt="Tech-enabled Library" />
              </div>
              <p className="font-bold text-gray-800">Tech-enabled Library</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-red-700 p-4 mb-3 flex items-center justify-center">
                <img src="/images/wi-fi-campus.png" className="w-10 h-10 object-contain" alt="Wi-Fi Enabled Campus" />
              </div>
              <p className="font-bold text-gray-800">Wi-Fi Enabled Campus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Health Facilities */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-black mb-4 uppercase">Health Facilities</h1>
          <p className="text-gray-600 text-justify mb-8 leading-relaxed">
            The university provides essential health support services on campus including medical consultation rooms, a dedicated first-aid and emergency care area, and access to basic diagnostic tools.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white border-b-4 border-red-700 p-6 shadow-sm font-bold text-gray-800 flex items-center justify-center text-center h-full rounded-t-md">Medical Consultation Rooms</div>
            <div className="bg-white border-b-4 border-red-700 p-6 shadow-sm font-bold text-gray-800 flex items-center justify-center text-center h-full rounded-t-md">First-aid Room / Emergency Care Area</div>
            <div className="bg-white border-b-4 border-red-700 p-6 shadow-sm font-bold text-gray-800 flex items-center justify-center text-center h-full rounded-t-md">First-aid Kits</div>
            <div className="bg-white border-b-4 border-red-700 p-6 shadow-sm font-bold text-gray-800 flex items-center justify-center text-center h-full rounded-t-md">Vital Sign Monitors (BP, Pulse Oximeter, Thermometer)</div>
          </div>
        </div>
      </section>

      {/* Facilities For Differently-Abled */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-black mb-4 uppercase">Facilities For Differently-Abled</h1>
          <p className="text-gray-600 text-justify mb-8 leading-relaxed">
            The campus is thoughtfully designed to be inclusive and accessible for differently-abled individuals through structural enhancements and support facilities.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 border-l-4 border-red-700 p-6 shadow-sm font-bold text-gray-800 flex items-center h-full">Campus is Differently Abled Friendly</div>
            <div className="bg-gray-50 border-l-4 border-red-700 p-6 shadow-sm font-bold text-gray-800 flex items-center h-full">Ramps with Handrails at Entrances/Exits and Key Areas</div>
            <div className="bg-gray-50 border-l-4 border-red-700 p-6 shadow-sm font-bold text-gray-800 flex items-center h-full">Accessible Toilets with Grab Bars and Western Commodes</div>
            <div className="bg-gray-50 border-l-4 border-red-700 p-6 shadow-sm font-bold text-gray-800 flex items-center h-full">Elevators/Lifts for Easy Access to All Floors</div>
          </div>
        </div>
      </section>

      {/* Library */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-black mb-4 uppercase">Library</h1>
          <p className="text-gray-600 text-justify mb-8 leading-relaxed">
            A comprehensive and robust library module has been developed within the university’s ERP system, ensuring seamless access to academic resources.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border-t-4 border-red-700 p-6 shadow-sm font-bold text-gray-800 flex items-center justify-center text-center h-full rounded-b-md">ERP Integrated Digital Library Access</div>
            <div className="bg-white border-t-4 border-red-700 p-6 shadow-sm font-bold text-gray-800 flex items-center justify-center text-center h-full rounded-b-md">Academic Journals and Research Material</div>
            <div className="bg-white border-t-4 border-red-700 p-6 shadow-sm font-bold text-gray-800 flex items-center justify-center text-center h-full rounded-b-md">Quiet Reading Areas and Workstations</div>
          </div>
        </div>
      </section>

      {/* Upcoming Campus Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-4 uppercase">Upcoming Campus</h1>
          <p className="text-gray-600 text-justify mb-10 leading-relaxed">
            JG University’s new campus is coming up near Uvarsad, Gandhinagar on the SG Highway – one of the major highways connecting the cities of Ahmedabad and Gandhinagar. The campus is less than 18 kilometers from Ahmedabad Airport and approximately 25 kilometers from Ahmedabad Railway Station. The campus will be equipped with various amenities such as wifi, a multipurpose auditorium, a tech-enabled library, a fitness area, and an incubation and entrepreneurship center to support students' educational and learning needs.
          </p>
          
          <div className="mb-16">
            <div className="rounded-xl overflow-hidden shadow-md max-w-4xl mx-auto">
               <img src="/images/1.png" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" alt="upcoming campus" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-red-700 p-4 mb-3 flex items-center justify-center">
                <img src="/images/lab.png" className="w-10 h-10 object-contain" alt="IIoT Lab" />
              </div>
              <p className="font-bold text-gray-800">IIoT Lab</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-red-700 p-4 mb-3 flex items-center justify-center">
                <img src="/images/r&d.png" className="w-10 h-10 object-contain" alt="R&D + Incubation" />
              </div>
              <p className="font-bold text-gray-800">R&D + Incubation</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-red-700 p-4 mb-3 flex items-center justify-center">
                <img src="/images/library.png" className="w-10 h-10 object-contain" alt="Tech-enabled Library" />
              </div>
              <p className="font-bold text-gray-800">Tech-enabled Library</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-red-700 p-4 mb-3 flex items-center justify-center">
                <img src="/images/wi-fi-campus.png" className="w-10 h-10 object-contain" alt="Wi-Fi Enabled Campus" />
              </div>
              <p className="font-bold text-gray-800">Wi-Fi Enabled Campus</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-red-700 p-4 mb-3 flex items-center justify-center">
                <img src="/images/cinema.png" className="w-10 h-10 object-contain" alt="Multipurpose Auditorium" />
              </div>
              <p className="font-bold text-gray-800">Multipurpose Auditorium</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-red-700 p-4 mb-3 flex items-center justify-center">
                <img src="/images/sports.png" className="w-10 h-10 object-contain" alt="Sports Facility" />
              </div>
              <p className="font-bold text-gray-800">Sports Facility</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-red-700 p-4 mb-3 flex items-center justify-center">
                <img src="/images/fitness.png" className="w-10 h-10 object-contain" alt="Fitness Area" />
              </div>
              <p className="font-bold text-gray-800">Fitness Area</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
