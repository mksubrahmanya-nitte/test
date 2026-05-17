

const features = [
  "National Education Policy (NEP) 2020 & UGC Compliant Programmes",
  "Cutting-edge Interdisciplinary Curriculum for Co-create Delivery",
  "Top 10+ Straight Forward Programmes",
  "National Level Project",
  "Faculty Members with Industry Experience and Academic Expertise",
  "Circles of Experience using Academic Idea of Learning and Emerging Technology",
  "Choice of Specialization at Options (Specialization)",
  "100% Accessibility of Syllabus to Students and Faculty Members",
];

const Chevron = () => (
  <svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
  </svg>
);

export default function SalientFeatures() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto" id="features">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-4">JG University Salient Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        {features.map((f) => (
          <div key={f} className="flex items-start gap-3">
            <Chevron />
            <span className="text-sm text-gray-700 leading-relaxed">{f}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
