const fs = require('fs');

const scrapedData = JSON.parse(fs.readFileSync('./programmes_data.json', 'utf8'));

let currentTs = fs.readFileSync('./src/data/programmes.ts', 'utf8');

// We will inject the scraped JSON directly into the file.
// Wait, the safest way is to generate the entire 'programmes' object as a string.

const BBA_CUSTOM_OBJECT = `
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
      "The objective of this programme is to create \\"Whole Brain Change Makers\\" - leaders who are innovative thinkers and socially conscious individuals who bring change to their industries and society."
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
`;

// Build the new programmes object literal
let newObjectsStr = "";
for (const slug in scrapedData) {
  if (slug === 'bba') continue;
  newObjectsStr += "  '" + slug + "': " + JSON.stringify(scrapedData[slug], null, 4) + ",\\n";
}

const header = currentTs.split('export const programmes: Record<string, Programme> = {')[0];
const aliasesStr = currentTs.split('export const programmeAliases: Record<string, string> = ')[1];

const newFileContent = header + "export const programmes: Record<string, Programme> = {\\n" +
BBA_CUSTOM_OBJECT + ",\\n" +
newObjectsStr +
"};\\n\\nexport const programmeAliases: Record<string, string> = " + aliasesStr;

fs.writeFileSync('./src/data/programmes.ts', newFileContent);
console.log("Merged scraped data into src/data/programmes.ts");
