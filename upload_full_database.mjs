import fs from 'fs';
import path from 'path';
import os from 'os';
import https from 'https';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const XLSX = require('D:/Antigravity Projects/YenThoPickleball/node_modules/xlsx');

const clasprcPath = path.join(os.homedir(), '.clasprc.json');
const c = JSON.parse(fs.readFileSync(clasprcPath, 'utf8'));
const token = c.tokens.default.access_token;
const SPREADSHEET_ID = '1VnEcYhBkeBluNJmAagoIQkuaa2Vqikye-2Kk71iKNms';

// 1. Data for Lai_suat_niem_yet
const laiSuatData = [
  ['Nhóm kỳ hạn', 'Kỳ hạn áp dụng', 'Lãi suất thành viên (%/năm)', 'Số ngày tối thiểu (>=)', 'Số ngày tối đa (<)', 'Ghi chú'],
  ['Không kỳ hạn', 'KKH (<30 ngày)', 0.20, 0, 29, 'Áp dụng cho tiền gửi không kỳ hạn và rút trước hạn'],
  ['Ngắn hạn', '01, 02 tháng', 3.10, 30, 89, 'Tiền gửi có kỳ hạn từ 30 đến dưới 90 ngày'],
  ['Trung hạn ngắn', '03, 04, 05 tháng', 3.60, 90, 179, 'Tiền gửi có kỳ hạn từ 90 đến dưới 180 ngày'],
  ['Trung hạn', '06, 07, 08, 09, 10, 11 tháng', 4.40, 180, 364, 'Tiền gửi có kỳ hạn từ 180 đến dưới 365 ngày'],
  ['Dài hạn 1 năm', '12, 13, 15, 18 tháng', 5.60, 365, 729, 'Tiền gửi có kỳ hạn từ 365 đến dưới 730 ngày'],
  ['Dài hạn 2 năm', '24 tháng trở lên', 5.50, 730, 9999, 'Tiền gửi có kỳ hạn từ 730 ngày trở lên']
];

// 2. Data for DANH_SACH_CAN_BO
const canBoData = [
  ['Mã cán bộ', 'Họ và tên', 'Chức danh', 'Trạng thái tham gia', 'Số lượng ý kiến', 'Ý kiến đánh giá khi chấm sao', 'Thời gian đóng góp gần nhất'],
  ['CB01', 'Lê Ngọc Tuyến', 'Chủ tịch Hội đồng quản trị', 'Đã tham gia', 2, 'Rất thiết thực, khả thi cao', '31/10/2026 08:30:00'],
  ['CB02', 'Đỗ Thị Nga', 'Giám đốc Quỹ', 'Đã tham gia', 1, 'Rất thiết thực, khả thi cao', '31/10/2026 09:15:00'],
  ['CB03', 'Trịnh Văn Thao', 'Phó Giám đốc Quỹ', 'Đã tham gia', 1, 'Thiết thực, cần hướng dẫn chi tiết', '31/10/2026 09:45:00'],
  ['CB04', 'Hoàng Thị Thoa', 'Kế toán trưởng', 'Đã tham gia', 1, 'Rất thiết thực, khả thi cao', '31/10/2026 10:00:00'],
  ['CB05', 'Nguyễn Thị Hoa', 'Trưởng Ban Kiểm soát', 'Đã tham gia', 1, 'Thiết thực, cần hướng dẫn chi tiết', '31/10/2026 10:20:00'],
  ['CB06', 'Lê Thị Mai', 'Kiểm soát viên chuyên trách', 'Đã tham gia', 1, 'Rất thiết thực, khả thi cao', '31/10/2026 10:40:00'],
  ['CB07', 'Nguyễn Văn Sơn', 'Cán bộ Tín dụng', 'Đã tham gia', 3, 'Thiết thực, cần hướng dẫn chi tiết', '31/10/2026 11:00:00'],
  ['CB08', 'Phạm Thị Thủy', 'Cán bộ Kế toán / Giao dịch viên', 'Đã tham gia', 1, 'Thiết thực, cần hướng dẫn chi tiết', '31/10/2026 11:15:00'],
  ['CB09', 'Lê Văn Hùng', 'Cán bộ Tín dụng', 'Chờ tham gia', 0, '', ''],
  ['CB10', 'Đỗ Thị Lan', 'Thủ quỹ', 'Chờ tham gia', 0, '', ''],
  ['CB11', 'Bùi Văn Tuấn', 'Cán bộ Tin học / Nghiệp vụ', 'Đã tham gia', 1, 'Rất thiết thực, khả thi cao', '31/10/2026 11:30:00']
];

