
export interface Specialization {
  name: string;
  desc?: string;
  bg?: string;
  iconBg?: string;
  iconColor?: string;
}

export interface Highlight {
  label: string;
  text: string;
  exitDetails?: string[];
}

export interface Advantage {
  title: string;
  label: string;
  desc: string;
}

export interface ExitOption {
  year: string;
  award: string;
}

export interface Programme {
  slug: string;
  title: string;
  tagline?: string;
  headerSubtitle?: string;
  courseCommencement?: string;
  duration: string;
  fees: string;
  eligibility: string;
  
  eligibilityType?: 'split-boxes' | 'standard';
  eligibilityText?: string[];
  eligibilityOpen?: string;
  eligibilityReserved?: string;
  
  description?: string[];
  image?: string;
  
  specializationsStr?: string[];
  specializationsObj?: Specialization[];
  specializationNote?: string[];
  
  highlightsStr?: string[];
  highlightsObj?: Highlight[];
  
  objectives?: string[];
  outcomes?: string[];
  advantages?: Advantage[];
  
  exitOptions?: ExitOption[];
  certificationLevels?: { level: string; duration: string; fee: string }[];
}

export const programmes: Record<string, Programme> = {
  'bba': {
    slug: 'bba',
    title: 'BBA',
    headerSubtitle: 'Bachelor of Business Administration',
    tagline: 'Whole Brain Change Makers',
    duration: 'BBA - 3 Years / BBA (Hons) - 4 Years',
    courseCommencement: '2024-25 Academic Year',
    fees: '₹ 40,000/- (Forty Thousand Only)',
    eligibility: 'Qualified Class 12 in any discipline',
    eligibilityType: 'split-boxes',
    eligibilityText: [
      "The students seeking admission in BBA | BBA (Hons) shall have passed the HSC examination (10+2) or equivalent from a recognized board",
      "The candidate must have obtained the following minimum aggregate marks (grand total) at the above qualifying examination."
    ],
    eligibilityOpen: '45%',
    eligibilityReserved: '40%',
    description: [
      "JG University’s BBA(Hons) is a 4-year, 8-semester programme that offers an option to take an exit after the third year with a BBA degree. The programme provides comprehensive knowledge in management, incorporating elements of liberal studies and technology. Students gain knowledge and skills through interactive and dynamic classroom sessions and can apply their learnings through capstone projects, industrial immersion programs, and internships.",
      "The faculty members are academic and industry experts who bring their real-world experiences and perspectives to the classroom. The programme also focuses on developing students' problem-solving, critical thinking, and decision-making abilities and fostering an entrepreneurial mindset. Additionally, students are encouraged to develop leadership, communication, and teamwork skills.",
      "The objective of this programme is to create \"Whole Brain Change Makers\" - leaders who are innovative thinkers and socially conscious individuals who bring change to their industries and society."
    ],
    image: '/images/ug-programmes.jpg',
    specializationsObj: [
      { name: "Business Analytics", desc: "Data insights, databases, analytical modeling, and decision tools.", bg: "bg-teal-50/30", iconBg: "bg-teal-50", iconColor: "text-teal-600" },
      { name: "Finance", desc: "Investment analysis, wealth management, treasury, and accounting.", bg: "bg-purple-50/30", iconBg: "bg-purple-50", iconColor: "text-purple-600" },
      { name: "Human Resource Management", desc: "Strategic HR systems, talent retention, and labor relations.", bg: "bg-blue-50/30", iconBg: "bg-blue-50", iconColor: "text-blue-600" },
      { name: "Marketing", desc: "Brand management, customer psychology, sales, and logistics.", bg: "bg-orange-50/30", iconBg: "bg-orange-50", iconColor: "text-orange-600" },
      { name: "Entrepreneurship", desc: "Venture incubation, startup mechanics, planning, and scaling.", bg: "bg-gray-50/30", iconBg: "bg-gray-50", iconColor: "text-gray-600" }
    ],
    specializationNote: [
      "The availability and allotment of BBA | BBA(Hons) specializations/ electives are contingent upon a minimum number of students who apply for the same at the beginning of Semester -3 for each specialization/elective.",
      "A specialization/ elective will only be offered if the class reaches the requisite number of minimum students opting for the same as decided by the university each year at the beginning of Semester - 3.",
      "In case of insufficient request for a particular specialization/elective, the subject allotment will be done by the university on the basis of 'in order of preference' given by the students in Elective Selection Request Form which shall be final and binding."
    ],
    highlightsObj: [
      { label: "Education", text: "Programme designed as per National Education Policy 2020" },
      { label: "Innovative", text: "Innovative curriculum blending Management, Liberal and Technology" },
      { label: "experts", text: "Experiential learning through Industrial internships, boot camps and workshops" },
      { label: "Programme", text: "Course-embedded capstone projects" },
      { label: "practical", text: "Value-based education through Rural Immersion Programme" },
      { label: "teaching", text: "Focus on summative assessment i.e. continuous evaluation throughout the programme" },
      { label: "career", text: "Accelerated career growth with the dedicated career management team" },
      { label: "innovation", text: "Multiple entry and exit options allowed based on National Education Policy:", exitDetails: ["1 year – Certificate", "2 years – Diploma programme", "3 years – Degree programme", "4 years – Honors programme"] }
    ],
    objectives: [
      "Expose the students to the challenges in the emerging competitive business environment in an increasingly globalized world",
      "Develop critical thinking and analytical skills to solve a real-life business problems",
      "Develop evaluation skills for launching new ventures and managing enterprises for growth, development, and diversification",
      "Inculcate among the students the qualities of a dynamic manager, capable of taking various decisions and communicating effectively with different groups of people",
      "Equip for career opportunities in Marketing, Finance, Human Resource Management, Entrepreneurship, and Business Analytics",
      "Explore careers and gain experience through co-op jobs",
      "Develop in students professionalism, leadership, and effective communication skills in order to manage and collaborate in diverse work environments",
      "Develop students as management professionals with the right kind of values, ethics, and attitude required for being socially responsible citizens"
    ],
    outcomes: [
      "Ability to take calculated risks and cope with uncertainties",
      "Acquiring the entire gamut of business management skills",
      "Evaluate different business issues through an integrated approach using technology",
      "Competency to develop feasible business plans using interdisciplinary subject knowledge",
      "Ability to set up, expand, diversify and manage an enterprise successfully",
      "Attain problem-solving, decision making and critical thinking skills to provide viable solutions for business problems",
      "Explain the nature of creativity, and innovations, and translate insights into opportunities and action",
      "Have the ability to work and collaborate as a team member and contribute to achieving team goals",
      "Define, explain and illustrate the foundations of business ethics, and in preparing for citizenship, both local and global"
    ],
    advantages: [
      { title: "Module-Based Learning", label: "Course Commencement", desc: "We strive to make our programmes manageable by dividing it into modules for easy learning" },
      { title: "Cutting Edge Curriculum", label: "Course Commencement", desc: "Latest curriculum developed by experts to provide real-life business exposure to the students" },
      { title: "Campus Network", label: "Campus Network", desc: "Students Are Exposed To Peers From Diverse Backgrounds, Mentors Of Specific Subjects And Practitioners From Specialised Industry." },
      { title: "Exposure to Industry", label: "Exposure to Industry", desc: "Extensive Internships That Aim To Provide Hands-On Experience And Peoples Skills Leading To Market Readiness." },
      { title: "Capstone Projects", label: "Capstone Projects", desc: "Applying Theoretical Knowledge In Practice Makes A Student Confident And Professionally Independent" },
      { title: "Industry Adoption", label: "Industry Adoption", desc: "Employable Opportunities Through Industry Adoption" },
      { title: "Simulation Exercises", label: "Simulation Exercises", desc: "Opportunities For A Holistic Learning Beyond The Confines Of The Curriculum" },
      { title: "Incubation Support", label: "Incubation Support", desc: "Our team acts as an incubation support system for all startups at various stages" },
      { title: "JGiet Status", label: "JGiet Status", desc: "Our Doors Are Always Open For The Life Long Learner In You, With Special Advantage As A Jgiet" }
    ],
    exitOptions: [
      { year: "1 Year", award: "Certificate" },
      { year: "2 Years", award: "Diploma" },
      { year: "3 Years", award: "BBA Degree" },
      { year: "4 Years", award: "BBA (Hons) Degree" }
    ]
  },
  'imba': {
    "slug": "imba",
    "title": "iMBA",
    "tagline": "Innovating for a Better Future",
    "duration": "5 Years",
    "fees": "₹ 40,000 per semester",
    "eligibility": "Pass In 12th Grade",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'ibbambaaht': {
    "slug": "ibbambaaht",
    "title": "Aviation, Hospitality & Travel Management",
    "tagline": "Innovating for a Better Future",
    "duration": "5 Years",
    "fees": "₹ 67,500 per semester",
    "eligibility": "Pass In 12th Grade",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'ibbamba': {
    "slug": "ibbamba",
    "title": "International Trade & Finance",
    "tagline": "Innovating for a Better Future",
    "duration": "5 Years",
    "fees": "₹ 67,500 per semester",
    "eligibility": "Qualified Class 12",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'bba-hons-itrade-finance': {
    "slug": "bba-hons-itrade-finance",
    "title": "International Trade & Finance",
    "tagline": "Innovating for a Better Future",
    "duration": "BBA - 3 Years",
    "fees": "₹ 67,500 per semester",
    "eligibility": "Qualified Class 12 in any discipline",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'bcom': {
    "slug": "bcom",
    "title": "B.Com",
    "tagline": "Innovating for a Better Future",
    "duration": "B.Com - 3 Years",
    "fees": "₹30,000 per semester",
    "eligibility": "Qualified class 12 in any discipline",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'bcom-hons-acca': {
    "slug": "bcom-hons-acca",
    "title": "B.Com (Hons) with ACCA",
    "tagline": "Innovating for a Better Future",
    "duration": "4 Years",
    "fees": "₹ 60,000 per semester",
    "eligibility": "Qualified Class 12 in any discipline",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'bca': {
    "slug": "bca",
    "title": "BCA",
    "tagline": "Innovating for a Better Future",
    "duration": "BCA - 3 Years",
    "fees": "₹ 40,000 per semester",
    "eligibility": "Qualified class 12 in any discipline",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'imca': {
    "slug": "imca",
    "title": "iMCA",
    "tagline": "Innovating for a Better Future",
    "duration": "5 Years",
    "fees": "₹ 40,000 per semester",
    "eligibility": "Qualified Class 12 in any discipline",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'imsc-it': {
    "slug": "imsc-it",
    "title": "iMSc (IT)",
    "tagline": "Innovating for a Better Future",
    "duration": "5 Years",
    "fees": "₹ 37,500 per semester",
    "eligibility": "Qualified class 12 in any discipline",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'bsc-hons-imsc-forensic-science': {
    "slug": "bsc-hons-imsc-forensic-science",
    "title": "Forensic Science & Technology",
    "tagline": "Innovating for a Better Future",
    "duration": "3 - 5 Years",
    "fees": "₹ 45,000 per semester",
    "eligibility": "Qualified Class 12 in any discipline",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'bsc-hons-imsc-cyber-digital-forensic': {
    "slug": "bsc-hons-imsc-cyber-digital-forensic",
    "title": "Cyber & Digital Forensic",
    "tagline": "Innovating for a Better Future",
    "duration": "3 - 5 Years",
    "fees": "₹ 50,000 per semester",
    "eligibility": "Qualified Class 12 in any discipline",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'bsc-hons-imsc-quantum-computing': {
    "slug": "bsc-hons-imsc-quantum-computing",
    "title": "Quantum Computing",
    "tagline": "Innovating for a Better Future",
    "duration": "3 - 5 Years",
    "fees": "₹ 70,000 per semester",
    "eligibility": "Qualified Class 12 in any discipline",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'bsc-hons-imsc-mathematics-computing': {
    "slug": "bsc-hons-imsc-mathematics-computing",
    "title": "Mathematics & Computing",
    "tagline": "Innovating for a Better Future",
    "duration": "3 - 5 Years",
    "fees": "₹ 60,000 per semester",
    "eligibility": "Qualified Class 12 in any discipline",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'bsc-hons-imsc-clinical-embryology': {
    "slug": "bsc-hons-imsc-clinical-embryology",
    "title": "Clinical Embryology & Reproductive Biology",
    "tagline": "Innovating for a Better Future",
    "duration": "3 - 5 Years",
    "fees": "₹ 50,000 per semester",
    "eligibility": "Qualified Class 12 in any discipline",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'bsc-hons-imsc-food-nutrition-lifestyle': {
    "slug": "bsc-hons-imsc-food-nutrition-lifestyle",
    "title": "Food, Nutrition & Lifestyle Science",
    "tagline": "Innovating for a Better Future",
    "duration": "3 - 5 Years",
    "fees": "₹ 40,000 per semester",
    "eligibility": "Qualified Class 12 in any discipline",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'b-tech': {
    "slug": "b-tech",
    "title": "JG University's School of Engineering",
    "tagline": "Innovating for a Better Future",
    "duration": "4 years, 8 semesters",
    "fees": "₹39,375 per semester",
    "eligibility": "Qualified Class 12",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'b-tech-it': {
    "slug": "b-tech-it",
    "title": "JG University's School of Engineering",
    "tagline": "Innovating for a Better Future",
    "duration": "4 years, 8 semesters",
    "fees": "₹39,375 per semester",
    "eligibility": "Qualified Class 12",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'btech-data-science': {
    "slug": "btech-data-science",
    "title": "JG University’s School of Engineering",
    "tagline": "Innovating for a Better Future",
    "duration": "4 Years, 8 semesters",
    "fees": "₹39,375 per semester",
    "eligibility": "Qualified Class 12",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'btech-artificial-intelligence': {
    "slug": "btech-artificial-intelligence",
    "title": "JG University's School of Engineering",
    "tagline": "Innovating for a Better Future",
    "duration": "4 Years, 8 semesters",
    "fees": "₹39,375 per semester",
    "eligibility": "Qualified Class 12",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'btech-cse-ai': {
    "slug": "btech-cse-ai",
    "title": "JG University’s School of Engineering",
    "tagline": "Innovating for a Better Future",
    "duration": "4 Years, 8 semesters",
    "fees": "₹39,375 per semester",
    "eligibility": "Qualified Class 12",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'btech-cse-ai-ml': {
    "slug": "btech-cse-ai-ml",
    "title": "JG University’s School of Engineering",
    "tagline": "Innovating for a Better Future",
    "duration": "4 Years, 8 semesters",
    "fees": "₹39,375 per semester",
    "eligibility": "Qualified Class 12",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'btech-cse-big-data': {
    "slug": "btech-cse-big-data",
    "title": "JG University’s School of Engineering",
    "tagline": "Innovating for a Better Future",
    "duration": "4 Years, 8 semesters",
    "fees": "₹39,375 per semester",
    "eligibility": "Qualified Class 12",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'llb': {
    "slug": "llb",
    "title": "Bachelor of Legislative Law",
    "tagline": "Innovating for a Better Future",
    "duration": "3 Years",
    "fees": "₹ 30,000 per semester",
    "eligibility": "Bachelors",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'mba': {
    "slug": "mba",
    "title": "JG University's School of Management",
    "tagline": "Innovating for a Better Future",
    "duration": "2 Years",
    "fees": "₹42,525 per semester",
    "eligibility": "Bachelor’s degree in any field",
    "specializationsStr": [
        "Important note :\n1. The availability and allotment of MBA specializations/ electives are contingent upon a minimum number of students who apply for the same at the beginning of Semester -3 for each specialization/elective.\n2. A specialization/ elective will only be offered if the class reaches the requisite number of minimum students opting for the same as decided by the university each year at the beginning of Semester - 3\n3. In case of insufficient request for a particular specialization/elective, the subject allotment will be done by the university on the basis of 'in order of preference' given by the students in Elective Selection Request Form which shall be final and binding."
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'mba-international-trade-finance': {
    "slug": "mba-international-trade-finance",
    "title": "International Trade & Finance",
    "tagline": "Innovating for a Better Future",
    "duration": "2 Years",
    "fees": "₹ 65,000 per semester",
    "eligibility": "Bachelor’s degree in any field",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'mahtm': {
    "slug": "mahtm",
    "title": "Aviation, Hospitality & Travel Management",
    "tagline": "Innovating for a Better Future",
    "duration": "2 Years",
    "fees": "₹ 65,000 per semester",
    "eligibility": "Bachelor’s degree in any field",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'mcom': {
    "slug": "mcom",
    "title": "M.Com (Hons)",
    "tagline": "Innovating for a Better Future",
    "duration": "2 Years",
    "fees": "₹ 60,000 per semester",
    "eligibility": "Bachelor’s degree with relevant commerce subjects",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'mca': {
    "slug": "mca",
    "title": "JG University's School of Computing",
    "tagline": "Innovating for a Better Future",
    "duration": "2 Years",
    "fees": "₹40,950 per semester",
    "eligibility": "Bachelor’s Degree in Computer Science or Information Technology",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'msc-cyber': {
    "slug": "msc-cyber",
    "title": "M.Sc.",
    "tagline": "Innovating for a Better Future",
    "duration": "2 Years",
    "fees": "₹ 60,000 per semester",
    "eligibility": "Bachelors Degree",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'msc-forensic': {
    "slug": "msc-forensic",
    "title": "M.Sc.",
    "tagline": "Innovating for a Better Future",
    "duration": "2 Years",
    "fees": "₹ 45,000 per semester",
    "eligibility": "Bachelors Degree",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'msc-clinic': {
    "slug": "msc-clinic",
    "title": "M.Sc.",
    "tagline": "Innovating for a Better Future",
    "duration": "2 Years",
    "fees": "₹ 60,000 per semester",
    "eligibility": "Bachelor of Science with Biological Science, MBBS, BDS, BHMS, BAMS, Nursing, Applied Biological Science",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'metaverse': {
    slug: 'metaverse',
    title: 'Certificate Course in Metaverse',
    tagline: 'Certificate Programme',
    duration: '1 month\n3 months\n3 months',
    fees: 'Bridge Course(1 month) : 10,000/- (Ten Thousand Only)\nIntermediate level Course : 40,000 /- (Forty Thousand Only)\nExpert Level Course : 60,000/- (Sixty Thousand Only)',
    eligibility: 'Non-IT students need to do a bridge course to get into the intermediate level\nStudents with MCA, BCA, M.Sc(IT), B.Sc (IT), B. Tech (CS/ CE) degree\nWorking IT professionals',
    description: [
      "The metaverse is a virtual world where users can interact, engage and create in a shared digital space. It is a combination of virtual reality, augmented reality, and other digital technologies that allow users to experience a parallel world that is not limited by the physical world. The metaverse is expected to be a place where people can socialize, work, learn, and play in a seamless way. It will enable new forms of digital interactions and create new opportunities for businesses, governments, and individuals",
      "Metaverse will open up new possibilities for how we interact with each other, access information, and consume entertainment. It will also create new business opportunities for companies and entrepreneurs to provide new services and products in this digital space. The metaverse is expected to have a significant impact on how we live, work and interact with each other in the future."
    ],
    specializationsStr: ['Core Curriculum'],
    highlightsStr: ['Industry Aligned', 'Practical Training']
  },
  'data-science-ai-ml': {
    slug: 'data-science-ai-ml',
    title: 'Certificate Course in Data Science, AI-ML',
    tagline: 'Certificate Programme',
    duration: '1 month\n3 months\n3 months',
    fees: 'Bridge Course (1 month): 10,000/- (Ten Thousand Only)\nIntermediate level Course: 30,000 /- (Thirty Thousand Only)\nExpert Level Course: 50,000/- (Fifty Thousand Only)',
    eligibility: 'Non-IT students need to do a bridge course to get into the intermediate level\nStudents with MCA, BCA, M.Sc(IT), B.Sc (IT), B. Tech (CS/ CE) degree\nWorking IT professionals',
    description: [
      "Technology is continuously improving with time to get our lives better. Deep learning, natural language processing, and computer vision are examples of technologies that have emerged as a result of the rise of Data Science as a field of research and practical applications in the industry. In general, it has aided the development of Machine Learning (ML) as a means of achieving Artificial Intelligence (AI) & Deep Learning (DL)."
    ],
    specializationsStr: ['Core Curriculum'],
    highlightsStr: ['Industry Aligned', 'Practical Training']
  },
  'mobile-applications': {
    slug: 'mobile-applications',
    title: 'Certificate Course in Mobile Applications',
    tagline: 'Certificate Programme',
    duration: '3 months',
    fees: 'Expert Level Course : 45,000 /- (Forty- five Thousand Only)',
    eligibility: 'Working IT professionals',
    description: [
      "Flutter is an open-source mobile application development framework that allows developers to build high-performance, visually attractive, and responsive mobile apps for iOS and Android platforms. Flutter has a modern and expressive language, Hot Reload feature which allow developers to experiment, build UIs, add features, and fix bugs faster. It also has a rich set of customizable widgets that can be used to build natively compiled applications for mobile, web, and desktop from a single codebase.",
      "React Native is a framework for building mobile applications using JavaScript and the React library. It allows developers to build mobile apps that look and feel like native apps, using the same codebase for both iOS and Android platforms. React Native uses native components, which means that it can access the device's native functionality, such as the camera or GPS, through JavaScript. This allows for faster development and a more seamless user experience. React Native also has a large and active community, which means that developers can find a wealth of resources and support when building their apps."
    ],
    specializationsStr: ['Core Curriculum'],
    highlightsStr: ['Industry Aligned', 'Practical Training']
  },
  'blockchain': {
    slug: 'blockchain',
    title: 'Certificate Course in Blockchain',
    tagline: 'Certificate Programme',
    duration: '1 month\n3 months\n3 months',
    fees: 'Bridge Course(1 month) : 10,000/- (Ten Thousand Only)\nIntermediate level Course : 40,000 /- (Forty Thousand Only)\nExpert Level Course : 70,000/- (Seventy Thousand Only)',
    eligibility: 'Non-IT students need to do a bridge course to get into the intermediate level\nStudents with MCA, BCA, M.Sc(IT), B.Sc (IT), B. Tech (CS/ CE) degree\nWorking IT professionals',
    description: [
      "Blockchain is a decentralized, digital ledger that records transactions across a network of computers. Blockchain technology is expected to enable more secure and transparent financial transactions, as well as provide a more efficient way of tracking and managing supply chains. Blockchain technology is most commonly associated with digital currency, but it has many other potential uses, such as supply chain management, voting systems, digital identity, and others. It can be used in different industries such as finance, healthcare, logistics, and more, to improve transparency, security, and efficiency in various processes.",
      "Blockchain is expected to become a key enabler for creating more efficient, transparent, and secure systems across various industries. Professionals with knowledge and skills in blockchain technology will be in high demand as the technology continues to evolve and gain traction in the coming years."
    ],
    specializationsStr: ['Core Curriculum'],
    highlightsStr: ['Industry Aligned', 'Practical Training']
  },
  'digital-marketing': {
    slug: 'digital-marketing',
    title: 'Certificate Course in Digital Marketing',
    tagline: 'Certificate Programme',
    duration: '1 month\n3 months\n3 months',
    fees: 'Bridge Course(1 month) : 10,000/- (Ten Thousand Only)\nIntermediate level Course : 20,000/- (Twenty Thousand Only)\nExpert Level Course : 40,000/- (Forty Thousand Only)',
    eligibility: 'Non-IT students need to do a bridge course to get into the intermediate level\nStudents with MCA, BCA, M.Sc(IT), B.Sc (IT), B. Tech (CS/ CE) degree\nWorking IT professionals',
    description: [
      "Digital marketing is an ever-evolving field that helps businesses reach and engage with customers in the digital age. It is the practice of promoting products or services using digital channels, such as the internet, social media, email, and mobile apps. Digital marketing allows businesses to reach a global audience with minimal costs and maximum efficiency. The growth of e-commerce has made digital marketing an essential tool for businesses to increase sales and connect with customers.",
      "As the use of digital channels increases, digital marketing professionals are expected to be in high demand, making it an exciting and promising career option.Digital marketers are responsible for creating and implementing marketing strategies that utilize digital channels, such as the internet and social media."
    ],
    specializationsStr: ['Core Curriculum'],
    highlightsStr: ['Industry Aligned', 'Practical Training']
  },
  'cyber-security': {
    slug: 'cyber-security',
    title: 'Certificate Course in Cyber Security',
    tagline: 'Certificate Programme',
    duration: '1 month\n3 months\n3 months',
    fees: 'Bridge Course (1 month) : 10,000/- (Ten Thousand Only)\nIntermediate level Course : 35,000 /- (Thirty-Five Thousand Only)\nExpert Level Course : 80,000/- (Eighty Thousand Only)',
    eligibility: 'Non-IT students need to do a bridge course to get into the intermediate level\nStudents with MCA, BCA, M.Sc(IT), B.Sc (IT), B. Tech (CS/ CE) degree\nWorking IT professionals',
    description: [
      "Nowadays, sensitive information like personal details, credit cards, and bank account details are available on the internet while making various transactions. The studies state that at least 30,000 websites are hacked each day. Hence, Cyber Security measures are significant to protect personal and business-critical information."
    ],
    specializationsStr: ['Core Curriculum'],
    highlightsStr: ['Industry Aligned', 'Practical Training']
  },
  'robotic-process-automation': {
    slug: 'robotic-process-automation',
    title: 'Certificate Course in Robotic Process Automation',
    tagline: 'Certificate Programme',
    duration: '1 month\n3 months\n3 months',
    fees: 'Bridge Course(1 month) : 10,000/- (Ten Thousand Only)\nIntermediate level Course : 40,000 /- (Forty Thousand Only)\nExpert Level Course : 60,000/- (Sixty Thousand Only)',
    eligibility: 'Non-IT students need to do a bridge course to get into the intermediate level\nStudents with MCA, BCA, M.Sc(IT), B.Sc (IT), B. Tech (CS/ CE) degree\nWorking IT professionals',
    description: [
      "Robotic Process Automation (RPA) is a technology that allows organizations to automate repetitive and routine tasks that were previously done by humans. It uses software robots or \"bots\" to mimic human actions and perform tasks such as data entry, processing and analysis, and communication. This allows businesses to increase efficiency, reduce errors, and lower costs.RPA can also improve the customer experience by handling repetitive and time-consuming tasks, allowing human agents to focus on more complex and value-added activities.",
      "The demand for RPA is expected to grow as organizations look for ways to increase efficiency, reduce costs, and improve customer service. The integration of RPA with other technologies such as IoT, big data, and cloud computing will also lead to more advanced automation capabilities. As the technology continues to evolve, businesses that adopt RPA will have a significant advantage in terms of cost savings, efficiency, and customer service. Hence the demand for RPA professionals is expected to grow significantly in the coming years."
    ],
    specializationsStr: ['Core Curriculum'],
    highlightsStr: ['Industry Aligned', 'Practical Training']
  },
  'industrial-iot': {
    slug: 'industrial-iot',
    title: 'Certificate Course in Industrial IoT',
    tagline: 'Certificate Programme',
    duration: '1 month\n3 months\n3 months',
    fees: 'Bridge Course(1 month) : 10,000/- (Ten Thousand Only)\nIntermediate level Course : 35,000 /- (Thirty-Five Thousand Only)\nExpert Level Course : 50,000/- (Fifty Thousand Only)',
    eligibility: 'Non-IT students need to do a bridge course to get into the intermediate level\nStudents with MCA, BCA, M.Sc(IT), B.Sc (IT), B. Tech (CS/ CE) degree\nWorking IT professionals',
    description: [
      "Industrial IoT and Industry 4.0 have created massive shifts in manufacturing that have led to enterprises adopting more agile, smarter, and innovative methods to enhance production with robotics. This has reduced the chance of a process failure causing an industrial accident.",
      "Industrial IoT is fueling the next industrial revolution of intelligent connectivity by bringing digital transformation to the traditional way of doing business in order to improve efficiency and reduce downtime. New-age technologies present promising career opportunities now and in the foreseeable future. For the business to be competitive and ready to take on the challenges of the future, this is the perfect time for students to acquire the skills in IIoT technology for professional growth."
    ],
    specializationsStr: ['Core Curriculum'],
    highlightsStr: ['Industry Aligned', 'Practical Training']
  },
  'full-stack-architect': {
    slug: 'full-stack-architect',
    title: 'Certificate Course in Full Stack Architect',
    tagline: 'Certificate Programme',
    duration: '3 months',
    fees: 'Expert Level Course : 70,000/- (Seventy Thousand Only)',
    eligibility: 'Working IT professionals',
    description: [
      "Full Stack Architecture refers to the structure of a software application that includes all the layers, from the front-end user interface to the back-end infrastructure. It encompasses the design and implementation of various components such as the user interface, business logic, data storage, and infrastructure.",
      "Full Stack Architect is a software professional who is responsible for designing and developing the entire stack of an application, from the front-end user interface to the back-end infrastructure. They work on all the layers of an application, including the user interface, application logic, data storage, and infrastructure.They also work on ensuring that the application is scalable, secure, and maintainable.In the ever-changing technology landscape, the role of Full Stack Architect is becoming increasingly critical for businesses of all sizes due to the increasing demand for software development."
    ],
    specializationsStr: ['Core Curriculum'],
    highlightsStr: ['Industry Aligned', 'Practical Training']
  },
  'azure-devops': {
    slug: 'azure-devops',
    title: 'Certificate Course in Azure DevOps',
    tagline: 'Certificate Programme',
    duration: '1 month\n3 months\n3 months',
    fees: 'Bridge Course(1 month) : 10,000/- (Ten Thousand Only)\nIntermediate level Course : 40,000 /- (Forty Thousand Only)\nExpert Level Course : 70,000/- (Seventy Thousand Only)',
    eligibility: 'Non-IT students need to do a bridge course to get into the intermediate level\nStudents with MCA, BCA, M.Sc(IT), B.Sc (IT), B. Tech (CS/ CE) degree\nWorking IT professionals',
    description: [
      "Azure DevOps is a set of development tools and services that allows organizations to plan, build, test, and deploy software applications. It is a cloud-based platform that provides end-to-end solutions for software development teams, including version control, continuous integration and delivery, and project management.",
      "As organizations increasingly adopt cloud-based services, the demand for Azure DevOps is expected to grow. Organizations that adopt Azure DevOps will have a significant advantage in terms of speed, efficiency, and quality of software delivery. Azure DevOps looks promising as it continues to evolve and integrate with new technologies, and professionals with expertise in the platform will be in high demand."
    ],
    specializationsStr: ['Core Curriculum'],
    highlightsStr: ['Industry Aligned', 'Practical Training']
  },
  'doctoral-programmes': {
    "slug": "doctoral-programmes",
    "title": "Doctoral Programmes",
    "tagline": "Ph.D Seat Matrix - January 2024",
    "duration": "Minimum 3 Years - Maximum 5 Years",
    "fees": "₹ 40,000 per semester",
    "eligibility": "The candidate must have passed the Master’s Degree examination in Arts/Commerce/Social Sciences/Humanities/Computing/Education (if the bachelor’s degree is obtained in 10+2+3 pattern) with 55% or equivalent CGPA at postgraduate level. The candidates who have obtained the Bachelor’s degree with Honors (in 10+2+4 pattern) and have passed a one-year Master’s degree Examination (two semesters) with 55% or equivalent CGPA, are also eligible to apply for admission.\n\n*SC, ST, EWS and PwD candidates will be given a relaxation of 5%.\n\nThe Bachelor’s and Master’s Degree must be from universities or institutions recognized by the MHRD/ UGC/Government of India or any University incorporated by an Act of Central or State legislature in India.\nThe candidates with professional qualifications like CA/CS etc. can also apply for admission even if they do not possess master’s degree. However, such candidates shall also take entrance test followed by Group Discussion and Personal Interview.\n\n*SC, ST, EWS and PwD candidates will be given a relaxation of 5%.\n\nThe University will administer its own PhD entrance test followed by Group Discussion and Viva for admission to doctoral programme.\nThe candidates who have cleared NET/SLET or possess a valid MPhil degree and whose admission at MPhil level has been through an entrance test will be exempted from the entrance test. However, the final admission rests on their performance in Group Discussion and Viva.\nThe final admission to the programme is subject to the availability of a valid proof substantiating the academic achievements and credentials of the candidate. The decision of the authorities at School of Research, JG University regarding eligibility of any candidate shall be regarded as final.",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'btech-computer-engineering': {
    slug: 'btech-computer-engineering',
    title: 'B.Tech Computer Engineering',
    tagline: 'School of Engineering',
    duration: '4 Years',
    fees: 'TBD',
    eligibility: 'Pass in 12th Grade with Physics, Chemistry and Mathematics',
    description: [
      "JG University offers a highly structured, industry-aligned B.Tech programme in Computer Engineering designed to equip students with core fundamentals of computing, software systems, and modern architectural principles.",
      "Please contact admissions for the full course syllabus and admission details."
    ],
    specializationsStr: ['Core Curriculum'],
    highlightsStr: ['Industry Aligned', 'Practical Training']
  }
};

export const programmeAliases: Record<string, string> = {
  'bba.html': 'bba',
  'mba.html': 'mba',
  'bca.html': 'bca',
  'imba.html': 'imba',
  'b-tech.html': 'b-tech',
  'imca.html': 'imca',
  'llb.html': 'llb',
  'bcom.html': 'bcom',
  
  // Calculated dynamic slug mapping
  'bba-bba-hons-': 'bba',
  'integrated-bba-mba': 'ibbamba',
  'integrated-bba-mba-global-business': 'imba',
  'bba-bba-hons-imba': 'imba',
  'b-com-b-com-hons-': 'bcom',
  'b-com-hons-with-acca': 'bcom-hons-acca',
  'bca-bca-hons-': 'bca',
  'integrated-bsc-msc-it-': 'imsc-it',
  'integrated-bsc-msc-it-specialization-': 'imsc-it',
  'b-sc-b-sc-hons-imsc': 'bsc-hons-imsc-forensic-science',
  'integrated-bca-mca': 'imca',
  'b-tech-programs': 'b-tech',
  'bba-bba-hons-international-trade-finance': 'bba-hons-itrade-finance',
  'integrated-bba-mba-aviation-hospitality-travel-management': 'ibbambaaht',
  'integrated-bba-mba-international-trade-finance': 'ibbamba',
  'll-b-': 'llb',

  // Postgraduate calculated dynamic slug mapping
  'masters-in-international-trade-finance': 'mba-international-trade-finance',
  'masters-in-aviation-hospitality-travel-management': 'mahtm',
  'm-com-hons-international-accounting-taxation': 'mcom',
  'mca-ai-full-stack-development': 'mca',
  'msc-it-specialization-': 'imsc-it',
  'msc': 'msc-cyber',
  'll-m-': 'llb'
};

export function getProgrammeData(slug: string): Programme | undefined {
  if (programmes[slug]) return programmes[slug];
  const alias = programmeAliases[slug];
  if (alias && programmes[alias]) return programmes[alias];
  const baseSlug = slug.replace('.html', '');
  if (programmes[baseSlug]) return programmes[baseSlug];
  return {
    slug,
    title: slug.replace(/-/g, ' ').toUpperCase(),
    duration: "TBD",
    fees: "TBD",
    eligibility: "Please contact admissions",
    specializationsStr: ["General"],
    highlightsStr: ["Standard Curriculum"]
  };
}
