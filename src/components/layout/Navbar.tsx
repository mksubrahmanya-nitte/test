/*
// Old Navbar code commented out:
"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Programmes",       href: "#programmes" },
  { label: "Campus",           href: "#campus" },
  { label: "Industry Linkage", href: "#collaborations" },
  { label: "Collaborations",   href: "#collaborations" },
  { label: "Discover Us",      href: "#discover" },
  { label: "Media",            href: "#" },
  { label: "Career",           href: "#" },
  { label: "Contact Us",       href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  // Logo dimensions: large + overflows below navbar when at top, compact when scrolled
  const logoW = scrolled ? 80 : 148;
  const logoH = scrolled ? 56 : 110;

  return (
    <header
      className="sticky top-0 w-full bg-white shadow-sm"
      style={{ height: "64px", zIndex: 50, overflow: "visible" }}
    >
      <div
        className="max-w-[1400px] mx-auto flex items-center"
        style={{ height: "64px", paddingLeft: "16px", paddingRight: "16px", position: "relative" }}
      >
        <Link
          href="/"
          style={{
            position: "absolute",
            left: "16px",
            top: "0",
            zIndex: 60,
            display: "block",
            width: `${logoW}px`,
            height: `${logoH}px`,
            transition: "width 0.4s ease, height 0.4s ease",
          }}
        >
          <Image
            src="/images/logo.png"
            alt="JG University"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>
        <div
          style={{
            width: `${logoW + 24}px`,
            flexShrink: 0,
            transition: "width 0.4s ease",
          }}
        />
        <nav className="hidden xl:flex items-center gap-5 flex-1 justify-center">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] font-semibold tracking-wider uppercase text-gray-700 hover:text-red-700 transition-colors whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 ml-auto flex-shrink-0">
          {searchOpen && (
            <input
              ref={searchRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="border border-gray-300 rounded-full px-4 py-1.5 text-sm w-40 focus:outline-none focus:ring-2 focus:ring-red-200 bg-gray-50 transition-all"
            />
          )}
          <button
            onClick={() => setSearchOpen((v) => !v)}
            className="text-gray-500 hover:text-red-700 transition-colors p-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <a href="/apply" className="hidden md:inline-flex px-4 py-1.5 rounded-full border border-yellow-500 text-yellow-700 text-xs font-semibold hover:bg-yellow-50 transition-colors whitespace-nowrap">Apply Now</a>
          <a href="/enquire" className="hidden md:inline-flex px-4 py-1.5 rounded-full border border-yellow-500 text-yellow-700 text-xs font-semibold hover:bg-yellow-50 transition-colors whitespace-nowrap">Enquire Now</a>
          <Link href="/admission-open" className="px-5 py-2 rounded-lg text-white text-sm font-bold tracking-wider uppercase hover:opacity-90 transition-opacity whitespace-nowrap" style={{ backgroundColor: "#c21400" }}>Admission</Link>
        </div>
      </div>
    </header>
  );
}
*/

/*
// Old Navbar code commented out:
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Programmes",       href: "#programmes" },
  { label: "Campus",           href: "#campus" },
  { label: "Industry Linkage", href: "#collaborations" },
  { label: "Collaborations",   href: "#collaborations" },
  { label: "Discover Us",      href: "#discover" },
  { label: "Media",            href: "#" },
  { label: "Career",           href: "#" },
  { label: "Contact Us",       href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header 
      className="sticky top-0 w-full bg-white shadow-sm transition-all duration-300"
      style={{ height: "70px", zIndex: 100, overflow: "visible" }}
    >
      <div 
        className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between relative"
        style={{ overflow: "visible" }}
      >
        // Absolutely positioned Logo Container — hangs as a white card at top, becomes a clean transparent logo on scroll
        <Link 
          href="/" 
          className={`absolute left-6 transition-all duration-300 flex items-center justify-center ${
            scrolled 
              ? "bg-transparent shadow-none border-none p-0" 
              : "bg-white px-4 pb-4 pt-2 shadow-md rounded-b-xl border-x border-b border-gray-100"
          }`}
          style={{
            zIndex: 110,
            top: scrolled ? "7px" : "0",
            width: scrolled ? "110px" : "212px",
            height: scrolled ? "56px" : "156px",
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/logo.png"
              alt="JG University"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        // Left Spacer to account for the logo box width
        <div 
          className="transition-all duration-300 flex-shrink-0"
          style={{ width: scrolled ? "130px" : "225px" }}
        />

        // Central Nav Links — capitalized first letter, medium weight, 13.5px size
        <nav className="hidden xl:flex items-center gap-5">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13.5px] font-semibold text-gray-600 hover:text-red-700 transition-colors tracking-wide whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </nav>

        // Right Controls: Search bar + Admission Button
        <div className="flex items-center gap-4 ml-auto xl:ml-0 flex-shrink-0">
          // Static Search box next to Admission
          <div className="relative hidden md:block">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="border border-gray-300 rounded-lg px-4 py-1.5 text-[13px] w-48 focus:outline-none focus:ring-1 focus:ring-yellow-500 bg-white"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>

          // Admission CTA — Golden orange `#f5b041` with text "Admission"
          <Link
            href="/admission-open"
            className="px-6 py-2 rounded-lg text-white text-[13.5px] font-bold tracking-wider transition-all hover:brightness-105 whitespace-nowrap shadow-sm text-center"
            style={{ backgroundColor: "#f5b041" }}
          >
            Admission
          </Link>
        </div>
      </div>
    </header>
  );
}
*/

