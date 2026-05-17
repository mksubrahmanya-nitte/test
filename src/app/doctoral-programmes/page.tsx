import React from 'react';

export default function DoctoralProgrammesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[290px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/phd-programmes.jpg"
            alt="Doctoral Programmes"
            className="w-full h-full object-cover object-center brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center pt-8">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-widest drop-shadow-xl font-sans">
            Doctoral Programmes
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white max-w-[1140px] mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Ph.D Seat Matrix</h2>
        <p className="text-gray-600 mb-8 whitespace-pre-wrap">
          {`The candidate must have passed the Master’s Degree examination in Arts/Commerce/Social Sciences/Humanities/Computing/Education (if the bachelor’s degree is obtained in 10+2+3 pattern) with 55% or equivalent CGPA at postgraduate level. The candidates who have obtained the Bachelor’s degree with Honors (in 10+2+4 pattern) and have passed a one-year Master’s degree Examination (two semesters) with 55% or equivalent CGPA, are also eligible to apply for admission.

*SC, ST, EWS and PwD candidates will be given a relaxation of 5%.

The Bachelor’s and Master’s Degree must be from universities or institutions recognized by the MHRD/ UGC/Government of India or any University incorporated by an Act of Central or State legislature in India.
The candidates with professional qualifications like CA/CS etc. can also apply for admission even if they do not possess master’s degree. However, such candidates shall also take entrance test followed by Group Discussion and Personal Interview.

*SC, ST, EWS and PwD candidates will be given a relaxation of 5%.

The University will administer its own PhD entrance test followed by Group Discussion and Viva for admission to doctoral programme.
The candidates who have cleared NET/SLET or possess a valid MPhil degree and whose admission at MPhil level has been through an entrance test will be exempted from the entrance test. However, the final admission rests on their performance in Group Discussion and Viva.
The final admission to the programme is subject to the availability of a valid proof substantiating the academic achievements and credentials of the candidate. The decision of the authorities at School of Research, JG University regarding eligibility of any candidate shall be regarded as final.`}
        </p>
      </section>
    </main>
  );
}
