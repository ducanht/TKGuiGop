import fs from 'fs';
import { renderRegulationsHtml, renderAnalysisHtml } from './render_helpers.mjs';

console.log('Generating complete production index.html...');

const regulationsContent = renderRegulationsHtml();
const analysisContent = renderAnalysisHtml();

// Templates content
const consultingContent = `
  <!-- Phân tích bản chất tài chính COF -->
  <div class="bg-white rounded-2xl p-5 sm:p-7 shadow-xs border border-slate-200">
    <div class="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-2">
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      CẨM NANG NGHIỆP VỤ & TƯ VẤN THÀNH VIÊN
    </div>
    <h3 class="text-base sm:text-lg font-bold text-slate-900 mb-3">Bản Chất Tài Chính Của Sản Phẩm Tiết Kiệm Gửi Góp</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
      <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
        <h4 class="font-bold text-emerald-900 mb-2 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
          Tại sao lãi suất gửi góp thường thấp hơn gửi 1 lần?
        </h4>
        <p class="text-slate-600">
          Tiền gửi góp không có sẵn toàn bộ vốn ngay từ ngày đầu. Quỹ nhận dần từng tháng, do đó thời gian nắm giữ vốn bình quân thực tế chỉ bằng khoảng một nửa kỳ hạn (ví dụ gửi 12 tháng thì thời gian duy trì vốn bình quân chỉ khoảng 6,5 tháng). Vì vậy, mức lãi suất huy động gửi góp được xác định dựa trên lãi suất tham chiếu bình quân dòng tiền (<strong class="text-emerald-900">R_ref</strong>) để Quỹ kiểm soát chi phí vốn an toàn.
        </p>
      </div>
      <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
        <h4 class="font-bold text-emerald-900 mb-2 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
          Lợi ích vượt trội cho khách hàng tích lũy nhỏ
        </h4>
        <p class="text-slate-600">
          Nếu khách hàng tự giữ từng khoản 500k hay 1 triệu đồng ở nhà hoặc để trong tài khoản thanh toán thì hầu như không có lãi (hoặc chỉ hưởng 0,20%/năm). Khi tham gia gửi góp, toàn bộ các khoản nộp đều được tích lũy vào một sổ và hưởng mức lãi suất hấp dẫn (khoảng 4,5% - 4,8%/năm), vừa rèn luyện thói quen tiết kiệm vừa sinh lời tối đa.
        </p>
      </div>
    </div>
  </div>

  <!-- Quy trình tư vấn 4 bước tại quầy giao dịch -->
  <div class="bg-white rounded-2xl p-5 sm:p-7 shadow-xs border border-slate-200">
    <h3 class="text-base sm:text-lg font-bold text-slate-900 mb-4">Quy Trình 4 Bước Tư Vấn Khách Hàng Tại Quầy Giao Dịch</h3>
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
`;

