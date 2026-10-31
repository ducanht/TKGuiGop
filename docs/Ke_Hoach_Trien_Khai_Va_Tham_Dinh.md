# KẾ HOẠCH TRIỂN KHAI & HIỆU CHỈNH TRANG TIẾT KIỆM GỬI GÓP (TK GUIGOP)
## Đơn vị: Quỹ Tín Dụng Nhân Dân Yên Thọ (Thôn Tân Lộc, xã Quý Lộc, tỉnh Thanh Hoá)

---

### I. CÁC NỘI DUNG ĐÃ HIỆU CHỈNH THEO YÊU CẦU

1. **Lược bỏ khỏi giao diện hiện hành & Ghi chú lộ trình nâng cấp sau:**
   - ❌ *Lời thoại tư vấn mẫu cho 3 nhóm khách hàng địa phương:* Chuyển sang tài liệu nghiệp vụ nội bộ; sẽ tích hợp trợ lý AI gợi ý kịch bản CIF tự động ở bản V2.
   - ❌ *Tờ trình Ban Giám đốc & Quyết định HĐQT ban hành:* Chuyển sang lưu trữ kho văn bản pháp quy điện tử.
   - ❌ *Bài tuyên truyền truyền thanh xã & Tờ rơi:* Lưu trữ trong hồ sơ chiến dịch truyền thông, kích hoạt khi mở đợt thi đua cao điểm.

2. **Bổ sung Toàn văn Đầy đủ 10 Điều Khoản Quy Định Sản Phẩm:**
   - **Chương I: Quy định chung (Điều 1 - 3):** Phạm vi, đối tượng, định danh thuật ngữ, đặc điểm kỳ hạn 6-12-18-24 tháng, định mức tối thiểu 500.000 đ/tháng, bảo hiểm tiền gửi.
   - **Chương II: Cơ chế nộp tiền & Tính lãi (Điều 4 - 6):** Lịch nộp hàng tháng, tự động dời ngày nghỉ, 3 hình thức nộp tiền, ân hạn 05 ngày làm việc, nộp bù dồn, **nguyên tắc tuyệt đối không tính lãi hồi tố**, bảo lưu lãi suất khi dừng nộp, công thức tính lãi chuẩn 365 ngày (Thông tư 14/2017/TT-NHNN).
   - **Chương III: Rút trước hạn & Tất toán (Điều 7 - 8):** Không rút gốc một phần, lãi suất không kỳ hạn khi tất toán trước hạn, **chính sách ưu tiên vay cầm cố chính sổ gửi góp tối đa 90% số dư gốc**, cơ chế đáo hạn không tái tục gửi góp mà chuyển sổ kỳ hạn thông thường.
   - **Chương IV: Tổ chức thực hiện (Điều 9 - 10):** Phân công cụ thể Ban Giám đốc, Kế toán - Ngân quỹ, Tín dụng & Chăm sóc thành viên, Ban Kiểm soát nội bộ.
   - **Sơ đồ định khoản kế toán:** 4 bút toán nghiệp vụ chuẩn mực (TK 1011, TK 4232, TK 4913, TK 801).

3. **Bỏ Thông Tin Header & Footer Ở Trang In (A4 Print Engine):**
   - Lược bỏ hoàn toàn khối Quốc hiệu, Tiêu ngữ, ngày tháng hành chính và thông tin Quỹ ở phần đầu trang in.
   - Bắt đầu trực tiếp từ Tiêu đề Bảng minh họa và Bảng thông tin khách hàng.
   - Lược bỏ các khối ghi chú footer rườm rà ở cuối trang in; chỉ giữ lại 2 khối ký tên của Khách hàng và Giao dịch viên.
   - Cấu hình CSS `@page { size: A4 portrait; margin: 10mm 15mm; }` và ẩn toàn bộ header, footer web khi in, đảm bảo vừa vặn 1 trang A4 không tràn lề.

---

### II. KIẾN TRÚC GIAO DIỆN HIỆN HÀNH TRÊN `Tk_Guigop.html`

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 🏛️ HEADER WEB: QUỸ TÍN DỤNG NHÂN DÂN YÊN THỌ - THÔN TÂN LỘC, XÃ QUÝ LỘC     │
│    [Trạng thái] [In Bảng Minh Họa (A4)] [So Sánh Vay Cầm Cố]                │
├─────────────────────────────────────────────────────────────────────────────┤
│ 📑 THANH TABS ĐIỀU HƯỚNG CHÍNH (4 Phân hệ):                                 │
│  [1. Máy Tính & In A4]  [2. Quy Định Sản Phẩm (10 Điều)]                   │
│  [3. Cẩm Nang Xử Lý Tình Huống] [4. Biểu Mẫu & Zalo SMS]                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  TAB 1: MÁY TÍNH DÒNG TIỀN & IN BẢNG MINH HỌA                               │
│   ├── Nhập thông tin KH, Kỳ hạn, Số tiền, Lãi suất, 3 Kịch bản mô phỏng     │
│   ├── 4 Thẻ KPI động + Bảng dòng tiền chi tiết từng kỳ                      │
│   └── Khối đối chiếu COF gửi góp vs kỳ hạn bình quân 6-7T & Cùng kỳ hạn 12T │
│                                                                             │
│  TAB 2: QUY ĐỊNH CHI TIẾT SẢN PHẨM (TOÀN VĂN 10 ĐIỀU)                       │
│   ├── Toàn văn Chương I, II, III, IV với đầy đủ các khoản 1, 2, 3...        │
│   └── Sơ đồ định khoản 4 bút toán kế toán (TK 1011, 4232, 4913, 801)        │
│                                                                             │
│  TAB 3: CẨM NANG NGHIỆP VỤ & XỬ LÝ 5 TÌNH HUỐNG THỰC TẾ                     │
│   ├── Phân tích bản chất tài chính COF lưu vốn bình quân 6.5 tháng          │
│   ├── Hướng dẫn giải quyết 5 tình huống tại quầy                            │
│   └── Khối ghi chú lộ trình các tính năng nâng cấp ở phiên bản tiếp theo    │
│                                                                             │
│  TAB 4: BIỂU MẪU GIAO DỊCH & TIN NHẮN CHĂM SÓC KHÁCH HÀNG                   │
│   ├── Mẫu Giấy gửi tiền kiêm Ủy quyền trích nợ (kèm nút copy nhanh)         │
│   └── Bộ 4 kịch bản tin nhắn Zalo ZNS / SMS tự động                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### III. TÀI NGUYÊN & MÃ NGUỒN ĐỒNG BỘ

1. [`Tk_Guigop.html`](file:///d:/Antigravity%20Projects/Tk_Guigop.html) (Thư mục gốc Workspace).
2. [`Qtdyentho-Tools/Tk_Guigop.html`](file:///d:/Antigravity%20Projects/Qtdyentho-Tools/Tk_Guigop.html) (Thư mục bộ công cụ Quỹ).
3. [`docs/QUY_DINH_VA_KE_HOACH_TIET_KIEM_GUI_GOP.md`](file:///d:/Antigravity%20Projects/docs/QUY_DINH_VA_KE_HOACH_TIET_KIEM_GUI_GOP.md) (Hồ sơ đầy đủ có ghi chú Roadmap nâng cấp).
