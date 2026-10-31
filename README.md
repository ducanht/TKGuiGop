# HỆ THỐNG QUẢN TRỊ & MÔ PHỎNG SẢN PHẨM TIẾT KIỆM GỬI GÓP ĐỊNH KỲ
## QUỸ TÍN DỤNG NHÂN DÂN YÊN THỌ (THÔN TÂN LỘC, XÃ QUÝ LỘC, TỈNH THANH HOÁ)

> 🌐 **TRUY CẬP TRỰC TIẾP TRÊN GITHUB PAGES**: [https://ducanht.github.io/TKGuiGop/](https://ducanht.github.io/TKGuiGop/)  
> 📦 **KHO MÃ NGUỒN GITHUB**: [https://github.com/ducanht/TKGuiGop](https://github.com/ducanht/TKGuiGop)

Dự án cung cấp bộ công cụ toàn diện phục vụ công tác xây dựng, thẩm định Hội đồng quản trị, đào tạo cán bộ, mô phỏng tài chính tự động và quản lý phát hành sản phẩm **"Tiết kiệm gửi góp định kỳ"** tại Quỹ tín dụng nhân dân Yên Thọ.

---

## 🏛️ 1. Căn Cứ Pháp Lý & Cơ Sở Nghiệp Vụ

1. **Luật Các tổ chức tín dụng số 32/2024/QH15** ngày 18/01/2024.
2. **Thông tư số 48/2018/TT-NHNN** ngày 31/12/2018 của NHNN quy định về tiền gửi tiết kiệm.
3. **Thông tư số 14/2017/TT-NHNN** ngày 29/09/2017 của NHNN quy định phương pháp tính lãi trong hoạt động nhận tiền gửi, cấp tín dụng (cơ sở chuẩn 365 ngày).
4. **Thông tư số 04/2022/TT-NHNN** ngày 16/06/2022 của NHNN quy định việc áp dụng lãi suất rút trước hạn tiền gửi tại TCTD.
5. **Thông tư số 29/2024/TT-NHNN** ngày 28/06/2024 của NHNN quy định về quỹ tín dụng nhân dân.
6. **Quyết định số ……/2026/QĐ-HĐQT** ngày ……/……/2026 của Hội đồng quản trị Quỹ tín dụng nhân dân Yên Thọ về việc ban hành Quy định sản phẩm Tiết kiệm gửi góp định kỳ.

---

## 📁 2. Cấu Trúc Thư Mục Dự Án (`TKGuiGop/`)

```
d:\Antigravity Projects\TKGuiGop\
├── index.html                           # Single-file WebApp chính thức (PWA Offline)
├── README.md                            # Tài liệu tổng quan kiến trúc & hướng dẫn vận hành
├── docs/                                # Toàn bộ hồ sơ tài liệu nghiệp vụ HĐQT
│   ├── Quyche_HDQT.md                   # Dự thảo Quy chế Phương án 1 (Gửi hàng tháng)
│   ├── Quyche_2_DaChuKy_HDQT.md         # Dự thảo Quy định Phương án 2 (Đa chu kỳ: 1T, 3T, 6T)
│   ├── Bao_Cao_Phan_Tich_HDQT.md        # Báo cáo phân tích hiệu quả tài chính & kinh doanh (11 phần)
│   ├── Ke_Hoach_Trien_Khai_Va_Tham_Dinh.md # Kế hoạch triển khai & phân công công tác
│   └── Bo_Ho_So_Trien_Khai_Toan_Dien.md # Bộ hồ sơ mẫu biểu hành chính A4 chuẩn hóa
├── backend/                             # Google Apps Script Backend (API Quản lý CSDL)
│   ├── Code.js                          # Xử lý 3 sheets: Lai_suat_niem_yet, DANH_SACH_CAN_BO, Y_KIEN_DONG_GOP
│   └── appsscript.json                  # Cấu hình Web App & quyền thực thi
└── data/                                # Bộ nhớ đệm dữ liệu & bản sao lưu
```

---

## 🌟 3. Các Phân Hệ Chức Năng Cốt Lõi Trên WebApp

1. **Tab 1: Mô Phỏng Tiền Gửi Góp**:
   - Cho phép thiết lập số tiền nộp định kỳ, kỳ hạn gửi (3, 6, 12, 18, 24, 36, 60 tháng), chu kỳ nộp (1T, 3T, 6T).
   - Tự động lập bảng kế hoạch chi tiết từng kỳ, tính lãi chính xác theo ngày thực gửi (cơ sở 365 ngày).
   - Tích hợp 2 badge pháp lý chuẩn: `⚖️ Cơ sở 365 ngày (TT 14/2017)` & `🛡️ Rút trước hạn (TT 04/2022)`.
   - Đối chiếu số tiền lãi nhận được với phương án gửi 1 lần cùng kỳ hạn và kỳ hạn tương đương dòng tiền.
   - Hỗ trợ in Bảng Kế Hoạch A4 chuẩn hóa và Xuất file Excel (.xlsx).

2. **Tab 2: Định Giá & Lãi Suất Tham Chiếu (HĐQT)**:
   - Áp dụng thuật toán tính sàn hòa vốn dòng tiền: $R_{ref} = \frac{\sum S_i \times D_i \times R_i}{\sum S_i \times D_i}$.
   - Biểu lãi suất niêm yết hiện hành của Quỹ (6 mốc).
   - Phân tích số tiền cụ thể Quỹ phải chi trả và Khách hàng nhận được giữa 3 phương án huy động.

3. **Tab 3: Quy Định Tiết Kiệm Gửi Góp**:
   - Trình bày song song cả **Phương án 1 (Gửi hàng tháng)** và **Phương án 2 (Đa chu kỳ: tháng, quý, 6 tháng)**.
   - Cơ chế đóng/mở từng điều khoản tự động, hỗ trợ Mở rộng tất cả / Thu gọn tất cả.

4. **Tab 4: Báo Cáo Phân Tích (HĐQT)**:
   - Đầy đủ 11 phần phân tích tài chính, chi phí vốn COF, an toàn thanh khoản, rủi ro kỳ hạn và kế hoạch tiếp thị.

5. **Tab 5: Cẩm Nang Nghiệp Vụ & Tình Huống**:
   - Xử lý các tình huống thực tế phát sinh và 18 câu hỏi thường gặp (FAQs).

6. **Tab 6: Biểu Mẫu Nghiệp Vụ (A4)**:
   - Hệ thống biểu mẫu hành chính phục vụ giao dịch tại quầy.

7. **Tab 7: Khảo Sát & Tổng Hợp Ý Kiến**:
   - Kết nối trực tiếp CSDL Google Sheet (12 cán bộ nhân viên thực tế của QTDND Yên Thọ).
   - Thiết kế tinh gọn, chống co bẹp chữ trên di động (Zero Truncate Policy).
   - Tự do ghi nhận xét vắn tắt + Hàng nút gợi ý điền nhanh 1 chạm.

---

## 📲 4. Cài Đặt Ứng Dụng PWA (Chạy Ngoại Tuyến)

- Trên điện thoại Android / Chrome: Bấm menu trình duyệt (⋮) $\rightarrow$ Chọn **"Thêm vào Màn hình chính"** (Add to Home Screen).
- Trên iPhone / Safari: Bấm nút Chia sẻ (Share) $\rightarrow$ Chọn **"Thêm vào MH chính"** (Add to Home Screen).
- Ứng dụng hoạt động mượt mà, lưu trữ dữ liệu nội bộ ngay cả khi không có kết nối Internet.
