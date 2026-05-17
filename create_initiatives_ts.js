const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync('extracted_initiatives.json', 'utf8'));

let content = `// ??$$$
export interface Initiative {
  title: string;
  images: string[];
}

export const initiativesData: Initiative[] = ${JSON.stringify(data, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'initiatives.ts'), content);
console.log('Successfully generated src/data/initiatives.ts');
