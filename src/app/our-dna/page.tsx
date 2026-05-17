import React from 'react';
import Link from 'next/link';

export default function OurDnaPage() {
  return (
    <main className="min-h-screen bg-white font-sans">

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
            Our DNA
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-8">
              <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-6 uppercase">
                Our DNA
              </h1>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                We are a state-private university sponsored by the ASIA Charitable Trust. The University is established under the Gujarat Private University Act, 2009 and received approval in 2019. It is included in the schedule of University Grant Commission (UGC) as a Private University.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <a href="/images/gazette-notification.pdf" target="_blank" className="px-6 py-3 bg-[#6a1b9a] text-white rounded-lg font-bold text-[14px] text-center hover:bg-[#8e24aa] transition-colors shadow-sm">
                  The University Act
                </a>
                <a href="/images/UGC-to-JG-Uni-establishment-of-JG-Uni.pdf" target="_blank" className="px-6 py-3 bg-[#6a1b9a] text-white rounded-lg font-bold text-[14px] text-center hover:bg-[#8e24aa] transition-colors shadow-sm">
                  Establishment of JG University
                </a>
                <a href="https://jguni.in/JG%20University%20Guidelines.html" target="_blank" className="px-6 py-3 bg-[#6a1b9a] text-white rounded-lg font-bold text-[14px] text-center hover:bg-[#8e24aa] transition-colors shadow-sm">
                  Mandatory Disclosure
                </a>
              </div>
            </div>
            <div className="md:col-span-4 flex justify-center mt-8 md:mt-0">
              <img 
                src="/images/about.jpg" 
                alt="about" 
                className="w-full max-w-[280px] rounded-full shadow-lg border border-gray-100 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-8">
              <h1 className="text-2xl md:text-3xl font-extrabold text-black mb-4 uppercase">
                Association of Indian Universities
              </h1>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                JG University has been granted membership by the Association of Indian Universities.<br />
                <a href="https://www.aiu.ac.in/member.php" target="_blank" rel="noopener noreferrer" className="text-red-700 font-bold hover:underline">
                  Click here
                </a> to follow the AIU website.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-center">
              <img 
                src="/images/aiu.png" 
                alt="aiu" 
                className="w-full max-w-[200px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-6 uppercase">
            ASIA Charitable Trust
          </h1>
          <p className="text-gray-600 text-[15px] text-justify leading-relaxed mb-10">
            The Ahmedabad South Indian Association (ASIA) Charitable Trust (ACT) was established in 1965 as a Public Charitable Trust with the aim of promoting, establishing & conducting developmental activities in the field of education. It has established reputed and distinguished learning institutions imparting education from K.G. to P.G. levels in Ahmedabad, the financial capital of Gujarat.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div>
              <a href="https://www.asiaenglishschool.org/" target="_blank" rel="noopener noreferrer" className="block mb-6 overflow-hidden rounded-xl shadow-sm border border-gray-150 group">
                <img src="/images/Asia-sc.jpg" alt="Asia-sc" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
              </a>
              <p className="text-gray-600 text-[15px] text-justify leading-relaxed">
                ACT began with an English medium co-ed school in 1965, and since then it has continued to offer socially relevant education to the student community in Gujarat. It has 3 schools and 17 colleges which offer varied programmes such as Business Administration, Commerce, Computer Applications, Education, Law, Nursing, Physiotherapy, and Performing Arts at Bachelor’s and Master’s levels. Our well-qualified, trained, and experienced faculty have contributed significantly to the academic excellence of the colleges and schools.
              </p>
            </div>
            <div>
              <a href="https://www.jginternationalschool.in/" target="_blank" rel="noopener noreferrer" className="block mb-6 overflow-hidden rounded-xl shadow-sm border border-gray-150 group">
                <img src="/images/jgis.jpg" alt="jgis" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
              </a>
              <p className="text-gray-600 text-[15px] text-justify leading-relaxed mb-6">
                ACT under the Gujarat Private Universities Act, 2009 got permission to sponsor JG University in 2019. JG University is established with the objective to provide Education, Professional Learning, and Research Programmes that create an employable workforce with entrepreneurship and technology at its base. Our university's main campus is located at Asia Campus on Drive-In Road. Our city campus is also our administrative and admission office located at Navrangpura, Ahmedabad.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[14px] text-gray-700 font-medium">
                <li>Asia school : <a href="http://www.asiaenglishschool.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">http://www.asiaenglishschool.org/</a></li>
                <li>JG International School : <a href="http://www.jginternationalschool.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">http://www.jginternationalschool.in/</a></li>
                <li>JG Group of colleges : <a href="http://jgcolleges.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">http://jgcolleges.org/</a></li>
              </ul>
            </div>
          </div>

          <p className="text-gray-600 text-[15px] text-justify leading-relaxed">
            JG University has acquired land in Uvarsad (Gandhinagar), and work for the upcoming campus has been initiated. In addition to educational and learning amenities, the sprawling campus will be wi-fi enabled, equipped with a multipurpose auditorium, and will have a tech-enabled library, fitness area, and an incubation and entrepreneurship center.
          </p>
        </div>
      </section>

      {/* Born to Excel by Choice */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-6 uppercase">
            Born to Excel by Choice
          </h1>
          <p className="text-gray-600 text-[15px] text-justify leading-relaxed mb-8">
            Human civilization has come a long way, changing and improving our quality of life. The world is also changing at a rapid speed. Old frames of thoughts are disappearing faster than the new ones emerging. In today’s world, no two problems are alike. Addressing each issue with a different approach is necessary. How you learn, unlearn and relearn is more important to address a problem than just what you learn.
          </p>
          
          <img src="/images/quote.png" alt="quote" className="mb-8 max-w-full h-auto" />
          
          <p className="text-gray-600 text-[15px] text-justify leading-relaxed mb-8">
            Learning is a continuous process that can enhance the way of thinking. Thinking is a brain function that is continuous even when we are asleep. The brain must be trained to adapt to change so as to think differently. The combined effort of the left and the right side of the brain produces the best results evoking a new way of thinking. Whole brain learning is a model of learning where learners learn a concept by using both parts of the brain and not just the left or the right brain. This is the concept adopted by JG University.
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8 shadow-sm flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/6 flex justify-center">
              <img src="/images/logo.svg" alt="JG Logo" className="w-24 h-auto" />
            </div>
            <div className="w-full md:w-5/6">
              <p className="text-gray-700 text-[15px] leading-relaxed font-medium">
                The Whole Brain Learning approach enables students to identify and solve complex problems. JG University offers a diverse set of subjects for students to choose from. Students, faculty, and mentors work together through an interdisciplinary approach, towards creating a better tomorrow.
              </p>
            </div>
          </div>

          <p className="text-gray-600 text-[15px] text-justify leading-relaxed">
            The learning at JG University transcends domain boundaries. It envisions bringing arts and sciences together, synthesizing creativity and logic, merging intuition and rationality, blending emotions and analytics, combining poetry with maths, and blending art into machines.
          </p>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-6 uppercase">
            Our Philosophy
          </h1>
          <p className="text-gray-600 text-[15px] text-justify leading-relaxed mb-4">
            JG University is founded on the Principles of Openness, Interdisciplinary Approach and Universal Values. It offers learners a fertile space for creativity and imagination. The learning model aims to build a playground for curiosity, emotional well-being, and a strong value system. JG University enables students to pursue diverse interests. Intelligence, emotional and social quotients are equally encouraged at JG University. The University nurtures students to earn not only a livelihood but also respect and recognition.
          </p>
          <p className="text-gray-600 text-[15px] text-justify leading-relaxed font-medium">
            The focus at the University is to develop Whole Brain Change Makers who recognize their potential and value giving back to the community. Come, be part of this journey!
          </p>
        </div>
      </section>
    </main>
  );
}
