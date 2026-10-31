import fs from 'fs';
import { mdToHtml } from './md_helper.mjs';

console.log('Building complete single-file PWA with lazy loading...');

const q1Text = fs.readFileSync('D:/Antigravity Projects/TKGuiGop/docs/Quyche_HDQT.md', 'utf8');
const q2Text = fs.readFileSync('D:/Antigravity Projects/TKGuiGop/docs/Quyche_2_DaChuKy_HDQT.md', 'utf8');
const bcText = fs.readFileSync('D:/Antigravity Projects/TKGuiGop/docs/Bao_Cao_Phan_Tich_HDQT.md', 'utf8');

// Parse Articles from Quyche 1
function parseArticles(text) {
  const dRegex = /\*\*Điều\s+(\d+)\.\s*([^*]+)\*\*/g;
  let match;
  const matches = [];
  while ((match = dRegex.exec(text)) !== null) {
    matches.push({ index: match.index, num: match[1], title: match[2].trim() });
  }
  const articles = [];
  matches.forEach((m, i) => {
    const nextIdx = matches[i + 1] ? matches[i + 1].index : text.length;
    let content = text.slice(m.index, nextIdx).trim();
    // remove the initial **Điều X. ...** from content
    content = content.replace(/^\*\*Điều\s+\d+\.\s*[^*]+\*\*\s*/, '');
    articles.push({
      num: m.num,
      title: m.title,
      html: mdToHtml(content)
    });
  });
  return articles;
}

const articlesQ1 = parseArticles(q1Text);
const articlesQ2 = parseArticles(q2Text);
console.log(`Parsed Q1: ${articlesQ1.length} articles, Q2: ${articlesQ2.length} articles`);

// Parse Sections from Bao Cao
function parseBaoCao(text) {
  const secRegex = /###\s+([I|V|X]+)\.\s*([^\n]+)/g;
  let match;
  const matches = [];
  while ((match = secRegex.exec(text)) !== null) {
    matches.push({ index: match.index, roman: match[1], title: match[2].trim() });
  }

  const sections = {};
  matches.forEach((m, i) => {
    const nextIdx = matches[i + 1] ? matches[i + 1].index : text.length;
    let content = text.slice(m.index, nextIdx).trim();
    content = content.replace(/^###\s+[I|V|X]+\.\s*[^\n]+\s*/, '');
    sections[m.roman] = {
      roman: m.roman,
      title: m.title,
      raw: content,
      html: mdToHtml(content)
    };
  });

  // Parse Section VI (Situations)
  const secVIText = sections['VI'] ? sections['VI'].raw : '';
  const sitRegex = /\*\*(\d+)\.\s*([^*]+)\*\*/g;
  let sitMatch;
  const sitMatches = [];
  while ((sitMatch = sitRegex.exec(secVIText)) !== null) {
    sitMatches.push({ index: sitMatch.index, num: sitMatch[1], title: sitMatch[2].trim() });
  }
  const situations = [];
  sitMatches.forEach((s, i) => {
    const nextIdx = sitMatches[i + 1] ? sitMatches[i + 1].index : secVIText.length;
    let content = secVIText.slice(s.index, nextIdx).trim();
    content = content.replace(/^\*\*\d+\.\s*[^*]+\*\*\s*/, '');
    situations.push({
      num: s.num,
      title: s.title,
      html: mdToHtml(content)
    });
  });

  // Parse Section VII (Questions)
  const secVIIText = sections['VII'] ? sections['VII'].raw : '';
  const qRegex = /\|\s*\*\*(\d+)\.\s*([^*]+)\*\*\s*\|\s*([^|]+)\|/g;
  let qMatch;
  const questions = [];
  while ((qMatch = qRegex.exec(secVIIText)) !== null) {
    questions.push({
      num: qMatch[1],
      q: qMatch[2].trim(),
      a: qMatch[3].trim()
    });
  }

  return { sections, situations, questions };
}

const bcParsed = parseBaoCao(bcText);
console.log(`Parsed Bao Cao: ${Object.keys(bcParsed.sections).length} sections, ${bcParsed.situations.length} situations, ${bcParsed.questions.length} questions`);

fs.writeFileSync('D:/Antigravity Projects/TKGuiGop/data/parsed_data.json', JSON.stringify({
  articlesQ1,
  articlesQ2,
  bcParsed
}, null, 2), 'utf8');

console.log('Saved parsed_data.json successfully.');