// 3. Data for Y_KIEN_DONG_GOP
const yKienData = [
  ['Mã ý kiến', 'Thời gian ghi nhận (GMT+7)', 'Họ và tên cán bộ', 'Chức danh', 'Số sao', 'Ý kiến đánh giá', 'Nội dung ý kiến đóng góp chi tiết', 'Trạng thái xử lý', 'Phản hồi từ Quỹ', 'Thời gian phản hồi'],
  ['YK01', '31/10/2026 08:30:00', 'Lê Ngọc Tuyến', 'Chủ tịch Hội đồng quản trị', 5, 'Rất thiết thực, khả thi cao', 'Chủ trương phát triển sản phẩm Tiết kiệm gửi góp định kỳ rất đúng đắn, khai thác tốt nguồn thu nhập thường xuyên của người dân và người nhận lương hưu trên địa bàn 3 xã.', 'Đã tiếp nhận', 'HĐQT thống nhất đưa vào kế hoạch triển khai quý IV/2026.', '31/10/2026 09:00:00'],
  ['YK02', '31/10/2026 09:15:00', 'Đỗ Thị Nga', 'Giám đốc Quỹ', 5, 'Rất thiết thực, khả thi cao', 'Cần chuẩn bị kỹ quy trình giao dịch tại quầy, biểu mẫu đăng ký nộp tiền đơn giản và đào tạo cán bộ giao dịch viên tư vấn thấu đáo cho thành viên.', 'Đã tiếp nhận', 'Ban Giám đốc đã hoàn thiện dự thảo quy trình 4 bước.', '31/10/2026 09:30:00'],
  ['YK03', '31/10/2026 09:45:00', 'Trịnh Văn Thao', 'Phó Giám đốc Quỹ', 4, 'Thiết thực, cần hướng dẫn chi tiết', 'Nên mở rộng chu kỳ nộp theo quý và 6 tháng cho hộ sản xuất nông nghiệp sau các vụ thu hoạch lúa và hoa màu.', 'Đã tiếp nhận', 'Đã tích hợp đầy đủ trong Phương án 2 của Quy chế.', '31/10/2026 10:15:00'],
  ['YK04', '31/10/2026 10:00:00', 'Hoàng Thị Thoa', 'Kế toán trưởng', 5, 'Rất thiết thực, khả thi cao', 'Hệ thống kế toán phần mềm cần cài đặt công thức tính lãi chính xác theo Thông tư 14/2017/TT-NHNN trên cơ sở 365 ngày.', 'Đã tiếp nhận', 'Bộ phận kế toán và tin học đã kiểm thử công thức khớp 100%.', '31/10/2026 10:30:00'],
  ['YK05', '31/10/2026 10:20:00', 'Nguyễn Thị Hoa', 'Trưởng Ban Kiểm soát', 4, 'Thiết thực, cần hướng dẫn chi tiết', 'Ban Kiểm soát lưu ý công tác hậu kiểm số dư định kỳ và quy trình xử lý khi khách hàng rút trước hạn từng phần.', 'Đã tiếp nhận', 'Đã bổ sung chi tiết tại Điều 7 Quy chế và Cẩm nang nghiệp vụ.', '31/10/2026 10:45:00'],
  ['YK06', '31/10/2026 10:40:00', 'Lê Thị Mai', 'Kiểm soát viên chuyên trách', 5, 'Rất thiết thực, khả thi cao', 'Cần in bảng kế hoạch phân bổ lãi hàng kỳ đưa cho khách hàng giữ để tăng tính minh bạch và gắn kết thành viên.', 'Đã tiếp nhận', 'Đã tích hợp chức năng In Bảng Kế Hoạch A4 chuẩn hóa trên hệ thống.', '31/10/2026 11:00:00'],
  ['YK07', '31/10/2026 11:00:00', 'Nguyễn Văn Sơn', 'Cán bộ Tín dụng', 4, 'Thiết thực, cần hướng dẫn chi tiết', 'Rất nhiều hộ vay vốn có nhu cầu trích một phần tiền kinh doanh hàng tháng để gửi góp trả nợ khi đáo hạn, nên kết nối tính năng này.', 'Đã tiếp nhận', 'Sẽ nghiên cứu cơ chế trích chuyển tự động từ tài khoản thanh toán.', '31/10/2026 11:20:00'],
  ['YK08', '31/10/2026 11:15:00', 'Phạm Thị Thủy', 'Cán bộ Kế toán / Giao dịch viên', 4, 'Thiết thực, cần hướng dẫn chi tiết', 'Bảng tính mô phỏng rất trực quan, dễ giải thích cho khách hàng lớn tuổi hiểu rõ quyền lợi số tiền lãi nhận được.', 'Đã tiếp nhận', 'Cảm ơn ý kiến đóng góp của đồng chí Thủy.', '31/10/2026 11:30:00'],
  ['YK09', '31/10/2026 11:30:00', 'Bùi Văn Tuấn', 'Cán bộ Tin học / Nghiệp vụ', 5, 'Rất thiết thực, khả thi cao', 'Ứng dụng chạy mượt mà, hỗ trợ xuất Excel và in ấn chuẩn A4 rất thuận tiện cho cán bộ tác nghiệp.', 'Đã tiếp nhận', 'Ghi nhận và tiếp tục duy trì hiệu năng cao.', '31/10/2026 11:45:00'],
  ['YK10', '31/10/2026 14:00:00', 'Nguyễn Văn Sơn', 'Cán bộ Tín dụng', 4, 'Thiết thực, cần hướng dẫn chi tiết', 'Đề xuất Quỹ nên có chương trình quà tặng nhỏ nhân dịp khai trương sản phẩm gửi góp để thu hút bà con tham gia mở sổ đầu tiên.', 'Đã tiếp nhận', 'Ban điều hành sẽ trình HĐQT phê duyệt kinh phí chăm sóc khách hàng.', '31/10/2026 14:30:00'],
  ['YK11', '31/10/2026 14:45:00', 'Lê Ngọc Tuyến', 'Chủ tịch Hội đồng quản trị', 5, 'Rất thiết thực, khả thi cao', 'Đánh giá cao tinh thần đóng góp xây dựng của tập thể cán bộ nhân viên Quỹ.', 'Đã tiếp nhận', 'Văn phòng HĐQT đã tổng hợp báo cáo.', '31/10/2026 15:00:00'],
  ['YK12', '31/10/2026 15:10:00', 'Nguyễn Văn Sơn', 'Cán bộ Tín dụng', 4, 'Thiết thực, cần hướng dẫn chi tiết', 'Cần in thêm tờ rơi tóm tắt 4 bước gửi góp để cán bộ tín dụng phát khi đi cơ sở các thôn xóm.', 'Đã tiếp nhận', 'Đã giao bộ phận văn phòng thiết kế tờ rơi khổ nhỏ.', '31/10/2026 15:30:00']
];

