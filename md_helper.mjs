import fs from 'fs';

// Helper function to convert markdown text to HTML
export function mdToHtml(md) {
  if (!md) return '';
  let html = md;

  // Escape special HTML chars (except quotes if not needed)
  html = html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Tables
  html = html.replace(/((?:\|[^\n]+\|\r?\n)+)/g, (match) => {
    const lines = match.trim().split(/\r?\n/);
    if (lines.length < 2) return match;
    let header = lines[0];
    let isHeader = lines[1].includes('---');
    let rows = isHeader ? lines.slice(2) : lines;

    const parseRow = (line, tag) => {
      const cells = line.split('|').slice(1, -1);
      return `<tr>${cells.map(c => `<${tag} class="px-3 py-2 border border-slate-200 text-xs sm:text-sm font-${tag === 'th' ? 'bold bg-emerald-50 text-emerald-950' : 'normal text-slate-700'}">${c.trim()}</${tag}>`).join('')}</tr>`;
    };

    let tableHtml = `<div class="overflow-x-auto my-3"><table class="w-full text-left border-collapse border border-slate-200 rounded-lg overflow-hidden text-xs sm:text-sm">`;
    if (isHeader) {
      tableHtml += `<thead>${parseRow(header, 'th')}</thead>`;
    }
    tableHtml += `<tbody>${rows.map(r => parseRow(r, 'td')).join('')}</tbody></table></div>`;
    return tableHtml;
  });

  // Headers
  html = html.replace(/^#### (.*?)$/gm, '<h5 class="text-sm font-bold text-slate-900 mt-3 mb-1">$1</h5>');
  html = html.replace(/^### (.*?)$/gm, '<h4 class="text-base font-bold text-emerald-900 mt-4 mb-2 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-600 inline-block"></span>$1</h4>');
  html = html.replace(/^## (.*?)$/gm, '<h3 class="text-lg font-bold text-emerald-950 mt-5 mb-2 pb-1 border-b border-emerald-200">$1</h3>');
  html = html.replace(/^# (.*?)$/gm, '<h2 class="text-xl font-extrabold text-emerald-950 mt-6 mb-3">$1</h2>');

  // Bold & Italic
  html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em class="italic text-slate-700">$1</em>');

  // Bullet lists
  html = html.replace(/((?:^[ \t]*[-*]\s+.*(?:\r?\n|$))+)/gm, (match) => {
    const items = match.trim().split(/\r?\n/).map(line => {
      const content = line.replace(/^[ \t]*[-*]\s+/, '');
      return `<li class="ml-4 list-disc text-slate-700 my-1">${content}</li>`;
    }).join('');
    return `<ul class="my-2 space-y-1">${items}</ul>`;
  });

  // Ordered lists (1., a), b), etc.)
  html = html.replace(/((?:^[ \t]*[0-9a-z]\)\s+.*(?:\r?\n|$))+)/gm, (match) => {
    const items = match.trim().split(/\r?\n/).map(line => {
      const m = line.match(/^[ \t]*([0-9a-z]\))\s+(.*)$/);
      if (m) {
        return `<div class="ml-3 my-1 text-slate-700 flex items-start gap-1.5"><span class="font-semibold text-emerald-800 shrink-0">${m[1]}</span><span>${m[2]}</span></div>`;
      }
      return `<div class="ml-3 my-1 text-slate-700">${line}</div>`;
    }).join('');
    return `<div class="my-2 space-y-1">${items}</div>`;
  });

  // Numbered paragraphs like "1. ", "2. "
  html = html.replace(/^[ \t]*(\d+)\.\s+(.*)$/gm, '<div class="my-1.5 text-slate-700 flex items-start gap-2"><span class="font-bold text-emerald-800 shrink-0">$1.</span><span>$2</span></div>');

  // Paragraphs
  const paras = html.split(/\r?\n\r?\n/);
  html = paras.map(p => {
    p = p.trim();
    if (!p) return '';
    if (p.startsWith('<div') || p.startsWith('<h') || p.startsWith('<table') || p.startsWith('<ul') || p.startsWith('<ol')) {
      return p;
    }
    return `<p class="my-2 text-slate-700 leading-relaxed text-xs sm:text-sm text-justify">${p.replace(/\r?\n/g, '<br/>')}</p>`;
  }).join('\n');

  return html;
}

console.log('mdToHtml helper loaded successfully.');