// ??$$$ newer code
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Programmes",       href: "#programmes" },
  { label: "Campus",           href: "#campus" },
  { label: "Industry Linkage", href: "#collaborations" },
  { label: "Collaborations",   href: "#collaborations" },
  { label: "Discover Us",      href: "#discover" },
  { label: "Media",            href: "#" },
  // ??$$$ newer code
  // { label: "Career",           href: "#" },
  { label: "Career",           href: "/career.html" },
  // ??$$$ newer code
  // { label: "Contact Us",       href: "#contact" },
  { label: "Contact Us",       href: "/contact-us.html" },
];

// ??$$$ newer code
/*
const schoolsData = [
  {
    name: "School of Management",
    courses: [
      { name: "iMBA - 5 years, 10 semesters", href: "/imba" },
      { name: "iMBA - Aviation, Hospitality & Travel Management - 5 years", href: "/ibbambaaht" },
      { name: "iMBA - International Trade & Finance - 5 years", href: "/ibbamba" },
      { name: "BBA (Hons) - International Trade & Finance - 4 years", href: "/bba-hons-itrade-finance" },
      { name: "MBA - 2 years, 4 semesters", href: "/mba" },
      { name: "Masters in International Trade & Finance", href: "/mba-international-trade-finance" },
    ]
  },
  {
    name: "School of Commerce",
    courses: [
      { name: "B.Com (Hons) - 4 years", href: "/bcom" },
      { name: "B.Com (Hons) with ACCA - 4 years", href: "/bcom-hons-acca" },
      { name: "M.Com (Hons) - International Accounting & Taxation", href: "/mcom" },
    ]
  },
  {
    name: "School of Computing",
    courses: [
      { name: "BCA (Hons) - 4 years", href: "/bca" },
      { name: "iMCA - 5 years", href: "/imca" },
      { name: "iMSc (IT) - 5 years", href: "/imsc-it" },
      { name: "MCA - 2 years", href: "/mca" },
      { name: "MCA - AI & Full Stack Development", href: "/mca" },
    ]
  },
  {
    name: "School of Engineering",
    courses: [
      { name: "B.Tech - CSE", href: "/b-tech" },
      { name: "B.Tech - IT", href: "/b-tech-it" },
      { name: "B.Tech - AI & DS", href: "/btech-data-science" },
      { name: "B.Tech - AI & ML", href: "/btech-artificial-intelligence" },
      { name: "B.Tech - CE", href: "/btech-computer-engineering" },
      { name: "B.Tech - CSE (AI)", href: "/btech-cse-ai" },
      { name: "B.Tech - CSE (AI & ML)", href: "/btech-cse-ai-ml" },
      { name: "B.Tech - CSE (Big Data Analytics)", href: "/btech-cse-big-data" },
    ]
  },
  {
    name: "School of Investigative and Applied Sciences (SIAS)",
    courses: [
      { name: "iMSc - Forensic Science - 5 years", href: "/bsc-hons-imsc-forensic-science" },
      { name: "iMSc - Cyber Security & Digital Forensics - 5 years", href: "/bsc-hons-imsc-cyber-digital-forensic" },
      { name: "iMSc - Clinical Embryology - 5 years", href: "/bsc-hons-imsc-clinical-embryology" },
      { name: "M.Sc - Cyber Security & Digital Forensics", href: "/msc-cyber" },
      { name: "M.Sc - Forensic Science & Technology", href: "/msc-forensic" },
      { name: "M.Sc - Clinical Embryology & ART", href: "/msc-clinic" },
    ]
  },
  {
    name: "School of Law",
    courses: [
      { name: "LL.B. - 3 years", href: "/llb" },
      { name: "LL.M. - 2 years", href: "#" },
    ]
  },
  {
    name: "School of Aviation & Hospitality",
    courses: [
      { name: "iMBA - Aviation, Hospitality & Travel Management", href: "/ibbambaaht" },
      { name: "Masters in Aviation, Hospitality & Travel Management", href: "/mahtm" },
    ]
  },
  {
    name: "School of Research & Innovation (Ph.D)",
    courses: [
      { name: "Commerce", href: "/doctoral-programmes" },
      { name: "Management", href: "/doctoral-programmes" },
      { name: "Computing", href: "/doctoral-programmes" },
      { name: "Interdisciplinary", href: "/doctoral-programmes" },
      { name: "Law", href: "/doctoral-programmes" },
    ]
  },
  {
    name: "School of Emerging Technology (Certificate Courses)",
    courses: [
      { name: "Metaverse", href: "/metaverse" },
      { name: "Data Science, AI-ML", href: "/data-science-ai-ml" },
      { name: "Mobile Applications", href: "/mobile-applications" },
      { name: "Blockchain", href: "/blockchain" },
      { name: "Digital Marketing", href: "/digital-marketing" },
      { name: "Cyber Security", href: "/cyber-security" },
      { name: "Robotic Process Automation", href: "/robotic-process-automation" },
      { name: "Industrial IoT", href: "/industrial-iot" },
      { name: "Full Stack Architect", href: "/full-stack-architect" },
      { name: "Azure DevOps", href: "/azure-devops" },
    ]
  }
];
*/