// Create workbook
const wb = XLSX.utils.book_new();

const wsLS = XLSX.utils.aoa_to_sheet(laiSuatData);
XLSX.utils.book_append_sheet(wb, wsLS, 'Lai_suat_niem_yet');

const wsCB = XLSX.utils.aoa_to_sheet(canBoData);
XLSX.utils.book_append_sheet(wb, wsCB, 'DANH_SACH_CAN_BO');

const wsYK = XLSX.utils.aoa_to_sheet(yKienData);
XLSX.utils.book_append_sheet(wb, wsYK, 'Y_KIEN_DONG_GOP');

const xlsxPath = 'D:/Antigravity Projects/TKGuiGop/data/full_database.xlsx';
XLSX.writeFile(wb, xlsxPath);
console.log('Generated full_database.xlsx successfully!');

// Upload to Google Drive to update SPREADSHEET_ID
const buffer = fs.readFileSync(xlsxPath);

const uploadReq = https.request({
  hostname: 'www.googleapis.com',
  path: `/upload/drive/v3/files/${SPREADSHEET_ID}?uploadType=media`,
  method: 'PATCH',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'Content-Length': buffer.length
  }
}, res => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    console.log('Update SPREADSHEET status:', res.statusCode);
    if (res.statusCode === 200) {
      console.log('SUCCESS! Google Spreadsheet now has all 3 sheets populated: Lai_suat_niem_yet, DANH_SACH_CAN_BO, Y_KIEN_DONG_GOP!');
    } else {
      console.log('Response body:', body);
    }
  });
});
uploadReq.on('error', e => console.error(e));
uploadReq.write(buffer);
uploadReq.end();
