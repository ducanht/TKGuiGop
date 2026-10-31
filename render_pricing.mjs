import fs from 'fs';

export function renderPricingTabHtml() {
  return `
    <!-- Banner Tab HĐQT -->
    <div class="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-md border border-emerald-800">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-800/80 text-emerald-200 text-xs font-semibold mb-2">
            <svg class="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
            CHUYÊN ĐỀ HỘI ĐỒNG QUẢN TRỊ - ĐỊNH GIÁ & ĐIỀU HÀNH LÃI SUẤT
          </div>
          <h2 class="text-lg sm:text-xl font-bold tracking-tight text-white">Công Cụ Xác Định Lãi Suất Tham Chiếu Tiền Gửi Góp</h2>
          <p class="text-xs sm:text-sm text-emerald-200/90 mt-1 max-w-2xl leading-relaxed">
            Cơ sở phân tích chi phí vốn theo Biểu lãi suất tiền gửi hiện hành của Quỹ tín dụng nhân dân Yên Thọ. Xác định số tiền cụ thể Quỹ phải trả và Khách hàng nhận được ở từng phương án huy động.
          </p>
          <div class="flex flex-wrap items-center gap-2 mt-3">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 text-emerald-200 border border-emerald-600/70 text-xs font-semibold shadow-xs">
              <span class="text-amber-400">⚖️</span> Cơ sở 365 ngày (TT 14/2017)
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 text-emerald-200 border border-emerald-600/70 text-xs font-semibold shadow-xs">
              <span class="text-amber-400">🛡️</span> Rút trước hạn (TT 04/2022)
            </span>
          </div>
        </div>
        <div class="shrink-0 flex items-center gap-2">
          <button onclick="applyPricingToSimulation()" class="px-3.5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl border border-emerald-500 shadow-sm flex items-center gap-2 transition">
            <svg class="w-4 h-4 text-emerald-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            Áp Dụng Sang Tab Mô Phỏng
          </button>
        </div>
      </div>
    </div>

    <!-- KHỐI 1: BIỂU LÃI SUẤT NIÊM YẾT HIỆN HÀNH CỦA QUỸ -->
    <div class="bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-slate-200 space-y-4">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
        <div>
          <h3 class="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            Biểu Lãi Suất Tiền Gửi Tiết Kiệm Niêm Yết Hiện Hành
          </h3>
          <p class="text-xs text-slate-500 mt-0.5">Áp dụng cho thành viên và khách hàng cá nhân tại Quỹ tín dụng nhân dân Yên Thọ</p>
        </div>
        <span class="text-xs text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 self-start sm:self-auto">
          Quyết định HĐQT hiện hành
        </span>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-6 gap-3 text-center">
        <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
          <div class="text-[11px] font-medium text-slate-500">Không kỳ hạn (&lt;30N)</div>
          <div class="text-base sm:text-lg font-black text-slate-900 tabular-nums mt-1">0,20 %</div>
          <span class="text-[10px] text-slate-400">/ năm</span>
        </div>
        <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
          <div class="text-[11px] font-medium text-slate-500">01 - 02 tháng</div>
          <div class="text-base sm:text-lg font-black text-slate-900 tabular-nums mt-1">3,10 %</div>
          <span class="text-[10px] text-slate-400">/ năm</span>
        </div>
        <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
          <div class="text-[11px] font-medium text-slate-500">03 - 05 tháng</div>
          <div class="text-base sm:text-lg font-black text-slate-900 tabular-nums mt-1">3,60 %</div>
          <span class="text-[10px] text-slate-400">/ năm</span>
        </div>
        <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
          <div class="text-[11px] font-medium text-slate-500">06 - 11 tháng</div>
          <div class="text-base sm:text-lg font-black text-slate-900 tabular-nums mt-1">4,40 %</div>
          <span class="text-[10px] text-slate-400">/ năm</span>
        </div>
        <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
          <div class="text-[11px] font-medium text-slate-500">12 - 18 tháng</div>
          <div class="text-base sm:text-lg font-black text-slate-900 tabular-nums mt-1">5,60 %</div>
          <span class="text-[10px] text-slate-400">/ năm</span>
        </div>
        <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
          <div class="text-[11px] font-medium text-emerald-800">24 tháng trở lên</div>
          <div class="text-base sm:text-lg font-black text-emerald-950 tabular-nums mt-1">5,50 %</div>
          <span class="text-[10px] text-emerald-700">/ năm</span>
        </div>
      </div>
    </div>

    <!-- KHỐI 1B: CƠ SỞ THUẬT TOÁN XÁC ĐỊNH LÃI SUẤT THAM CHIẾU BÌNH QUÂN THEO DÒNG TIỀN -->
    <div class="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-2xl p-5 sm:p-6 shadow-sm border border-emerald-800 space-y-3">
      <div class="flex items-center justify-between pb-2 border-b border-emerald-800/80">
        <h4 class="font-bold text-sm sm:text-base text-emerald-200 flex items-center gap-2">
          <span>📐</span> Thuật Toán Xác Định Lãi Suất Tham Chiếu Bình Quân Theo Dòng Tiền (Sàn Hòa Vốn)
        </h4>
        <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-800/80 text-emerald-100 font-semibold border border-emerald-600/50">
          Cơ sở tính toán khoa học
        </span>
      </div>
      <p class="text-xs text-slate-300 leading-relaxed">
        Đây là phần cốt lõi của thuật toán điều hành. Điểm sàn hòa vốn được xác định bằng bình quân gia quyền theo quy mô số tiền và số ngày duy trì thực tế của từng khoản nộp đối ứng với Biểu lãi suất niêm yết hiện hành:
      </p>

      <!-- Khung hiển thị công thức chuẩn -->
      <div class="p-4 rounded-xl bg-slate-950/80 border border-emerald-700/60 flex flex-col items-center justify-center my-2 text-center shadow-inner">
        <div class="text-xs text-emerald-400 font-bold uppercase tracking-wider mb-2">Công thức xác định lãi suất sàn hòa vốn dòng tiền:</div>
        <div class="font-mono text-base sm:text-lg font-black tracking-wide text-amber-300 bg-slate-900/90 px-6 py-2.5 rounded-lg border border-emerald-700/80 shadow-xs">
          R<sub>ref</sub> = &Sigma;(S<sub>i</sub> &times; D<sub>i</sub> &times; R<sub>i</sub>) &divide; &Sigma;(S<sub>i</sub> &times; D<sub>i</sub>)
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200 pt-1">
        <div class="flex items-start gap-2 bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-800/60">
          <span class="font-black text-amber-300 text-sm">R<sub>ref</sub>:</span>
          <span>Lãi suất tham chiếu bình quân theo dòng tiền (sàn hòa vốn chi phí huy động của Quỹ).</span>
        </div>
        <div class="flex items-start gap-2 bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-800/60">
          <span class="font-black text-emerald-400 text-sm">S<sub>i</sub>:</span>
          <span>Số tiền thực tế dự kiến nhận ở lần góp thứ <em>i</em>.</span>
        </div>
        <div class="flex items-start gap-2 bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-800/60">
          <span class="font-black text-emerald-400 text-sm">D<sub>i</sub>:</span>
          <span>Số ngày duy trì dự kiến đến ngày đáo hạn (tính theo số ngày thực tế, cơ sở 365 ngày).</span>
        </div>
        <div class="flex items-start gap-2 bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-800/60">
          <span class="font-black text-emerald-400 text-sm">R<sub>i</sub>:</span>
          <span>Lãi suất huy động thông thường tương ứng với thời gian còn lại (D<sub>i</sub>) của khoản tiền đó theo Biểu niêm yết.</span>
        </div>
      </div>
    </div>

    <!-- KHỐI 2: THIẾT LẬP THAM SỐ ĐỊNH GIÁ & ĐIỀU CHỈNH BIÊN ĐỘ KHUYẾN KHÍCH -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
      <!-- Tham số phân tích quy mô -->
      <div class="lg:col-span-5 bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-4">
        <h3 class="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2 pb-2 border-b border-slate-200">
          <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
          Thông Số Gói Tích Lũy Cần Phân Tích
        </h3>

        <div class="space-y-3 text-xs sm:text-sm">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Số tiền nộp định kỳ mỗi lần (VNĐ)</label>
            <input type="text" inputmode="numeric" id="pricingMonthlyAmount" value="1.000.000"
              oninput="handleMoneyInput(this); updatePricingCalculation();"
              class="money-input w-full px-3 py-2 text-base font-bold tabular-nums rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none bg-emerald-50/20 text-emerald-950">
          </div>

          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Kỳ hạn gửi</label>
              <select id="pricingTermSelect" onchange="updatePricingCalculation()" class="w-full px-2.5 py-2 text-xs font-bold rounded-xl border border-slate-300 outline-none bg-white">
                <option value="3">03 tháng</option>
                <option value="6">06 tháng</option>
                <option value="12" selected>12 tháng</option>
                <option value="18">18 tháng</option>
                <option value="24">24 tháng</option>
                <option value="36">36 tháng</option>
                <option value="60">60 tháng</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Chu kỳ nộp tiền</label>
              <select id="pricingFreqSelect" onchange="updatePricingCalculation()" class="w-full px-2.5 py-2 text-xs font-bold rounded-xl border border-slate-300 outline-none bg-white">
                <option value="1" selected>01 Tháng/lần (Hàng tháng)</option>
                <option value="3">03 Tháng/lần (Hàng quý)</option>
                <option value="6">06 Tháng/lần</option>
              </select>
            </div>
          </div>

          <!-- Biên độ khuyến khích điều chỉnh -->
          <div class="pt-2 border-t border-slate-200">
            <div class="flex justify-between items-center mb-1">
              <span class="font-bold text-slate-700">Biên độ khuyến khích cộng thêm:</span>
              <span id="pricingDeltaLabel" class="font-black text-emerald-800 text-sm tabular-nums">+0,30 % / năm</span>
            </div>
            <input type="range" id="pricingDeltaSlider" min="0" max="1.0" step="0.05" value="0.30"
              oninput="onPricingDeltaChange(this.value)"
              class="w-full accent-emerald-700 cursor-pointer">
            <div class="flex justify-between text-[10px] text-slate-400 mt-0.5">
              <span>0% (Bằng sàn hòa vốn)</span>
              <span>+0,30% (Khuyến nghị)</span>
              <span>+1,00%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Khối kết quả định giá & Lãi suất đề xuất -->
      <div class="lg:col-span-7 bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-4">
        <h3 class="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2 pb-2 border-b border-slate-200">
          <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
          Kết Quả Tính Toán Lãi Suất Tham Chiếu & Đề Xuất
        </h3>

        <div class="grid grid-cols-2 gap-3">
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <span class="text-slate-500 font-semibold block text-[11px]">Lãi Suất Sàn Hòa Vốn Dòng Tiền</span>
            <div id="pricingRRefResult" class="text-xl sm:text-2xl font-black text-slate-800 tabular-nums mt-1">4,38 %</div>
            <span class="text-[10px] text-slate-500">Mức bình quân chi phí các món gửi lẻ</span>
          </div>

          <div class="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-xs">
            <span class="text-emerald-800 font-bold block text-[11px]">Lãi Suất Gửi Góp Cố Định Đề Xuất Ban Hành</span>
            <div id="pricingProposedRateResult" class="text-xl sm:text-2xl font-black text-emerald-950 tabular-nums mt-1">4,68 %</div>
            <span class="text-[10px] text-emerald-800 font-semibold">Cố định duy nhất ghi trên sổ khách hàng</span>
          </div>
        </div>

        <!-- 2 Chỉ báo so sánh hiệu quả -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div class="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
            <div class="font-bold text-emerald-950 flex items-center gap-1.5">
              <svg class="w-4 h-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>Hiệu quả chi phí vốn Quỹ:</span>
            </div>
            <div id="pricingFundSavingsPercent" class="text-sm font-bold text-emerald-900 mt-1 tabular-nums">
              Tiết kiệm 0,92%/năm
            </div>
            <div class="text-[11px] text-slate-600 mt-0.5">
              So với trần lãi suất gửi 1 lần cùng kỳ hạn (<span id="pricingSingleRateLabel">5,60%</span>).
            </div>
          </div>

          <div class="p-3 rounded-xl bg-blue-50/70 border border-blue-200">
            <div class="font-bold text-blue-950 flex items-center gap-1.5">
              <svg class="w-4 h-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              <span>Lợi ích gia tăng cho thành viên:</span>
            </div>
            <div id="pricingCustBenefitPercent" class="text-sm font-bold text-blue-900 mt-1 tabular-nums">
              Cao hơn +0,30%/năm
            </div>
            <div class="text-[11px] text-slate-600 mt-0.5">
              So với mức khách tự chia nhỏ đi gửi từng sổ ngắn hạn riêng lẻ.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- KHỐI 3: BẢNG SO SÁNH 3 PHƯƠNG ÁN TÀI CHÍNH BẰNG SỐ TIỀN CỤ THỂ (VNĐ) -->
    <div class="bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-slate-200 space-y-3">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
        <div>
          <h3 class="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            Đối Chiếu Số Tiền Cụ Thể Giữa 3 Phương Án (Quỹ Trả & Khách Hàng Nhận)
          </h3>
          <p class="text-xs text-slate-500 mt-0.5">Tham chiếu trực quan để HĐQT đánh giá chính xác chi phí lãi và lợi ích thành viên trên một sổ tích lũy.</p>
        </div>
        <div class="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-lg">
          Tổng vốn tích lũy: <span id="pricingSummaryTotalPrincipal" class="text-emerald-900">12.000.000 đ</span>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-slate-200 bg-slate-50 text-slate-700 font-bold uppercase text-[11px]">
              <th class="py-3 px-3">Phương Án Huy Động</th>
              <th class="py-3 px-3 text-center">Lãi Suất</th>
              <th class="py-3 px-3 text-right">Số Tiền Quỹ Chi Trả Lãi</th>
              <th class="py-3 px-3 text-center">Chi Phí Vốn (COF)</th>
              <th class="py-3 px-3">Đánh Giá Đối Ứng Cho HĐQT</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 font-medium tabular-nums">
            <!-- Mốc 1: Gửi 1 lần cùng kỳ hạn -->
            <tr class="hover:bg-slate-50">
              <td class="py-3 px-3">
                <div class="font-bold text-slate-900">1. Gửi Tiết Kiệm Thông Thường 1 Lần (Cuối Kỳ)</div>
                <div class="text-[11px] text-slate-500">Khách gửi trọn gói 100% vốn ngay từ ngày đầu mở sổ</div>
              </td>
              <td id="pRow1_rate" class="py-3 px-3 text-center font-bold text-slate-800">5,60 %</td>
              <td id="pRow1_interest" class="py-3 px-3 text-right font-black text-rose-700 text-sm sm:text-base">672.000 đ</td>
              <td id="pRow1_cof" class="py-3 px-3 text-center font-bold text-slate-700">5,60 %</td>
              <td class="py-3 px-3 text-xs text-slate-600">
                Chi phí lãi tối đa nếu huy động vốn trọn gói ngay từ đầu kỳ.
              </td>
            </tr>

            <!-- Mốc 2: Kỳ hạn tương đương dòng tiền bình quân -->
            <tr class="hover:bg-slate-50 bg-slate-50/40">
              <td class="py-3 px-3">
                <div class="font-bold text-slate-900">2. Khách Tự Gửi Các Sổ Ngắn Hạn Riêng Lẻ</div>
                <div class="text-[11px] text-slate-500" id="pRow2_termLabel">Tương đương kỳ hạn 6 - 7 tháng niêm yết</div>
              </td>
              <td id="pRow2_rate" class="py-3 px-3 text-center font-bold text-slate-800">4,38 %</td>
              <td id="pRow2_interest" class="py-3 px-3 text-right font-bold text-slate-800 text-sm sm:text-base">284.700 đ</td>
              <td id="pRow2_cof" class="py-3 px-3 text-center font-bold text-slate-700">2,37 %</td>
              <td class="py-3 px-3 text-xs text-slate-600">
                Mức sàn chi phí hòa vốn nếu trả theo biểu niêm yết từng món tiền gửi lẻ.
              </td>
            </tr>

            <!-- Mốc 3: Lãi suất đề xuất gửi góp -->
            <tr class="hover:bg-emerald-50/50 bg-emerald-50/30 border-2 border-emerald-300 rounded-xl">
              <td class="py-3.5 px-3">
                <div class="font-bold text-emerald-950 flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
                  3. Tiết Kiệm Gửi Góp Định Kỳ (Đề Xuất Ban Hành)
                </div>
                <div class="text-[11px] text-emerald-800 font-semibold">Toàn bộ các lần gửi áp dụng 1 mức lãi suất cố định duy nhất của sổ</div>
              </td>
              <td id="pRow3_rate" class="py-3.5 px-3 text-center font-black text-emerald-950 text-sm">4,68 %</td>
              <td id="pRow3_interest" class="py-3.5 px-3 text-right font-black text-emerald-900 text-sm sm:text-base">305.162 đ</td>
              <td id="pRow3_cof" class="py-3.5 px-3 text-center font-black text-emerald-950">2,54 %</td>
              <td class="py-3.5 px-3 text-xs text-emerald-950">
                <div class="font-bold">Quỹ tiết kiệm: <span id="pRow3_fundSaveMoney" class="text-emerald-800">+366.838 đ</span> (-54,6%)</div>
                <div class="text-[11px] text-slate-600">Khách nhận thêm: <span id="pRow3_custBenefitMoney" class="font-semibold text-blue-800">+20.462 đ</span> (+7,2%)</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- KHỐI 4: BẢNG PHÂN TÍCH THỜI GIAN DUY TRÌ & CHI PHÍ LÃI ĐỐI CHIẾU TỪNG KHOẢN GỬI -->
    <div class="bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-slate-200 space-y-3">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
        <div>
          <h3 class="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            Bảng Phân Tích Thời Gian Duy Trì & Chi Phí Lãi Đối Chiếu Từng Khoản Gửi
          </h3>
          <p class="text-xs text-slate-500 mt-0.5">
            Lưu ý nghiệp vụ: Tiết kiệm gửi góp tính lãi theo <strong class="text-emerald-900">MỘT mức lãi suất cố định của sổ</strong> (cột màu xanh). Cột màu xám là số liệu đối chứng nếu khách tự mở từng sổ ngắn hạn riêng lẻ.
          </p>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-xs">
          <thead>
            <tr class="border-b border-slate-200 bg-slate-50 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
              <th class="py-2.5 px-2.5 text-center">Kỳ</th>
              <th class="py-2.5 px-3">Ngày gửi</th>
              <th class="py-2.5 px-3 text-right">Số tiền nộp</th>
              <th class="py-2.5 px-2.5 text-center">Số ngày gửi</th>
              <th class="py-2.5 px-3">Kỳ hạn gửi lẻ tương đương</th>
              <th class="py-2.5 px-2.5 text-center">Lãi suất niêm yết</th>
              <th class="py-2.5 px-3 text-right">Tiền lãi đối chứng (Sổ lẻ)</th>
              <th class="py-2.5 px-3 text-right text-emerald-900 bg-emerald-50/50">Tiền lãi gửi góp thực trả (Cố định)</th>
              <th class="py-2.5 px-3 text-right text-blue-900">Khách nhận thêm</th>
            </tr>
          </thead>
          <tbody id="pricingScheduleTableBody" class="divide-y divide-slate-100 font-medium tabular-nums">
            <!-- Rendered dynamically via JS -->
          </tbody>
          <tfoot>
            <tr class="border-t-2 border-slate-300 font-bold bg-slate-50 text-slate-900 text-xs sm:text-sm tabular-nums">
              <td colspan="2" class="py-3 px-3">TỔNG CỘNG:</td>
              <td id="pFoot_totalPrincipal" class="py-3 px-3 text-right font-black text-slate-900">0 đ</td>
              <td class="py-3 px-2 text-center text-slate-400">-</td>
              <td colspan="2" class="py-3 px-3 text-center text-slate-600 font-semibold">Dòng tiền duy trì bình quân: <span id="pFoot_avgDays" class="text-emerald-900 font-bold">...</span> ngày</td>
              <td id="pFoot_totalInterestNiemyet" class="py-3 px-3 text-right font-bold text-slate-700">0 đ</td>
              <td id="pFoot_totalInterestProposed" class="py-3 px-3 text-right font-black text-emerald-900 bg-emerald-50/50">0 đ</td>
              <td id="pFoot_totalCustAdvantage" class="py-3 px-3 text-right font-bold text-blue-800">0 đ</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  `;
}
