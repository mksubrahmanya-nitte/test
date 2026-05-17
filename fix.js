const fs = require('fs');

let text = fs.readFileSync('src/data/programmes.ts', 'utf8');

text = text.replace(/export const programmes: Record<string, Programme> = \\{\\\\n/g, 'export const programmes: Record<string, Programme> = {\\n');
text = text.replace(/,\\\\n  '/g, ",\\n  '");
text = text.replace(/\\};\\\\n\\\\nexport const programmeAliases/g, '};\\n\\nexport const programmeAliases');

fs.writeFileSync('src/data/programmes.ts', text);
