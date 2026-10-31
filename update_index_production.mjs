import fs from 'fs';
import vm from 'vm';

console.log('🚀 Bắt đầu cập nhật index.html với tính năng In, Xuất Word/Excel và Bảo mật Strix...');

let html = fs.readFileSync('index.html', 'utf8');

// =========================================================================
// 1. CẬP NHẬT CSS @media print
// =========================================================================
const oldPrintCss = `@media print {
            @page {
                size: A4 portrait;
                margin: 10mm 12mm 12mm 12mm;
            }
            body {
                background: white !important;
                color: black !important;
                margin: 0 !important;
                padding: 0 !important;
            }
            /* Ẩn hoàn toàn toàn bộ giao diện website */
            header, nav, #bottomNavBar, main, #pledgeModal, #toastContainer, .no-print {
                display: none !important;
            }
            /* Chỉ hiển thị duy nhất bản in kế hoạch chuẩn A4 */
            #printPlanDocument {
                display: block !important;
                width: 100% !important;
            }
            .page-break {
                page-break-before: always;
            }
        }`;

const newPrintCss = `@media print {
            @page {
                size: A4 portrait;
                margin: 15mm 15mm 15mm 20mm; /* Chuẩn văn thư A4 Nghị định 30/2020/NĐ-CP */
            }
            body {
                background: white !important;
                color: black !important;
                margin: 0 !important;
                padding: 0 !important;
            }
            /* Ẩn hoàn toàn toàn bộ giao diện website và các vùng không thuộc bản in kích hoạt */
            header, nav, #bottomNavBar, main, #pledgeModal, #toastContainer, .no-print, .print-zone {
                display: none !important;
            }
            /* Chỉ hiển thị duy nhất vùng in được kích hoạt */
            .print-zone-active {
                display: block !important;
                width: 100% !important;
            }
            .page-break {
                page-break-before: always;
            }
        }
        .print-zone {
            display: none;
        }`;

if (html.includes(oldPrintCss)) {
    html = html.replace(oldPrintCss, newPrintCss);
    console.log('  ✓ 1. Đã cập nhật CSS @media print');
} else {
    console.log('  ⚠️ 1. CSS @media print đã được cập nhật trước đó hoặc không khớp.');
}

// =========================================================================
// 2. CẬP NHẬT CLASS CHO #printPlanDocument VÀ THÊM #printRegistrationFormDocument
// =========================================================================
const oldPrintPlanDoc = `<div id="printPlanDocument" class="print-only font-sans p-2 text-black">`;
const newPrintPlanDoc = `<div id="printPlanDocument" class="print-zone font-sans p-2 text-black">`;
if (html.includes(oldPrintPlanDoc)) {
    html = html.replace(oldPrintPlanDoc, newPrintPlanDoc);
    console.log('  ✓ 2.1. Đã cập nhật class cho #printPlanDocument');
}

