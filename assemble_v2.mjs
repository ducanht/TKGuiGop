import fs from 'fs';
import { renderRegulationsHtml, renderAnalysisHtml, renderConsultingHtml } from './render_helpers.mjs';
import { renderPricingTabHtml } from './render_pricing.mjs';
import { renderFeedbackTabHtml } from './render_feedback.mjs';

console.log('Regenerating template strings with latest Feedback and Pricing tabs...');

const tmpl = JSON.parse(fs.readFileSync('D:/Antigravity Projects/TKGuiGop/data/template_strings_v2.json', 'utf8'));

const regulationsContent = renderRegulationsHtml();
const analysisContent = renderAnalysisHtml();
const consultingContent = renderConsultingHtml();
const pricingContent = renderPricingTabHtml();
const templatesContent = tmpl.templatesContent;
const feedbackContent = renderFeedbackTabHtml();

fs.writeFileSync('D:/Antigravity Projects/TKGuiGop/data/template_strings_v2.json', JSON.stringify({
  regulationsContent,
  analysisContent,
  pricingContent,
  consultingContent,
  templatesContent,
  feedbackContent
}), 'utf8');

console.log('Saved template_strings_v2.json successfully with updated Feedback and Pricing tabs.');
