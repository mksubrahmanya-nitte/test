const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Running generate_programmes.js to set baseline...');
execSync('node generate_programmes.js', { stdio: 'inherit' });

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

const certsData = {};

for (const [step, slug] of Object.entries(slugsMap)) {
  const filePath = path.join('C:', 'Users', 'User', '.gemini', 'antigravity', 'brain', '66e046d3-fb99-4fb2-a1f8-fd99f58353c4', '.system_generated', 'steps', step, 'content.md');
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf8');

  const lines = content.split('\n');
  let currentHeader = '';
  let title = '';
  const sections = {
    desc: [],
    fees: [],
    eligibility: [],
    duration: []
  };

  const titleMatch = content.match(/# Certificate Course in (.*)/);
  if (titleMatch) {
    title = titleMatch[1].trim();
  } else {
    title = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    if (line.startsWith('Source:') || line === '---') continue;

    if (line.startsWith('# ')) {
      const headerText = line.replace('# ', '').trim();
      if (headerText.toLowerCase().includes('fee structure')) {
        currentHeader = 'fees';
      } else if (headerText.toLowerCase().includes('eligibility')) {
        currentHeader = 'eligibility';
      } else if (headerText.toLowerCase().includes('duration')) {
        currentHeader = 'duration';
      } else if (headerText.toLowerCase().includes('admission process')) {
        currentHeader = 'admission';
      } else {
        currentHeader = 'desc';
      }
      continue;
    }

    if (line.startsWith('###')) continue; 

    if (currentHeader === 'desc') {
      sections.desc.push(line);
    } else if (currentHeader === 'fees') {
      sections.fees.push(line);
    } else if (currentHeader === 'eligibility') {
      sections.eligibility.push(line);
    } else if (currentHeader === 'duration') {
      sections.duration.push(line);
    }
  }

  sections.desc = sections.desc.filter(p => !p.toLowerCase().includes('certificate course') && p.trim().length > 15);

  certsData[slug] = {
    slug,
    title: `Certificate Course in ${title}`,
    tagline: 'Certificate Programme',
    duration: sections.duration.join('\n') || '3 Months',
    fees: sections.fees.join('\n') || 'TBD',
    eligibility: sections.eligibility.join('\n') || 'Graduate in relevant field',
    description: sections.desc,
    specializationsStr: ['Core Curriculum'],
    highlightsStr: ['Industry Aligned', 'Practical Training']
  };
}

let tsFile = fs.readFileSync('src/data/programmes.ts', 'utf8');

for (const [slug, data] of Object.entries(certsData)) {
  
  const regex = new RegExp(`'${slug}':\\s*\\{[\\s\\S]*?\\n\\s*\\},?`, 'g');
  
  const descStr = '[\n      ' + data.description.map(d => `"${d.replace(/"/g, '\\"')}"`).join(',\n      ') + '\n    ]';
  const durationStr = data.duration.replace(/\n/g, '\\n');
  const feesStr = data.fees.replace(/\n/g, '\\n');
  const eligibilityStr = data.eligibility.replace(/\n/g, '\\n');

  const replacement = `'${slug}': {
    slug: '${slug}',
    title: '${data.title}',
    tagline: '${data.tagline}',
    duration: '${durationStr}',
    fees: '${feesStr}',
    eligibility: '${eligibilityStr}',
    description: ${descStr},
    specializationsStr: ['Core Curriculum'],
    highlightsStr: ['Industry Aligned', 'Practical Training']
  },`;

  tsFile = tsFile.replace(regex, replacement);
}

const closingPattern = '}\n};\n\nexport const programmeAliases';
if (tsFile.includes(closingPattern)) {
  const btechStub = `  'btech-computer-engineering': {
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
  }`;
  
  tsFile = tsFile.replace(closingPattern, `},\n${btechStub}\n};\n\nexport const programmeAliases`);
  console.log('Added btech-computer-engineering stub with correct comma separator.');
}

fs.writeFileSync('src/data/programmes.ts', tsFile);
console.log('Successfully completed full high-fidelity patch on programmes.ts');
