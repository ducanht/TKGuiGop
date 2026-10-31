# HỆ THỐNG QUẢN TRỊ & MÔ PHỎNG SẢN PHẨM TIẾT KIỆM GỬI GÓP ĐỊNH KỲ
## QUỸ TÍN DỤNG NHÂN DÂN YÊN THỌ (THÔN TÂN LỘC, XÃ QUÝ LỘC, TỈNH THANH HOÁ)

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

## 📂 2. Cấu Trúc Thư Mục Dự Án (`TKGuiGop/`)

```
d:\Antigravity Projects\TKGuiGop\
├── index.html                           # WebApp chính thức duy nhất (mở trực tiếp bằng trình duyệt)
├── README.md                            # Tài liệu tổng quan kiến trúc & hướng dẫn vận hành
│
├── docs/                                # Toàn bộ hồ sơ pháp lý, quy chế & văn bản chỉ đạo
│   ├── Quyche_HDQT.md                   # Toàn văn Quyết định HĐQT & Quy định 4 Chương, 10 Điều (Phương án 1)
│   ├── Quyche_2_DaChuKy_HDQT.md         # Toàn văn Quy định đa chu kỳ: Tháng, Quý, 6T (Phương án 2)
│   ├── Bao_Cao_Phan_Tich_HDQT.md        # Toàn văn Báo cáo phân tích tính thiết thực & hiệu quả gửi HĐQT
│   ├── Bo_Ho_So_Trien_Khai_Toan_Dien.md # Bộ hồ sơ đầy đủ: Tờ trình, Kế hoạch, Kịch bản tư vấn, Biểu mẫu
│   ├── Ke_Hoach_Trien_Khai_Va_Tham_Dinh.md # Kế hoạch triển khai & Kênh tiếp nhận đánh giá 11 CBNV/HĐQT
│   └── TK_GuiGop_Draft.html             # Bản thảo giao diện khởi tạo ban đầu
│
├── backend/                             # Mã nguồn Google Apps Script & Tích hợp CSDL Google Sheets
│   ├── Code.js                          # Xử lý API doGet/doPost, ghi nhận ý kiến, LockService chống race-condition
│   └── appsscript.json                  # Manifest cấu hình môi trường triển khai Google Apps Script
│
└── data/                                # Dữ liệu tham chiếu, nhật ký kiểm toán và bảng tham số
    ├── ratetables.json                  # Biểu lãi suất các kỳ hạn (6, 12, 18, 24 tháng)
    ├── gas_dump.json                    # Dữ liệu dump từ hệ thống Google Sheets phục vụ kiểm thử
    ├── audit_sheet.txt                  # Nhật ký kiểm toán phân quyền & cấu trúc bảng dữ liệu
    ├── config_utf8.txt                  # Tham số cấu hình hệ thống
    ├── payload_utf8.txt                 # Cấu trúc payload gửi nhận API
    └── tv_sheet_data.json               # Dữ liệu cán bộ thẩm định (11 cán bộ, vai trò, trạng thái)
```

---

## ⚡ 3. Các Phân Hệ Chức Năng Trên WebApp (`index.html`)

Hệ thống được thiết kế theo chuẩn nhận diện thương hiệu **Quỹ tín dụng nhân dân Yên Thọ**, chuẩn hóa giao diện di động theo `qtdyentho-ui-design-system`:

1. **Phân hệ Mô phỏng Tài chính & So sánh Lãi suất (Tab 1 - Mô phỏng)**:
   - Tính lãi chính xác từng ngày thực gửi theo cơ sở **365 ngày** (Thông tư 14/2017/TT-NHNN).
   - Bảng đối chiếu tự động giữa Gửi góp vs. Gửi 1 lần cùng kỳ hạn vs. Mở nhiều sổ nhỏ lẻ.
   - Công cụ tư vấn so sánh: **Rút trước hạn hưởng lãi không kỳ hạn vs. Vay cầm cố Sổ gửi góp (tối đa 90% số dư gốc)** giúp bảo toàn tối đa quyền lợi khách hàng.
   - Chức năng xuất và in trực tiếp **Bản minh họa tích lũy khổ A4 tiêu chuẩn** có mã QR và chữ ký giao dịch viên.