const registrationFormPrintDoc = `
    <!-- BẢN IN GIẤY ĐĂNG KÝ GỬI TIỀN A4 CHUYÊN BIỆT (CHỈ HIỆN KHI IN MẪU BIỂU) -->
    <div id="printRegistrationFormDocument" class="print-zone font-serif p-4 text-black text-xs sm:text-sm">
        <div class="flex justify-between items-start border-b-2 border-black pb-3 mb-4">
            <div class="text-center font-sans">
                <div class="text-xs uppercase font-semibold text-black">LIÊN MINH HỢP TÁC XÃ VIỆT NAM</div>
                <div class="font-bold text-xs uppercase text-black tracking-wider">QUỸ TÍN DỤNG NHÂN DÂN YÊN THỌ</div>
                <div class="text-[11px] italic text-gray-700">Thôn Tân Lộc, xã Quý Lộc, tỉnh Thanh Hóa</div>
                <div class="text-[11px] italic text-gray-700">Hotline: 0965.122.111 - 0941.562.789</div>
            </div>
            <div class="text-center font-sans">
                <div class="font-bold text-xs uppercase text-black">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</div>
                <div class="text-[11px] font-semibold text-black underline underline-offset-4">Độc lập - Tự do - Hạnh phúc</div>
                <div class="text-[11px] italic text-gray-600 mt-1">Quý Lộc, ngày ..... tháng ..... năm 202...</div>
            </div>
        </div>

        <div class="text-center my-4">
            <h1 class="text-base sm:text-lg font-bold uppercase text-black font-sans tracking-wide">GIẤY ĐĂNG KÝ GỬI TIỀN TIẾT KIỆM GỬI GÓP ĐỊNH KỲ</h1>
            <div class="text-xs italic text-gray-700 mt-1">(Ban hành kèm theo Quyết định số ……/2026/QĐ-HĐQT của QTDND Yên Thọ)</div>
            <div class="text-xs italic text-gray-800 mt-2">Kính gửi: Ban Giám đốc Quỹ tín dụng nhân dân Yên Thọ</div>
        </div>

        <div class="space-y-3 font-sans leading-relaxed text-xs">
            <div><strong class="uppercase text-black">I. Thông tin khách hàng gửi tiền:</strong></div>
            <div class="grid grid-cols-2 gap-2 pl-3">
                <div class="col-span-2">1. Họ và tên khách hàng: <span class="border-b border-dotted border-black inline-block min-w-[260px] font-bold">...........................................................................</span></div>
                <div>2. Ngày sinh: <span class="border-b border-dotted border-black inline-block min-w-[120px]">..... / ..... / ..........</span></div>
                <div>Giới tính: [  ] Nam &nbsp;&nbsp;&nbsp;&nbsp; [  ] Nữ &nbsp;&nbsp;&nbsp;&nbsp; Quốc tịch: Việt Nam</div>
                <div>3. Số CCCD/CMND: <span class="border-b border-dotted border-black inline-block min-w-[140px] font-semibold">.........................................</span></div>
                <div>Ngày cấp: <span class="border-b border-dotted border-black inline-block min-w-[90px]">...../...../.....</span> Nơi cấp: <span class="border-b border-dotted border-black inline-block min-w-[80px]">....................</span></div>
                <div class="col-span-2">4. Địa chỉ thường trú: <span class="border-b border-dotted border-black inline-block min-w-[340px]">....................................................................................................</span></div>
                <div>5. Số điện thoại liên hệ: <span class="border-b border-dotted border-black inline-block min-w-[140px] font-semibold">.........................................</span></div>
                <div>6. Là thành viên Quỹ: [  ] Đã là thành viên &nbsp;&nbsp;&nbsp;&nbsp; [  ] Đăng ký mới</div>
            </div>

            <div class="pt-2"><strong class="uppercase text-black">II. Nội dung đăng ký gửi tiết kiệm gửi góp:</strong></div>
            <div class="grid grid-cols-2 gap-2 pl-3">
                <div class="col-span-2">1. Số tiền gửi định kỳ mỗi lần: <span class="border-b border-dotted border-black inline-block min-w-[180px] font-bold">................................................... đồng</span></div>
                <div class="col-span-2 italic text-[11px]">(Bằng chữ: ........................................................................................................................................................)</div>
                <div class="col-span-2">2. Kỳ hạn gửi góp: [  ] 06 tháng &nbsp;&nbsp;&nbsp;&nbsp; [  ] 12 tháng &nbsp;&nbsp;&nbsp;&nbsp; [  ] 18 tháng &nbsp;&nbsp;&nbsp;&nbsp; [  ] 24 tháng &nbsp;&nbsp;&nbsp;&nbsp; [  ] 36 tháng</div>
                <div class="col-span-2">3. Chu kỳ gửi góp: [  ] Hàng tháng (01 tháng/lần) &nbsp;&nbsp;&nbsp;&nbsp; [  ] Hàng quý (03 tháng/lần) &nbsp;&nbsp;&nbsp;&nbsp; [  ] 06 tháng/lần</div>
                <div>4. Ngày nộp tiền định kỳ: Ngày <span class="font-bold">......</span> hàng tháng/kỳ</div>
                <div>5. Lãi suất cam kết áp dụng: <span class="font-bold">....... %/năm</span> (cố định toàn kỳ)</div>
                <div>6. Ngày mở sổ (Kỳ 1): ..... / ..... / 202...</div>
                <div>7. Ngày đáo hạn dự kiến: ..... / ..... / 202...</div>
                <div class="col-span-2">8. Tổng số tiền tích lũy kế hoạch: <span class="border-b border-dotted border-black inline-block min-w-[180px] font-bold">................................................... đồng</span></div>
                <div class="col-span-2">9. Phương thức nộp tiền: [  ] Tiền mặt tại quầy &nbsp;&nbsp;&nbsp;&nbsp; [  ] Trích nợ tự động từ tài khoản thanh toán</div>
                <div class="col-span-2">10. Phương thức xử lý khi đáo hạn: <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;[  ] Nhận toàn bộ gốc và lãi tại quầy giao dịch của Quỹ.<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;[  ] Tự động chuyển toàn bộ gốc và lãi sang tiết kiệm có kỳ hạn thông thường tương đương.
                </div>
            </div>

            <div class="pt-2"><strong class="uppercase text-black">III. Cam kết của khách hàng:</strong></div>
            <p class="text-[11px] text-gray-800 pl-3 leading-relaxed text-justify">
                Tôi cam kết những thông tin kê khai trên là hoàn toàn chính xác và trung thực. Tôi đã được cán bộ Quỹ tư vấn đầy đủ, đã đọc, hiểu rõ và cam kết tuân thủ toàn bộ các điều khoản trong Quy định Tiết kiệm gửi góp định kỳ do Hội đồng Quản trị Quỹ tín dụng nhân dân Yên Thọ ban hành. Tôi cam kết thực hiện nộp tiền đúng hạn và đầy đủ theo lịch đã thỏa thuận.
            </p>

            <div class="grid grid-cols-3 gap-4 pt-6 text-center font-sans text-xs">
                <div>
                    <div class="font-bold uppercase text-black">KHÁCH HÀNG ĐĂNG KÝ</div>
                    <div class="text-[10px] italic text-gray-500">(Ký và ghi rõ họ tên)</div>
                    <div class="h-20"></div>
                    <div class="font-bold text-gray-400">.........................................</div>
                </div>
                <div>
                    <div class="font-bold uppercase text-black">GIAO DỊCH VIÊN LẬP BIỂU</div>
                    <div class="text-[10px] italic text-gray-500">(Ký và ghi rõ họ tên)</div>
                    <div class="h-20"></div>
                    <div class="font-bold text-gray-400">.........................................</div>
                </div>
                <div>
                    <div class="font-bold uppercase text-black">GIÁM ĐỐC DUYỆT</div>
                    <div class="text-[10px] italic text-gray-500">(Ký, đóng dấu và ghi rõ họ tên)</div>
                    <div class="h-20"></div>
                    <div class="font-bold text-gray-400">.........................................</div>
                </div>
            </div>
        </div>
    </div>
`;

if (!html.includes('id="printRegistrationFormDocument"')) {
    const mainPos = html.indexOf('<!-- MAIN APP CONTAINER -->');
    if (mainPos !== -1) {
        html = html.substring(0, mainPos) + registrationFormPrintDoc + '\n\n    ' + html.substring(mainPos);
        console.log('  ✓ 2.2. Đã chèn #printRegistrationFormDocument');
    }
}

// =========================================================================
// 3. CẬP NHẬT BIỂU MẪU TRONG <template id="tmpl_tabContent_templates">
// =========================================================================
const tmplStart = html.indexOf('<template id="tmpl_tabContent_templates">');
const tmplEnd = html.indexOf('</template>', tmplStart);

