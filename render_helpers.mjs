import fs from 'fs';

const data = JSON.parse(fs.readFileSync('D:/Antigravity Projects/TKGuiGop/data/parsed_data.json', 'utf8'));
const { articlesQ1, articlesQ2, bcParsed } = data;

// Generate Regulations HTML
export function renderRegulationsHtml() {
  const renderList = (articles, optKey) => {
    return articles.map(art => `
      <details class="reg-item bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-emerald-300 transition duration-150 mb-3 group" data-opt="${optKey}">
        <summary class="px-4 py-3.5 sm:px-5 sm:py-4 cursor-pointer select-none bg-slate-50/80 hover:bg-emerald-50/40 font-bold text-slate-800 flex items-center justify-between transition-colors">
          <div class="flex items-center gap-2.5 sm:gap-3">
            <span class="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-extrabold shrink-0">
              ${art.num}
            </span>
            <span class="text-xs sm:text-sm text-slate-900 group-open:text-emerald-900">
              Điều ${art.num}. ${art.title}
            </span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 hidden sm:inline-block">
              Toàn văn
            </span>
            <svg class="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform duration-200 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </summary>
        <div class="px-4 py-4 sm:px-6 sm:py-5 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-200/80 bg-white">
          ${art.html}
        </div>
      </details>
    `).join('');
  };

  return `
    <!-- Banner Quy định -->
    <div class="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-md border border-emerald-800">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-800/80 text-emerald-200 text-xs font-semibold mb-2">
            <svg class="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            QUY ĐỊNH HỘI ĐỒNG QUẢN TRỊ BAN HÀNH
          </div>
          <h2 class="text-lg sm:text-xl font-bold tracking-tight text-white">Quy Định Sản Phẩm Tiết Kiệm Gửi Góp Định Kỳ</h2>
          <p class="text-xs sm:text-sm text-emerald-200/90 mt-1 max-w-2xl leading-relaxed">
            Áp dụng thống nhất trong toàn hệ thống Quỹ tín dụng nhân dân Yên Thọ. Chọn phương án để xem toàn văn quy định tương ứng.
          </p>
        </div>
        <div class="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <button onclick="toggleAllRegulations(true)" class="px-3 py-2 bg-emerald-800/90 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg border border-emerald-600 shadow-xs flex items-center gap-1.5 transition">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"/></svg>
            Hiện toàn bộ
          </button>
          <button onclick="toggleAllRegulations(false)" class="px-3 py-2 bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-600 shadow-xs flex items-center gap-1.5 transition">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7"/></svg>
            Thu gọn
          </button>
        </div>
      </div>

      <!-- Segmented Control chọn Phương Án -->
      <div class="mt-5 p-1 bg-emerald-950/70 rounded-xl border border-emerald-800/80 flex flex-col sm:flex-row gap-1">
        <button id="regOptBtn_1" onclick="switchRegulationOption('opt1')" 
          class="flex-1 py-2 px-3 rounded-lg font-bold text-xs sm:text-sm bg-white text-emerald-900 shadow-xs border border-emerald-300 transition-all text-center flex items-center justify-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
          <span>Phương Án 1: Chu Kỳ Gửi 01 Tháng/Lần</span>
          <span class="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-semibold ml-1">Chuẩn mực</span>
        </button>
        <button id="regOptBtn_2" onclick="switchRegulationOption('opt2')" 
          class="flex-1 py-2 px-3 rounded-lg font-medium text-xs sm:text-sm text-slate-300 hover:text-white hover:bg-emerald-800/50 transition-all text-center flex items-center justify-center gap-2">
          <span class="w-2 h-2 rounded-full bg-slate-400"></span>
          <span>Phương Án 2: Đa Chu Kỳ (1 Tháng, 3 Tháng, 6 Tháng)</span>
          <span class="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-semibold ml-1">Linh hoạt</span>
        </button>
      </div>
    </div>

    <!-- Nội dung Phương án 1 (10 Điều) -->
    <div id="regOption1Content" class="space-y-1">
      <div class="bg-emerald-50/60 border border-emerald-200 rounded-xl p-3 sm:p-4 text-xs sm:text-sm text-emerald-900 mb-3 flex items-start gap-2.5">
        <svg class="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <div>
          <strong class="font-bold">Phương án 1 (Quy định chuẩn mực):</strong> Khách hàng nộp định kỳ hàng tháng (01 tháng/lần), số tiền tối thiểu 500.000đ/lần. Áp dụng cho các kỳ hạn 6, 12, 18, 24, 36, 60 tháng. Gồm đầy đủ 10 Điều khoản toàn văn nguyên bản:
        </div>
      </div>
      ${renderList(articlesQ1, 'opt1')}
    </div>

    <!-- Nội dung Phương án 2 (10 Điều) -->
    <div id="regOption2Content" class="space-y-1 hidden">
      <div class="bg-amber-50/60 border border-amber-200 rounded-xl p-3 sm:p-4 text-xs sm:text-sm text-amber-950 mb-3 flex items-start gap-2.5">
        <svg class="w-4 h-4 text-amber-700 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <div>
          <strong class="font-bold">Phương án 2 (Đa chu kỳ mở rộng):</strong> Khách hàng được lựa chọn linh hoạt chu kỳ gửi: Hàng tháng (tối thiểu 500k), Hàng quý / 3 tháng một lần (tối thiểu 1,5tr), hoặc 06 tháng một lần (tối thiểu 3tr, cho kỳ hạn 24 tháng). Gồm đầy đủ 10 Điều khoản toàn văn nguyên bản:
        </div>
      </div>
      ${renderList(articlesQ2, 'opt2')}
    </div>
  `;
}

