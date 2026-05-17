
'use client';
import React, { useState } from 'react';

const faqData = [
  {
    "id": "tab1",
    "title": "About",
    "items": [
      {
        "question": "Q: Why should I consider JG University over any other established university?",
        "answer": "JG University is a Technology-Driven University with a strong industry tie-up enabling us to design programmes that evolve as per the future industry demands and thus enabling students to get into employment or self-employment seamlessly. Our faculty includes both academic and industry experts. Our curriculum combines self-paced classroom interactions, hands-on projects, capstone projects, and internships, with 24/7 global teaching assistance."
      },
      {
        "question": "Q: What is the affiliation of JG University? Is JG University UGC approved?",
        "answer": "JG University is UGC approved state-private university, established under the Gujarat Private University Act, 2009, sponsored by the ASIA Charitable Trust (ACT). ACT has been in the field of education since 1965, successfully managing 17 colleges and 3 schools."
      },
      {
        "question": "Q: Where is JG University located?",
        "answer": "JG University’s main campus is located at Asia Campus on Drive-In Road in Ahmedabad. It is situated in the center of the city and has quick access to the metro and other local transportation. We also have our city campus located at Navrangpura, Ahmedabad."
      },
      {
        "question": "Q: What are the salient features of JG university?",
        "answer": "<p>The Salient features of JG university are as follows:</p>\n                                    <ul class=\"list-dot\">\n                                        <li>National Education Policy (NEP) 2020 &amp; UGC compliant programmes</li>\n                                        <li>Faculty members with industry experience and academic expertise</li>\n                                        <li>Collaboration with foreign universities for curriculum, delivery, and student exchange</li>\n                                        <li>Hands-on experience and industry Use-Cases using emerging technology</li>\n                                        <li>Full pay on-the-job training programmes</li>\n                                        <li>Cross-cultural and cross-sectoral internship</li>\n                                        <li>Course-embedded Capstone projects</li>\n                                        <li>24*7 accessibility of facilities to students and faculty members</li>\n                                    </ul>"
      },
      {
        "question": "Q: Which are the various departments of the university?",
        "answer": "There are 6 schools at JG University: School of Computing, the School of Commerce, School of Design, School of Engineering, School of Management, School of Emerging Technology and School of Research. We provide undergraduate, postgraduate, integrated and doctoral programmes under these schools."
      },
      {
        "question": "Q: Does JG university follow National Education Policy(NEP) 2020? If yes,what are the benefits of following NEP 2020?",
        "answer": "Yes,JG university follows the provisions of NEP 2020.NEP allows students to take multiple entry and exit options without losing any credits. This will allow students to build their own degree."
      },
      {
        "question": "Q: What is the credit system at JG University?",
        "answer": "At JG University Choice based credit system is followed. The choice-based credit system provides a 'cafeteria' approach in which the students can take courses of their choice, learn at their own pace, undergo additional courses, and acquire more than the required credits."
      },
      {
        "question": "Q: What is the examination and evaluation system at JG University?",
        "answer": "JG University focuses on both formative and summative assessment. Generally, students will be assessed through quizzes, assignments, capstone projects, internships, and mid-term and end-term exams."
      },
      {
        "question": "Q: How are the programmes delivered at JG University?",
        "answer": "The courses will be delivered offline through classroom interaction. We provide an interdisciplinary and multidisciplinary approach to learning. Students will gain corporate experience along with their studies through Capstone projects, Industry Immersion programmes, and Summer Internship Programmes. Our Industry Adoption Programmes will enable students to get into employment or self-employment seamlessly."
      },
      {
        "question": "Q: What are the hostel facilities available?",
        "answer": "There are several options for PG/hostel accommodation close to the university; we can assist in finding the right one for you."
      },
      {
        "question": "Q: Is there basic medical guidance/facilities available at JG University?",
        "answer": "Yes, there are medical guidance/facilities available at JG University."
      }
    ]
  },
  {
    "id": "tab2",
    "title": "Admissions",
    "items": [
      {
        "question": "Q: When will admission for Under Graduate and Post Graduate programmes open?",
        "answer": "Applications for the 2023-2024 admissions for Undergraduate and Postgraduate programmes are now open. You can apply online or visit our campus."
      },
      {
        "question": "Q: When will admission for Ph.D programme open?",
        "answer": "Applications for the 2023-2024 admissions for Ph.D programme are now open. You can apply online or visit our campus."
      },
      {
        "question": "Q: How can I get detailed information about the programmes running at JG university?",
        "answer": "You can request detailed information about our programmes by filling out our <a href=\"enquire.html\"> enquiry form.</a>   .You can also visit our campus as well. Our counselors will provide you with the required information about the programmes"
      },
      {
        "question": "Q: Can I visit JG university’s campus before applying for admission?",
        "answer": "Yes, in fact, we recommend that you visit the campus before applying for admission. Our counsellors will guide you through the programmes. Please book your visiting slot at +91 75677 56759, +91 75677 56758."
      },
      {
        "question": "Q: How can I apply for Admission to JG University?",
        "answer": "Please register on JG University’s website to create your user account. You will receive an auto-generated email with your login information. Use this login information to <a href=\"admission-open.html\"> apply.</a> You can also visit our campus and we will guide you through the admissions process. Please refer to the <a href=\"admission.aspx\"> admissions </a>section for details."
      },
      {
        "question": "Q: Are offline admission applications accepted?",
        "answer": "Yes, offline applications are accepted. You can visit our campus and our counselors will guide you through the admission process"
      },
      {
        "question": "Q: Whom do I contact for admission and programme-related queries?",
        "answer": "You can connect with our counsellors via phone or Whatsapp at +91 75677 56759,+91 75677 56758, or write us at <a href=\"mailto:connect@jguni.in\">connect@jguni.in</a>"
      },
      {
        "question": "Q: How can I check my admission status?",
        "answer": "You are advised to keep checking your user account on our application portal for the latest updates. Once the admission status is announced, you will get an email notification on your registered email id. To know your admission status, please log in to the application portal."
      }
    ]
  },
  {
    "id": "tab3",
    "title": "Under Graduate",
    "items": [
      {
        "question": "Q: Why enroll in our UnderGraduate(UG) Programmes?",
        "answer": "At JG University, we provide industry-relevant education. Our faculty includes both academic and industry experts. Our curriculum combines self-paced classroom interactions, hands-on projects, capstone projects, and internships, with 24/7 global teaching assistance."
      },
      {
        "question": "Q: Which are the UG Programmes provided at JG University?",
        "answer": "<p>The UG Programmess at JG University are as follows</p>\n                                    <ul class=\"list-dot\">\n                                      <li> BCA </li>\n                                      <li> BCA(Hons)</li>\n                                      <li> iMsc(IT)</li>\n                                      <li> iMCA</li>\n                                      <li> B.Com</li>\n                                      <li> B.Com(Hons)</li>\n                                      <li> B.Design-Fashion</li>\n                                      <li> B.Design(hons)-Fasion</li>\n                                      <li> B.Design-Interior Design</li>\n                                      <li> B.Design (Hons)-Interior Design</li>\n                                      <li> BBA</li>\n                                      <li> BBA(Hons)</li>\n                                      <li> iMBA</li>\n                                      <li> B.Tech - Computer Science &amp; Engineering</li>\n                                      <li> B.Tech - Information Technology</li>\n                                        \n                                    </ul>"
      },
      {
        "question": "Q: Can I know the fees for the UG programmes?",
        "answer": "For fees, kindly visit the respective programmes on our <a href=\"index.html\"> website.</a>"
      },
      {
        "question": "Q: What is the eligibility criteria to apply for our Undergraduate programmes?",
        "answer": "A student who has passed his higher secondary (10+2) examination of any stream from a recognized education board is eligible to seek admission to the Undergraduate Programme. For detailed eligibility criteria kindly visit the respective programmes on the website."
      },
      {
        "question": "Q: Is it possible to apply before the grade XII final /board exam score?",
        "answer": "Yes, Students can apply before obtaining their grade XII final/ board exam results.We provide provisional admission to students who are eligible."
      },
      {
        "question": "Q: What is the flair of UG programmes?",
        "answer": "The undergraduate programmes are based on provisions of the National Education Policy.JG has a cutting-edge curriculum that blends liberal studies and technology. Along with classroom-based lectures, the programme also includes experiential and hands-on learning components such as case studies, lab assignments, projects, industry visits, capstone projects, and internships."
      },
      {
        "question": "Q: Are multiple entry-exit options available for students?",
        "answer": "JG University follows provisions of the National Education Policy 2020. As per NEP Guidelines, multiple entry and exit options are allowed. So exit after 1 year – Certificate |2 years – Diploma programme|3 years – Degree programme|4 years – Honors programme| 5 years - Masters programme"
      },
      {
        "question": "Q: Will I get research opportunities at JG University?",
        "answer": "Yes, JG University offers students research opportunities through research-based projects that will enable them to cultivate analytical and critical thinking skills, and expand their knowledge and understanding beyond the classroom."
      },
      {
        "question": "Q: What are the specialization requirements for students pursuing programmes under the school of management?",
        "answer": "<ul class=\"list-dot\">\n                                    <li>Specializations at the School of Management are as follows: Marketing, Business Analytics, Finance, HR, Entrepreneurship</li>\n                                    <li>For undergraduate programmes i.e. BBA and iMBA: Students need to choose one major and one minor specialization during the third year of the programme</li>\n                                   </ul>"
      },
      {
        "question": "Q: What are the specialization requirements for students pursuing programmes under the school of commerce?",
        "answer": "<p>  The specialization for the school of commerce are the following: </p>\n                                    <ul class=\"list-dot\">\n                                    <li>Advanced Accounting and Management Practices</li>\n                                  </ul>"
      },
      {
        "question": "Q: What are the Track offered under the School of Computing?",
        "answer": "<p>Track offered in BCA, iMSc(IT), iMCA are</p>\n                                  <ul class=\"list-dot\">\n                                    <li> Advanced web application development</li>\n                                        <li>  Advanced object oriented technology</li>\n                                            <li>  Mobile application development</li>\n                                                <li>  Internet of Things (IoT)</li>\n\n                                  </ul>"
      },
      {
        "question": "Q: What are the Track offered under the School of Engineering?",
        "answer": "<p>Track offered in B.Tech - Computer Science &amp; Engineering, B.Tech - Information Technology are</p>\n                                    <ul class=\"list-dot\">\n                                        <li>Advanced Algorithms and Analysis </li>\n                                        <li>User Experience Design</li>\n                                        <li>Net-Centric Programming</li>\n                                        <li>Introduction to Game Theory</li>\n                                        <li>Big Data Analytics</li>\n                                    </ul>"
      },
      {
        "question": "Q: What are the Electives offered under the School of Design?",
        "answer": "<p>Electives offered in B.Design - Interior, B.Design - Fashion are:</p>\n                                  <p>B.Design (Hons) - fashion\n                                </p>\n                                  <ul class=\"list-dot\">\n                                    <li>Western Gowns</li>\n                                    <li>Indian Ethnic wear</li>\n                                    <li>Denim wear</li>\n                                    <li>Knitwear</li>\n                                    \n                                  </ul>\n                                  <p>B.Design (Hons) - interior\n                                </p>\n                                  <ul class=\"list-dot\">\n                                     <li>Film Making</li>\n                                     <li>Stop Motion</li>\n                                     <li>Photoshop</li>\n                                     <li>Digital Rendering</li>\n                                     <li>Illustrator</li>\n                                     <li>Product Detailing</li>\n\n                                  </ul>\n                                  <ul class=\"list-dot\">\n                                    <li></li>\n                                  </ul>\n                                  <ul class=\"list-dot\">\n                                    <li></li>\n                                  </ul>"
      }
    ]
  },
  {
    "id": "tab4",
    "title": "Post Graduate",
    "items": [
      {
        "question": "Q: Why enroll in our Post Graduate (PG) Programmes?",
        "answer": "At JG University, we provide industry-relevant education. Our faculty includes both academic and industry experts. Our curriculum combines self-paced classroom interactions, hands-on projects, capstone projects, and internships, with 24/7 global teaching assistance."
      },
      {
        "question": "Q: Which are the PG Programmes provided at JG University?",
        "answer": "<p>The PG Programmes provided at JG University are as follows</p>\n                                    <ul class=\"list-dot\">\n                                        <li>M.Com(Hons)</li>\n                                        <li>MBA</li>\n                                        <li>MSc(IT)</li>\n                                        <li>MCA </li>\n                                    </ul>"
      },
      {
        "question": "Q: What is the eligibility criteria to apply for our PG Programmes?",
        "answer": "The candidate must hold a Bachelor’s Degree with at least 45% marks or an equivalent CGPA in any discipline. The Bachelor’s degree or equivalent qualification obtained by the candidate must entail a minimum of three years of education after completing higher secondary schooling (10+2) or equivalent. For detailed eligibility criteria kindly visit the respective programmes on the website."
      },
      {
        "question": "Q: Do applicants need to appear for any entrance exam before applying to PG Programmes?",
        "answer": "Students applying for master-level programmes such as MBA &amp; MCA will have to clear entrance exams such as CMAT or JG University’s Entrance Test(JGET). For detailed eligibility criteria, visit the respected programmes on the website."
      },
      {
        "question": "Q: Can I know the fees for the PG programmes?",
        "answer": "For fees, kindly visit the respective programmes on our <a href=\"index.html\"> website.</a>"
      },
      {
        "question": "Q: What is the flair of the PG programmes?",
        "answer": "The postgraduate programmes are based on provisions of the National Education Policy. Along with classroom-based lectures, the programme also includes experiential and hands-on learning components such as case studies, lab assignments, projects, industry visits, capstone projects, and internships"
      },
      {
        "question": "Q: What are the specialization requirements for students pursuing programs under the school of management?",
        "answer": "<ul class=\"list-dot\">\n                                    <li>Specializations at the School of Management are as follows: Business Analytics, Finance, HR, Marketing, and Entrepreneurship </li>\n                                    <li>For MBA, Students need to choose one major and one minor specialization during the second year of the programme</li>\n                                  </ul>"
      },
      {
        "question": "Q: What specialization is offered in M.Com(Hons) programme?",
        "answer": "The M.com(Hons) programme is offered with a specialization in US Accounting &amp; Taxation."
      },
      {
        "question": "Q: Are there any opportunities for research with a PG Programme?",
        "answer": "Yes, JG University offers students research opportunities through research-based projects that will enable them to cultivate analytical and critical thinking skills, and also expand their knowledge and understanding beyond the classroom."
      },
      {
        "question": "Q: What are the Track offered under the School of Computing?",
        "answer": "<p>Track offered in MCA and MSc(IT) are</p>\n                                    <ul class=\"list-dot\">\n                                        <li>Mobile Programming</li>\n                                        <li>Web Programming</li>\n                                        <li>Data Science </li>\n                                        <li>Internet of Things(IoT) </li>\n                                    </ul>"
      }
    ]
  },
  {
    "id": "tab6",
    "title": "Doctoral Programme(Ph.D)",
    "items": [
      {
        "question": "Q: What are the areas of research at JG University?",
        "answer": "<p>The areas of research provided at JG University are</p>\n                               <ul class=\"list-dot\">\n                                <li>Commerce </li>\n                                <li>Management</li>\n                                <li>Computing</li>\n                                <li>Interdisciplinary</li>\n                               </ul>"
      },
      {
        "question": "Q: What is the eligibility criteria to apply for doctoral programmes(Ph.D)?",
        "answer": "The candidate must have passed the Master’s Degree examination in Arts/Commerce/Social Sciences/Humanities/Computing/Education (if the bachelor’s degree is obtained in 10+2+3 pattern) with 55% or equivalent CGPA at postgraduate level. The candidates who have obtained the Bachelor’s degree with Honors (in 10+2+4 pattern) and have passed a one-year Master’s degree Examination (two semesters) with 55% or equivalent CGPA, are also eligible to apply for admission. For detailed eligibility criteria kindly visit the <a href=\"doctoral-programmes.html\"> Ph.D programme</a> on our website."
      },
      {
        "question": "Q: When can I apply for a Ph.D programme at JG University?",
        "answer": "Students are admitted twice every year. The online application process for the July semester starts in February and the online application process for the January semester starts in September."
      },
      {
        "question": "Q: What is the Entrance procedure for Ph.D Programme at JG University?",
        "answer": "The University will administer its own JG University PhD entrance test(JGET) followed by Group Discussion and Viva for admission to doctoral programme."
      },
      {
        "question": "Q: On what basis is a candidate selected for a Ph.D programme at JG University?",
        "answer": "<p>Following parameters are considered for selection to a Ph.D programme at JG University:</p>\n                               <ul class=\"list-dot\">\n                                <li>Score in the JG University Entrance Test(JGET)</li>\n                                <li>Overall academic achievement</li>\n                                <li>The statement of purpose presented by the candidate</li>\n                                <li>The potential of the purported research to contribute to existing body of knowledge</li>\n                               </ul>"
      },
      {
        "question": "Q: I have completed my M.Phil. Will I be exempted from the Ph.D entrance test?",
        "answer": "The candidates who have cleared NET/SLET or possess a valid MPhil degree and whose admission at MPhil level has been through an entrance test will be exempted from the entrance test. However, the final admission rests on their performance in Group Discussion and Viva."
      },
      {
        "question": "Q: Am I assigned a guide by the university?",
        "answer": "A candidate is assigned a Guide by the University after admission to the PhD programme. Appointment of a Guide is based on availability of an eligible guide , candidate's area of research and candidate's preference as given by him/her in a form after having met all the eligible guides of the university after joining the programme."
      },
      {
        "question": "Q: Can I opt for a job and also be eligible for a full-time Ph.D programme?",
        "answer": "Yes, as long as you attend coursework classes regularly and maintain attendance and submit your coursework on time, you may engage yourself in a job with knowledge of your guide."
      },
      {
        "question": "Q: What are the fees for the Ph.D programme at JG University?",
        "answer": "Kindly visit the <a href=\"doctoral-programmes.html\"> Ph.D programme</a> on our website and get the full details."
      }
    ]
  },
  {
    "id": "tab5",
    "title": "Financial Assistance and Refund Policy",
    "items": [
      {
        "question": "Q: Does JG University provide scholarships?",
        "answer": "JG University offers merit cum means scholarships to help deserving students achieve their academic goals. For more information visit the <a href=\"admission.aspx\" target=\"_blank\">Admission</a>  page"
      },
      {
        "question": "Q: If I choose not to join the programme, will I get the admission deposit back?",
        "answer": "The university will refund the admission deposit if the request is received before the specified date."
      },
      {
        "question": "Q: Are EMI options available at JG University?",
        "answer": "You can refer to our <a href=\"admission.aspx\">Admission</a>  guidelines for the EMI options."
      }
    ]
  }
];

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<string>(faqData[0]?.id || '');
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenItem(openItem === idx ? null : idx);
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Hero Banner */}
      <section className="relative h-[290px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/faq-banner.jpg"
            alt="faq"
            className="w-full h-full object-cover object-center brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center pt-8">
          <h3 className="text-white text-lg md:text-xl font-bold tracking-widest uppercase mb-2 drop-shadow-md">
            Discover Us
          </h3>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-widest drop-shadow-xl font-sans">
            FAQs
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-10 uppercase">
            Frequently Asked Questions
          </h1>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-gray-200 mb-8">
            {faqData.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveTab(category.id);
                  setOpenItem(null);
                }}
                className={`px-6 py-3 font-semibold text-[15px] transition-colors duration-200 ${
                  activeTab === category.id
                    ? 'text-red-700 border-b-2 border-red-700 bg-gray-50'
                    : 'text-gray-600 hover:text-red-700 hover:bg-gray-50'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="w-full">
            {faqData.find(c => c.id === activeTab)?.items.map((item, idx) => (
              <div key={idx} className="border border-gray-200 mb-4 rounded-md overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-colors focus:outline-none"
                >
                  <span className="font-bold text-gray-800 pr-4">{item.question}</span>
                  <span className="text-xl text-gray-500 font-light flex-shrink-0">
                    {openItem === idx ? '−' : '+'}
                  </span>
                </button>
                {openItem === idx && (
                  <div 
                    className="px-6 py-5 bg-white text-gray-600 text-[15px] leading-relaxed border-t border-gray-100"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
