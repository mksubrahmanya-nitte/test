const fs = require('fs');

const html = fs.readFileSync('faculty.html', 'utf8');

const boxes = html.split('<div class="br-box-l">').slice(1);

const faculty = [];

for (const box of boxes) {
  const imgMatch = box.match(/<img[^>]+src="([^"]+)"/);
  const nameMatch = box.match(/<h3>([^<]+)<span/);
  const schoolMatch = box.match(/<span>([^<]+)<\/span>/);
  const descMatch = box.match(/<p class="text-justify">([\s\S]*?)<\/p>/);
  
  if (imgMatch && nameMatch) {
    let img = imgMatch[1].replace('https://jguni.in', '');
    if (!img.startsWith('/')) img = '/' + img;
    
    faculty.push({
      image: img,
      name: nameMatch[1].trim(),
      school: schoolMatch ? schoolMatch[1].trim() : '',
      desc: descMatch ? descMatch[1].trim() : ''
    });
  }
}

const tsxContent = `
import React from 'react';

const facultyData = ${JSON.stringify(faculty, null, 2)};

export default function FacultyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner matching live site */}
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

      {/* List layout matching live site */}
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
`;

fs.writeFileSync('src/app/faculty/page.tsx', tsxContent);
console.log('Faculty page updated!');
