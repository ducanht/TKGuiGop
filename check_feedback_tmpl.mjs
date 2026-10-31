import fs from 'fs';
const tmpl = JSON.parse(fs.readFileSync('D:/Antigravity Projects/TKGuiGop/data/template_strings_v2.json', 'utf8'));
console.log('Feedback template length:', tmpl.feedbackContent.length);
console.log('Feedback sample:\n', tmpl.feedbackContent.slice(0, 1500));