const updatedTemplateBody = `
  <!-- Phân hệ 1: Mẫu Giấy Gửi Tiền Tiết Kiệm Gửi Góp -->
  <div class="bg-white rounded-2xl p-5 sm:p-7 shadow-xs border border-slate-200">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
      <div>
        <span class="text-xs font-bold text-emerald-700 uppercase tracking-wider">BIỂU MẪU BAN HÀNH KÈM THEO QUY ĐỊNH</span>
        <h3 class="text-base sm:text-lg font-bold text-slate-900 mt-1">Giấy Đăng Ký Gửi Tiền Tiết Kiệm Gửi Góp Định Kỳ</h3>
      </div>
      <!-- Hàng nút thao tác: Chỉ dùng biểu tượng (Icon-only) chuẩn /qtd_export_pdf_word_exel_img và /qtdyentho-ui-design-system -->
      <div class="flex items-center gap-2 self-start sm:self-auto">
        <!-- Nút 1: In ấn / Xuất PDF (A4) -->
        <button type="button" onclick="printRegistrationForm()" 
          title="In Mẫu Biểu / Xuất PDF (Chuẩn khổ A4 Nghị định 30)" 
          aria-label="In Mẫu Biểu / Xuất PDF (Chuẩn khổ A4 Nghị định 30)" 
          class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white flex items-center justify-center shadow-xs transition hover:scale-105 active:scale-95 cursor-pointer">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
          </svg>
        </button>

        <!-- Nút 2: Xuất file Word (.docx) -->
        <button type="button" onclick="exportRegistrationFormToDocx()" 
          title="Xuất file Word (.docx) chuẩn Nghị định 30" 
          aria-label="Xuất file Word (.docx) chuẩn Nghị định 30" 
          class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-700 hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-105 active:scale-95 cursor-pointer">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
        </button>

        <!-- Nút 3: Xuất file Excel (.xlsx) -->
        <button type="button" onclick="exportRegistrationFormToExcel()" 
          title="Xuất file Excel (.xlsx) chuẩn tài chính" 
          aria-label="Xuất file Excel (.xlsx) chuẩn tài chính" 
          class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-teal-700 hover:bg-teal-600 text-white flex items-center justify-center shadow-xs transition hover:scale-105 active:scale-95 cursor-pointer">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 4h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Khung giấy A4 mô phỏng hiển thị trên giao diện WebApp -->
    <div class="mt-6 p-6 sm:p-8 bg-slate-50/60 border border-slate-300 rounded-xl max-w-3xl mx-auto text-slate-800 text-xs sm:text-sm font-serif shadow-xs">
      <div class="flex justify-between items-start border-b border-slate-300 pb-4 mb-5">
        <div class="text-center font-sans">
          <div class="text-xs uppercase font-semibold text-slate-700">LIÊN MINH HỢP TÁC XÃ VIỆT NAM</div>
          <div class="font-bold text-xs uppercase text-slate-900 tracking-wider">QUỸ TÍN DỤNG NHÂN DÂN YÊN THỌ</div>
          <div class="text-[11px] italic text-slate-600">Thôn Tân Lộc, xã Quý Lộc, tỉnh Thanh Hóa</div>
          <div class="text-[11px] italic text-slate-600">Hotline: 0965.122.111 - 0941.562.789</div>
        </div>
        <div class="text-center font-sans">
          <div class="font-bold text-xs uppercase text-slate-900">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</div>
          <div class="text-[11px] font-semibold text-slate-700 underline underline-offset-4">Độc lập - Tự do - Hạnh phúc</div>
          <div class="text-[11px] italic text-slate-500 mt-1">Quý Lộc, ngày ..... tháng ..... năm 202...</div>
        </div>
      </div>

      <div class="text-center my-6">
        <h4 class="font-bold text-base sm:text-lg uppercase text-slate-950 font-sans tracking-wide">GIẤY ĐĂNG KÝ GỬI TIỀN TIẾT KIỆM GỬI GÓP ĐỊNH KỲ</h4>
        <div class="text-xs italic text-slate-600 mt-1">(Ban hành kèm theo Quyết định số ……/2026/QĐ-HĐQT của QTDND Yên Thọ)</div>
        <div class="text-xs italic text-slate-700 mt-2">Kính gửi: Ban Giám đốc Quỹ tín dụng nhân dân Yên Thọ</div>
      </div>

      <div class="space-y-3 font-sans leading-relaxed text-xs sm:text-sm">
        <div><strong class="uppercase text-slate-900">I. Thông tin khách hàng gửi tiền:</strong></div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-3">
          <div class="sm:col-span-2">1. Họ và tên khách hàng: <span class="border-b border-dotted border-slate-500 inline-block min-w-[240px] font-bold text-slate-950">...........................................................................</span></div>
          <div>2. Ngày sinh: <span class="border-b border-dotted border-slate-500 inline-block min-w-[120px]">..... / ..... / ..........</span></div>
          <div>Giới tính: [  ] Nam &nbsp;&nbsp;&nbsp;&nbsp; [  ] Nữ &nbsp;&nbsp;&nbsp;&nbsp; Quốc tịch: Việt Nam</div>
          <div>3. Số CCCD/CMND: <span class="border-b border-dotted border-slate-500 inline-block min-w-[140px] font-semibold">.........................................</span></div>
          <div>Ngày cấp: <span class="border-b border-dotted border-slate-500 inline-block min-w-[100px]">..... / ..... / ..........</span> Nơi cấp: <span class="border-b border-dotted border-slate-500 inline-block min-w-[90px]">....................</span></div>
          <div class="sm:col-span-2">4. Địa chỉ thường trú: <span class="border-b border-dotted border-slate-500 inline-block min-w-[320px]">....................................................................................................</span></div>
          <div>5. Số điện thoại liên hệ: <span class="border-b border-dotted border-slate-500 inline-block min-w-[140px] font-semibold">.........................................</span></div>
          <div>6. Là thành viên Quỹ: [  ] Đã là thành viên &nbsp;&nbsp;&nbsp;&nbsp; [  ] Đăng ký mới</div>
        </div>

        <div class="pt-2"><strong class="uppercase text-slate-900">II. Nội dung đăng ký gửi tiết kiệm gửi góp:</strong></div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-3">
          <div class="sm:col-span-2">1. Số tiền gửi định kỳ mỗi lần: <span class="border-b border-dotted border-slate-500 inline-block min-w-[160px] font-bold text-emerald-900">.................................. đồng</span></div>
          <div class="sm:col-span-2 italic text-xs text-slate-600">(Bằng chữ: ........................................................................................................................................................)</div>
          <div class="sm:col-span-2">2. Kỳ hạn gửi góp: [  ] 06 tháng &nbsp;&nbsp;&nbsp;&nbsp; [  ] 12 tháng &nbsp;&nbsp;&nbsp;&nbsp; [  ] 18 tháng &nbsp;&nbsp;&nbsp;&nbsp; [  ] 24 tháng &nbsp;&nbsp;&nbsp;&nbsp; [  ] 36 tháng</div>
          <div class="sm:col-span-2">3. Chu kỳ gửi góp: [  ] Hàng tháng (01 tháng/lần) &nbsp;&nbsp;&nbsp;&nbsp; [  ] Hàng quý (03 tháng/lần) &nbsp;&nbsp;&nbsp;&nbsp; [  ] 06 tháng/lần</div>
          <div>4. Ngày nộp tiền định kỳ: Ngày <span class="border-b border-dotted border-slate-500 inline-block min-w-[40px] text-center font-bold">......</span> hàng tháng/kỳ</div>
          <div>5. Lãi suất cam kết: <span class="border-b border-dotted border-slate-500 inline-block min-w-[80px] text-center font-semibold">....... %/năm</span> (cố định toàn kỳ)</div>
          <div>6. Ngày mở sổ (Kỳ 1): <span class="border-b border-dotted border-slate-500 inline-block min-w-[100px]">..... / ..... / 202...</span></div>
          <div>7. Ngày đáo hạn dự kiến: <span class="border-b border-dotted border-slate-500 inline-block min-w-[100px]">..... / ..... / 202...</span></div>
          <div class="sm:col-span-2">8. Tổng số tiền tích lũy kế hoạch: <span class="border-b border-dotted border-slate-500 inline-block min-w-[160px] font-bold text-slate-900">.................................. đồng</span></div>
          <div class="sm:col-span-2">9. Hình thức nộp tiền: [  ] Tiền mặt tại quầy &nbsp;&nbsp;&nbsp;&nbsp; [  ] Trích nợ tự động tài khoản thanh toán</div>
          <div class="sm:col-span-2">10. Phương thức xử lý khi đáo hạn: <br>
            &nbsp;&nbsp;&nbsp;&nbsp;[  ] Nhận toàn bộ gốc và lãi tại quầy giao dịch của Quỹ.<br>
            &nbsp;&nbsp;&nbsp;&nbsp;[  ] Tự động chuyển toàn bộ gốc và lãi sang tiết kiệm có kỳ hạn thông thường tương đương.
          </div>
        </div>

        <div class="pt-2"><strong class="uppercase text-slate-900">III. Cam kết của khách hàng:</strong></div>
        <p class="text-xs text-slate-700 pl-3 leading-relaxed text-justify">
          Tôi cam kết những thông tin kê khai trên là hoàn toàn chính xác và trung thực. Tôi đã được cán bộ Quỹ tư vấn đầy đủ, đã đọc, hiểu rõ và cam kết tuân thủ toàn bộ các điều khoản trong Quy định Tiết kiệm gửi góp định kỳ do Hội đồng Quản trị Quỹ tín dụng nhân dân Yên Thọ ban hành. Tôi cam kết thực hiện nộp tiền đúng hạn và đầy đủ theo lịch đã thỏa thuận.
        </p>

        <!-- Khối chữ ký 3 bên phân tầng chuẩn Quỹ -->
        <div class="grid grid-cols-3 gap-4 pt-6 text-center font-sans text-xs">
          <div>
            <div class="font-bold text-xs uppercase text-slate-900">KHÁCH HÀNG ĐĂNG KÝ</div>
            <div class="text-[11px] italic text-slate-500">(Ký và ghi rõ họ tên)</div>
            <div class="h-20"></div>
            <div class="font-bold text-slate-400">.........................................</div>
          </div>
          <div>
            <div class="font-bold text-xs uppercase text-slate-900">GIAO DỊCH VIÊN LẬP BIỂU</div>
            <div class="text-[11px] italic text-slate-500">(Ký và ghi rõ họ tên)</div>
            <div class="h-20"></div>
            <div class="font-bold text-slate-400">.........................................</div>
          </div>
          <div>
            <div class="font-bold text-xs uppercase text-slate-900">GIÁM ĐỐC DUYỆT</div>
            <div class="text-[11px] italic text-slate-500">(Ký, đóng dấu và ghi rõ họ tên)</div>
            <div class="h-20"></div>
            <div class="font-bold text-slate-400">.........................................</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

if (tmplStart !== -1 && tmplEnd !== -1) {
    html = html.substring(0, tmplStart) + '<template id="tmpl_tabContent_templates">\n' + updatedTemplateBody + '\n    ' + html.substring(tmplEnd);
    console.log('  ✓ 3. Đã cập nhật biểu mẫu trong tmpl_tabContent_templates');
}

// =========================================================================
// 4. CẬP NHẬT JAVASCRIPT: escapeHtml, in ấn và xuất file
// =========================================================================
const jsAdditions = `
        // Chống DOM XSS (CWE-79) chuẩn Strix Security Testing
        function escapeHtml(str) {
            if (str === null || str === undefined) return '';
            return String(str)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }

        // In Giấy Đăng Ký Gửi Tiền Tiết Kiệm Gửi Góp chuẩn A4
        function printRegistrationForm() {
            document.querySelectorAll('.print-zone-active').forEach(el => el.classList.remove('print-zone-active'));
            const doc = document.getElementById('printRegistrationFormDocument');
            if (doc) {
                doc.classList.add('print-zone-active');
                window.print();
            } else {
                showToast('Không tìm thấy mẫu biểu in', 'error');
            }
        }

        // Xuất Giấy Đăng Ký Gửi Tiền ra file Word (.docx) chuẩn Nghị định 30/2020/NĐ-CP
        function exportRegistrationFormToDocx() {
            const htmlContent = \`<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
    <meta charset="utf-8">
    <title>Giấy Đăng Ký Gửi Tiền Tiết Kiệm Gửi Góp Định Kỳ</title>
    <!--[if gte mso 9]>
    <xml>
        <w:WordDocument>
            <w:View>Print</w:View>
            <w:Zoom>100</w:Zoom>
            <w:DoNotOptimizeForBrowser/>
        </w:WordDocument>
    </xml>
    <![endif]-->
    <style>
        @page Section1 {
            size: 595.3pt 841.9pt; /* A4 tiêu chuẩn */
            margin: 56.7pt 56.7pt 56.7pt 85.0pt; /* Top 20mm, Bottom 20mm, Right 20mm, Left 30mm */
            mso-header-margin: 36.0pt;
            mso-footer-margin: 36.0pt;
            mso-paper-source: 0;
        }
        div.Section1 { page: Section1; }
        body {
            font-family: 'Times New Roman', Times, serif;
            font-size: 13pt;
            line-height: 1.35;
            color: #000;
        }
        table { width: 100%; border-collapse: collapse; }
        .text-center { text-align: center; }
        .text-right { text-align: right; }
        .font-bold { font-weight: bold; }
        .italic { font-style: italic; }
        .uppercase { text-transform: uppercase; }
        .dots { border-bottom: 1px dotted #444; display: inline-block; min-width: 150px; }
    </style>
</head>
<body>
<div class="Section1">
    <table>
        <tr>
            <td style="width: 45%; text-align: center; vertical-align: top;">
                <div style="font-size: 11pt;">LIÊN MINH HỢP TÁC XÃ VIỆT NAM</div>
                <div class="font-bold uppercase" style="font-size: 11.5pt;">QUỸ TÍN DỤNG NHÂN DÂN YÊN THỌ</div>
                <div style="font-size: 10pt; font-style: italic;">Thôn Tân Lộc, xã Quý Lộc, tỉnh Thanh Hóa</div>
                <div style="font-size: 10pt; font-style: italic;">Hotline: 0965.122.111 - 0941.562.789</div>
            </td>
            <td style="width: 55%; text-align: center; vertical-align: top;">
                <div class="font-bold uppercase" style="font-size: 11.5pt;">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</div>
                <div class="font-bold" style="font-size: 12pt; text-decoration: underline;">Độc lập - Tự do - Hạnh phúc</div>
                <div style="font-size: 11pt; font-style: italic; margin-top: 5px;">Quý Lộc, ngày ..... tháng ..... năm 202...</div>
            </td>
        </tr>
    </table>

    <div style="height: 15px;"></div>

    <div class="text-center">
        <div class="font-bold uppercase" style="font-size: 15pt; letter-spacing: 0.5px;">GIẤY ĐĂNG KÝ GỬI TIỀN TIẾT KIỆM GỬI GÓP ĐỊNH KỲ</div>
        <div style="font-size: 11pt; font-style: italic; margin-top: 3px;">(Ban hành kèm theo Quyết định số ……/2026/QĐ-HĐQT của QTDND Yên Thọ)</div>
        <div class="italic" style="margin-top: 8px; font-size: 12pt;">Kính gửi: Ban Giám đốc Quỹ tín dụng nhân dân Yên Thọ</div>
    </div>

    <div style="height: 15px;"></div>

    <div><strong>I. THÔNG TIN KHÁCH HÀNG GỬI TIỀN:</strong></div>
    <div style="margin-left: 15px; margin-top: 5px;">
        <p>1. Họ và tên khách hàng: <span class="font-bold dots" style="min-width: 250px;">...........................................................................</span></p>
        <p>2. Ngày sinh: ..... / ..... / .......... Giới tính: [  ] Nam &nbsp;&nbsp;&nbsp;&nbsp; [  ] Nữ &nbsp;&nbsp;&nbsp;&nbsp; Quốc tịch: Việt Nam</p>
        <p>3. Số CCCD/CMND: <span class="font-bold dots" style="min-width: 160px;">.........................................</span> Ngày cấp: ..... / ..... / .......... Nơi cấp: ........................................</p>
        <p>4. Nơi đăng ký thường trú: ................................................................................................................................</p>
        <p>5. Nơi ở hiện tại: .............................................................................................................................................</p>
        <p>6. Số điện thoại liên hệ: <span class="font-bold dots" style="min-width: 160px;">.........................................</span> Mã thành viên (nếu có): ...............................</p>
    </div>

    <div style="margin-top: 10px;"><strong>II. NỘI DUNG ĐĂNG KÝ GỬI TIẾT KIỆM GỬI GÓP:</strong></div>
    <div style="margin-left: 15px; margin-top: 5px;">
        <p>1. Số tiền gửi định kỳ mỗi lần: <span class="font-bold dots" style="min-width: 200px;">................................................... đồng</span></p>
        <p style="margin-left: 15px; font-style: italic;">(Bằng chữ: .............................................................................................................................................)</p>
        <p>2. Kỳ hạn gửi góp: [  ] 06 tháng &nbsp;&nbsp;&nbsp;&nbsp; [  ] 12 tháng &nbsp;&nbsp;&nbsp;&nbsp; [  ] 18 tháng &nbsp;&nbsp;&nbsp;&nbsp; [  ] 24 tháng &nbsp;&nbsp;&nbsp;&nbsp; [  ] 36 tháng</p>
        <p>3. Chu kỳ gửi góp: [  ] Hàng tháng (01 tháng/lần) &nbsp;&nbsp;&nbsp;&nbsp; [  ] Hàng quý (03 tháng/lần) &nbsp;&nbsp;&nbsp;&nbsp; [  ] 06 tháng/lần</p>
        <p>4. Ngày nộp tiền định kỳ: Ngày <span class="font-bold">......</span> hàng tháng / quý (ân hạn tối đa 05 ngày làm việc theo Quy định)</p>
        <p>5. Lãi suất cam kết áp dụng: <span class="font-bold">....... %/năm</span> (Cố định trong suốt kỳ hạn gửi)</p>
        <p>6. Ngày bắt đầu gửi (Kỳ 1): ..... / ..... / 202... &nbsp;&nbsp;&nbsp;&nbsp; Ngày đáo hạn dự kiến: ..... / ..... / 202...</p>
        <p>7. Tổng số tiền gốc tích lũy kế hoạch: <span class="font-bold dots" style="min-width: 200px;">................................................... đồng</span></p>
        <p>8. Phương thức nộp tiền: [  ] Nộp tiền mặt tại quầy &nbsp;&nbsp;&nbsp;&nbsp; [  ] Trích nợ tự động tài khoản thanh toán</p>
        <p>9. Phương thức xử lý khi đến hạn: <br>
           &nbsp;&nbsp;&nbsp;&nbsp;[  ] Nhận toàn bộ gốc và lãi tại quầy giao dịch của Quỹ.<br>
           &nbsp;&nbsp;&nbsp;&nbsp;[  ] Tự động chuyển toàn bộ gốc và lãi sang tiết kiệm có kỳ hạn thông thường tương đương.
        </p>
    </div>

    <div style="margin-top: 10px;"><strong>III. CAM KẾT CỦA KHÁCH HÀNG:</strong></div>
    <div style="margin-left: 15px; margin-top: 5px; font-size: 12pt; text-align: justify;">
        Tôi cam kết những thông tin kê khai trên là hoàn toàn chính xác và trung thực. Tôi đã được cán bộ Quỹ tư vấn đầy đủ, đã đọc, hiểu rõ và hoàn toàn nhất trí tuân thủ toàn bộ các điều khoản trong Quy định Tiết kiệm gửi góp định kỳ của Quỹ tín dụng nhân dân Yên Thọ. Tôi cam kết thực hiện nộp tiền đúng hạn và đầy đủ theo lịch đã thỏa thuận.
    </div>

    <div style="height: 25px;"></div>

    <table style="width: 100%; text-align: center;">
        <tr>
            <td style="width: 33%; vertical-align: top;">
                <div class="font-bold uppercase" style="font-size: 11pt;">KHÁCH HÀNG ĐĂNG KÝ</div>
                <div style="font-size: 10pt; font-style: italic;">(Ký và ghi rõ họ tên)</div>
                <div style="height: 70px;"></div>
                <div class="font-bold">.........................................</div>
            </td>
            <td style="width: 33%; vertical-align: top;">
                <div class="font-bold uppercase" style="font-size: 11pt;">GIAO DỊCH VIÊN LẬP BIỂU</div>
                <div style="font-size: 10pt; font-style: italic;">(Ký và ghi rõ họ tên)</div>
                <div style="height: 70px;"></div>
                <div class="font-bold">.........................................</div>
            </td>
            <td style="width: 34%; vertical-align: top;">
                <div class="font-bold uppercase" style="font-size: 11pt;">GIÁM ĐỐC DUYỆT</div>
                <div style="font-size: 10pt; font-style: italic;">(Ký, đóng dấu và ghi rõ họ tên)</div>
                <div style="height: 70px;"></div>
                <div class="font-bold">.........................................</div>
            </td>
        </tr>
    </table>
</div>
</body>
</html>\`;
            const blob = new Blob(['\\ufeff' + htmlContent], { type: 'application/msword;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Giay_Dang_Ky_Gui_Gop_QTDND_YenTho.doc';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showToast('Đã xuất thành công file Word Giấy Đăng Ký Gửi Tiết Kiệm Gửi Góp');
        }

        // Xuất Giấy Đăng Ký Gửi Tiền ra file Excel (.xlsx) chuẩn tài chính
        function exportRegistrationFormToExcel() {
            const excelContent = \`<?xml version="1.0" encoding="utf-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:html="http://www.w3.org/TR/REC-html40">
 <Styles>
  <Style ss:ID="Default" ss:Name="Normal">
   <Alignment ss:Vertical="Center"/>
   <Font ss:FontName="Times New Roman" ss:Size="11"/>
  </Style>
  <Style ss:ID="HeaderOrg">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Font ss:FontName="Times New Roman" ss:Size="10" ss:Bold="1"/>
  </Style>
  <Style ss:ID="TitleDoc">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Font ss:FontName="Times New Roman" ss:Size="14" ss:Bold="1" ss:Color="#064E3B"/>
  </Style>
  <Style ss:ID="SubTitle">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Font ss:FontName="Times New Roman" ss:Size="10" ss:Italic="1"/>
  </Style>
  <Style ss:ID="SectionHeader">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Font ss:FontName="Times New Roman" ss:Size="11" ss:Bold="1" ss:Color="#064E3B"/>
   <Interior ss:Color="#ECFDF5" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="Label">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Font ss:FontName="Times New Roman" ss:Size="11" ss:Bold="1"/>
  </Style>
  <Style ss:ID="Value">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Font ss:FontName="Times New Roman" ss:Size="11"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Dot" ss:Weight="1"/>
   </Borders>
  </Style>
  <Style ss:ID="SignHeader">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Font ss:FontName="Times New Roman" ss:Size="11" ss:Bold="1"/>
  </Style>
  <Style ss:ID="SignNote">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Font ss:FontName="Times New Roman" ss:Size="10" ss:Italic="1"/>
  </Style>
 </Styles>
 <Worksheet ss:Name="GiayDangKyGuiGop">
  <Table ss:DefaultColumnWidth="80">
   <Column ss:Width="30"/>
   <Column ss:Width="160"/>
   <Column ss:Width="160"/>
   <Column ss:Width="140"/>
   <Column ss:Width="140"/>

   <Row ss:Height="20">
    <Cell ss:Index="1" ss:MergeAcross="2" ss:StyleID="HeaderOrg"><Data ss:Type="String">QUỸ TÍN DỤNG NHÂN DÂN YÊN THỌ</Data></Cell>
    <Cell ss:Index="4" ss:MergeAcross="1" ss:StyleID="HeaderOrg"><Data ss:Type="String">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</Data></Cell>
   </Row>
   <Row ss:Height="18">
    <Cell ss:Index="1" ss:MergeAcross="2" ss:StyleID="SubTitle"><Data ss:Type="String">Thôn Tân Lộc, xã Quý Lộc, tỉnh Thanh Hóa - Hotline: 0965.122.111 - 0941.562.789</Data></Cell>
    <Cell ss:Index="4" ss:MergeAcross="1" ss:StyleID="SubTitle"><Data ss:Type="String">Độc lập - Tự do - Hạnh phúc</Data></Cell>
   </Row>
   <Row ss:Height="15"/>

   <Row ss:Height="26">
    <Cell ss:Index="1" ss:MergeAcross="4" ss:StyleID="TitleDoc"><Data ss:Type="String">GIẤY ĐĂNG KÝ GỬI TIỀN TIẾT KIỆM GỬI GÓP ĐỊNH KỲ</Data></Cell>
   </Row>
   <Row ss:Height="18">
    <Cell ss:Index="1" ss:MergeAcross="4" ss:StyleID="SubTitle"><Data ss:Type="String">Kính gửi: Ban Giám đốc Quỹ tín dụng nhân dân Yên Thọ</Data></Cell>
   </Row>
   <Row ss:Height="15"/>

   <!-- Section 1 -->
   <Row ss:Height="22">
    <Cell ss:Index="1" ss:MergeAcross="4" ss:StyleID="SectionHeader"><Data ss:Type="String">I. THÔNG TIN KHÁCH HÀNG GỬI TIỀN</Data></Cell>
   </Row>
   <Row ss:Height="20">
    <Cell ss:StyleID="Label"><Data ss:Type="String">1</Data></Cell>
    <Cell ss:StyleID="Label"><Data ss:Type="String">Họ và tên khách hàng:</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="Value"><Data ss:Type="String">...........................................................................</Data></Cell>
    <Cell ss:StyleID="Value"><Data ss:Type="String">Ngày sinh: ..... / ..... / ..........</Data></Cell>
   </Row>
   <Row ss:Height="20">
    <Cell ss:StyleID="Label"><Data ss:Type="String">2</Data></Cell>
    <Cell ss:StyleID="Label"><Data ss:Type="String">Số CCCD/CMND:</Data></Cell>
    <Cell ss:StyleID="Value"><Data ss:Type="String">.........................................</Data></Cell>
    <Cell ss:StyleID="Label"><Data ss:Type="String">Ngày cấp - Nơi cấp:</Data></Cell>
    <Cell ss:StyleID="Value"><Data ss:Type="String">..... / ..... / .......... - ....................</Data></Cell>
   </Row>
   <Row ss:Height="20">
    <Cell ss:StyleID="Label"><Data ss:Type="String">3</Data></Cell>
    <Cell ss:StyleID="Label"><Data ss:Type="String">Địa chỉ thường trú:</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="Value"><Data ss:Type="String">....................................................................................................</Data></Cell>
   </Row>
   <Row ss:Height="20">
    <Cell ss:StyleID="Label"><Data ss:Type="String">4</Data></Cell>
    <Cell ss:StyleID="Label"><Data ss:Type="String">Số điện thoại liên hệ:</Data></Cell>
    <Cell ss:StyleID="Value"><Data ss:Type="String">.........................................</Data></Cell>
    <Cell ss:StyleID="Label"><Data ss:Type="String">Là thành viên Quỹ:</Data></Cell>
    <Cell ss:StyleID="Value"><Data ss:Type="String">[  ] Đã là TV   [  ] Đăng ký mới</Data></Cell>
   </Row>
   <Row ss:Height="15"/>

   <!-- Section 2 -->
   <Row ss:Height="22">
    <Cell ss:Index="1" ss:MergeAcross="4" ss:StyleID="SectionHeader"><Data ss:Type="String">II. NỘI DUNG ĐĂNG KÝ GỬI TIẾT KIỆM GỬI GÓP</Data></Cell>
   </Row>
   <Row ss:Height="20">
    <Cell ss:StyleID="Label"><Data ss:Type="String">1</Data></Cell>
    <Cell ss:StyleID="Label"><Data ss:Type="String">Số tiền gửi định kỳ mỗi lần:</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="Value"><Data ss:Type="String">.................................................. đồng</Data></Cell>
    <Cell ss:StyleID="Value"><Data ss:Type="String">(Bằng chữ: .......................................)</Data></Cell>
   </Row>
   <Row ss:Height="20">
    <Cell ss:StyleID="Label"><Data ss:Type="String">2</Data></Cell>
    <Cell ss:StyleID="Label"><Data ss:Type="String">Kỳ hạn gửi:</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="Value"><Data ss:Type="String">[  ] 06 tháng   [  ] 12 tháng   [  ] 18 tháng   [  ] 24 tháng</Data></Cell>
   </Row>
   <Row ss:Height="20">
    <Cell ss:StyleID="Label"><Data ss:Type="String">3</Data></Cell>
    <Cell ss:StyleID="Label"><Data ss:Type="String">Chu kỳ gửi góp:</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="Value"><Data ss:Type="String">[  ] Hàng tháng   [  ] Hàng quý   [  ] 06 tháng/lần</Data></Cell>
   </Row>
   <Row ss:Height="20">
    <Cell ss:StyleID="Label"><Data ss:Type="String">4</Data></Cell>
    <Cell ss:StyleID="Label"><Data ss:Type="String">Ngày nộp định kỳ:</Data></Cell>
    <Cell ss:StyleID="Value"><Data ss:Type="String">Ngày ...... hàng tháng/kỳ</Data></Cell>
    <Cell ss:StyleID="Label"><Data ss:Type="String">Lãi suất áp dụng:</Data></Cell>
    <Cell ss:StyleID="Value"><Data ss:Type="String">....... %/năm (cố định)</Data></Cell>
   </Row>
   <Row ss:Height="20">
    <Cell ss:StyleID="Label"><Data ss:Type="String">5</Data></Cell>
    <Cell ss:StyleID="Label"><Data ss:Type="String">Ngày mở sổ (Kỳ 1):</Data></Cell>
    <Cell ss:StyleID="Value"><Data ss:Type="String">..... / ..... / 202...</Data></Cell>
    <Cell ss:StyleID="Label"><Data ss:Type="String">Ngày đáo hạn:</Data></Cell>
    <Cell ss:StyleID="Value"><Data ss:Type="String">..... / ..... / 202...</Data></Cell>
   </Row>
   <Row ss:Height="20">
    <Cell ss:StyleID="Label"><Data ss:Type="String">6</Data></Cell>
    <Cell ss:StyleID="Label"><Data ss:Type="String">Tổng tích lũy kế hoạch:</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="Value"><Data ss:Type="String">.................................................. đồng</Data></Cell>
   </Row>
   <Row ss:Height="15"/>

   <!-- Signatures -->
   <Row ss:Height="24">
    <Cell ss:Index="1" ss:MergeAcross="1" ss:StyleID="SignHeader"><Data ss:Type="String">KHÁCH HÀNG ĐĂNG KÝ</Data></Cell>
    <Cell ss:Index="3" ss:StyleID="SignHeader"><Data ss:Type="String">GIAO DỊCH VIÊN</Data></Cell>
    <Cell ss:Index="4" ss:MergeAcross="1" ss:StyleID="SignHeader"><Data ss:Type="String">GIÁM ĐỐC DUYỆT</Data></Cell>
   </Row>
   <Row ss:Height="18">
    <Cell ss:Index="1" ss:MergeAcross="1" ss:StyleID="SignNote"><Data ss:Type="String">(Ký và ghi rõ họ tên)</Data></Cell>
    <Cell ss:Index="3" ss:StyleID="SignNote"><Data ss:Type="String">(Ký và ghi rõ họ tên)</Data></Cell>
    <Cell ss:Index="4" ss:MergeAcross="1" ss:StyleID="SignNote"><Data ss:Type="String">(Ký, đóng dấu)</Data></Cell>
   </Row>
  </Table>
 </Worksheet>
</Workbook>\`;
            const blob = new Blob([excelContent], { type: 'application/vnd.ms-excel;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Giay_Dang_Ky_Gui_Gop_QTDND_YenTho.xls';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showToast('Đã xuất thành công file Excel Giấy Đăng Ký Gửi Tiết Kiệm Gửi Góp');
        }

        window.addEventListener('afterprint', () => {
            document.querySelectorAll('.print-zone-active').forEach(el => el.classList.remove('print-zone-active'));
        });
`;

if (!html.includes('function printRegistrationForm')) {
    const scriptPos = html.indexOf('<script>\n        // Cấu hình Biểu lãi suất');
    if (scriptPos !== -1) {
        html = html.replace('<script>\n        // Cấu hình Biểu lãi suất', '<script>\n' + jsAdditions + '\n        // Cấu hình Biểu lãi suất');
        console.log('  ✓ 4.1. Đã chèn các hàm JavaScript mới');
    }
}

// Cập nhật printPlanOnly để kích hoạt .print-zone-active
const oldPrintPlanCode = `            scheduleData.forEach(row => {
                const tr = document.createElement('tr');
                tr.className = 'border-b border-gray-300';
                tr.innerHTML = \`
                    <td class="py-1.5 px-1.5 text-center border-r border-black font-bold">\${row.period}</td>
                    <td class="py-1.5 px-2 border-r border-black">\${toVNDateStr(row.scheduledDate)}</td>
                    <td class="py-1.5 px-2 border-r border-black">\${toVNDateStr(row.actualDate)}</td>
                    <td class="py-1.5 px-2 text-right border-r border-black font-semibold">\${formatVND(row.amount)}</td>
                    <td class="py-1.5 px-1.5 text-center border-r border-black">\${row.daysToMaturity}</td>
                    <td class="py-1.5 px-2 text-right border-r border-black font-semibold">\${formatVND(row.interest)}</td>
                    <td class="py-1.5 px-2 text-right font-bold">\${formatVND(row.cumPrincipal)}</td>
                \`;
                tbody.appendChild(tr);
            });

            window.print();`;

const newPrintPlanCode = `            scheduleData.forEach(row => {
                const tr = document.createElement('tr');
                tr.className = 'border-b border-gray-300';
                tr.innerHTML = \`
                    <td class="py-1.5 px-1.5 text-center border-r border-black font-bold">\${row.period}</td>
                    <td class="py-1.5 px-2 border-r border-black">\${toVNDateStr(row.scheduledDate)}</td>
                    <td class="py-1.5 px-2 border-r border-black">\${toVNDateStr(row.actualDate)}</td>
                    <td class="py-1.5 px-2 text-right border-r border-black font-semibold">\${formatVND(row.amount)}</td>
                    <td class="py-1.5 px-1.5 text-center border-r border-black">\${row.daysToMaturity}</td>
                    <td class="py-1.5 px-2 text-right border-r border-black font-semibold">\${formatVND(row.interest)}</td>
                    <td class="py-1.5 px-2 text-right font-bold">\${formatVND(row.cumPrincipal)}</td>
                \`;
                tbody.appendChild(tr);
            });

            document.querySelectorAll('.print-zone-active').forEach(el => el.classList.remove('print-zone-active'));
            const planDoc = document.getElementById('printPlanDocument');
            if (planDoc) planDoc.classList.add('print-zone-active');

            window.print();`;

if (html.includes(oldPrintPlanCode)) {
    html = html.replace(oldPrintPlanCode, newPrintPlanCode);
    console.log('  ✓ 4.2. Đã cập nhật hàm printPlanOnly');
}

// =========================================================================
// 5. ÁP DỤNG escapeHtml TRONG renderFeedbackList (BẢO MẬT STRIX CWE-79)
// =========================================================================
html = html.replace(/\$\{item\.author\}/g, '${escapeHtml(item.author)}');
html = html.replace(/\$\{item\.role\}/g, '${escapeHtml(item.role)}');
html = html.replace(/\$\{item\.content\}/g, '${escapeHtml(item.content)}');
html = html.replace(/\$\{item\.response \?/g, '${escapeHtml(item.response) ?');
console.log('  ✓ 5. Đã áp dụng escapeHtml để chống Stored DOM XSS');

// =========================================================================
// 6. KIỂM TRA CÚ PHÁP JAVASCRIPT TRONG TOÀN BỘ FILE
// =========================================================================
const scriptMatches = [...html.matchAll(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/gi)];
console.log(`  ✓ Tìm thấy ${scriptMatches.length} thẻ script inline để kiểm tra cú pháp...`);

scriptMatches.forEach((m, idx) => {
    try {
        new vm.Script(m[1]);
        console.log(`    ✓ Script #${idx + 1} cú pháp hợp lệ (${m[1].length} ký tự)`);
    } catch (err) {
        console.error(`    ❌ Script #${idx + 1} LỖI CÚ PHÁP:`, err.message);
        process.exit(1);
    }
});

// Lưu tệp index.html
fs.writeFileSync('index.html', html, 'utf8');
console.log('🎉 [HOÀN TẤT] Đã cập nhật thành công index.html (Kích thước:', html.length, 'bytes)!');
