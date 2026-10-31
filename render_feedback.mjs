export function renderFeedbackTabHtml() {
  return `
    <!-- Banner Cổng Ý Kiến Thẩm Định -->
    <div class="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-md border border-emerald-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-800 text-emerald-200 text-xs font-semibold mb-2">
          <svg class="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
          CỔNG THẨM ĐỊNH & LẤY Ý KIẾN NỘI BỘ
        </div>
        <h2 class="text-lg sm:text-xl font-bold tracking-tight text-white">Khảo Sát & Tổng Hợp Ý Kiến Về Quy Định Tiết Kiệm Gửi Góp</h2>
        <p class="text-xs sm:text-sm text-emerald-200/90 mt-1 max-w-xl leading-relaxed">
          Kênh tiếp nhận ý kiến đóng góp thẩm định từ Hội đồng quản trị, Ban Giám đốc, Ban Kiểm soát và toàn thể cán bộ nhân viên Quỹ tín dụng nhân dân Yên Thọ.
        </p>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <button onclick="syncFeedbacksFromGoogleSheet()" class="px-3.5 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl border border-emerald-600 shadow-xs flex items-center gap-2 transition">
          <svg class="w-4 h-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          <span>Làm Mới Dữ Liệu</span>
        </button>
      </div>
    </div>

    <!-- KHỐI 1: 4 THẺ CHỈ SỐ THỐNG KÊ TỔNG QUAN -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      <!-- Thẻ 1: Tổng số ý kiến -->
      <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg shrink-0">
          💬
        </div>
        <div>
          <span class="text-[11px] font-semibold text-slate-500 uppercase block">Tổng Số Ý Kiến</span>
          <div id="stat_totalFeedbacks" class="text-lg sm:text-xl font-black text-slate-900 tabular-nums">0 ý kiến</div>
          <span class="text-[10px] text-slate-400">Đã tiếp nhận vào sổ</span>
        </div>
      </div>

      <!-- Thẻ 2: Điểm đánh giá bình quân -->
      <div class="bg-white rounded-2xl p-4 border border-emerald-200 shadow-xs bg-emerald-50/20 flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg shrink-0">
          ⭐
        </div>
        <div>
          <span class="text-[11px] font-semibold text-emerald-800 uppercase block">Đánh Giá Bình Quân</span>
          <div id="stat_avgRating" class="text-lg sm:text-xl font-black text-emerald-950 tabular-nums">5,0 / 5,0</div>
          <span class="text-[10px] text-emerald-700 font-medium">Mức độ thiết thực cao</span>
        </div>
      </div>

      <!-- Thẻ 3: Tỷ lệ CBNV đã tham gia -->
      <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-lg shrink-0">
          👥
        </div>
        <div>
          <span class="text-[11px] font-semibold text-slate-500 uppercase block">Tiến Độ Tham Gia</span>
          <div id="stat_participation" class="text-lg sm:text-xl font-black text-blue-950 tabular-nums">0 / 12 cán bộ</div>
          <span id="stat_participationRate" class="text-[10px] text-blue-700 font-semibold">Tỷ lệ: 0,0%</span>
        </div>
      </div>

      <!-- Thẻ 4: Người đóng góp nhiều ý kiến nhất -->
      <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-lg shrink-0">
          🏆
        </div>
        <div>
          <span class="text-[11px] font-semibold text-slate-500 uppercase block">Đóng Góp Tích Cực Nhất</span>
          <div id="stat_topContributor" class="text-xs sm:text-sm font-black text-slate-900 truncate">Chưa có</div>
          <span id="stat_topContributorCount" class="text-[10px] text-purple-700 font-semibold">0 ý kiến đóng góp</span>
        </div>
      </div>
    </div>

    <!-- KHỐI 2: TÌNH HÌNH THAM GIA THẨM ĐỊNH (THIẾT KẾ TINH GỌN, CHỌN ĐIỀN NHANH) -->
    <div class="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-3">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
        <div>
          <h3 class="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            Tình Hình Tham Gia Thẩm Định (12 Cán Bộ Nhân Viên)
          </h3>
          <p class="text-xs text-slate-500 mt-0.5">Bấm vào tên cán bộ bên dưới để điền nhanh vào form đóng góp ý kiến thẩm định.</p>
        </div>
        
        <!-- Bộ lọc cán bộ 1 chạm -->
        <div class="flex items-center gap-1.5 self-start sm:self-auto bg-slate-100 p-1 rounded-xl text-xs font-semibold">
          <button id="cbFilterBtn_all" onclick="filterCanBoList('all')" class="px-2.5 py-1 rounded-lg bg-white text-emerald-950 font-bold shadow-xs transition">
            Tất cả (12)
          </button>
          <button id="cbFilterBtn_done" onclick="filterCanBoList('done')" class="px-2.5 py-1 rounded-lg text-slate-600 hover:text-emerald-900 transition">
            Đã tham gia
          </button>
          <button id="cbFilterBtn_pending" onclick="filterCanBoList('pending')" class="px-2.5 py-1 rounded-lg text-slate-600 hover:text-emerald-900 transition">
            Chưa tham gia
          </button>
        </div>
      </div>

      <!-- Grid danh sách cán bộ tinh gọn: Tên CBNV + Trạng thái -->
      <div id="canBoGridContainer" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-2.5">
        <!-- Rendered dynamically via JS -->
      </div>
    </div>

    <!-- KHỐI 3: FORM ĐÓNG GÓP Ý KIẾN & SỔ Ý KIẾN CHI TIẾT -->
    <div id="feedbackFormSection" class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      <!-- Cột trái: Form nhập ý kiến thẩm định (5 cols) -->
      <div class="lg:col-span-5 bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-4">
        <div class="pb-3 border-b border-slate-200">
          <h3 class="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            Gửi Ý Kiến Thẩm Định Sản Phẩm
          </h3>
          <p class="text-xs text-slate-500 mt-0.5">Ý kiến của đồng chí được ghi nhận trực tiếp vào sổ theo dõi nội bộ.</p>
        </div>

        <form id="feedbackForm" onsubmit="submitFeedbackForm(event)" class="space-y-4">
          <!-- Chọn cán bộ từ danh bạ 12 CBNV -->
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Họ và tên cán bộ <span class="text-rose-500">*</span></label>
            <select id="fb_canBoSelect" required onchange="onCanBoSelectChange(this.value)"
              class="w-full px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white text-slate-900">
              <option value="" disabled selected>-- Chọn họ tên cán bộ --</option>
              <option value="Trịnh Đức Anh" data-role="Chủ tịch Hội đồng quản trị">1. Trịnh Đức Anh - Chủ tịch HĐQT</option>
              <option value="Nguyễn Văn Sơn" data-role="Giám đốc Quỹ">2. Nguyễn Văn Sơn - Giám đốc Quỹ</option>
              <option value="Vũ Thị Hiền" data-role="UV HĐQT">3. Vũ Thị Hiền - UV HĐQT</option>
              <option value="Nguyễn Thị Mến" data-role="Kế toán trưởng">4. Nguyễn Thị Mến - Kế toán trưởng</option>
              <option value="Bùi Thị Thảo" data-role="Trưởng Ban Kiểm soát">5. Bùi Thị Thảo - Trưởng Ban Kiểm soát</option>
              <option value="Trịnh Thị Hiền" data-role="Kiểm soát viên KTNB">6. Trịnh Thị Hiền - Kiểm soát viên KTNB</option>
              <option value="Nguyễn Hữu Nhân" data-role="Cán bộ Tín dụng">7. Nguyễn Hữu Nhân - Cán bộ Tín dụng</option>
              <option value="Lưu Thị Định" data-role="Cán bộ Tín dụng">8. Lưu Thị Định - Cán bộ Tín dụng</option>
              <option value="Trần Như Huyền" data-role="Cán bộ Tín dụng">9. Trần Như Huyền - Cán bộ Tín dụng</option>
              <option value="Phạm Thị Thảo" data-role="Thủ quỹ">10. Phạm Thị Thảo - Thủ quỹ</option>
              <option value="Hoàng Thị Lan" data-role="Kế toán viên">11. Hoàng Thị Lan - Kế toán viên</option>
              <option value="Nguyễn Thị Sinh" data-role="Thẩm định tài sản">12. Nguyễn Thị Sinh - Thẩm định tài sản</option>
            </select>
            <input type="hidden" id="fb_role" value="">
          </div>

          <!-- Đánh giá mức độ thiết thực (Sao) -->
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Mức độ thiết thực & khả thi (Số sao) <span class="text-rose-500">*</span></label>
            <div class="flex items-center gap-1.5 py-1">
              <button type="button" onclick="setFeedbackRating(1)" class="fb-star text-2xl text-amber-400 hover:scale-110 transition">★</button>
              <button type="button" onclick="setFeedbackRating(2)" class="fb-star text-2xl text-amber-400 hover:scale-110 transition">★</button>
              <button type="button" onclick="setFeedbackRating(3)" class="fb-star text-2xl text-amber-400 hover:scale-110 transition">★</button>
              <button type="button" onclick="setFeedbackRating(4)" class="fb-star text-2xl text-amber-400 hover:scale-110 transition">★</button>
              <button type="button" onclick="setFeedbackRating(5)" class="fb-star text-2xl text-amber-400 hover:scale-110 transition">★</button>
              <span id="fb_ratingValue" class="text-xs font-bold text-slate-700 ml-2 tabular-nums">5/5 sao</span>
            </div>
            <input type="hidden" id="fb_rating" value="5">
          </div>

          <!-- Phần Ý kiến đánh giá: Cho phép tự ghi + Gợi ý điền nhanh -->
          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="text-xs font-bold text-slate-700">Ý kiến đánh giá tổng quan</label>
              <span class="text-[10px] text-slate-400">Tự ghi hoặc bấm gợi ý</span>
            </div>
            <input type="text" id="fb_danhGiaInput" value="Rất thiết thực, khả thi cao" placeholder="Nhập ý kiến đánh giá vắn tắt..."
              class="w-full px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white text-emerald-950">
            
            <!-- Hàng nút gợi ý điền nhanh (Quick Suggestions) -->
            <div class="flex flex-wrap items-center gap-1.5 mt-2">
              <span class="text-[10px] font-semibold text-slate-400">Gợi ý nhanh:</span>
              <button type="button" onclick="setQuickRatingText('Rất thiết thực, khả thi cao')"
                class="px-2 py-0.5 rounded-md bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 text-[10px] font-medium transition">
                Rất thiết thực, khả thi cao
              </button>
              <button type="button" onclick="setQuickRatingText('Thiết thực, cần hướng dẫn chi tiết')"
                class="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 border border-slate-200 text-[10px] font-medium transition">
                Cần hướng dẫn chi tiết
              </button>
              <button type="button" onclick="setQuickRatingText('Cần truyền thông sâu rộng')"
                class="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 border border-slate-200 text-[10px] font-medium transition">
                Cần truyền thông sâu rộng
              </button>
              <button type="button" onclick="setQuickRatingText('Nên thêm quà tặng khai trương')"
                class="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 border border-slate-200 text-[10px] font-medium transition">
                Thêm quà tặng khai trương
              </button>
              <button type="button" onclick="setQuickRatingText('Phù hợp bà con nông thôn')"
                class="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 border border-slate-200 text-[10px] font-medium transition">
                Phù hợp bà con nông thôn
              </button>
              <button type="button" onclick="setQuickRatingText('Cần tập huấn kỹ quy trình')"
                class="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 border border-slate-200 text-[10px] font-medium transition">
                Tập huấn kỹ quy trình
              </button>
            </div>
          </div>

          <!-- Nội dung ý kiến chi tiết -->
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Nội dung ý kiến đóng góp chi tiết <span class="text-rose-500">*</span></label>
            <textarea id="fb_content" required rows="4" placeholder="Nêu rõ nhận xét về tính phù hợp của biểu lãi suất, chu kỳ nộp tiền, khó khăn thuận lợi khi triển khai trên địa bàn xã..."
              class="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none resize-none leading-relaxed"></textarea>
          </div>

          <!-- Nút gửi ý kiến -->
          <button type="submit" id="fbSubmitBtn"
            class="w-full py-2.5 px-4 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs flex items-center justify-center gap-2 transition disabled:opacity-50">
            <svg class="w-4 h-4 text-emerald-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
            <span>Gửi Ý Kiến Thẩm Định</span>
          </button>
        </form>
      </div>

      <!-- Cột phải: Sổ Ý Kiến Chi Tiết Đã Ghi Nhận (7 cols) -->
      <div class="lg:col-span-7 bg-white rounded-2xl p-5 shadow-xs border border-slate-200 space-y-4">
        <div class="flex items-center justify-between pb-3 border-b border-slate-200">
          <div>
            <h3 class="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              Sổ Theo Dõi Ý Kiến Đóng Góp Thẩm Định Chi Tiết
            </h3>
            <p class="text-xs text-slate-500 mt-0.5">Danh sách các ý kiến thực tế đã tiếp nhận từ cán bộ kèm phản hồi từ Quỹ.</p>
          </div>
          <span id="feedbackCountBadge" class="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold text-xs tabular-nums">
            0 ý kiến
          </span>
        </div>

        <!-- Danh sách ý kiến dạng Card trực quan -->
        <div id="feedbackListContainer" class="space-y-3.5 max-h-[700px] overflow-y-auto pr-1">
          <!-- Rendered dynamically via JS -->
        </div>
      </div>
    </div>
  `;
}