const templatesContent = `
  <!-- Phân hệ 1: Mẫu Giấy Gửi Tiền Tiết Kiệm Gửi Góp -->
  <div class="bg-white rounded-2xl p-5 sm:p-7 shadow-xs border border-slate-200">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
      <div>
        <span class="text-xs font-bold text-emerald-700 uppercase tracking-wider">BIỂU MẪU BAN HÀNH KÈM THEO QUY ĐỊNH</span>
        <h3 class="text-base sm:text-lg font-bold text-slate-900 mt-1">Giấy Đăng Ký Gửi Tiền Tiết Kiệm Gửi Góp Định Kỳ</h3>
      </div>
      <button onclick="window.print()" class="px-3.5 py-2 bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-xs flex items-center gap-1.5 self-start sm:self-auto transition">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
        In Mẫu Biểu Này (A4)
      </button>
    </div>

    <!-- Khung giấy A4 mô phỏng -->
    <div class="mt-6 p-6 sm:p-8 bg-slate-50/60 border border-slate-300 rounded-xl max-w-3xl mx-auto text-slate-800 text-xs sm:text-sm font-serif">
      <div class="flex justify-between items-start border-b border-slate-300 pb-4 mb-5">
        <div class="text-center font-sans">
          <div class="font-bold text-xs uppercase text-slate-900">QUỸ TÍN DỤNG NHÂN DÂN YÊN THỌ</div>
          <div class="text-[11px] text-slate-600">Thôn Tân Lộc, xã Quý Lộc, tỉnh Thanh Hóa</div>
          <div class="text-[11px] text-slate-600">Hotline: 0966.381.189 - 0989.349.336</div>
        </div>
        <div class="text-center font-sans">
          <div class="font-bold text-xs uppercase text-slate-900">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</div>
          <div class="text-[11px] font-semibold text-slate-700">Độc lập - Tự do - Hạnh phúc</div>
          <div class="text-[11px] italic text-slate-500 mt-1">Quý Lộc, ngày ..... tháng ..... năm 202...</div>
        </div>
      </div>

      <div class="text-center my-6">
        <h4 class="font-bold text-base sm:text-lg uppercase text-slate-950 font-sans tracking-wide">GIẤY ĐĂNG KÝ GỬI TIỀN TIẾT KIỆM GỬI GÓP ĐỊNH KỲ</h4>
        <div class="text-xs italic text-slate-600 mt-1">Kính gửi: Hội đồng Quản trị và Ban Giám đốc Quỹ tín dụng nhân dân Yên Thọ</div>
      </div>

      <div class="space-y-3 font-sans leading-relaxed text-xs sm:text-sm">
        <div><strong>1. Thông tin khách hàng gửi tiền:</strong></div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-3">
          <div>Họ và tên: <span class="border-b border-dotted border-slate-500 inline-block min-w-[160px] font-semibold">...................................................</span></div>
          <div>Ngày sinh: <span class="border-b border-dotted border-slate-500 inline-block min-w-[120px]">..... / ..... / ..........</span></div>
          <div>Số CCCD/CMND: <span class="border-b border-dotted border-slate-500 inline-block min-w-[140px] font-semibold">.........................................</span></div>
          <div>Ngày cấp: <span class="border-b border-dotted border-slate-500 inline-block min-w-[120px]">..... / ..... / ..........</span> Nơi cấp: <span class="border-b border-dotted border-slate-500 inline-block min-w-[80px]">....................</span></div>
          <div class="sm:col-span-2">Địa chỉ thường trú: <span class="border-b border-dotted border-slate-500 inline-block min-w-[320px]">....................................................................................................</span></div>
          <div>Số điện thoại liên hệ: <span class="border-b border-dotted border-slate-500 inline-block min-w-[140px] font-semibold">.........................................</span></div>
          <div>Là thành viên Quỹ: [  ] Đã là thành viên   [  ] Đăng ký mới</div>
        </div>

        <div class="pt-2"><strong>2. Nội dung đăng ký gửi tiết kiệm gửi góp:</strong></div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-3">
          <div>Số tiền gửi định kỳ mỗi lần: <span class="border-b border-dotted border-slate-500 inline-block min-w-[140px] font-semibold text-emerald-900">.................................. đồng</span></div>
          <div>(Bằng chữ: <span class="border-b border-dotted border-slate-500 inline-block min-w-[180px] italic">..........................................................................</span>)</div>
          <div>Kỳ hạn gửi: [  ] 06 tháng  [  ] 12 tháng  [  ] 18 tháng  [  ] 24 tháng  [  ] 36 tháng</div>
          <div>Chu kỳ gửi: [  ] Hàng tháng (01 tháng/lần)   [  ] Hàng quý (03 tháng/lần)   [  ] 06 tháng/lần</div>
          <div>Ngày nộp tiền định kỳ: Ngày <span class="border-b border-dotted border-slate-500 inline-block min-w-[40px] text-center font-bold">......</span> hàng tháng/quý</div>
          <div>Hình thức nộp tiền: [  ] Tiền mặt tại quầy   [  ] Trích từ tài khoản   [  ] Chuyển khoản</div>
          <div>Lãi suất áp dụng: <span class="border-b border-dotted border-slate-500 inline-block min-w-[80px] text-center font-semibold">....... %/năm</span></div>
          <div>Ngày mở sổ (Kỳ 1): <span class="border-b border-dotted border-slate-500 inline-block min-w-[100px]">..... / ..... / 202...</span></div>
          <div>Ngày đáo hạn dự kiến: <span class="border-b border-dotted border-slate-500 inline-block min-w-[100px]">..... / ..... / 202...</span></div>
          <div>Tổng số tiền tích lũy kế hoạch: <span class="border-b border-dotted border-slate-500 inline-block min-w-[140px] font-bold">.................................. đồng</span></div>
        </div>

        <div class="pt-2"><strong>3. Cam kết của khách hàng:</strong></div>
        <p class="text-xs text-slate-600 pl-3 leading-relaxed">
          Tôi đã đọc, hiểu rõ và cam kết tuân thủ toàn bộ các điều khoản trong Quy định sản phẩm Tiết kiệm gửi góp định kỳ do Hội đồng Quản trị Quỹ tín dụng nhân dân Yên Thọ ban hành. Tôi cam kết nộp tiền đúng hạn và đầy đủ theo lịch đã đăng ký trên.
        </p>

        <div class="grid grid-cols-2 gap-6 pt-6 text-center font-sans">
          <div>
            <div class="font-bold text-xs uppercase text-slate-900">GIAO DỊCH VIÊN TIẾP NHẬN</div>
            <div class="text-[11px] italic text-slate-500">(Ký và ghi rõ họ tên)</div>
            <div class="h-20"></div>
          </div>
          <div>
            <div class="font-bold text-xs uppercase text-slate-900">KHÁCH HÀNG ĐĂNG KÝ</div>
            <div class="text-[11px] italic text-slate-500">(Ký và ghi rõ họ tên)</div>
            <div class="h-20"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

const feedbackContent = `
  <!-- Banner Cổng Ý Kiến Đóng Góp -->
  <div class="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-md border border-emerald-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
    <div>
      <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-800 text-emerald-200 text-xs font-semibold mb-2">
        <svg class="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
        CỔNG ĐÓNG GÓP Ý KIẾN TRỰC TUYẾN
      </div>
      <h2 class="text-lg sm:text-xl font-bold tracking-tight text-white">Khảo Sát & Lấy Ý Kiến Về Quy Định Tiết Kiệm Gửi Góp</h2>
      <p class="text-xs sm:text-sm text-emerald-200/90 mt-1 max-w-xl leading-relaxed">
        Dành riêng cho Hội đồng quản trị, Ban Giám đốc, Ban Kiểm soát và toàn thể cán bộ nhân viên Quỹ tín dụng nhân dân Yên Thọ. Mọi đóng góp đều được lưu trữ trực tiếp và tự động đồng bộ lên Google Sheets.
      </p>
    </div>
    <div class="flex items-center gap-2 shrink-0">
      <button onclick="syncFeedbacksFromGoogleSheet()" class="px-3.5 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl border border-emerald-600 shadow-xs flex items-center gap-2 transition">
        <svg class="w-4 h-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
        Đồng bộ dữ liệu
      </button>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
    <!-- FORM ĐÓNG GÓP Ý KIẾN (Cột trái) -->
    <div class="lg:col-span-5 bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-slate-200 h-fit">
      <h3 class="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
        Gửi Ý Kiến Đóng Góp Của Cán Bộ
      </h3>
      <p class="text-xs text-slate-500 mb-4">Vui lòng điền thông tin và ý kiến phản biện hoặc đề xuất giải pháp.</p>

      <form id="feedbackForm" onsubmit="submitFeedbackForm(event)" class="space-y-4">
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Họ và tên cán bộ <span class="text-rose-500">*</span></label>
          <input type="text" id="fb_author" required placeholder="Ví dụ: Nguyễn Văn Sơn"
            class="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none">
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Bộ phận / Chức danh <span class="text-rose-500">*</span></label>
          <select id="fb_role" required class="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white">
            <option value="HĐQT">Thành viên Hội đồng quản trị</option>
            <option value="Ban Giám đốc">Ban Giám đốc</option>
            <option value="Ban Kiểm soát">Ban Kiểm soát</option>
            <option value="Tín dụng" selected>Bộ phận Tín dụng & Khách hàng</option>
            <option value="Kế toán - Giao dịch">Kế toán & Giao dịch viên</option>
            <option value="Thủ quỹ">Bộ phận Thủ quỹ & Ngân quỹ</option>
            <option value="Khác">Cán bộ nhân viên khác</option>
          </select>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Phương án lựa chọn ủng hộ <span class="text-rose-500">*</span></label>
          <div class="grid grid-cols-2 gap-2 text-xs">
            <label class="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 cursor-pointer hover:bg-emerald-50/50 has-[:checked]:border-emerald-600 has-[:checked]:bg-emerald-50">
              <input type="radio" name="fb_option" value="Phương án 1 (Gửi hàng tháng)" checked class="text-emerald-600 focus:ring-emerald-500">
              <span class="font-semibold text-slate-800">Phương án 1 (Hàng tháng)</span>
            </label>
            <label class="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 cursor-pointer hover:bg-emerald-50/50 has-[:checked]:border-emerald-600 has-[:checked]:bg-emerald-50">
              <input type="radio" name="fb_option" value="Phương án 2 (Đa chu kỳ)" class="text-emerald-600 focus:ring-emerald-500">
              <span class="font-semibold text-slate-800">Phương án 2 (Đa chu kỳ)</span>
            </label>
          </div>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Đánh giá tính khả thi & tiềm năng sản phẩm</label>
          <div class="flex items-center gap-2" id="starRatingContainer">
            <button type="button" onclick="setFeedbackRating(1)" class="star-btn text-amber-400 hover:scale-110 transition p-1 text-lg">★</button>
            <button type="button" onclick="setFeedbackRating(2)" class="star-btn text-amber-400 hover:scale-110 transition p-1 text-lg">★</button>
            <button type="button" onclick="setFeedbackRating(3)" class="star-btn text-amber-400 hover:scale-110 transition p-1 text-lg">★</button>
            <button type="button" onclick="setFeedbackRating(4)" class="star-btn text-amber-400 hover:scale-110 transition p-1 text-lg">★</button>
            <button type="button" onclick="setFeedbackRating(5)" class="star-btn text-amber-400 hover:scale-110 transition p-1 text-lg">★</button>
            <span id="starRatingText" class="text-xs font-bold text-emerald-800 ml-1">5 sao (Rất khả thi)</span>
          </div>
          <input type="hidden" id="fb_rating" value="5">
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Nội dung ý kiến đóng góp / Đề xuất sửa đổi <span class="text-rose-500">*</span></label>
          <textarea id="fb_content" required rows="4" placeholder="Nhập ý kiến cụ thể về các điều khoản, lãi suất, chu kỳ gửi hoặc kinh nghiệm thực tế tư vấn khách hàng..."
            class="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none leading-relaxed"></textarea>
        </div>

        <button type="submit" id="fb_submit_btn" class="w-full py-2.5 px-4 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition flex items-center justify-center gap-2">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
          Gửi Ý Kiến Ngay
        </button>
      </form>
    </div>

    <!-- DANH SÁCH Ý KIẾN ĐÃ GHI NHẬN (Cột phải - Responsive chuẩn hóa) -->
    <div class="lg:col-span-7 space-y-4">
      <div class="bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-slate-200">
        <div class="flex items-center justify-between pb-3 border-b border-slate-200">
          <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            Ý Kiến Đã Ghi Nhận
            <span id="feedbackCountBadge" class="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900">0</span>
          </h3>
          <div class="text-[11px] text-slate-500">Tự động đồng bộ Google Sheets</div>
        </div>

        <div id="feedbackListContainer" class="mt-4 space-y-3">
          <!-- Rendered dynamically -->
        </div>
      </div>
    </div>
  </div>
`;

console.log('Writing full index.html file...');
fs.writeFileSync('D:/Antigravity Projects/TKGuiGop/data/template_strings.json', JSON.stringify({
  regulationsContent,
  analysisContent,
  consultingContent,
  templatesContent,
  feedbackContent
}), 'utf8');

console.log('Saved template_strings.json successfully.');