// Generate Analysis HTML (Phần Phân Tích: I, II, III, IV, V, VIII, IX, X, XI)
export function renderAnalysisHtml() {
  const { sections } = bcParsed;

  const renderSecCard = (roman, defaultOpen = false) => {
    const s = sections[roman];
    if (!s) return '';
    return `
      <details class="analysis-sec bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-emerald-300 transition mb-3.5 group" ${defaultOpen ? 'open' : ''}>
        <summary class="px-4 py-3.5 sm:px-5 sm:py-4 cursor-pointer select-none bg-slate-50 hover:bg-emerald-50/40 font-bold text-slate-800 flex items-center justify-between transition">
          <div class="flex items-center gap-2.5 sm:gap-3">
            <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-md bg-emerald-800 text-white text-xs font-extrabold shrink-0">
              MỤC ${s.roman}
            </span>
            <span class="text-xs sm:text-sm text-slate-900 group-open:text-emerald-950 font-bold">
              ${s.title}
            </span>
          </div>
          <svg class="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform duration-200 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </summary>
        <div class="px-4 py-4 sm:px-6 sm:py-5 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-200 bg-white">
          ${s.html}
        </div>
      </details>
    `;
  };

  return `
    <!-- Banner Báo Cáo Phân Tích -->
    <div class="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-md border border-emerald-800">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-800/80 text-emerald-200 text-xs font-semibold mb-2">
            <svg class="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            TÀI LIỆU BÁO CÁO HỘI ĐỒNG QUẢN TRỊ
          </div>
          <h2 class="text-lg sm:text-xl font-bold tracking-tight text-white">Báo Cáo Phân Tích Tính Thiết Thực & Khả Năng Triển Khai</h2>
          <p class="text-xs sm:text-sm text-emerald-200/90 mt-1 max-w-2xl leading-relaxed">
            Đánh giá toàn diện sự cần thiết, lợi ích tài chính, kiểm soát chi phí vốn COF và định hướng phát triển sản phẩm Tiết kiệm gửi góp định kỳ tại Quỹ tín dụng nhân dân Yên Thọ.
          </p>
        </div>
        <div class="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <button onclick="toggleAllAnalysis(true)" class="px-3 py-2 bg-emerald-800/90 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg border border-emerald-600 shadow-xs flex items-center gap-1.5 transition">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"/></svg>
            Hiện toàn bộ
          </button>
          <button onclick="toggleAllAnalysis(false)" class="px-3 py-2 bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-600 shadow-xs flex items-center gap-1.5 transition">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7"/></svg>
            Thu gọn
          </button>
        </div>
      </div>
    </div>

    <!-- Danh sách các Mục I đến V -->
    <div class="space-y-1">
      ${renderSecCard('I', true)}
      ${renderSecCard('II')}
      ${renderSecCard('III')}
      ${renderSecCard('IV')}
      ${renderSecCard('V')}

      <!-- Thẻ thông báo điều hướng sang Tab Nghiệp vụ -->
      <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-slate-50 border-2 border-emerald-300 shadow-xs my-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div class="flex items-start gap-3">
          <div class="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-xs">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          </div>
          <div>
            <div class="font-bold text-xs sm:text-sm text-emerald-950 uppercase">Nội Dung Nghiệp Vụ & Tình Huống Xử Lý Thực Tế</div>
            <p class="text-xs text-slate-600 mt-0.5 leading-relaxed">
              Các nội dung chi tiết về <strong>Mục VI (15 Tình huống có thể phát sinh & phương án xử lý)</strong> và <strong>Mục VII (18 Câu hỏi thường gặp & hướng dẫn tư vấn thành viên)</strong> đã được tổ chức chuyên biệt tại <strong>Tab Nghiệp vụ</strong> để tiện lợi tra cứu nhanh cho cán bộ và giao dịch viên.
            </p>
          </div>
        </div>
        <button onclick="switchTab('consulting')" class="px-4 py-2 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs shrink-0 flex items-center gap-1.5 transition self-start sm:self-auto">
          <span>Xem Tab Nghiệp Vụ</span>
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </button>
      </div>

      <!-- Các mục VIII đến XI -->
      ${renderSecCard('VIII')}
      ${renderSecCard('IX')}
      ${renderSecCard('X')}
      ${renderSecCard('XI')}
    </div>
  `;
}

