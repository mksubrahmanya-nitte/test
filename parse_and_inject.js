const fs = require('fs');
const path = require('path');

const stepsMap = {
  '174': 'msc-forensic',
  '175': 'mba',
  '176': 'bca',
  '184': 'imba',
  '185': 'mca',
  '186': 'b-tech',
  '187': 'bcom',
  '188': 'llb'
};

const brainPath = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\9a7f968c-f388-41ab-b1c1-00d3a7f52fc4\\.system_generated\\steps';

const parsedProgrammes = {};

for (const [step, slug] of Object.entries(stepsMap)) {
  const filePath = path.join(brainPath, step, 'content.md');
  if (!fs.existsSync(filePath)) {
    console.error(`Step file not found: ${filePath}`);
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf8');

  const lines = content.split('\n').map(l => l.trim());

  let title = '';
  let tagline = 'School of Management'; 
  if (slug === 'msc-forensic') tagline = 'School of Investigative and Applied Sciences';
  if (slug === 'b-tech') tagline = 'School of Engineering';
  if (slug === 'bca' || slug === 'mca') tagline = 'School of Computing';
  if (slug === 'bcom') tagline = 'School of Commerce';
  if (slug === 'llb') tagline = 'School of Law';

  let duration = '';
  let commencement = '';
  let eligibility = '';
  let fees = '';
  
  let currentHeader = '';
  let descParagraphs = [];
  let highlights = [];
  let objectives = [];
  let outcomes = [];
  let specializations = [];
  let advantages = [];
  let specNote = '';

  let eligibilityText = [];
  let eligibilityOpen = '50%';
  let eligibilityReserved = '45%';
  let eligibilityType = 'standard';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line) continue;
    if (line.startsWith('Source:') || line === '---') continue;

    if (line.startsWith('Title:')) {
      const match = line.match(/Title:\s*(.*?)(?:\s*in Ahmedabad|$)/i);
      if (match) title = match[1].trim();
      continue;
    }

    if (line.startsWith('# Fee Structure')) {
      currentHeader = 'fees';
      continue;
    }

    if (line.startsWith('# Eligibility')) {
      currentHeader = 'eligibility_section';
      eligibilityType = 'split-boxes';
      continue;
    }

    if (line.startsWith('# Programme Highlights')) {
      currentHeader = 'highlights';
      continue;
    }

    if (line.startsWith('# Objectives')) {
      currentHeader = 'objectives';
      continue;
    }

    if (line.startsWith('# Outcomes')) {
      currentHeader = 'outcomes';
      continue;
    }

    if (line.startsWith('# Specialization') || line.startsWith('# Specializations')) {
      currentHeader = 'specializations';
      continue;
    }

    if (line.startsWith('### Course Commencement')) {
      commencement = lines[i + 1] || '';
      i++;
      continue;
    }

    if (line.startsWith('### Duration')) {
      duration = lines[i + 1] || '';
      i++;
      continue;
    }

    if (line.startsWith('### Eligibility') && currentHeader !== 'eligibility_section') {
      eligibility = lines[i + 1] || '';
      i++;
      continue;
    }

    if (line.startsWith('### Tuition Fee') || line.startsWith('### Tuition Fee Per Semester')) {
      fees = lines[i + 1] || '';
      i++;
      continue;
    }

    if (line.startsWith('###') && currentHeader === '') {
      
      continue;
    }

    if (line.startsWith('###') && (line.includes('Learning') || line.includes('Curriculum') || line.includes('Network') || line.includes('Exposure') || line.includes('Projects') || line.includes('Adoption') || line.includes('Exercises') || line.includes('Support') || line.includes('Status') || line.includes('Module'))) {
      const advTitle = line.replace('###', '').trim();
      const advDesc = lines[i + 1] || '';
      advantages.push({ title: advTitle, label: advTitle, desc: advDesc });
      i++;
      continue;
    }

    if (currentHeader === '') {
      if (!line.startsWith('#') && !line.startsWith('###') && !line.startsWith('Title:')) {
        
        if (line.includes('₹') || line.includes('FRC')) {
          fees = line;
        } else {
          descParagraphs.push(line);
        }
      }
    } else if (currentHeader === 'eligibility_section') {
      if (line.includes('50%')) {
        eligibilityOpen = '50%';
      }
      if (line.includes('45%')) {
        eligibilityReserved = '45%';
      }
      if (!line.startsWith('#')) {
        eligibilityText.push(line);
      }
    } else if (currentHeader === 'highlights') {
      if (!line.startsWith('#')) {
        const text = line.replace(/^-\s*/, '').trim();
        highlights.push(text);
      }
    } else if (currentHeader === 'objectives') {
      if (!line.startsWith('#')) {
        const text = line.replace(/^-\s*/, '').trim();
        objectives.push(text);
      }
    } else if (currentHeader === 'outcomes') {
      if (!line.startsWith('#')) {
        const text = line.replace(/^-\s*/, '').trim();
        outcomes.push(text);
      }
    } else if (currentHeader === 'specializations') {
      if (!line.startsWith('#')) {
        if (line.toLowerCase().includes('important note') || line.toLowerCase().includes('note :')) {
          specNote = line;
        } else {
          specializations.push(line.replace(/^-\s*/, '').trim());
        }
      }
    }
  }

  if (!commencement) commencement = '2024-25 Academic Year';
  if (slug === 'msc-forensic') commencement = '2025-26 Academic Year';
  if (!duration) duration = '2 Years';
  if (!eligibility) eligibility = 'Bachelor\'s Degree';

  const specializationsObj = specializations.map((name) => {
    let desc = `Specialization in ${name} with cutting-edge curriculum.`;
    if (name.includes('Aviation')) desc = 'Venture into aviation and logistics management.';
    if (name.includes('Analytics')) desc = 'Data insights, analytical modeling, and decision tools.';
    if (name.includes('Finance')) desc = 'Investment analysis, wealth management, and treasury.';
    if (name.includes('HR') || name.includes('Human Resource')) desc = 'Strategic HR systems, talent retention, and labor relations.';
    if (name.includes('Marketing')) desc = 'Brand management, customer psychology, and sales.';
    if (name.includes('Entrepreneurship')) desc = 'Venture incubation, startup mechanics, and planning.';
    
    return {
      name,
      desc,
      bg: "bg-blue-50/30",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600"
    };
  });

  const highlightsObj = highlights.map((h) => {
    
    const words = h.split(' ');
    const label = words[0] || 'Programme';
    const text = h;
    return { label, text };
  });

  if (eligibilityText.length === 0) {
    eligibilityText = [
      `The students seeking admission in ${title} shall have passed qualifying examination with required percentage.`,
      `Minimum marks required: Open Category: ${eligibilityOpen}, Reserved Category: ${eligibilityReserved}.`
    ];
  }

  if (title.includes('JG University')) {
    title = title.split('JG University')[0].replace(/[~|]/g, '').trim();
  }
  if (!title) {
    title = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }

  parsedProgrammes[slug] = {
    slug,
    title,
    tagline,
    duration,
    fees: fees || 'TBD',
    eligibility,
    courseCommencement: commencement,
    eligibilityType: eligibilityType === 'split-boxes' ? 'split-boxes' : 'standard',
    eligibilityText,
    eligibilityOpen,
    eligibilityReserved,
    description: descParagraphs.filter(d => d.length > 20),
    highlightsObj,
    objectives,
    outcomes,
    specializationsObj: specializationsObj.length > 0 ? specializationsObj : undefined,
    specializationNote: specNote ? [specNote] : undefined,
    advantages: advantages.length > 0 ? advantages : undefined
  };
}

console.log('Successfully parsed program details for keys:', Object.keys(parsedProgrammes));

const scrapedData = JSON.parse(fs.readFileSync('./programmes_data.json', 'utf8'));
for (const [slug, data] of Object.entries(parsedProgrammes)) {
  scrapedData[slug] = { ...scrapedData[slug], ...data };
}

fs.writeFileSync('./programmes_data.json', JSON.stringify(scrapedData, null, 2));
console.log('Successfully enriched and updated programmes_data.json!');
