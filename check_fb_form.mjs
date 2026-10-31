import fs from 'fs';
const tmpl = JSON.parse(fs.readFileSync('D:/Antigravity Projects/TKGuiGop/data/template_strings_v2.json', 'utf8'));
const idx = tmpl.feedbackContent.indexOf('<form');
console.log(tmpl.feedbackContent.slice(idx, idx + 2500));