// Generate Consulting HTML (Tab Nghiệp Vụ: Cẩm Nang + 15 Tình Huống + 18 Câu Hỏi)
export function renderConsultingHtml() {
  const { situations, questions } = bcParsed;

  const renderSituations = () => {
    return situations.map(s => `
      <details class="sit-item bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-emerald-300 transition duration-150 mb-3 group">
        <summary class="px-4 py-3 sm:px-5 sm:py-3.5 cursor-pointer select-none bg-slate-50/70 hover:bg-emerald-50/40 font-bold text-slate-800 flex items-center justify-between transition-colors">
          <div class="flex items-center gap-2.5">
            <span class="inline-flex items-center justify-center w-6 h-6 rounded-md bg-amber-100 text-amber-900 text-xs font-black shrink-0">
              ${s.num}
            </span>
            <span class="text-xs sm:text-sm text-slate-900 group-open:text-emerald-900">
              Tình huống ${s.num}: ${s.title}
            </span>
          </div>
          <svg class="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform duration-200 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </summary>
        <div class="px-4 py-4 sm:px-6 sm:py-4 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-200/80 bg-white">
          ${s.html}
        </div>
      </details>
    `).join('');
  };

  const renderQuestions = () => {
    return questions.map(q => `
      <details class="faq-item bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-emerald-300 transition duration-150 mb-2.5 group">
        <summary class="px-4 py-3 sm:px-5 sm:py-3.5 cursor-pointer select-none bg-slate-50/70 hover:bg-emerald-50/40 font-bold text-slate-800 flex items-center justify-between transition-colors">
          <div class="flex items-center gap-2.5">
            <span class="inline-flex items-center justify-center w-6 h-6 rounded-md bg-emerald-100 text-emerald-900 text-xs font-black shrink-0">
              ${q.num}
            </span>
            <span class="text-xs sm:text-sm text-slate-900 group-open:text-emerald-900">
              ${q.q}
            </span>
          </div>
          <svg class="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform duration-200 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </summary>
        <div class="px-4 py-3.5 sm:px-6 sm:py-4 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-200/80 bg-emerald-50/30">
          <div class="flex items-start gap-2.5">
            <span class="px-2 py-0.5 rounded bg-emerald-700 text-white font-bold text-[11px] shrink-0 mt-0.5">Tư vấn</span>
            <div class="text-slate-800 font-normal leading-relaxed">${q.a}</div>
          </div>
        </div>
      </details>
    `).join('');
  };

  return `
    <!-- Banner Cẩm Nang Nghiệp Vụ -->
    <div class="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-md border border-emerald-800">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-800/80 text-emerald-200 text-xs font-semibold mb-2">
            <svg class="w-3.5 h-3.5 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
            CẨM NANG NGHIỆP VỤ & TRA CỨU TÌNH HUỐNG
          </div>
          <h2 class="text-lg sm:text-xl font-bold tracking-tight text-white">Cẩm Nang Nghiệp Vụ & Kịch Bản Xử Lý Tình Huống</h2>
          <p class="text-xs sm:text-sm text-emerald-200/90 mt-1 max-w-2xl leading-relaxed">
            Dành cho Giao dịch viên, Cán bộ Tín dụng, Kế toán và Chăm sóc thành viên Quỹ tín dụng nhân dân Yên Thọ. Bao gồm quy trình tư vấn chuẩn mực, 15 tình huống phát sinh và 18 câu hỏi thường gặp.
          </p>
        </div>
        <div class="flex items-center gap-2 self-start sm:self-auto shrink-0 flex-wrap">
          <button onclick="toggleAllSituations(true)" class="px-3 py-2 bg-amber-800/90 hover:bg-amber-700 text-white text-xs font-semibold rounded-lg border border-amber-600 shadow-xs flex items-center gap-1.5 transition">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"/></svg>
            Mở 15 Tình Huống
          </button>
          <button onclick="toggleAllFaqs(true)" class="px-3 py-2 bg-emerald-800/90 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg border border-emerald-600 shadow-xs flex items-center gap-1.5 transition">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"/></svg>
            Mở 18 Câu Hỏi
          </button>
        </div>
      </div>
    </div>

    <!-- PHẦN 1: QUY TRÌNH 4 BƯỚC TƯ VẤN & BẢN CHẤT TÀI CHÍNH -->
    <div class="bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-slate-200 space-y-4">
      <div class="flex items-center justify-between pb-3 border-b border-slate-200">
        <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
          Quy Trình 4 Bước Tư Vấn Khách Hàng Tại Quầy Giao Dịch
        </h3>
        <span class="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
          Chuẩn mực giao tiếp
        </span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 text-xs sm:text-sm">
          <div class="w-8 h-8 rounded-lg bg-emerald-700 text-white font-extrabold flex items-center justify-center mb-2">1</div>
          <div class="font-bold text-emerald-950 mb-1">Xác định dòng tiền</div>
          <p class="text-slate-600 leading-relaxed">Hỏi thăm nguồn thu nhập định kỳ của khách hàng (lương hưu, trợ cấp, buôn bán hàng ngày) để gợi ý mức gửi vừa sức (từ 500.000đ/tháng).</p>
        </div>
        <div class="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 text-xs sm:text-sm">
          <div class="w-8 h-8 rounded-lg bg-emerald-700 text-white font-extrabold flex items-center justify-center mb-2">2</div>
          <div class="font-bold text-emerald-950 mb-1">Chọn kỳ hạn & chu kỳ</div>
          <p class="text-slate-600 leading-relaxed">Tư vấn kỳ hạn phù hợp với mục tiêu tích lũy (12 tháng để sắm Tết, 24-36 tháng để tích lũy lớn, chọn gửi hàng tháng hoặc hàng quý).</p>
        </div>
        <div class="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 text-xs sm:text-sm">
          <div class="w-8 h-8 rounded-lg bg-emerald-700 text-white font-extrabold flex items-center justify-center mb-2">3</div>
          <div class="font-bold text-emerald-950 mb-1">Chạy mô phỏng in bảng</div>
          <p class="text-slate-600 leading-relaxed">Sử dụng công cụ WebApp nhập số tiền, in Bảng kế hoạch tích lũy A4 trao tận tay khách hàng xem rõ tổng gốc và lãi nhận được.</p>
        </div>
        <div class="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 text-xs sm:text-sm">
          <div class="w-8 h-8 rounded-lg bg-emerald-700 text-white font-extrabold flex items-center justify-center mb-2">4</div>
          <div class="font-bold text-emerald-950 mb-1">Mở sổ & lưu lịch nhắc</div>
          <p class="text-slate-600 leading-relaxed">Lập Giấy gửi tiền tiết kiệm gửi góp, phát hành sổ và ghi nhận ngày nộp định kỳ kèm số điện thoại để hỗ trợ nhắc lịch chu đáo.</p>
        </div>
      </div>
    </div>

    <!-- PHẦN 2: 15 TÌNH HUỐNG PHÁT SINH TRONG QUÁ TRÌNH TRIỂN KHAI VÀ PHƯƠNG ÁN XỬ LÝ (MỤC VI) -->
    <div class="bg-white rounded-2xl p-5 sm:p-6 shadow-xs border-2 border-amber-300 space-y-4">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-amber-200 gap-2">
        <div>
          <div class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-[11px] font-bold">
            <svg class="w-3.5 h-3.5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            MỤC VI BÁO CÁO PHÂN TÍCH
          </div>
          <h3 class="text-base sm:text-lg font-bold text-slate-900 mt-1">15 Tình Huống Có Thể Phát Sinh Trong Quá Trình Triển Khai & Phương Án Xử Lý</h3>
          <p class="text-xs text-slate-500 mt-0.5">Dự kiến trước để cán bộ xử lý thống nhất, tránh tranh chấp và bảo vệ tối đa quyền lợi khách hàng.</p>
        </div>
        <div class="flex gap-2 self-start sm:self-auto shrink-0">
          <button onclick="toggleAllSituations(true)" class="px-2.5 py-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs transition">Mở tất cả 15</button>
          <button onclick="toggleAllSituations(false)" class="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition">Thu gọn</button>
        </div>
      </div>

      <div id="situationsContainer" class="pt-2">
        ${renderSituations()}
      </div>
    </div>

    <!-- PHẦN 3: 18 CÂU HỎI THƯỜNG GẶP VÀ HƯỚNG DẪN TƯ VẤN KHÁCH HÀNG (MỤC VII) -->
    <div class="bg-white rounded-2xl p-5 sm:p-6 shadow-xs border-2 border-emerald-300 space-y-4">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-emerald-200 gap-2">
        <div>
          <div class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[11px] font-bold">
            <svg class="w-3.5 h-3.5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            MỤC VII BÁO CÁO PHÂN TÍCH
          </div>
          <h3 class="text-base sm:text-lg font-bold text-slate-900 mt-1">18 Câu Hỏi Thường Gặp & Hướng Dẫn Tư Vấn Khách Hàng Chuẩn Mực</h3>
          <p class="text-xs text-slate-500 mt-0.5">Xây dựng theo hướng dễ hiểu, thống nhất, không dùng thuật ngữ kỹ thuật phức tạp.</p>
        </div>
        <div class="flex gap-2 self-start sm:self-auto shrink-0">
          <button onclick="toggleAllFaqs(true)" class="px-2.5 py-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-bold text-xs transition">Mở tất cả 18</button>
          <button onclick="toggleAllFaqs(false)" class="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition">Thu gọn</button>
        </div>
      </div>

      <div id="faqsContainer" class="pt-2">
        ${renderQuestions()}
      </div>
    </div>
  `;
}

console.log('render_helpers.mjs updated successfully.');
