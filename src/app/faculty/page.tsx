
import React from 'react';

const facultyData = [
  {
    "image": "/images/aarti-1.jpg",
    "name": "Dr. Aarti Shah",
    "school": "School of Commerce",
    "desc": "Dr. Aarti shah is a Ph.D holder. Apart from being a Statistics faculty at JG University, she has worked with other institutions and colleges and has an overall experience of 27 years in teaching."
  },
  {
    "image": "/images/delnaz-1.jpg",
    "name": "Dr. Delnaz Jokhi",
    "school": "School of Commerce",
    "desc": "Dr. Delnaz Jokhi is a Ph.D holder in Commerce Stream and has 19 years of teaching experience. She is an associate professor at JG group of Colleges. Her doctoral research is an interdisciplinary study titled ‘Revealing the Impact of the Demographic Transition on Economic Growth and the Stock Market of India in the Post Liberalization Era’. She has also published many other research papers in the field of Statistics. She has keen knowledge in subjects like Statistics and Operations Research, Business Research Methods etc."
  },
  {
    "image": "/images/dinesh-1.jpg",
    "name": "Prof. Dinesh Patel",
    "school": "School of Commerce",
    "desc": "Prof. Dinesh Patel is a PhD Scholar and an Assistant Professor of Economics at JG College of Commerce. He has 12 years of teaching experience and has published research papers and books in the areas of economics. He has interest in teaching subjects like Economics, International Economics, Financial Economics, Public Finance, etc."
  },
  {
    "image": "/images/hitesh-1.png",
    "name": "Dr. Hitesh Harwani",
    "school": "School of Management",
    "desc": "Dr. Hitesh Harwani holds a Ph.D degree and is an assistant professor at JG Institute of Business Administration. He has 16 years of teaching experience and a deep knowledge in finance related subjects including Growth and Structure of Industries, Fundamentals of Financial Management, Business Environment, Mercantile Law, Industrial and Labour Law, Strategic Management, Advanced Financial Management, etc."
  },
  {
    "image": "/images/harshil-1%20(1).jpg",
    "name": "CA CPA Harshil Trivedi",
    "school": "School of Commerce",
    "desc": "Harshil Trivedi is a Chartered Accountant and Certified Public Accountant from the USA. He has worked with renowned firms like Deloitte and MBAF (Currently known as “BDO”). He is the co-founder of Phoenix Institute. Apart from being a faculty at JG University and Phoenix Institute, he has taken lectures at various levels. He has been teaching US CPA and US CMA to various professionals since 2017."
  },
  {
    "image": "/images/jaydeep-1.jpg",
    "name": "Prof. Jaydeepsinh Rathod",
    "school": "School of Computing",
    "desc": "Prof. Jaydeepsinh Rathod holds a master degree in Information Technology and is an assistant professor at JG College of Computer Science. He has 11 years of teaching experience. He is also keen on conducting workshops to provide knowledge to students on topics that are related to computer applications. Apart from being a part of academics, he is also part of extra activities like Green, Safe and clean campus. He is into research development and has written papers on relevant topics. He has good tracking skills for subjects like Cloud Computing, Search Engine Optimization, Web-based technologies, Mobile Technologies, Open Source Technologies with CMS, Data Analytics."
  },
  {
    "image": "/images/jigar-1.jpg",
    "name": "Dr. Jigar Aggarwal",
    "school": "School of Commerce",
    "desc": "Dr. Jigar Aggarwal is B.Com, M.Com, MPhil and a Ph.D holder. He is an associate professor of accountancy at JG group of colleges. Apart from having 21 years of teaching experience, he is also a research guide and has published research papers. He is also a guest lecturer in different colleges and universities. He has a keen interest in teaching in the area of accounting including subjects like Accountancy, Corporate Accounting, Cost Accounting, Auditing, Management Accounting, etc."
  },
  {
    "image": "/images/megha-1.jpg",
    "name": "Dr. Megha Bhatt",
    "school": "School of Commerce",
    "desc": "Dr. Megha Bhatt is a Ph.D holder and currently is an assistant professor of Economics at JG group of colleges. She has around 20 years of teaching experience and has also published many papers in the field of Economics and have been rewarded for the same. She also wrote many books on economic topics. She has a keen knowledge in subjects like Microeconomics, Macroeconomics, Managerial Economics, Business Economics, Industrial Economics, etc."
  },
  {
    "image": "/images/faculty/minnie-mattheew.jpg",
    "name": "Dr. Minnie Mattheew",
    "school": "School of Commerce",
    "desc": "Dr. Minnie Mattheew is Ph.D qualified and Director of JG Institute of English and Professional Studies. She has worked as a teacher for 24 years, and throughout that time, she has produced a number of publications. She is also invited to judge many extracurricular and curricular activities at various colleges and institutions. She has authored a few books in the field of literature. Additionally, she was honoured and given the coveted Dr. APJ Abdul Kalam Lifetime Achievement Award in 2020."
  },
  {
    "image": "/images/mona-1.jpg",
    "name": "Dr. Mona Shah",
    "school": "School of Computing",
    "desc": "Dr. Mona Shah is a Ph.D in Computer Science and is an assistant professor at JG group of Colleges. She has 17 years of total teaching experience. Handles multiple subjects like Statistical Method, Data Structure Practical, Programming in C,OSOA Practical,Advanced  C Language,FOS,OOCP, Database Administration, DBMS-II,Data mining and Data warehouse, Linux scripting prcatical, Internet and HTML practical, Dynamic HTML etc."
  },
  {
    "image": "/images/faculty/n-ravichandran.jpg",
    "name": "Dr. N Ravichandran",
    "school": "Chairperson to the Academic Advisory Board",
    "desc": "Dr. N Ravichandran is the Chairman of the Academic Advisory Board at JG University. Apart from his contributions to JG University he is renowned Professor at Indian Institute of Management Ahmedabad (IIMA) in the areas of Operation Management and Quantitative Techniques. Adding to his impressive resume he holds a PhD from Indian Institute of Technology. Dr N Ravichandran has formerly served as Director of the Indian Institute of Management Indore (IIMI) where he flagged the prestigious Five-year Integrated Management Programme."
  },
  {
    "image": "/images/namika-1.png",
    "name": "Dr. Namika Patel",
    "school": "School of Management",
    "desc": "Dr. Namika Patel is a Ph.D scholar and principal of school of management, JG group of colleges. She has overall experience of 20 years in the field of teaching. She has expertise in subjects like Principles of Management, Human Resource Management, Organizational Behavior, Advanced Human Resource Management. She is also an active member of groups for curriculum development. Apart from being an academician, she is also involved in extracurricular activities conducted on different levels."
  },
  {
    "image": "/images/niku-1.jpg",
    "name": "Prof. Niku Brahmbhatt",
    "school": "School of Computing",
    "desc": "Prof. Niku Brahmbhatt holds a master degree in Computer Applications and is an assistant  professor at JG group of colleges. She has to total 22 years of teaching experience. She has a expertise teaching in subjects like OSOA, HTML, DHTML, DBMS-I, COAM, DS, OOCP using C++, Fundamentals of Operating System,Core Java,Web Application Development-I using C#Software Testing."
  },
  {
    "image": "/images/nirali-1.jpg",
    "name": "Prof. Nirali Kansara",
    "school": "School of Computing",
    "desc": "Prof. Nirali Kanasara holds a bachelors and master's degree in computer application. Has 12 years of experience in the teaching field. She has a expertise in subjects like C++, C#.Net, VB. Net, Computer Network, Intro. Emerging Technologies, HTML, DBMS, E-Commerce , Software Testing, MS Office."
  },
  {
    "image": "/images/pratik-1%20(1).jpg",
    "name": "Dr. Pratik Darji",
    "school": "School of Management",
    "desc": "Dr. Pratik Darji holds a Ph.D in Management and is already a professor at JG group of colleges. He has had around 10 years of teaching experience and has a vast knowledge in subjects like Forms of Business Organisation, Marketing Management, Indian Financial System, International Business, Production and Operation Management, Advanced Marketing Management, Research Methodology etc."
  },
  {
    "image": "/images/pushpa-1.jpg",
    "name": "Dr. S Pushpalatha",
    "school": "School of Computing",
    "desc": "Dr. Pushpalatha S is currently associated with JG College of Computer Applications, Ahmedabad as a Director. Having 18+ years of academic experience in post-graduation and under-graduation levels. Completed Ph.D in the area of Machine Learning with various research paper publications which are indexed in SCOPUS and SCI journals. Trained post-graduate students to meet industrial demands for their final placement in top MNCs. Area of interest includes Machine Learning, Big Data Analytics, Web Designing and Open-source Technologies with its framework. Passionate to learn and acquire knowledge in upcoming technologies."
  },
  {
    "image": "/images/sanjay-1.png",
    "name": "Dr. Sanjay Christian",
    "school": "School of Management",
    "desc": "Dr. Sanjay Earnest Christian (B.Sc., M.Sc., M. Phil and Ph.D.) is an Assistant Professor of Statistics at JG Institute of Business Administration, an experienced and accomplished educator with 15 years of dedicated experience in teaching the subject of Statistics to UG students (B. Com, B.Sc., Pharmacy (Bio-Statistics), BBA, BCA) and PG students (Ayurveda). His passion for teaching Statistics and Data Analysis has driven him to contribute significantly to the academic community through his research papers and presentations. His research covers diverse topics, such as Statistical Quality Control, Acceptance Sampling, Hypothesis Testing&nbsp;and&nbsp;more"
  },
  {
    "image": "/images/parag-1.png",
    "name": "CA Parag Soni",
    "school": "School of Commerce",
    "desc": "With over 17 years of experience, CA Parag Soni is a practicing chartered accountant. He has a total of 19 years of teaching experience, including courses in management accounting, financial accounting, taxation, and more. He has published newsletters and books on taxation in addition to his work as an academic."
  },
  {
    "image": "/images/drumil-1.jpg",
    "name": "Ar. Drumil Gajjar",
    "school": "School of Interior Design",
    "desc": "Ar. Drumil is Masters in Furniture Design from Florence, Italy. Currently, Apart from being Interior Design Faculty at JG University, He is practicing as an architect and Graduated from Indus University, Ahmedabad, Gujarat, India in 2017. Every nice creation starts with imagination followed by dedication and Architecture has given him the freedom to think beyond imagination and express his ideas by creating a world with the fact of reality. He is an architect and persuaded specialization in furniture design from Florence Institute of Design International, Italy. His exposure to Spain, Morocco, Bhutan, and Italy has led him to focus on elevating human senses through Space design.  He has worked as a project architect on a few projects based in Gujarat and is currently in the transit of setting up his own practice. He also did workshops in rammed earth architecture in Morocco as well as in Spain in 2016. In interiors, his focus inclines towards the details of a product or furniture aiming at finesse towards execution."
  },
  {
    "image": "/images/urvi-1.jpg",
    "name": "Dr. Urvi Gajjar",
    "school": "School of Commerce",
    "desc": "Dr. Urvi Gajjar holds a Ph.D degree. She has around 6 years of experience in teaching in subjects like accounting and auditing. She is also an assistant professor at JG group of colleges."
  },
  {
    "image": "/images/vaibhav-1.jpg",
    "name": "Dr. Vaibhav Shah",
    "school": "School of Management",
    "desc": "Dr. Vaibhav Shah holds a Ph.D in Statistics and has done his M. Phil and M.Sc. in Statistics. He has 22 years of experience and expertise in teaching subjects like quantitative aptitude and techniques, operation research, mathematics, statistics, google data studio, data analytics, and Bio-Statistics. He has been a faculty member with ICAI, ICSI, and K S School of Management teaching professional students application-based use of mathematical and statistical tools. He has a keen interest in research and has multiple presentations and publications to his credit."
  },
  {
    "image": "/images/vishva-1.jpg",
    "name": "Dr. Vishwa Deuskar",
    "school": "School of Commerce",
    "desc": "Dr. Vishwa Deuskar holds a Ph.D degree and teaches accounting and management related subjects at the university. She has published different research papers and has been a part of the teaching team for the past 6 years."
  },
  {
    "image": "/images/pavan-1.jpg",
    "name": "Prof. Pavan Dhodia",
    "school": "School of Commerce",
    "desc": "Prof. Pavan Dhodia is a distinguished professional with a master's degree in commerce, coupled with a commendable six years of experience in the field. His educational background has equipped him with a strong foundation in commerce, while his extensive work experience has allowed him to develop practical skills and insights into the industry."
  },
  {
    "image": "/images/vishvas-1.jpg",
    "name": "Dr. Vishvas Shah",
    "school": "School of Commerce",
    "desc": "Dr. Vishvas Shah is an accomplished individual in the field of education, possessing a Ph.D in accountancy. With several years of experience in the industry, he has made significant contributions to the field. In addition to his doctorate, Dr. Shah holds a Masters degree in commerce, further enhancing his expertise in the subject. He also has a good command on Direct and Indirect Tax, adding depth to his knowledge and skills. His academic achievements are not limited to his degrees as he has also written several noteworthy papers in the field of commerce."
  },
  {
    "image": "/images/faculty/diwakar-kumar.jpg",
    "name": "Mr. Diwakar Kumar",
    "school": "School of Management",
    "desc": "Mr. Diwakar Kumar has submitted his Ph.D. thesis at the Centre for Studies in Science, Technology, and Innovation Policy at the Central University of Gujarat. He is a highly accomplished individual with a diverse educational background. Having obtained a MA degree in Tribal Law and Governance from the Central University of Jharkhand and an M.Phil. in Science, Technology, and Innovation Policy from the Central University of Gujarat, he has expertise in Public Policy, Science, Technology, and Society Studies, Rural Sociology, Agricultural Innovations in food production in the era of climate change, Extension Education a tool for Public Engagement in Science and Technology, Sociology of Science an approach to solve the present challenges related to livelihood generation and natural resource management."
  },
  {
    "image": "/images/faculty/manali-jain.jpg",
    "name": "Prof. Manali Jain",
    "school": "School of Management",
    "desc": "Prof. Manali Jain is a Ph.D. scholar specializing in commerce. With a Master's degree in commerce and over 5 years of teaching experience, she possesses a strong foundation in the field. Her expertise lies in finance, strategic management, investment, and insurance, offering a wide range of knowledge and insights to her students and colleagues. Prof. Jain's educational background, combined with her practical experience, enables her to provide valuable guidance in the key areas of finance with management."
  },
  {
    "image": "/images/faculty/hardik-panchmatia.jpg",
    "name": "CS. Hardik Panchmatia",
    "school": "School of Management",
    "desc": "CS. Hardik Panchmatia, a Ph.D. scholar, holds multiple degrees in management, commerce, and law. He started his journey in academics at IIMA and has experience of working as an Academic Associate for over 4 years. He is a qualified CS and serves as a faculty at JG University, where he imparts knowledge on various diverse fields. Additionally, he shares his expertise as a visiting faculty at several other esteemed colleges and institutes."
  },
  {
    "image": "/images/faculty/nilesh-taware.jpg",
    "name": "Prof. Nilesh Taware",
    "school": "School of Computing",
    "desc": "Prof. Nilesh Taware is a highly skilled professional with a Master's degree in Computer Applications and over 12 years of experience in the same field. His expertise encompasses a range of subjects, including Android, UI Development, Design &amp; Analysis of Algorithms, Java, PHP, HTML5, and Bootstrap."
  },
  {
    "image": "/images/faculty/niki-sharma.jpg",
    "name": "Dr. Niki Sharma",
    "school": "School of Management",
    "desc": "Dr. Niki Sharma holds a Ph.D. degree in Commerce, supplemented by her successful completion of her Masters in Commerce and clearing the GSET exam. With over five years of dedicated teaching experience, she serves as a prominent faculty member at JG University. Beyond her role at the university, she has held esteemed positions at various other institutes and universities. Notably, her contributions include impactful research papers focused on GST and the Indian Economy, further enriching her impressive qualifications."
  },
  {
    "image": "/images/faculty/meenaxi-malla.jpg",
    "name": "Prof. Meenaxi Malla",
    "school": "School of Computing",
    "desc": "With a master's degree in Computer Application, Prof. Meenaxi boasts more than 3 years of extensive experience in the field. Her proficiency spans across Technical Analysis, Cyber Security and web development. Beyond her role as a faculty member at JG University, she has garnered awards from various other institutions. Notably, she has been honored as a Woman of Special Recognition and proudly serves as a Country Ambassador for the Japan Youth Summit."
  },
  {
    "image": "/images/faculty/hetal-gadhavi.jpg",
    "name": "Prof. Hetal Gadhavi",
    "school": "Librarian",
    "desc": "Prof. Hetal Gadhavi is a dedicated Ph.D. Scholar and holds a master's degree in Library and Information Science, along with a PGDCA. She has been honored with a gold medal for achieving the top position in the university. With over 9 years of comprehensive experience, she has skillfully led as the Head of the Library Department. Her academic endeavors also encompass research paper authorship, delving into topics such as Academic Library Functions in research and Reference Management Software Tools. Her unwavering commitment to library management and inspiring students and youth to embrace reading establishes her as an exemplary role model."
  },
  {
    "image": "/images/faculty/janvi.jpg",
    "name": "Prof. Janvi Solanki",
    "school": "School of Computing",
    "desc": "Prof. Janvi Solanki holds a master degree in Computer Applications. Her expertise are in the subjects like Web Design Technologies, Python Programming, Network &amp; Cyber Security, Cloud Computing, Machine Learning, Big Data Tools.She is also a Infosys certified ITIL Foundation Associate, ServiceNow Administrator, Python Associate."
  },
  {
    "image": "/images/faculty/shreya-pota.jpg",
    "name": "Prof. Shreya Pota",
    "school": "School of Computing",
    "desc": "Prof. Shreya Pota is a Ph.D. scholar who holds master's degrees in both performing arts and commerce, with a specialization in statistics. With over five years of valuable teaching experience, she has established herself as an expert in her field. In addition to her current position as a faculty member at JG University, Prof. Shreya has also contributed her expertise to other prestigious institutions and universities, further enhancing her reputation as an accomplished educator."
  },
  {
    "image": "/images/faculty/shreyas-trivedi.jpg",
    "name": "Prof. Shreyas Trivedi",
    "school": "School of Computing",
    "desc": "Prof. Shreyas is a proficient Front End Developer skilled in HTML, CSS, JavaScript, Bootstrap, and ReactJS, with a foundation in Python. With a portfolio of successful web projects, Excelling in creating user-friendly and visually appealing websites, Prof. Shreyas is dedicated to staying updated with industry trends and is a valuable asset for any team as in JG University."
  },
  {
    "image": "/images/faculty/jaini-shah.jpg",
    "name": "Prof. Jaini Shah",
    "school": "School of Management",
    "desc": "Prof. Jaini Shah is a dedicated and accomplished scholar currently pursuing her Ph.D. in Accountancy at Gujarat University, building upon a strong academic foundation. Holding a Master's degree in Commerce, she has not only excelled in her studies but has also proven her expertise by qualifying for the UGC NET in Commerce, showcasing her commitment to academic excellence. Driven by her passion for research, she has contributed significantly to the field, with her research papers published in reputed UGC CARE journals. Her active engagement in the academic community is further demonstrated by her participation in conferences, where she presented two insightful papers, enriching the discourse on her chosen subject matter. Jaini Shah experience as an Assistant Professor at various universities underscores her pedagogical prowess and her ability to impart knowledge effectively."
  },
  {
    "image": "/images/faculty/sanjana-jayswal.jpg",
    "name": "Prof. Sanjana Jayswal",
    "school": "School of Computing",
    "desc": "Prof. Sanjana Jayswal holds a master degree in computer application from Nirma University, earning distinctions in her studies. During her time at Nirma University, she served as a placement coordinator. Prof. Sanjana also gained valuable experience as an RPA Developer at Adani Group, demonstrating proficiency in HTML, JavaScript, database management, web development, and Robotic Process Automation."
  },
  {
    "image": "/images/faculty/mohammad-afsar.jpg",
    "name": "Prof. Afsar Mohammad",
    "school": "School of Engineering",
    "desc": "Prof. Afsar Mohammed holds a master's in science with physics as a major from IIT-Jodhpur, where he completed his Master's project in Computational Physics. With a wealth of expertise in data science, coding, artificial intelligence, and machine learning, he has become a notable figure in these fields. Additionally, he is the recipient of a certificate in Full Stack Data Science with Python, which was awarded by the MSME Technology Development Center."
  },
  {
    "image": "/images/faculty/kartik-mundra.jpg",
    "name": "Prof. Kartik Mundra",
    "school": "School of Management",
    "desc": "Prof. Kartik Mundra is a Ph.D Scholar and holds a master's degree in commerce and in business administration, accumulating over 13 years of extensive teaching experience. In addition to his teaching background, he possesses valuable business experience that enhances his depth of knowledge. Apart from being a distinguished faculty member at JG University, he imparts his knowledge and expertise at various esteemed educational institutions. He also has been awarded as THE BEST FACULTY from other prestigious institutes. His areas of specialization encompass Economics, Strategic Communication, Entrepreneurship, Principles of Management, Human Resource Management."
  },
  {
    "image": "/images/nil mevada (1).jpg",
    "name": "Prof. Nil Mevada",
    "school": "School of Computing",
    "desc": "Prof. Nil Mevada, holds a master's degree in Computer Science within the IT field, possesses a diverse skill set including proficiency in MySQL, SQLite, Firebase, Kotlin, Dart, Swift, Python, Flutter, and ReactNative, demonstrating his versatility in various technologies. He has actively contributed to projects such as e-commerce apps, showcasing his practical experience alongside his academic background. In addition to his tenure as a faculty member at JG University, he has also held positions at other reputable university, highlighting his commitment to advancing education across different institutions."
  },
  {
    "image": "/images/divyesh vala.jpg",
    "name": "Prof. Divyesh Vala",
    "school": "School of Aviation &amp; Hospitality",
    "desc": ""
  },
  {
    "image": "/images/jayesh nair (1).jpg",
    "name": "Prof. Jayesh Nair",
    "school": "School of Aviation &amp; Hospitality",
    "desc": ""
  },
  {
    "image": "/images/Sumit bhat.jpg",
    "name": "Prof. Sumit Bhat",
    "school": "School of Engineering",
    "desc": ""
  },
  {
    "image": "/images/vikas shukla.jpg",
    "name": "Prof. Vikas Shukla",
    "school": "School of Engineering",
    "desc": ""
  },
  {
    "image": "/images/Rajeshsingh rajput.jpg",
    "name": "Prof. Rajeshsingh Rajput",
    "school": "School of Aviation &amp; Hospitality",
    "desc": ""
  },
  {
    "image": "/images/gaurav Brahmbhatt.jpg",
    "name": "Prof. Gaurav Brahmbhatt",
    "school": "School of Aviation &amp; Hospitality",
    "desc": ""
  },
  {
    "image": "/images/purvi panchal.jpg",
    "name": "Prof. Purvi Panchal",
    "school": "School of Aviation &amp; Hospitality",
    "desc": ""
  },
  {
    "image": "/images/Rima Shah.jpg",
    "name": "Prof. Rima Shah",
    "school": "School of Aviation &amp; Hospitality",
    "desc": ""
  },
  {
    "image": "/images/Mitali-2.png",
    "name": "Prof. Mitali Shah",
    "school": "School of Management",
    "desc": ""
  },
  {
    "image": "/images/Devangi-2.png",
    "name": "Devangi Patel",
    "school": "School of Computing",
    "desc": ""
  },
  {
    "image": "/images/divya-2.png",
    "name": "Divya Mudaliar",
    "school": "School of Computing",
    "desc": ""
  },
  {
    "image": "/images/Javani-2.png",
    "name": "Javani Shah",
    "school": "School of Computing",
    "desc": ""
  },
  {
    "image": "/images/Jyotsna-2.png",
    "name": "Jyotsna Khatri",
    "school": "School of Computing",
    "desc": ""
  },
  {
    "image": "/images/Janet-2.png",
    "name": "Janet Joseph",
    "school": "School of Management",
    "desc": ""
  },
  {
    "image": "/images/Rutuja-2.png",
    "name": "Rutuja Dhaigude",
    "school": "School of Computing",
    "desc": ""
  }
];

export default function FacultyPage() {
  return (
    <main className="min-h-screen bg-white">

      <section className="relative h-[290px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/partnership.jpg"
            alt="partnership"
            className="w-full h-full object-cover object-center brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center pt-8">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-widest drop-shadow-xl font-sans">
            Our Faculty Members
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-6 space-y-10">
          {facultyData.map((f, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-8 border-b border-gray-200 pb-10 last:border-0">
              <div className="w-full md:w-1/4 flex-shrink-0">
                <img 
                  src={f.image} 
                  alt={f.name} 
                  className="w-full max-w-[200px] h-auto rounded-full mx-auto md:mx-0 object-cover shadow-sm border border-gray-100" 
                />
              </div>
              <div className="w-full md:w-3/4 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-1 flex flex-col md:flex-row md:items-center gap-1 md:gap-3 font-sans">
                  {f.name}
                  {f.school && (
                    <span className="text-red-700 text-lg font-semibold">
                      {f.school}
                    </span>
                  )}
                </h3>
                {f.desc && (
                  <p className="text-gray-600 text-justify leading-relaxed mt-3 font-sans text-[15px]">
                    {f.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