// ??$$$ newer code
const megaMenuData = [
  {
    category: "Undergraduate Programmes",
    items: [
      { name: "BBA | BBA (Hons)", href: "/bba" },
      { name: "iMBA", href: "/imba" },
      { name: "iMBA - Aviation, Hospitality & Travel Management", href: "/ibbambaaht" },
      { name: "iMBA - International Trade & Finance", href: "/ibbamba" },
      { name: "BBA (Hons) - International Trade & Finance", href: "/bba-hons-itrade-finance" },
      { name: "B.Com | B.Com (Hons)", href: "/bcom" },
      { name: "B.Com (Hons) with ACCA", href: "/bcom-hons-acca" },
      { name: "BCA | BCA (Hons)", href: "/bca" },
      { name: "iMCA", href: "/imca" },
      { name: "iMSc (IT)", href: "/imsc-it" },
      { name: "iMSc (IT-Specialization)", href: "/imsc-it" },
      {
        name: "B.Sc. / B.Sc. (Hons) / iMSc",
        hasSubMenu: true,
        subMenu: [
          { name: "Forensic Science & Technology", href: "/bsc-hons-imsc-forensic-science" },
          { name: "Cyber Security & Digital Forensics", href: "/bsc-hons-imsc-cyber-digital-forensic" },
          { name: "Quantum Computing", href: "/bsc-hons-imsc-quantum-computing" },
          { name: "Mathematics & Computing", href: "/bsc-hons-imsc-mathematics-computing" },
          { name: "Clinical Embryology & Reproductive Biology", href: "/bsc-hons-imsc-clinical-embryology" },
          { name: "Food, Nutrition & Lifestyle Science", href: "/bsc-hons-imsc-food-nutrition-lifestyle" }
        ]
      },
      {
        name: "B.Tech Programs",
        hasSubMenu: true,
        subMenu: [
          { name: "Computer Science & Engineering", href: "/b-tech" },
          { name: "Information Technology", href: "/b-tech-it" },
          { name: "Artificial Intelligence & Data Science", href: "/btech-data-science" },
          { name: "Artificial Intelligence & Machine Learning", href: "/btech-artificial-intelligence" },
          { name: "Computer Engineering", href: "/btech-computer-engineering" },
          { name: "CSE [AI]", href: "/btech-cse-ai" },
          { name: "CSE [AI & ML]", href: "/btech-cse-ai-ml" },
          { name: "CSE [Big Data Analytics]", href: "/btech-cse-big-data" }
        ]
      },
      { name: "LL.B.", href: "/llb" }
    ]
  },
  {
    category: "Postgraduate Programmes",
    items: [
      { name: "MBA", href: "/mba" },
      { name: "Masters in International Trade & Finance", href: "/mba-international-trade-finance" },
      { name: "Masters in Aviation, Hospitality & Travel Management", href: "/mahtm" },
      { name: "M.Com (Hons) - International Accounting & Taxation", href: "/mcom" },
      { name: "MCA", href: "/mca" },
      { name: "MCA - AI & Full Stack Development", href: "/mca" },
      { name: "MSc (IT-Specialization)", href: "#" },
      {
        name: "MSc",
        hasSubMenu: true,
        subMenu: [
          { name: "Cyber Security & Digital Forensics", href: "/msc-cyber" },
          { name: "Forensic Science & Technology", href: "/msc-forensic" },
          { name: "Clinical Embryology & ART", href: "/msc-clinic" }
        ]
      },
      { name: "LL.M.", href: "#" }
    ]
  },
  {
    category: "Doctoral Programmes (Ph.D)",
    items: [
      { name: "Commerce", href: "/doctoral-programmes" },
      { name: "Management", href: "/doctoral-programmes" },
      { name: "Computing", href: "/doctoral-programmes" },
      { name: "Interdisciplinary", href: "/doctoral-programmes" },
      { name: "Law", href: "/doctoral-programmes" }
    ]
  },
  {
    category: "Certificate Courses",
    items: [
      { name: "Metaverse", href: "/metaverse" },
      { name: "Data Science, AI-ML", href: "/data-science-ai-ml" },
      { name: "Mobile Applications", href: "/mobile-applications" },
      { name: "Blockchain", href: "/blockchain" },
      { name: "Digital Marketing", href: "/digital-marketing" },
      { name: "Cyber Security", href: "/cyber-security" },
      { name: "Robotic Process Automation", href: "/robotic-process-automation" },
      { name: "Industrial IoT", href: "/industrial-iot" },
      { name: "Full Stack Architect", href: "/full-stack-architect" },
      { name: "Azure DevOps", href: "/azure-devops" }
    ]
  }
];

