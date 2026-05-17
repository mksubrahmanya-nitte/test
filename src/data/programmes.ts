
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
  }
,
  'imba': {
    "slug": "imba",
    "title": "I-MBA Course",
    "tagline": "School of Management",
    "duration": "5 Years",
    "fees": "₹ 60,000/- (Sixty Thousand Only) Last Two Years",
    "eligibility": "Pass In 12th Grade",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ],
    "courseCommencement": "2024-25 Academic Year",
    "eligibilityType": "split-boxes",
    "eligibilityText": [
        "The students seeking admission in Integrated BBA + MBA shall have passed the HSC examination (10+2) or equivalent from a recognized board.",
        "The candidate must have obtained the following minimum aggregate marks (grand total) at the above qualifying examination",
        "For open category candidates 45%",
        "For reserved category candidates 40%"
    ],
    "eligibilityOpen": "50%",
    "eligibilityReserved": "45%",
    "description": [
        "JG University’s Integrated BBA + MBA programme is a 5-year, 10-semester programme that combines undergraduate and graduate-level education in business and management. The curriculum combines liberal studies, management, and technology to offer a comprehensive education to students. The programme begins with foundational courses that give students a solid understanding of basic business and management concepts and skills to connect them. As the programme advances, students will acquire in-depth knowledge in various areas, including Business Analytics, Finance, Human Resource Management, Marketing, and Entrepreneurship. Hands-on and project-based learning are incorporated from the beginning, giving students the opportunity to tackle real-world challenges. Our industrial immersion and summer internship programme will allow students to gain practical experience in a business setting The programme not only prepares students to be effective managers but also develops them as transformational leaders, responsible citizens, and better individuals."
    ],
    "highlightsObj": [
        {
            "label": "Programme",
            "text": "Programme designed as per National Education Policy 2020"
        },
        {
            "label": "Innovative",
            "text": "Innovative curriculum blending Management, Liberal and Technology"
        },
        {
            "label": "Experiential",
            "text": "Experiential learning through Industrial internships, boot camps and workshops"
        },
        {
            "label": "Programme",
            "text": "Programme embedded capstone projects"
        },
        {
            "label": "Value-based",
            "text": "Value-based education through Rural Immersion Programme"
        },
        {
            "label": "Focus",
            "text": "Focus on summative assessment i.e. continuous evaluation throughout the programme"
        },
        {
            "label": "Accelerated",
            "text": "Accelerated career growth with the dedicated career management team"
        },
        {
            "label": "Multiple",
            "text": "Multiple entry and exit options allowed based on National Education Policy"
        },
        {
            "label": "1",
            "text": "1 year – Certificate"
        },
        {
            "label": "2",
            "text": "2 years – Diploma programme"
        },
        {
            "label": "3",
            "text": "3 years – Degree programme"
        },
        {
            "label": "4",
            "text": "4 years – Honors programme"
        }
    ],
    "objectives": [
        "Equip students to become dynamic managers capable of taking various decisions and communicating effectively with different groups",
        "Develop critical thinking and analytical skills in students to solve real-life business problems",
        "Ability to synthesize knowledge in various functional areas in response to current and emerging business challenges",
        "Encourage proactive thinking in order to equip students to perform effectively in the dynamic socio-economic and business ecosystem",
        "Prepare students to deal with complex management-level issues and decision-making by familiarizing them with various areas of management",
        "Equip for opportunities in Business Analytics, Finance  Human resource management, Marketing, and Entrepreneurship",
        "Develop students as management professionals with the right kind of values, ethics, and attitude required for being socially responsible citizens",
        "Ensure students develop teamwork, professionalism, leadership, and effective communication skills to manage and collaborate in diverse work environments"
    ],
    "outcomes": [
        "Attain problem-solving, decision making and critical thinking skills to provide viable solutions for business problems",
        "Ability to set up, expand, diversify and manage an enterprise successfully",
        "Ability to take calculated risks and cope with uncertainties",
        "Develop business skills to make strategic and profitable decisions during challenging business situations",
        "Evaluate different business issues through an integrated approach using technology",
        "Equip students to become dynamic managers capable of taking various decisions and communicating effectively with different groups",
        "Develop in students the ability to evaluate the economic, legal, and business environment",
        "Equip students with interpersonal, communication, and leadership skills",
        "Our Admission process enables us to meticulously give importance to every individual applying. The admission of the applicant will majorly be based on our admission process scores.",
        "[Click Here to Apply Now](https://jguni.in/admission-open.html)",
        "[Contact Us](https://jguni.in/contact-us.aspx)"
    ],
    "specializationsObj": [
        {
            "name": "Business Analytics",
            "desc": "Data insights, analytical modeling, and decision tools.",
            "bg": "bg-blue-50/30",
            "iconBg": "bg-blue-50",
            "iconColor": "text-blue-600"
        },
        {
            "name": "Finance",
            "desc": "Investment analysis, wealth management, and treasury.",
            "bg": "bg-blue-50/30",
            "iconBg": "bg-blue-50",
            "iconColor": "text-blue-600"
        },
        {
            "name": "Human Resource Management",
            "desc": "Strategic HR systems, talent retention, and labor relations.",
            "bg": "bg-blue-50/30",
            "iconBg": "bg-blue-50",
            "iconColor": "text-blue-600"
        },
        {
            "name": "Marketing",
            "desc": "Brand management, customer psychology, and sales.",
            "bg": "bg-blue-50/30",
            "iconBg": "bg-blue-50",
            "iconColor": "text-blue-600"
        },
        {
            "name": "Entrepreneurship",
            "desc": "Venture incubation, startup mechanics, and planning.",
            "bg": "bg-blue-50/30",
            "iconBg": "bg-blue-50",
            "iconColor": "text-blue-600"
        }
    ],
    "advantages": [
        {
            "title": "Module-Based Learning",
            "label": "Module-Based Learning",
            "desc": "We strive to make our programmes manageable by dividing it into modules for easy learning"
        },
        {
            "title": "Cutting Edge Curriculum",
            "label": "Cutting Edge Curriculum",
            "desc": "Latest curriculum developed by experts to provide real-life business exposure to the students"
        },
        {
            "title": "Campus Network",
            "label": "Campus Network",
            "desc": "Students Are Exposed To Peers From Diverse Backgrounds, Mentors Of Specific Subjects And Practitioners From Specialised Industry."
        },
        {
            "title": "Exposure to Industry",
            "label": "Exposure to Industry",
            "desc": "Extensive Internships That Aim To Provide Hands-On Experience And Peoples Skills Leading To Market Readiness."
        },
        {
            "title": "Capstone Projects",
            "label": "Capstone Projects",
            "desc": "Applying Theoretical Knowledge In Practice Makes A Student Confident And Professionally Independent"
        },
        {
            "title": "Industry Adoption",
            "label": "Industry Adoption",
            "desc": "Employable Opportunities Through Industry Adoption"
        },
        {
            "title": "Simulation Exercises",
            "label": "Simulation Exercises",
            "desc": "Opportunities For A Holistic Learning Beyond The Confines Of The Curriculum"
        },
        {
            "title": "Incubation Support",
            "label": "Incubation Support",
            "desc": "Our team acts as an incubation support system for all startups at various stages"
        },
        {
            "title": "JGiet Status",
            "label": "JGiet Status",
            "desc": "Our Doors Are Always Open For The Life Long Learner In You, With Special Advantage As A Jgiet"
        }
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
    "title": "Bcom",
    "tagline": "School of Commerce",
    "duration": "B.Com - 3 Years",
    "fees": "₹30,000/- (Thirty Thousand Only) First Three Years",
    "eligibility": "Qualified class 12 in any discipline",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ],
    "courseCommencement": "2024-25 Academic Year",
    "eligibilityType": "split-boxes",
    "eligibilityText": [
        "The students seeking admission in the B.Com | B.Com (Hons) shall have passed the HSC examination (10+2) or equivalent from a recognized board.",
        "The candidate must have obtained the following minimum aggregate marks (grand total) at the above qualifying exam.",
        "For open category candidates 45%",
        "For reserved category candidates 40%",
        "Advance Accounting and Management Practices",
        "Business Analytics",
        "Principles of Auditing",
        "Practical Auditing"
    ],
    "eligibilityOpen": "50%",
    "eligibilityReserved": "45%",
    "description": [
        "B.Com (Hons) - 4 Years",
        "JG University’s B.Com(Hons) is a 4-year, 8-semester programme that offers an option to take an exit after the third year with a B.Com degree. The programme aims to prepare students to become competent professionals with a comprehensive understanding that effectively operate in a complex business environment. So they can gain expertise in financial accounting, cost and management accounting, auditing, taxation, financial management, banking, financial markets, and services. The faculties are highly experienced professionals and experts, who bring real-world experience and perspectives to the classroom. The capstone projects and industry internships allow students to apply theoretical knowledge in real-world settings and gain valuable hands-on experience. The programme not only focuses on core subjects but also includes the development of soft skills, business skills, and essential technological skills."
    ],
    "highlightsObj": [
        {
            "label": "Programme",
            "text": "Programme designed as per National Education Policy 2020"
        },
        {
            "label": "Innovative",
            "text": "Innovative Curriculum blending Commerce, Liberal Studies and Technology"
        },
        {
            "label": "Experiential",
            "text": "Experiential learning through Industrial internships, bootcamps and workshops"
        },
        {
            "label": "Acquire",
            "text": "Acquire immense knowledge about commerce from Industry experts and Academic Stalwarts"
        },
        {
            "label": "Course-embedded",
            "text": "Course-embedded capstone projects"
        },
        {
            "label": "Focus",
            "text": "Focus on summative assessment i.e. continuous evaluation throughout the programme"
        },
        {
            "label": "Continuous",
            "text": "Continuous mentoring of students for career advancement"
        },
        {
            "label": "Multiple",
            "text": "Multiple entry and exit options allowed based on National Education Policy"
        },
        {
            "label": "1-year",
            "text": "1-year – Certificate"
        },
        {
            "label": "2",
            "text": "2 years – Diploma programme"
        },
        {
            "label": "3",
            "text": "3 years – Degree programme"
        },
        {
            "label": "4",
            "text": "4 years – Honors programme"
        }
    ],
    "objectives": [
        "Develop in-depth knowledge of various concepts of accounting, auditing, taxation and finance.",
        "Analyse and interpret various concepts, theories, and models from the fields of finance, banking, insurance, accounting, taxation, etc",
        "Leverage skills to efficiently manage finances, whether on an individual or business basis",
        "Familiarise students with the challenges of the rising competitive business environment in an increasingly globalized world",
        "Acquire analytical skills in solving real-life business problems",
        "Ability to synthesize knowledge in various functional areas in response to current and emerging business challenges",
        "Develop in students  professionalism, leadership, and effective communication skills in order to manage and collaborate in diverse work environments"
    ],
    "outcomes": [
        "Gain a comprehensive understanding of commerce-related & different dimensions of finance.",
        "Analyze and comprehend the applicability of commerce and accounting principles in solving business problems",
        "Engage in reflective and independent thinking by understanding the concepts in every area of Commerce and Business",
        "Equip students with the everchanging market trends",
        "Make students future-ready professionals who are able to think strategically, communicate effectively, and are digitally adept for the ever-changing corporate world",
        "Cultivate efficient communication & interpersonal skills for better work performance",
        "Regular workshops, talks and interactive sessions with business leaders and industry experts",
        "Monitor student’s conceptual clarity and practical skills on a regular basis",
        "Our Admission process enables us to meticulously give importance to every individual applying. The admission of the applicant will majorly be based on our admission process scores.",
        "[Click Here to Apply Now](https://jguni.in/admission-open.html)",
        "[Contact Us](https://jguni.in/contact-us.aspx)"
    ],
    "advantages": [
        {
            "title": "Module -Based Learning",
            "label": "Module -Based Learning",
            "desc": "Our programmes are segmented into modules to facilitate easy learning"
        },
        {
            "title": "Cutting Edge Curriculum",
            "label": "Cutting Edge Curriculum",
            "desc": "Latest curriculum developed by experts to provide real-life business exposure to the students"
        },
        {
            "title": "Capstone Projects",
            "label": "Capstone Projects",
            "desc": "Applying Theoretical Knowledge In Practice Makes A Student Confident And Professionally Independent"
        },
        {
            "title": "Campus Network",
            "label": "Campus Network",
            "desc": "Students are exposed to peers from diverse backgrounds, mentors of specific subjects, and practitioners from specialized industry"
        },
        {
            "title": "Exposure to Industry",
            "label": "Exposure to Industry",
            "desc": "Industrial Internships help to= develop corporate experience and interpersonal skills"
        },
        {
            "title": "JGiet Status",
            "label": "JGiet Status",
            "desc": "Our doors are always open for the lifelong learner in you, with a special advantage as a JGiet"
        }
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
    "title": "BCA (Hons)~ BCA (Hons)~ BCA Courses",
    "tagline": "School of Computing",
    "duration": "BCA - 3 Years",
    "fees": "₹ 40,000/- (Forty Thousand Only)",
    "eligibility": "Qualified class 12 in any discipline",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ],
    "courseCommencement": "2024-25 Academic Year",
    "eligibilityType": "split-boxes",
    "eligibilityText": [
        "The students seeking admission in the BCA | BCA (Hons) shall have passed the HSC examination (10+2) or equivalent from a recognized board",
        "The candidate must have obtained the following minimum aggregate marks (grand total) at the above qualifying exam.",
        "For open category candidates 45%",
        "For reserved category candidates 40%",
        "- 1Advanced Web Application Development",
        "- 2Advanced Object-Oriented Technology",
        "- 3Open Source Framework",
        "- 4Front End Development"
    ],
    "eligibilityOpen": "50%",
    "eligibilityReserved": "45%",
    "description": [
        "JG University’s BCA(Hons) is a four-year, eight-semester programme that offers an option to take an exit after the third year with a BCA degree. The programme is designed to provide students with a strong computer science and technology foundation and the ability to apply this knowledge to real-world problems. The curriculum includes courses in programming languages, data structures, algorithms, databases, computer networks, and software engineering. Students also gain exposure to emerging technologies such as AI, Machine Learning, Cloud Computing, Cybersecurity, and IoT, giving them an advantage in the job market as these are in-demand skills. The programme focuses on preparing students for the industry by developing their proficiency in the latest computing technologies, with an emphasis on experiential learning through capstone projects, workshops, and industrial internships. Additionally, the programme encourages and guides students to pursue research and development in computer and information technology to keep them updated with the latest innovations and developments in their field."
    ],
    "highlightsObj": [
        {
            "label": "Programme",
            "text": "Programme designed as per National Education Policy 2020"
        },
        {
            "label": "Innovative",
            "text": "Innovative curriculum blending Liberal and Technology"
        },
        {
            "label": "Programme",
            "text": "Programme embedded capstone projects"
        },
        {
            "label": "Experiential",
            "text": "Experiential learning through Industrial internships, boot camps, and workshops"
        },
        {
            "label": "Focus",
            "text": "Focus on research-based learning"
        },
        {
            "label": "Exposure",
            "text": "Exposure to the latest computer technologies and their applications"
        },
        {
            "label": "Practical-based",
            "text": "Practical-based and project-based teaching methodology"
        },
        {
            "label": "Interaction",
            "text": "Interaction with the industry experts through events and seminars"
        },
        {
            "label": "Focus",
            "text": "Focus on summative assessment i.e. Continuous evaluation to monitor students' conceptual clarity and practical skills"
        },
        {
            "label": "Continuous",
            "text": "Continuous mentoring of students for career advancement"
        },
        {
            "label": "Multiple",
            "text": "Multiple entry and exit options allowed based on National Education Policy"
        },
        {
            "label": "1",
            "text": "1 year - Certificate"
        },
        {
            "label": "2",
            "text": "2 years - Diploma programme"
        },
        {
            "label": "3",
            "text": "3 years - Degree programme"
        },
        {
            "label": "4",
            "text": "4 years – Honors programme"
        }
    ],
    "objectives": [
        "Impart a thorough understanding of computer applications by studying topics such as data structures, databases, algorithms, operating systems, and other related topics.",
        "Develop the skills required to work on industry projects across various domains – from database management to app development to networking.",
        "Gain expertise in the latest technologies that are used to create robust software and mobile products",
        "Learn the latest technologies like Data Science, AI-ML, Deep Learning, Blockchain, and IoT that help you solve real-world problems",
        "Impart practical knowledge to students through hands-on experience and industry-related capstone projects",
        "Provide students with opportunities to cultivate teamwork, professionalism, leadership, and communication skills which are vital for effectively working and collaborating in diverse work environments"
    ],
    "outcomes": [
        "Ability to apply knowledge of the latest programming languages, techniques, and skills necessary for designing, developing, and deploying web and mobile applications,",
        "Familiarise students with the basics of computer and technology along with their growing impact on the IT sector industries",
        "Understand Data Science, AI-ML, and Deep Learning concepts in order to design, analyze, and develop solutions to specific industry problems",
        "Gain soft skills and professional ethics, vital for developing efficiency in individual and team performance",
        "Achieve interpersonal, communication, technological, and leadership skills",
        "Regular workshops, talks and interactive sessions with business leaders and industry experts",
        "Monitor student’s conceptual clarity and practical skills on a regular basis",
        "Our Admission process enables us to meticulously give importance to every individual applying. The admission of the applicant will majorly be based on our admission process scores.",
        "[Click Here to Apply Now](https://jguni.in/admission-open.html)",
        "[Contact Us](https://jguni.in/contact-us.aspx)"
    ],
    "advantages": [
        {
            "title": "Module - Based Learning",
            "label": "Module - Based Learning",
            "desc": "Our programmes are segmented into modules to facilitate easy learning"
        },
        {
            "title": "Cutting Edge Curriculum",
            "label": "Cutting Edge Curriculum",
            "desc": "Latest curriculum developed by experts to provide real-life business exposure to the students"
        },
        {
            "title": "Capstone Projects",
            "label": "Capstone Projects",
            "desc": "Applying theoretical knowledge in practice makes a student Confident And Professionally Independent"
        },
        {
            "title": "Campus Network",
            "label": "Campus Network",
            "desc": "Students are exposed to peers from diverse backgrounds, mentors of specific subjects, and practitioners from specialized industry"
        },
        {
            "title": "Exposure to Industry",
            "label": "Exposure to Industry",
            "desc": "Industrial Internships help to develop corporate experience and interpersonal skills"
        },
        {
            "title": "JGiet Status",
            "label": "JGiet Status",
            "desc": "Our doors are always open for the lifelong learner in you, with a special advantage as a JGiet"
        }
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
    "title": "B.Tech Courses",
    "tagline": "School of Engineering",
    "duration": "4 years, 8 semesters",
    "fees": "₹39,375/- (Thirty Nine Thousand Three Hundred and Seventy Five Only) as per FRC",
    "eligibility": "Qualified Class 12",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ],
    "courseCommencement": "2024-25 Academic Year",
    "eligibilityType": "split-boxes",
    "eligibilityText": [
        "The students seeking admission in the B.Tech-Computer Science & Engineering.",
        "Shall have passed the HSC examination (10+2) or equivalent from a recognized board with Physics Chemistry and Mathematics as compulsory subjects.",
        "The candidate must have obtained the following minimum aggregate marks (grand total) at the above qualifying exam.",
        "For open-category candidates 45%",
        "For reserved category candidates 40%",
        "- 1 Full Stack",
        "- 2 Artificial Intelligence & Machine Learning(AI & ML)",
        "- 3 Data Science",
        "- 4 Cyber Security",
        "- 5 Game Design"
    ],
    "eligibilityOpen": "50%",
    "eligibilityReserved": "45%",
    "description": [
        "JG University's School of Engineering B.Tech-Computer Science and Engineering is a 4-year, 8-semester programme designed to equip students with comprehensive knowledge of computer science and information technology and prepare them to be industry ready. The curriculum covers topics such as programming languages, web design, algorithms, operating systems, computer architecture, computer networks, database systems, network and information security, web technologies, software engineering, network and information security, mobile application development, and cloud computing. The faculty members are highly experienced professionals and experts who bring practical experience and perspectives to the classroom. The programme prioritizes experiential learning, through internships, capstone projects, and other hands-on opportunities. The programme emphasizes developing critical thinking, problem-solving, and teamwork skills. which are essential in the IT field."
    ],
    "highlightsObj": [
        {
            "label": "Programme",
            "text": "Programme designed as per National Education Policy 2020"
        },
        {
            "label": "Cutting-edge",
            "text": "Cutting-edge curriculum prepared by experts"
        },
        {
            "label": "Course-embedded",
            "text": "Course-embedded capstone projects"
        },
        {
            "label": "Experiential",
            "text": "Experiential learning through Industrial internships, boot camps, and workshops"
        },
        {
            "label": "Focus",
            "text": "Focus on research-based learning"
        },
        {
            "label": "Exposure",
            "text": "Exposure to the latest computer technologies and their applications"
        },
        {
            "label": "Practical-based",
            "text": "Practical-based and project-based teaching methodology"
        },
        {
            "label": "Interaction",
            "text": "Interaction with industry experts through events and seminars"
        },
        {
            "label": "Focus",
            "text": "Focus on summative assessment i.e. Continuous evaluation to monitor students' conceptual clarity and practical skills"
        },
        {
            "label": "Continuous",
            "text": "Continuous mentoring of students for career advancement"
        }
    ],
    "objectives": [
        "To provide a comprehensive education in computer science and engineering concepts, theories, and practices",
        "To develop problem-solving skills and creativity, so they can apply technology to solve real-world problems",
        "To equip necessary skills to design, develop, and maintain computer software and hardware systems",
        "To impart knowledge of computer networks, operating systems, databases, and other computer systems technologies",
        "To familiarize with emerging technologies, such as artificial intelligence and machine learning, and their potential applications",
        "To prepare students for careers in the computer industry, government, and academia, and to meet the evolving demands of the technology sector",
        "To foster a lifelong passion for learning and an understanding of the ethical and social implications of technology"
    ],
    "outcomes": [
        "Ability of building an opportunity for successful career in the technology industry",
        "Attain problem solving and critical thinking skills",
        "Understanding of computer organization and architecture and design, develop and maintain computer software and hardware systems",
        "Ability to design and analyze algorithms",
        "The ability to contribute to the society by developing new technologies that solve societal problems",
        "Lifelong learning and professional development by keeping up with the evolving technologies",
        "Distinguished professors leading academic excellence through their expertise and dedicated teaching",
        "Cutting-edge learning spaces equipped with advanced technology to enhance interactive and dynamic education",
        "State-of-the-art Lab facilities fostering innovation and scientific breakthroughs at the highest level",
        "Dedicated efforts to ensure students' successful career placement through targeted programs and support",
        "Wide range of global experiences through the programme enabling students to explore diverse cultures and expand their horizons",
        "Our Admission process enables us to meticulously give importance to every individual applying. The admission of the applicant will majorly be based on our admission process scores.",
        "[Click Here to Apply Now](https://jguni.in/admission-open.html)",
        "[Contact Us](https://jguni.in/contact-us.aspx)"
    ],
    "advantages": [
        {
            "title": "JGiet Status",
            "label": "JGiet Status",
            "desc": "Our doors are always open for the life long learner in you, with special advantage as a JGiet"
        }
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
    "title": "Llb",
    "tagline": "School of Law",
    "duration": "3 Years",
    "fees": "₹ 30,000/- (Thirty Thousand Only)",
    "eligibility": "Bachelors",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ],
    "courseCommencement": "2024-25 Academic Year",
    "eligibilityType": "split-boxes",
    "eligibilityText": [
        "The candidate must hold a Bachelor’s Degree in any discipline with at least 45% marks (40% for reserved category) or an equivalent CGPA in any discipline.",
        "The Bachelor’s degree or equivalent qualification obtained by the candidate must entail a minimum of three years of education after completing higher secondary schooling (10+2) or equivalent.",
        "[Click Here to Apply Now](https://jguni.in/llb.html)",
        "- Moot Court Competition",
        "- Focus on summative assessment - Continuous evaluation to monitor students' conceptual clarity and",
        "practical skills",
        "- Continuous mentoring of students for career advancement",
        "- DEMONSTRATE ADEQUATE LEGAL KNOWLEDGE",
        "- DEVELOP ETHICAL REASONING AND PROFESSIONAL BEHAVIOUR",
        "- DEVELOP SUBJECT KNOWLEDGE AND ADEQUATE SKILLS",
        "- Study global legal systems and engage in international law topics, preparing you for a dynamic,",
        "interconnected world",
        "- Access to modern legal databases, libraries, and research tools to support your academic journey.",
        "- Proficiency in legal research, writing, advocacy, and case analysis through hands-on learning experience",
        "- Ability to analyse complex legal issues and construct logical, well-reasoned arguments.",
        "- Strong written and oral communication skills to advocate and advise clients confidently.",
        "- Commitment to ethical practice and professional integrity in all legal matters.",
        "- Experienced Faculty – Learn from seasoned legal professionals",
        "- State-of-the-Art Facilities – Modern classrooms, a well-stocked law library, and digital legal resources",
        "- Industry-Integrated Curriculum – A perfect blend of theoretical knowledge and practical application through case studies and legal research",
        "- Internships & Placement Support – Gain real-world experience through internships at law firms, corporate legal departments, and government agencies",
        "Our Admission process enables us to meticulously give importance to every individual applying. The admission of the applicant will majorly be based on our admission process scores.",
        "[Click Here For More Details](https://jguni.in/admission-open.html)",
        "[Contact Us](https://jguni.in/contact-us.aspx)"
    ],
    "eligibilityOpen": "50%",
    "eligibilityReserved": "45%",
    "description": [
        "JG University’s LL.B. is a 3-year, 6-semester programme designed to provide an in-depth understanding of legal principles, case laws, and the justice system. The curriculum integrates core legal subjects with practical exposure to ensure a well-rounded legal education. Through dynamic classroom sessions, moot courts, legal research projects, and internships, students acquire the analytical and advocacy skills essential for a successful legal career. The faculty consists of legal scholars and practicing professionals who enrich the learning experience with their expertise. The programme emphasizes the development of critical thinking, problem-solving, and ethical decision-making, fostering a sense of justice and social responsibility. Additionally, it enhances leadership, communication, and negotiation skills. The objective of this programme is to shape \"Future Legal Leaders\" – professionals who are not only adept at navigating the complexities of the law but also committed to driving positive change in society."
    ],
    "highlightsObj": [],
    "objectives": [],
    "outcomes": []
},
  'mba': {
    "slug": "mba",
    "title": "MBA Courses",
    "tagline": "School of Management",
    "duration": "2 Years",
    "fees": "₹42,525/- (Fourty-Two Thousand Five Hundred and Twenty Five Only) as per FRC",
    "eligibility": "Bachelor’s degree in any field",
    "specializationsStr": [
        "Important note :\n1. The availability and allotment of MBA specializations/ electives are contingent upon a minimum number of students who apply for the same at the beginning of Semester -3 for each specialization/elective.\n2. A specialization/ elective will only be offered if the class reaches the requisite number of minimum students opting for the same as decided by the university each year at the beginning of Semester - 3\n3. In case of insufficient request for a particular specialization/elective, the subject allotment will be done by the university on the basis of 'in order of preference' given by the students in Elective Selection Request Form which shall be final and binding."
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ],
    "courseCommencement": "2024-25 Academic Year",
    "eligibilityType": "split-boxes",
    "eligibilityText": [
        "CMAT / CAT / GMAT / GRE/ JG University’s Entrance Test(JGET).",
        "The candidate must hold a Bachelor’s Degree with at least 50% marks (45% for reserved category) or an equivalent CGPA in any discipline.",
        "The Bachelor’s degree or equivalent qualification obtained by the candidate must entail a minimum of three years of education after completing higher secondary schooling (10+2) or equivalent."
    ],
    "eligibilityOpen": "50%",
    "eligibilityReserved": "45%",
    "description": [
        "JG University's School of Management MBA is a 2-year, 4-semester programme that aims to provide students with a comprehensive understanding of business and management. The curriculum combines elements of management, liberal studies, and technology with an emphasis on building a solid foundation in core management concepts. The pedagogy is designed to enhance students' critical thinking, problem-solving, and decision-making abilities. The programme encourages a dynamic and participative classroom learning experience through case study discussions, roleplays, and live presentations. The faculties are highly experienced professionals and experts, who bring real-world experience and perspectives to the classroom The programme provides students with the opportunity to gain real-world experience through corporate internships and capstone projects, which help them develop teamwork, professionalism, formal communication, and professional attitude."
    ],
    "highlightsObj": [
        {
            "label": "Innovative",
            "text": "Innovative curriculum blending Management, Liberal and Technology"
        },
        {
            "label": "Experiential",
            "text": "Experiential learning through Industrial internships, boot camps and workshops"
        },
        {
            "label": "Course-embedded",
            "text": "Course-embedded capstone projects"
        },
        {
            "label": "Interaction",
            "text": "Interaction with the finest in the industry through events and seminars"
        },
        {
            "label": "Focus",
            "text": "Focus on summative assessment i.e. continuous evaluation throughout the programme"
        },
        {
            "label": "Accelerated",
            "text": "Accelerated career growth with the dedicated career management team"
        }
    ],
    "objectives": [
        "Ability to synthesize knowledge of various functional areas of management in response to current and emerging business challenges",
        "Equip students to become dynamic managers capable of taking various decisions and communicating effectively with different groups",
        "Encourage proactive thinking in order to equip participants to perform effectively in the dynamic socio-economic and business ecosystem",
        "Equip for career opportunities in Marketing, Finance, Human Resource Management,  Entrepreneurship, and Business Analytics",
        "Prepare students to deal with complex management-level issues and decision-making by familiarizing them with various areas of management",
        "Develop students as management professionals with the right kind of values, ethics, and attitude required for being socially responsible citizens",
        "Ensure students develop teamwork, professionalism, leadership, and effective communication skills to manage and collaborate in diverse work environments."
    ],
    "outcomes": [
        "Develop business skills to make strategic and profitable decisions during challenging business situations",
        "Attain problem-solving, decision making and critical thinking skills to provide viable solutions for business problems",
        "Ability to take calculated risks and cope with uncertainties",
        "Ability to evaluate the economic, legal, and business environment",
        "Equip students to become dynamic managers capable of taking various decisions and communicating effectively with different groups",
        "Equip students with the robust skill set required for navigating the corporate and industrial sectors",
        "Evaluate different business issues through an integrated approach using the latest technology",
        "Our Admission process enables us to meticulously give importance to every individual applying. The admission of the applicant will majorly be based on our admission process scores.",
        "[Click Here to Apply Now](https://jguni.in/admission-open.html)",
        "[Contact Us](https://jguni.in/contact-us.aspx)"
    ],
    "specializationsObj": [
        {
            "name": "Business Analytics",
            "desc": "Data insights, analytical modeling, and decision tools.",
            "bg": "bg-blue-50/30",
            "iconBg": "bg-blue-50",
            "iconColor": "text-blue-600"
        },
        {
            "name": "Finance",
            "desc": "Investment analysis, wealth management, and treasury.",
            "bg": "bg-blue-50/30",
            "iconBg": "bg-blue-50",
            "iconColor": "text-blue-600"
        },
        {
            "name": "Human Resource Management",
            "desc": "Strategic HR systems, talent retention, and labor relations.",
            "bg": "bg-blue-50/30",
            "iconBg": "bg-blue-50",
            "iconColor": "text-blue-600"
        },
        {
            "name": "Marketing",
            "desc": "Brand management, customer psychology, and sales.",
            "bg": "bg-blue-50/30",
            "iconBg": "bg-blue-50",
            "iconColor": "text-blue-600"
        },
        {
            "name": "Entrepreneurship",
            "desc": "Venture incubation, startup mechanics, and planning.",
            "bg": "bg-blue-50/30",
            "iconBg": "bg-blue-50",
            "iconColor": "text-blue-600"
        },
        {
            "name": "International Accounting & Taxation",
            "desc": "Specialization in International Accounting & Taxation with cutting-edge curriculum.",
            "bg": "bg-blue-50/30",
            "iconBg": "bg-blue-50",
            "iconColor": "text-blue-600"
        }
    ],
    "specializationNote": [
        "Important note : 1. The availability and allotment of MBA specializations/ electives are contingent upon a minimum number of students who apply for the same at the beginning of Semester -3 for each specialization/elective. 2. A specialization/ elective will only be offered if the class reaches the requisite number of minimum students opting for the same as decided by the university each year at the beginning of Semester - 3 3. In case of insufficient request for a particular specialization/elective, the subject allotment will be done by the university on the basis of 'in order of preference' given by the students in Elective Selection Request Form which shall be final and binding."
    ],
    "advantages": [
        {
            "title": "Module-Based Learning",
            "label": "Module-Based Learning",
            "desc": "We strive to make our programmes manageable by dividing it into modules for easy learning"
        },
        {
            "title": "Cutting Edge Curriculum",
            "label": "Cutting Edge Curriculum",
            "desc": "Latest curriculum developed by experts to provide real-life business exposure to the students"
        },
        {
            "title": "Campus Network",
            "label": "Campus Network",
            "desc": "Students are exposed to peers from diverse backgrounds, mentors of specific subjects and practitioners from specialised industry"
        },
        {
            "title": "Exposure to Industry",
            "label": "Exposure to Industry",
            "desc": "Extensive internships that aim to provide hands-on experience and peoples skills leading to market readiness"
        },
        {
            "title": "Capstone Projects",
            "label": "Capstone Projects",
            "desc": "Applying theoretical knowledge in practice makes a student confident and professionally independent"
        },
        {
            "title": "Industry Adoption",
            "label": "Industry Adoption",
            "desc": "Employable opportunities through industry adoption"
        },
        {
            "title": "Simulation Exercises",
            "label": "Simulation Exercises",
            "desc": "Opportunities for a holistic learning beyond the confines of the curriculum"
        },
        {
            "title": "Incubation Support",
            "label": "Incubation Support",
            "desc": "Our team acts as an incubation support system for all startups at various stages"
        },
        {
            "title": "JGiet Status",
            "label": "JGiet Status",
            "desc": "Our doors are always open for the life long learner in you, with special advantage as a JGiet"
        }
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
    "title": "MCA course",
    "tagline": "School of Computing",
    "duration": "2 Years",
    "fees": "₹40,950/- (Forty Thousand and Nine Fifty Only) as per FRC",
    "eligibility": "Bachelor’s Degree in Computer Science or Information Technology",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ],
    "courseCommencement": "2024-25 Academic Year",
    "eligibilityType": "split-boxes",
    "eligibilityText": [
        "CMAT / CAT / GMAT / GRE/ JG University’s Entrance Test(JGET).",
        "The candidate must hold a Bachelor’s Degree in Computer Science or Information Technology with at least 50% marks (45% for reserved category) or an equivalent CGPA.",
        "The Bachelor’s degree or equivalent qualification obtained by the candidate must entail a minimum of three years of education after completing higher secondary schooling (10+2) or equivalent.",
        "- 1 Mobile Programming",
        "- 2 Web Programming",
        "- 3 Data Science",
        "- 4 Internet of Things(IoT)"
    ],
    "eligibilityOpen": "50%",
    "eligibilityReserved": "45%",
    "description": [
        "JG University's MCA is 2-year, 4-semester programmes that provide comprehensive knowledge and skills in computer science and information technology. The programme will cover courses such as programming languages, software development, computer networks, cloud computing, mobile technology, networking, and other related areas. Students will also learn cutting-edge technologies such as Data science, Artificial intelligence, Machine Learning, and IoT. The programme incorporates hands-on training opportunities, such as capstone projects, workshops, and internships, to enable students to apply their knowledge in real-world situations. The faculty members are both academic and industry experts who bring practical experiences and perspectives to the classroom. These opportunities also help students to stay updated with the latest technologies and industry trends. The programmes will also encourage and guide students to pursue research and development to keep them aligned with their field's latest innovations."
    ],
    "highlightsObj": [
        {
            "label": "Programme",
            "text": "Programme designed as per National Education Policy 2020"
        },
        {
            "label": "Innovative",
            "text": "Innovative curriculum blending Liberal and Technology"
        },
        {
            "label": "Course-",
            "text": "Course- embedded capstone projects"
        },
        {
            "label": "Experiential",
            "text": "Experiential learning through Industrial internships, boot camps, and workshops"
        },
        {
            "label": "Exposure",
            "text": "Exposure to the latest computer technologies and their applications"
        },
        {
            "label": "Practical-based",
            "text": "Practical-based and project-based teaching methodology"
        },
        {
            "label": "Focus",
            "text": "Focus on research-based learning"
        },
        {
            "label": "Interaction",
            "text": "Interaction with the industry experts through events and seminars"
        },
        {
            "label": "Focus",
            "text": "Focus on summative assessment i.e. Continuous evaluation to monitor students' conceptual clarity and practical skills"
        },
        {
            "label": "Continuous",
            "text": "Continuous mentoring of students for career advancement"
        }
    ],
    "objectives": [
        "Acquire the necessary skills to develop, implement and manage web and mobile applications.",
        "Introduce students to the fundamentals, problem-solving techniques, and learning methods associated with emerging technologies like  Data Science, AI-ML, Deep Learning, and IoT",
        "Maximize students' skills and potential to become world-class, industry-ready professionals",
        "Encourage students to explore research and development in computer applications",
        "Impart practical knowledge to students through hands-on experience and industry-related capstone projects",
        "Promote teamwork, professionalism, leadership, and effective communication among students to prepare them to work and collaborate in diverse work environments"
    ],
    "outcomes": [
        "Equip Students to design, develop, implement and manage web applications, mobile applications, and databases",
        "Be industry ready with advanced skills and knowledge in various computer applications, IT tools, and techniques",
        "Understand the concepts of Data science-ML & Deep Learning to design, analyze and develop solutions for specific industry problems",
        "Prepare students to pursue research and development in the fields of IT and computer science",
        "Comprehend and apply the fundamental principles, concepts, and methods of Computer Applications and multidisciplinary fields",
        "Equip students with the ever-changing market trends",
        "Ability to communicate effectively with technical and non-technical stakeholders",
        "Achieve interpersonal, technological, and leadership skills",
        "Regular workshops, talks and interactive sessions with business leaders and industry experts",
        "Monitor student’s conceptual clarity and practical skills on a regular basis",
        "Our Admission process enables us to meticulously give importance to every individual applying. The admission of the applicant will majorly be based on our admission process scores.",
        "[Click Here to Apply Now](https://jguni.in/admission-open.html)",
        "[Contact Us](https://jguni.in/contact-us.aspx)"
    ],
    "advantages": [
        {
            "title": "Module - Based Learning",
            "label": "Module - Based Learning",
            "desc": "Our programmes are segmented into modules to facilitate easy learning"
        },
        {
            "title": "Cutting Edge Curriculum",
            "label": "Cutting Edge Curriculum",
            "desc": "Latest curriculum developed by experts to provide real-life business exposure to the students"
        },
        {
            "title": "Capstone Projects",
            "label": "Capstone Projects",
            "desc": "Applying theoretical knowledge in practice makes a student Confident And Professionally Independent"
        },
        {
            "title": "Campus Network",
            "label": "Campus Network",
            "desc": "Students are exposed to peers from diverse backgrounds, mentors of specific subjects, and practitioners from specialized industry"
        },
        {
            "title": "Exposure to Industry",
            "label": "Exposure to Industry",
            "desc": "Industrial Internships help to develop corporate experience and interpersonal skills"
        },
        {
            "title": "JGiet Status",
            "label": "JGiet Status",
            "desc": "Our doors are always open for the lifelong learner in you, with a special advantage as a JGiet"
        }
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
    "title": "M.Sc. Forensic Science & Technology",
    "tagline": "School of Investigative and Applied Sciences",
    "duration": "2 Years",
    "fees": "₹ 45,000 (Forty-Five Thousand Only)",
    "eligibility": "Bachelors Degree",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ],
    "courseCommencement": "2025-26 Academic Year",
    "eligibilityType": "split-boxes",
    "eligibilityText": [
        "The candidate must hold a Bachelor's Degree with at least 50% marks (45% for reserved category) or an equivalent CGPA in either B.Sc. in Forensics, Chemistry, Biology, Mathematics.",
        "The Bachelor's degree or equivalent qualification obtained by the candidate must entail a minimum of three years of education after completing higher secondary schooling (10+2) or equivalent.",
        "For open category candidates 50%",
        "For reserved category candidates 45%"
    ],
    "eligibilityOpen": "50%",
    "eligibilityReserved": "45%",
    "description": [
        "JG University's M.Sc. in Forensic Science & Technology is a 2-year, 4-semester postgraduate programme that offers in-depth education and training in the application of scientific principles to criminal investigation and legal processes. The programme covers a wide range of core and advanced subjects including forensic biology, forensic chemistry, toxicology, crime scene management, and digital forensics. It emphasizes the integration of traditional forensic techniques with cutting-edge technologies to ensure students are equipped to meet the demands of modern forensic investigations. Practical learning is a cornerstone of the curriculum, with extensive lab work, case study analysis, field training, and simulation exercises guided by experienced faculty and industry experts. Designed to foster analytical thinking, precision, and ethical practice, this programme prepares students for professional roles in forensic laboratories, law enforcement agencies, research institutions, and legal consultancy."
    ],
    "highlightsObj": [
        {
            "label": "Advanced",
            "text": "Advanced 2-year postgraduate programme in application of scientific principles to criminal investigation"
        },
        {
            "label": "Core",
            "text": "Core subjects including forensic biology, chemistry, toxicology, crime scene management, and digital forensics"
        },
        {
            "label": "Integration",
            "text": "Integration of traditional forensic techniques with cutting-edge technologies for modern investigations"
        },
        {
            "label": "Extensive",
            "text": "Extensive lab work, case study analysis, field training, and simulation exercises"
        },
        {
            "label": "Designed",
            "text": "Designed to foster analytical thinking, precision, and ethical practice in forensic investigations"
        },
        {
            "label": "Preparation",
            "text": "Preparation for roles in forensic laboratories, law enforcement, research institutions, and legal consultancy"
        },
        {
            "label": "Guidance",
            "text": "Guidance from experienced faculty and industry experts with practical forensic investigation experience"
        }
    ],
    "objectives": [
        "Provide advanced theoretical knowledge and practical skills in forensic science disciplines including biology, chemistry, toxicology, and digital forensics.",
        "Equip students with hands-on experience through laboratory work, crime scene investigation simulations, and case study analyses.",
        "Develop expertise in the application of modern forensic technologies and scientific methods to solve complex criminal cases.",
        "Enable students to critically analyze and interpret forensic evidence for legal and investigative purposes.",
        "Encourage research, innovation, and the adoption of emerging forensic techniques to advance the field.",
        "Promote ethical conduct, professional integrity, and legal awareness in forensic practice.",
        "Cultivate teamwork, communication, leadership, and problem-solving skills essential for multidisciplinary forensic and investigative environments.",
        "Our Admission process enables us to meticulously give importance to every individual applying. The admission of the applicant will majorly be based on our admission process scores.",
        "[Click Here to Apply Now](https://jguni.in/admission-open.html)",
        "[Contact Us](https://jguni.in/contact-us.aspx)"
    ],
    "outcomes": []
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
    "slug": "metaverse",
    "title": "Certificate Course in Metaverse",
    "tagline": "Innovating for a Better Future",
    "duration": "3 months",
    "fees": "TBD",
    "eligibility": "Foundation Course\n\nNon-IT students need to do a bridge course to get into the intermediate level\n\nIntermediate Course\n\nStudents with MCA, BCA, M.Sc(IT), B.Sc (IT), B. Tech (CS/ CE) degree\n\nExpert Course\n\nWorking IT professionals",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'data-science-ai-ml': {
    "slug": "data-science-ai-ml",
    "title": "Certificate Course in Data Science, AI-ML",
    "tagline": "Innovating for a Better Future",
    "duration": "3 months",
    "fees": "TBD",
    "eligibility": "Foundation Course\n\nNon-IT students need to do a bridge course to get into the intermediate level\n\nIntermediate Course\n\nStudents with MCA, BCA, M.Sc(IT), B.Sc (IT), B. Tech (CS/ CE) degree\n\nExpert Course\n\nWorking IT professionals",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'mobile-applications': {
    "slug": "mobile-applications",
    "title": "Certificate Course in Mobile Applications",
    "tagline": "Innovating for a Better Future",
    "duration": "3 months",
    "fees": "TBD",
    "eligibility": "Expert Course\n\nWorking IT professionals",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'blockchain': {
    "slug": "blockchain",
    "title": "Certificate Course in Blockchain",
    "tagline": "Innovating for a Better Future",
    "duration": "3 months",
    "fees": "TBD",
    "eligibility": "Foundation Course\n\nNon-IT students need to do a bridge course to get into the intermediate level\n\nIntermediate Course\n\nStudents with MCA, BCA, M.Sc(IT), B.Sc (IT), B. Tech (CS/ CE) degree\n\nExpert Course\n\nWorking IT professionals",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'digital-marketing': {
    "slug": "digital-marketing",
    "title": "Certificate Course in Digital Marketing",
    "tagline": "Innovating for a Better Future",
    "duration": "3 months",
    "fees": "TBD",
    "eligibility": "Foundation Course\n\nNon-IT students need to do a bridge course to get into the intermediate level\n\nIntermediate Course\n\nStudents with MCA, BCA, M.Sc(IT), B.Sc (IT), B. Tech (CS/ CE) degree\n\nExpert Course\n\nWorking IT professionals",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'cyber-security': {
    "slug": "cyber-security",
    "title": "Certificate Course in Cyber Security",
    "tagline": "Innovating for a Better Future",
    "duration": "3 months",
    "fees": "TBD",
    "eligibility": "Foundation Course\n\nNon-IT students need to do a bridge course to get into the intermediate level\n\nIntermediate Course\n\nStudents with MCA, BCA, M.Sc(IT), B.Sc (IT), B. Tech (CS/ CE) degree\n\nExpert Course\n\nWorking IT professionals",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'robotic-process-automation': {
    "slug": "robotic-process-automation",
    "title": "Certificate Course in Robotic Process Automation",
    "tagline": "Innovating for a Better Future",
    "duration": "3 months",
    "fees": "TBD",
    "eligibility": "Foundation Course\n\nNon-IT students need to do a bridge course to get into the intermediate level\n\nIntermediate Course\n\nStudents with MCA, BCA, M.Sc(IT), B.Sc (IT), B. Tech (CS/ CE) degree\n\nExpert Course\n\nWorking IT professionals",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'industrial-iot': {
    "slug": "industrial-iot",
    "title": "Certificate Course in Industrial IoT",
    "tagline": "Innovating for a Better Future",
    "duration": "3 months",
    "fees": "TBD",
    "eligibility": "Foundation Course\n\nNon-IT students need to do a bridge course to get into the intermediate level\n\nIntermediate Course\n\nStudents with MCA, BCA, M.Sc(IT), B.Sc (IT), B. Tech (CS/ CE) degree\n\nExpert Course\n\nWorking IT professionals",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'full-stack-architect': {
    "slug": "full-stack-architect",
    "title": "Certificate Course in Full Stack Architect",
    "tagline": "Innovating for a Better Future",
    "duration": "3 months",
    "fees": "TBD",
    "eligibility": "Expert Course\n\nWorking IT professionals",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
},
  'azure-devops': {
    "slug": "azure-devops",
    "title": "Certificate Course in Azure DevOps",
    "tagline": "Innovating for a Better Future",
    "duration": "3 months",
    "fees": "TBD",
    "eligibility": "Foundation Course\n\nNon-IT students need to do a bridge course to get into the intermediate level\n\nIntermediate Course\n\nStudents with MCA, BCA, M.Sc(IT), B.Sc (IT), B. Tech (CS/ CE) degree\n\nExpert Course\n\nWorking IT professionals",
    "specializationsStr": [
        "Core Curriculum"
    ],
    "highlightsStr": [
        "Industry Aligned",
        "Practical Training"
    ]
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