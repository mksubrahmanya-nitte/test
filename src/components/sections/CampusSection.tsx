

const IIoTLabIcon = () => (
  <svg className="w-10 h-10 text-[#de1f61]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="18" y="22" width="26" height="26" rx="4" />
    <rect x="26" y="30" width="10" height="10" fill="currentColor" fillOpacity="0.1" />
    <path d="M24 14v8M32 14v8M40 14v8M24 48v8M32 48v8M40 48v8M10 28h8M10 36h8M10 44h8M44 28h8M44 36h8M44 44h8" />
    <path d="M47 17a6 6 0 0 1 6-6" />
    <path d="M52 22a11 11 0 0 1 11-11" />
  </svg>
);

const RDIncubationIcon = () => (
  <svg className="w-10 h-10 text-[#de1f61]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 26h8v26h-8zM44 26h8v26h-8z" />
    <path d="M24 20h16v32H24z" />
    <circle cx="32" cy="30" r="5" fill="currentColor" fillOpacity="0.1" />
    <path d="M32 35v10" />
    <path d="M20 26h24M16 26l16-8 16 8" />
  </svg>
);

const TechLibraryIcon = () => (
  <svg className="w-10 h-10 text-[#de1f61]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 46c10-2 20 2 22 4 2-2 12-6 22-4V18c-10-2-20 2-22 4-2-2-12-6-22-4z" />
    <path d="M32 22v28" />
    <path d="M32 28v-9" />
    <circle cx="32" cy="16" r="3" fill="currentColor" />
    <path d="M32 26c-3-3-8-2-10-5" />
    <circle cx="20" cy="19" r="3" fill="currentColor" />
    <path d="M32 26c3-3 8-2 10-5" />
    <circle cx="42" cy="19" r="3" fill="currentColor" />
  </svg>
);

const WifiCampusIcon = () => (
  <svg className="w-10 h-10 text-[#de1f61]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 50h40M16 34h32M16 34v16M48 34v16M24 34v16M40 34v16" />
    <path d="M12 34l20-12 20 12" />
    <path d="M30 22v-6h4v6" />
    <path d="M26 11a8 8 0 0 1 12 0" />
    <path d="M22 7a14 14 0 0 1 20 0" />
  </svg>
);

const campusFeatures = [
  { label: "IIoT Lab", icon: <IIoTLabIcon /> },
  { label: "R&D + Incubation", icon: <RDIncubationIcon /> },
  { label: "Tech-enabled Library", icon: <TechLibraryIcon /> },
  { label: "Wi-Fi Enabled Campus", icon: <WifiCampusIcon /> },
];

export default function CampusSection() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto" id="campus">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-4">Campus</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
          <img src="/images/campus_library.png" alt="JG Campus Lounge" className="w-full h-full object-cover" />
        </div>
        <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
          <img src="/images/CRM0SCENE.webp" alt="JG Campus Hallway" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex items-center justify-center gap-12 md:gap-16 flex-wrap mt-10">
        {campusFeatures.map((f) => (
          <div
            key={f.label}
            className="flex flex-col items-center gap-3 w-40 text-center group cursor-pointer"
          >
            <div className="w-20 h-20 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-center shadow-sm">
              {f.icon}
            </div>
            <span className="text-sm font-semibold text-gray-700 leading-snug tracking-wide group-hover:text-red-700 transition-colors">
              {f.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