const resourceItems = [
  "MBA & MCA JGET Question Bank",
  "M.Com (Hons) JGET Question Bank",
  "Ph.D JGET Question Bank",
];

const mediaItems = [
  "News",
  "Student Activities",
  "Blogs",
  "Initiatives by JGUNI",
  "Awards and Recognition",
];

const discoverCol1 = [
  "Vision",
  "Why Us",
  "Our Leaders",
];

const discoverCol2 = [
  "Our DNA",
  "Faculty Members",
  "FAQs",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [hoverTrigger, setHoverTrigger] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(false);
  const [programmesOpen, setProgrammesOpen] = useState(false);

  const [hoverMediaTrigger, setHoverMediaTrigger] = useState(false);
  const [hoverMediaMenu, setHoverMediaMenu] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);

  const [hoverDiscoverTrigger, setHoverDiscoverTrigger] = useState(false);
  const [hoverDiscoverMenu, setHoverDiscoverMenu] = useState(false);
  const [discoverOpen, setDiscoverOpen] = useState(false);

  // ??$$$ newer code — Mobile hamburger menu state
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [mobileSchoolAccordion, setMobileSchoolAccordion] = useState<string | null>(null);
  const [mobileSubAccordion, setMobileSubAccordion] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Flawless hover-bridge state machine with 150ms buffer to cross any gaps
  useEffect(() => {
    if (hoverTrigger || hoverMenu) {
      setProgrammesOpen(true);
    } else {
      const timer = setTimeout(() => {
        setProgrammesOpen(false);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [hoverTrigger, hoverMenu]);

  useEffect(() => {
    if (hoverMediaTrigger || hoverMediaMenu) {
      setMediaOpen(true);
    } else {
      const timer = setTimeout(() => {
        setMediaOpen(false);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [hoverMediaTrigger, hoverMediaMenu]);

  useEffect(() => {
    if (hoverDiscoverTrigger || hoverDiscoverMenu) {
      setDiscoverOpen(true);
    } else {
      const timer = setTimeout(() => {
        setDiscoverOpen(false);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [hoverDiscoverTrigger, hoverDiscoverMenu]);

  const isLogoMinimized = scrolled || programmesOpen || mediaOpen || discoverOpen;

  return (
    <header 
      className="sticky top-0 w-full bg-white shadow-sm transition-all duration-300"
      style={{ height: "70px", zIndex: 100, overflow: "visible" }}
    >
      <div 
        className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between relative"
        style={{ overflow: "visible" }}
      >
        {/* Absolutely positioned Logo Container — hangs as a white card at top, becomes a clean transparent logo on scroll or hover popout */}
        <Link 
          href="/" 
          className={`absolute left-6 transition-all duration-300 flex items-center justify-center ${
            isLogoMinimized 
              ? "bg-transparent shadow-none border-none p-0" 
              : "bg-white px-4 pb-4 pt-2 shadow-md rounded-b-xl border-x border-b border-gray-100"
          }`}
          style={{
            zIndex: 110,
            top: isLogoMinimized ? "7px" : "0",
            width: isLogoMinimized ? "110px" : "212px",
            height: isLogoMinimized ? "56px" : "156px",
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/logo.png"
              alt="JG University"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Left Spacer to account for the logo box width (Fixed size to prevent layout shifts and hover flickering) */}
        <div 
          className="transition-all duration-300 flex-shrink-0"
          style={{ width: "225px" }}
        />

        {/* Central Nav Links — capitalized first letter, medium weight, 13.5px size */}
        <nav className="hidden xl:flex items-center gap-5">
          {navLinks.map((l) => {
            if (l.label === "Programmes") {
              return (
                <button
                  key={l.label}
                  onMouseEnter={() => setHoverTrigger(true)}
                  onMouseLeave={() => setHoverTrigger(false)}
                  onClick={() => setHoverTrigger(!hoverTrigger)}
                  className={`text-[13.5px] font-semibold tracking-wide whitespace-nowrap focus:outline-none transition-colors programmes-trigger ${
                    programmesOpen ? "text-red-700" : "text-gray-600 hover:text-red-700"
                  }`}
                >
                  {l.label}
                </button>
              );
            }
            if (l.label === "Discover Us") {
              return (
                <div key={l.label} className="relative">
                  <button
                    onMouseEnter={() => setHoverDiscoverTrigger(true)}
                    onMouseLeave={() => setHoverDiscoverTrigger(false)}
                    onClick={() => setHoverDiscoverTrigger(!hoverDiscoverTrigger)}
                    className={`text-[13.5px] font-semibold tracking-wide whitespace-nowrap focus:outline-none transition-colors discover-trigger ${
                      discoverOpen ? "text-red-700" : "text-gray-600 hover:text-red-700"
                    }`}
                  >
                    {l.label}
                  </button>

                  {discoverOpen && (
                    <div
                      onMouseEnter={() => setHoverDiscoverMenu(true)}
                      onMouseLeave={() => setHoverDiscoverMenu(false)}
                      className="absolute left-[-220px] top-[44px] bg-white border border-gray-200 shadow-2xl rounded-lg p-8 w-[640px] mega-menu-container animate-fade-in-down"
                      style={{ zIndex: 90 }}
                    >
                      <div className="flex gap-10">
                        {/* Left Side: Logo Graphic */}
                        <div className="w-[180px] h-[100px] relative flex-shrink-0 flex items-center justify-center border-r border-gray-100 pr-6 mt-2">
                          <div className="relative w-full h-full">
                            <Image
                              src="/images/logo.png"
                              alt="JG University"
                              fill
                              className="object-contain"
                              priority
                            />
                          </div>
                        </div>

                        {/* Right Side: Columns under "About Us" */}
                        <div className="flex-grow">
                          <h3 className="text-[14px] font-bold text-[#0066cc] mb-4 border-b pb-2 tracking-wide uppercase">
                            About Us
                          </h3>
                          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                            <div className="flex flex-col gap-2">
                              {discoverCol1.map((item, idx) => (
                                <a
                                  key={idx}
                                  href={`/${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                  className="text-[12.5px] text-gray-700 hover:text-red-700 transition-colors leading-snug py-0.5 tracking-normal hover:underline font-medium"
                                  onClick={() => {
                                    setHoverDiscoverTrigger(false);
                                    setHoverDiscoverMenu(false);
                                  }}
                                >
                                  {item}
                                </a>
                              ))}
                            </div>
                            <div className="flex flex-col gap-2">
                              {discoverCol2.map((item, idx) => (
                                <a
                                  key={idx}
                                  href={`/${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                  className="text-[12.5px] text-gray-700 hover:text-red-700 transition-colors leading-snug py-0.5 tracking-normal hover:underline font-medium"
                                  onClick={() => {
                                    setHoverDiscoverTrigger(false);
                                    setHoverDiscoverMenu(false);
                                  }}
                                >
                                  {item}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            if (l.label === "Media") {
              return (
                <div key={l.label} className="relative">
                  <button
                    onMouseEnter={() => setHoverMediaTrigger(true)}
                    onMouseLeave={() => setHoverMediaTrigger(false)}
                    onClick={() => setHoverMediaTrigger(!hoverMediaTrigger)}
                    className={`text-[13.5px] font-semibold tracking-wide whitespace-nowrap focus:outline-none transition-colors media-trigger ${
                      mediaOpen ? "text-red-700" : "text-gray-600 hover:text-red-700"
                    }`}
                  >
                    {l.label}
                  </button>

                  {mediaOpen && (
                    <div
                      onMouseEnter={() => setHoverMediaMenu(true)}
                      onMouseLeave={() => setHoverMediaMenu(false)}
                      className="absolute left-[-20px] top-[44px] bg-white border border-gray-200 shadow-2xl rounded-lg py-3 w-64 mega-menu-container animate-fade-in-down"
                      style={{ zIndex: 90 }}
                    >
                      <div className="flex flex-col">
                        {mediaItems.map((item, idx) => (
                          <a
                            key={idx}
                            href={`/${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                            className="px-6 py-2.5 text-[13px] text-gray-700 hover:text-red-700 hover:bg-gray-50 transition-colors leading-snug tracking-normal border-b border-gray-50 last:border-0 font-medium"
                            onClick={() => {
                              setHoverMediaTrigger(false);
                              setHoverMediaMenu(false);
                            }}
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <a
                key={l.label}
                href={l.href}
                className="text-[13.5px] font-semibold text-gray-600 hover:text-red-700 transition-colors tracking-wide whitespace-nowrap"
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        {/* Right Controls: Search bar + Admission Button */}
        <div className="flex items-center gap-4 ml-auto xl:ml-0 flex-shrink-0">
          {/* Static Search box next to Admission */}
          <div className="relative hidden md:block">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="border border-gray-300 rounded-lg px-4 py-1.5 text-[13px] w-48 focus:outline-none focus:ring-1 focus:ring-yellow-500 bg-white"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>

          {/* Admission CTA — Golden orange `#f5b041` with text "Admission" */}
          <Link
            href="/admission-open"
            className="px-6 py-2 rounded-lg text-white text-[13.5px] font-bold tracking-wider transition-all hover:brightness-105 whitespace-nowrap shadow-sm text-center"
            style={{ backgroundColor: "#f5b041" }}
          >
            Admission
          </Link>

          {/* ??$$$ newer code — Hamburger button (visible below xl) */}
          <button
            className="xl:hidden flex flex-col items-center justify-center w-10 h-10 gap-[5px] cursor-pointer"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-[2.5px] bg-gray-700 rounded-full" />
            <span className="block w-6 h-[2.5px] bg-gray-700 rounded-full" />
            <span className="block w-6 h-[2.5px] bg-gray-700 rounded-full" />
          </button>
        </div>

        {/* ── HIGH FIDELITY PROGRAMMES MEGA MENU ── */}
        {programmesOpen && (
          /* ??$$$ newer code — custom centered container with overflow-visible to support flyouts */
          <div
            className="absolute top-[70px] left-1/2 -translate-x-1/2 bg-white border border-gray-200 shadow-2xl rounded-lg p-8 w-[1140px] max-w-[95vw] overflow-visible mega-menu-container animate-fade-in-down"
            style={{ zIndex: 90 }}
            onMouseEnter={() => setHoverMenu(true)}
            onMouseLeave={() => setHoverMenu(false)}
          >
            {/* Main Schools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8 border-b border-gray-100 pb-8">
              {megaMenuData.map((col) => (
                <div key={col.category} className="flex flex-col gap-2 relative">
                  <h3 className="text-[13px] font-bold text-[#0066cc] border-b pb-2 tracking-wide uppercase">
                    {col.category}
                  </h3>
                  <div className="flex flex-col gap-1.5 mt-1">
                    {col.items.map((course, idx) => {
                      if (course.hasSubMenu) {
                        return (
                          <div key={idx} className="relative group/sub flex flex-col">
                            <button
                              className="flex items-center justify-between w-full text-[12px] text-gray-700 hover:text-red-700 font-medium py-1.5 transition-colors text-left"
                            >
                              <span>{course.name}</span>
                              <span className="text-[10px] text-gray-400 font-bold ml-1.5">▸</span>
                            </button>
                            {/* Flyout nested sub-menu */}
                            <div 
                              className="absolute left-[95%] top-0 bg-white border border-gray-200 shadow-2xl rounded-lg p-4 w-72 flex flex-col gap-2 z-[100] hidden group-hover/sub:flex animate-fade-in-down ml-1"
                              style={{ filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.1))" }}
                            >
                              {course.subMenu?.map((sub, subIdx) => (
                                <Link
                                  key={subIdx}
                                  /* ??$$$ newer code — Cast sub.href as string to satisfy compiler */
                                  href={sub.href as string}
                                  className="text-[12px] text-gray-700 hover:text-red-700 transition-colors leading-snug tracking-normal hover:underline font-medium"
                                  onClick={() => {
                                    setHoverTrigger(false);
                                    setHoverMenu(false);
                                  }}
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      }

                      return course.href === '#' ? (
                        <span key={idx} className="text-[12px] text-gray-400 cursor-default select-none font-medium py-1.5">
                          {course.name}
                        </span>
                      ) : (
                        <Link
                          key={idx}
                          /* ??$$$ newer code — Cast course.href as string to satisfy compiler */
                          href={course.href as string}
                          className="text-[12px] text-gray-700 hover:text-red-700 transition-colors leading-snug tracking-normal hover:underline font-medium py-1.5"
                          onClick={() => {
                            setHoverTrigger(false);
                            setHoverMenu(false);
                          }}
                        >
                          {course.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Menu Bar containing Resources & NEP 2020 */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs pt-2">
              <div className="flex items-center gap-6">
                <span className="font-bold text-gray-900 uppercase tracking-wider">Resources:</span>
                <div className="flex gap-4">
                  {resourceItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={`/${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      className="text-gray-600 hover:text-red-700 hover:underline transition-colors font-semibold"
                      onClick={() => {
                        setHoverTrigger(false);
                        setHoverMenu(false);
                      }}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-bold text-gray-900 uppercase tracking-wider">NEP 2020:</span>
                <a
                  href="/code-of-conduct"
                  className="text-gray-600 hover:text-red-700 hover:underline transition-colors font-semibold"
                  onClick={() => {
                    setHoverTrigger(false);
                    setHoverMenu(false);
                  }}
                >
                  Code Of Coduct
                </a>
              </div>
            </div>

          </div>
        )}
      </div>

      {/* ??$$$ newer code — Mobile navigation drawer */}
      {mobileOpen && (
        <div id="mobile-nav-drawer">
          <div className="drawer-overlay" onClick={() => setMobileOpen(false)} />
          <div className="drawer-panel">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <span className="font-bold text-[15px] text-gray-900">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-red-700 text-xl font-bold cursor-pointer"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Drawer links */}
            <nav className="flex flex-col py-2">
              {/* Programmes accordion */}
              <button
                className="flex items-center justify-between px-5 py-3.5 text-[14px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors text-left cursor-pointer"
                onClick={() => setMobileAccordion(mobileAccordion === 'programmes' ? null : 'programmes')}
              >
                Programmes
                <span className={`text-gray-400 transition-transform duration-200 ${mobileAccordion === 'programmes' ? 'rotate-180' : ''}`}>▾</span>
              </button>
              {mobileAccordion === 'programmes' && (
                <div className="bg-gray-50 border-y border-gray-100">
                  {megaMenuData.map((col) => (
                    <div key={col.category}>
                      <button
                        className="flex items-center justify-between w-full px-7 py-3 text-[12.5px] font-bold text-[#0066cc] hover:bg-gray-100 transition-colors text-left cursor-pointer"
                        onClick={() => setMobileSchoolAccordion(mobileSchoolAccordion === col.category ? null : col.category)}
                      >
                        {col.category}
                        <span className={`text-gray-400 text-[10px] transition-transform duration-200 ${mobileSchoolAccordion === col.category ? 'rotate-180' : ''}`}>▾</span>
                      </button>
                      {mobileSchoolAccordion === col.category && (
                        <div className="bg-white border-t border-gray-50">
                          {col.items.map((course, idx) => {
                            if (course.hasSubMenu) {
                              return (
                                <div key={idx}>
                                  <button
                                    className="flex items-center justify-between w-full px-10 py-2.5 text-[12px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors text-left cursor-pointer"
                                    onClick={() => setMobileSubAccordion(mobileSubAccordion === course.name ? null : course.name)}
                                  >
                                    {course.name}
                                    <span className={`text-gray-400 text-[10px] transition-transform duration-200 ${mobileSubAccordion === course.name ? 'rotate-180' : ''}`}>▾</span>
                                  </button>
                                  {mobileSubAccordion === course.name && (
                                    <div className="bg-gray-50 border-t border-gray-100">
                                      {course.subMenu?.map((sub, subIdx) => (
                                        <Link
                                          key={subIdx}
                                          /* ??$$$ newer code — Cast sub.href as string to satisfy compiler */
                                          href={sub.href as string}
                                          className="block px-14 py-2 text-[12px] text-gray-600 hover:text-red-700 transition-colors"
                                          onClick={() => setMobileOpen(false)}
                                        >
                                          {sub.name}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              );
                            }

                            return course.href === '#' ? (
                              <span key={idx} className="block px-10 py-2 text-[12px] text-gray-400">{course.name}</span>
                            ) : (
                              <Link
                                key={idx}
                                /* ??$$$ newer code — Cast course.href as string to satisfy compiler */
                                href={course.href as string}
                                className="block px-10 py-2 text-[12px] text-gray-700 hover:text-red-700 hover:bg-red-50 transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                {course.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Simple links */}
              <Link href="#campus" className="px-5 py-3.5 text-[14px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors" onClick={() => setMobileOpen(false)}>Campus</Link>
              <Link href="#collaborations" className="px-5 py-3.5 text-[14px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors" onClick={() => setMobileOpen(false)}>Industry Linkage</Link>
              <Link href="#collaborations" className="px-5 py-3.5 text-[14px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors" onClick={() => setMobileOpen(false)}>Collaborations</Link>

              {/* Discover Us accordion */}
              <button
                className="flex items-center justify-between px-5 py-3.5 text-[14px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors text-left cursor-pointer"
                onClick={() => setMobileAccordion(mobileAccordion === 'discover' ? null : 'discover')}
              >
                Discover Us
                <span className={`text-gray-400 transition-transform duration-200 ${mobileAccordion === 'discover' ? 'rotate-180' : ''}`}>▾</span>
              </button>
              {mobileAccordion === 'discover' && (
                <div className="bg-gray-50 border-y border-gray-100">
                  {[...discoverCol1, ...discoverCol2].map((item, idx) => (
                    <Link
                      key={idx}
                      href={`/${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      className="block px-7 py-2.5 text-[13px] text-gray-700 hover:text-red-700 hover:bg-red-50 transition-colors font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}

              {/* Media accordion */}
              <button
                className="flex items-center justify-between px-5 py-3.5 text-[14px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors text-left cursor-pointer"
                onClick={() => setMobileAccordion(mobileAccordion === 'media' ? null : 'media')}
              >
                Media
                <span className={`text-gray-400 transition-transform duration-200 ${mobileAccordion === 'media' ? 'rotate-180' : ''}`}>▾</span>
              </button>
              {mobileAccordion === 'media' && (
                <div className="bg-gray-50 border-y border-gray-100">
                  {mediaItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={`/${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      className="block px-7 py-2.5 text-[13px] text-gray-700 hover:text-red-700 hover:bg-red-50 transition-colors font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}

              {/* ??$$$ newer code */}
              {/* <Link href="#" className="px-5 py-3.5 text-[14px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors" onClick={() => setMobileOpen(false)}>Career</Link> */}
              <Link href="/career.html" className="px-5 py-3.5 text-[14px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors" onClick={() => setMobileOpen(false)}>Career</Link>
              {/* ??$$$ newer code */}
              {/* <Link href="#contact" className="px-5 py-3.5 text-[14px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors" onClick={() => setMobileOpen(false)}>Contact Us</Link> */}
              <Link href="/contact-us.html" className="px-5 py-3.5 text-[14px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors" onClick={() => setMobileOpen(false)}>Contact Us</Link>
            </nav>

            {/* Drawer bottom CTA */}
            <div className="px-5 py-4 border-t border-gray-100 mt-auto">
              <Link
                href="/admission-open"
                className="block w-full py-3 rounded-lg text-white text-[14px] font-bold tracking-wider text-center"
                style={{ backgroundColor: "#f5b041" }}
                onClick={() => setMobileOpen(false)}
              >
                Admission
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

