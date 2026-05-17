const fs = require('fs');

const html = fs.readFileSync('faq.html', 'utf8');

// A very simple regex parser to extract FAQ categories and items
const categories = [];

const navItemRegex = /<button class="nav-link[^"]*" id="([^"]+)-tab".*?>([\s\S]*?)<\/button>/g;
let navMatch;
while ((navMatch = navItemRegex.exec(html)) !== null) {
  categories.push({
    id: navMatch[1],
    title: navMatch[2].trim(),
    items: []
  });
}

for (const category of categories) {
  // Find the tab pane
  const paneRegex = new RegExp(`<div class="tab-pane[^"]*" id="${category.id}"[\\s\\S]*?<!-- tab pane end or next tab pane -->`, 'i');
  // It's easier to just find the content bounded by the pane div
  const paneStartIdx = html.indexOf(`id="${category.id}"`);
  if (paneStartIdx !== -1) {
    let nextPaneStartIdx = html.indexOf('class="tab-pane', paneStartIdx + 1);
    if (nextPaneStartIdx === -1) nextPaneStartIdx = html.length;
    
    const paneHtml = html.substring(paneStartIdx, nextPaneStartIdx);
    
    // Extract accordions in this pane
    const accRegex = /<button class="accordion-button[^>]*>([\s\S]*?)<\/button>[\s\S]*?<div class="accordion-body">([\s\S]*?)<\/div>/g;
    let accMatch;
    while ((accMatch = accRegex.exec(paneHtml)) !== null) {
      category.items.push({
        question: accMatch[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(),
        // Keep the inner HTML of the answer, but clean it slightly
        answer: accMatch[2].trim()
      });
    }
  }
}

const componentCode = `
'use client';
import React, { useState } from 'react';

const faqData = ${JSON.stringify(categories, null, 2)};

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState(faqData[0]?.id || '');
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (idx) => {
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
                className={\`px-6 py-3 font-semibold text-[15px] transition-colors duration-200 \${
                  activeTab === category.id
                    ? 'text-red-700 border-b-2 border-red-700 bg-gray-50'
                    : 'text-gray-600 hover:text-red-700 hover:bg-gray-50'
                }\`}
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
`;

fs.writeFileSync('src/app/faq/page.tsx', componentCode);
console.log('FAQ page generated!');
