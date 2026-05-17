const fs = require('fs');

const { programmes } = require('./src/data/programmes.ts');

const ugPrograms = [
  "BBA | BBA (Hons)",
  "Integrated BBA + MBA",
  "Integrated BBA + MBA - Global Business",
  "BBA / BBA (Hons) / iMBA",
  "B.Com | B.Com (Hons)",
  "B.Com (Hons) with ACCA",
  "BCA | BCA (Hons)",
  "Integrated BSc + MSc (IT)",
  "Integrated BSc + MSc (IT-Specialization)",
  "B.Sc. / B.Sc. (Hons) / iMSc",
  "Integrated BCA + MCA",
  "B.Tech Programs",
  "BBA | BBA (Hons) - International Trade & Finance",
  "Integrated BBA + MBA - Aviation, Hospitality, & Travel Management",
  "Integrated BBA + MBA - International Trade & Finance",
  "LL.B.",
];

const pgPrograms = [
  "MBA",
  "Masters in International Trade & Finance",
  "Masters in Aviation, Hospitality & Travel Management",
  "M.Com (Hons) - International Accounting & Taxation",
  "MCA",
  "MCA - AI / Full Stack Development",
  "MSc (IT-Specialization)",
  "MSc",
  "LL.M.",
];

function getCalculatedSlug(item) {
  return item.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

console.log('--- UNDERGRADUATE ---');
ugPrograms.forEach(item => {
  const calc = getCalculatedSlug(item);
  const exists = !!programmes[calc];
  console.log(`"${item}" -> "${calc}" (Exists in programmes.ts: ${exists})`);
});

console.log('\n--- POSTGRADUATE ---');
pgPrograms.forEach(item => {
  const calc = getCalculatedSlug(item);
  const exists = !!programmes[calc];
  console.log(`"${item}" -> "${calc}" (Exists in programmes.ts: ${exists})`);
});

console.log('\n--- ALL AVAILABLE KEYS IN programmes.ts ---');
console.log(Object.keys(programmes));