2. **Phân hệ Báo Cáo Phân Tích Tính Thiết Thực & Hiệu Quả (Tab 2 - Báo cáo)**:
   - Toàn văn **11 Mục** Báo cáo phân tích chuyên sâu kính trình Hội đồng quản trị Quỹ tín dụng nhân dân Yên Thọ.
   - Phân tích chi tiết 3 nhóm khách hàng (đặc biệt là tệp nhận lương hưu, trợ cấp xã hội đang giao dịch tại Quỹ).
   - Các bảng tính so sánh chi phí vốn, bảng mô phỏng quy mô huy động và bảng minh họa lãi phải trả.
   - Lộ trình triển khai theo giai đoạn, 15 tình huống phát sinh và bảng 18 câu hỏi & giải đáp chuẩn mực.

3. **Phân hệ Quy Định Chi Tiết Sản Phẩm (Tab 3 - Quy định)**:
   - Tích hợp bộ chuyển đổi 2 Phương án quy chế linh hoạt:
     - **Phương án 1**: Chu kỳ hàng tháng (Kỳ hạn trọng tâm 12 tháng, 4 Chương, 10 Điều theo `Quyche.md`).
     - **Phương án 2**: Đa chu kỳ gửi góp (Hàng tháng, Hàng quý, 06 tháng/lần, 5 Chương, 10 Điều theo `Quyche 2.md`).
   - Sơ đồ định khoản kế toán 4 bút toán chuẩn mực chế độ kế toán QTDND (`TK 1011`, `TK 1311` - `TK 4232`, `TK 4913`, `TK 801`).

4. **Phân hệ Cẩm Nang 10 Tình Huống Nghiệp Vụ Tại Quầy (Tab 4 - Tình huống)**:
   - Phân tích bản chất tài chính: Thời gian lưu vốn bình quân thực tế là 6,5 tháng và ưu điểm lãi suất dài hạn 5,5%/năm áp dụng cho tất cả các món gửi.
   - Giải đáp 10 tình huống phổ biến tại quầy theo đúng điều khoản quy định: Nộp chậm (ân hạn 05 ngày làm việc), nộp sớm, nộp bù (không tính lãi hồi tố), gián đoạn nộp (bảo toàn gốc và lãi suất đã cam kết), vay cầm cố sổ, đáo hạn không đến nhận, thủ tục ủy quyền...

5. **Phân hệ Biểu Mẫu & Tin Nhắn Zalo/SMS (Tab 5 - Biểu mẫu)**:
   - Đơn đăng ký mở sổ gửi góp định kỳ.
   - Khế ước cho vay cầm cố sổ gửi góp.
   - Mẫu tin nhắn SMS / Zalo thông báo: Chào mừng mở sổ, Nhắc lịch nộp định kỳ trước 02 ngày, Cảm ơn nộp tiền thành công, Nhắc nộp bù kỳ lỡ, Thông báo sắp đến ngày đáo hạn.

6. **Kênh Tiếp Nhận Ý Kiến Đóng Góp Thẩm Định (Tab 6 - Góp ý)**:
   - Menu điều hướng Bottom Navigation tiện lợi trên thiết bị di động.
   - Tiếp nhận đánh giá số sao (1 - 5 sao), mức độ thiết thực và đóng góp ý kiến cụ thể.
   - Tự động hiển thị danh sách cán bộ đã tham gia và danh sách cán bộ chưa tham gia để ban điều hành đôn đốc, theo dõi.
   - Giao thức đồng bộ an toàn 100% qua Google Apps Script WebApp độc lập, Google Sheets được phân quyền bảo mật riêng tư.

---

## 🛠️ 4. Hướng Dẫn Vận Hành & Khởi Chạy

* **Mở trực tiếp trên máy tính hoặc di động**:
  - Nhấp đúp chuột vào file `index.html` trong thư mục `D:\Antigravity Projects\TKGuiGop\`.
  - Giao diện tự động co giãn thích ứng responsive mượt mà trên cả máy tính, máy tính bảng và điện thoại di động.

* **Triển khai WebApp qua Cổng điều hành QTDND Yên Thọ**:
  - File đã được đồng bộ sẵn trong kho lưu trữ `d:\Antigravity Projects\Qtdyentho-Tools\Tk_Guigop.html` và đẩy lên GitHub repo `qtdyentho_tools`.
  - Có thể kích hoạt trực tiếp từ hệ thống PWA / Portal nội bộ của đơn vị.

---
*Bản quyền tài liệu và phần mềm thuộc về Quỹ tín dụng nhân dân Yên Thọ - 2026.*
