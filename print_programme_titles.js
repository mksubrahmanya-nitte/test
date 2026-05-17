const { programmes } = require('./src/data/programmes.ts');

console.log('PROGRAMME KEYS AND TITLES:');
Object.entries(programmes).forEach(([key, val]) => {
  console.log(`  '${key}': "${val.title}" (tagline: "${val.tagline || ''}")`);
});
