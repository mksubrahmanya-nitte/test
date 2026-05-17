// ??$$$ newer code
import React from 'react';

const partners = [
  { name: "yudiz", logo: "/images/yudiz.png" },
  { name: "DEV IT Simplify", logo: "/images/dev.png" },
  { name: "Aventure", logo: "/images/aventure.png" },
  { name: "IBM", logo: "/images/ibm.png" },
  { name: "ISRO", logo: "/images/isro.png" },
  { name: "Asian-African", logo: "/images/asian-african.png" },
];

export default function PartnersSection() {
  return (
    <section className="py-8 px-4 max-w-7xl mx-auto" id="partners">
      <div className="flex items-center justify-center gap-10 flex-wrap">
        {partners.map((p) => (
          <div key={p.name} className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex items-center justify-center h-12 w-28">
            <img src={p.logo} alt={p.name} className="max-h-10 max-w-full object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
