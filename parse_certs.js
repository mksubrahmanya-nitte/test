const fs = require('fs');
const path = require('path');

const slugsMap = {
  '1440': 'metaverse',
  '1446': 'data-science-ai-ml',
  '1447': 'mobile-applications',
  '1448': 'blockchain',
  '1449': 'digital-marketing',
  '1450': 'cyber-security',
  '1451': 'robotic-process-automation',
  '1452': 'industrial-iot',
  '1453': 'full-stack-architect',
  '1454': 'azure-devops'
};

const certs = {};

for (const [step, slug] of Object.entries(slugsMap)) {
  const filePath = path.join('C:', 'Users', 'User', '.gemini', 'antigravity', 'brain', '66e046d3-fb99-4fb2-a1f8-fd99f58353c4', '.system_generated', 'steps', step, 'content.md');
  const content = fs.readFileSync(filePath, 'utf8');

  const sections = content.split('\n# ');
  
  let title = '';
  let description = [];
  let fees = '';
  let eligibility = '';
  let duration = '';
  
  for (let i = 0; i < sections.length; i++) {
    const sec = sections[i];
    if (sec.startsWith('Certificate Course in ')) {
      title = sec.split('\n')[0].replace('Certificate Course in ', '').trim();
    } else if (sec.startsWith('Fee Structure')) {
      fees = sec.split('\n').slice(1).filter(l => l.trim() && !l.startsWith('#')).join('\\n').replace(/"/g, '\\"');
    } else if (sec.startsWith('Eligibility')) {
      eligibility = sec.split('\n').slice(1).filter(l => l.trim() && !l.startsWith('#')).join('\\n').replace(/"/g, '\\"');
    } else if (sec.startsWith('Duration of Course') || sec.startsWith('Duration')) {
      duration = sec.split('\n').slice(1).filter(l => l.trim() && !l.startsWith('#')).join('\\n').replace(/"/g, '\\"');
    } else if (sec.startsWith(title) || (i === 2 && !sec.startsWith('Fee') && !sec.startsWith('Elig'))) {
      
      description = sec.split('\n').slice(1).filter(l => l.trim() && !l.startsWith('#'));
    }
  }

  if (!title) {
     const titleMatch = content.match(/# Certificate Course in (.*)/);
     if (titleMatch) title = titleMatch[1].trim();
  }
  
  certs[slug] = {
    title: title || slug.replace(/-/g, ' ').toUpperCase(),
    tagline: 'Certificate Programme',
    duration: duration || '3 Months - 1 Year',
    fees: fees || 'TBD',
    eligibility: eligibility || 'Graduation in relevant field',
    description: description.length > 0 ? description : [`The ${title} certificate programme is designed to build advanced skills in this domain.`],
    specializationsStr: ['Core Curriculum'],
    highlightsStr: ['Industry Aligned', 'Practical Training']
  };
}

let tsFile = fs.readFileSync('src/data/programmes.ts', 'utf8');

for (const [slug, data] of Object.entries(certs)) {
  const regex = new RegExp(`'${slug}':\\s*\\{[\\s\\S]*?\\n  \\},?`, 'g');
  
  let descStr = `[\n      ` + data.description.map(d => `"${d.replace(/"/g, '\\"')}"`).join(`,\n      `) + `\n    ]`;
  if (data.description.length === 1) {
    descStr = `["${data.description[0].replace(/"/g, '\\"')}"]`;
  }

  const replacement = `'${slug}': {
    slug: '${slug}',
    title: '${data.title}',
    tagline: '${data.tagline}',
    duration: '${data.duration}',
    fees: '${data.fees}',
    eligibility: '${data.eligibility}',
    description: ${descStr},
    specializationsStr: ['Core Curriculum'],
    highlightsStr: ['Industry Aligned', 'Practical Training']
  },`;

  tsFile = tsFile.replace(regex, replacement);

  const regexLast = new RegExp(`'${slug}':\\s*\\{[\\s\\S]*?\\n  \\}\\n\\};`, 'g');
  tsFile = tsFile.replace(regexLast, replacement.replace('},', '}\n};'));
}

fs.writeFileSync('src/data/programmes.ts', tsFile);
console.log('Successfully updated programmes.ts');
