import fs from 'fs';

console.log('📝 Cập nhật templatesContent trong data/template_strings_v2.json...');

const data = JSON.parse(fs.readFileSync('data/template_strings_v2.json', 'utf8'));

const newTemplatesContent = `
  <!-- Phân hệ 1: Mẫu Giấy Gửi Tiền Tiết Kiệm Gửi Góp -->
  <div class="bg-white rounded-2xl p-5 sm:p-7 shadow-xs border border-slate-200">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
      <div>
        <span class="text-xs font-bold text-emerald-700 uppercase tracking-wider">BIỂU MẪU BAN HÀNH KÈM THEO QUY ĐỊNH</span>
        <h3 class="text-base sm:text-lg font-bold text-slate-900 mt-1">Giấy Đăng Ký Gửi Tiền Tiết Kiệm Gửi Góp Định Kỳ</h3>
      </div>
      <!-- Nút thao tác: Chỉ dùng biểu tượng (Icon-only) chuẩn /qtd_export_pdf_word_exel_img và /qtdyentho-ui-design-system -->
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

data.templatesContent = newTemplatesContent;
fs.writeFileSync('data/template_strings_v2.json', JSON.stringify(data, null, 2), 'utf8');
console.log('✅ Đã cập nhật thành công templatesContent trong data/template_strings_v2.json!');
