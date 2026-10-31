/**
 * GOOGLE APPS SCRIPT BACKEND - QUẢN LÝ TIẾT KIỆM GỬI GÓP ĐỊNH KỲ
 * Đơn vị: Quỹ Tín Dụng Nhân Dân Yên Thọ (Thôn Tân Lộc, xã Quý Lộc, tỉnh Thanh Hóa)
 * Căn cứ: Quyết định số ……/2026/QĐ-HĐQT và Thông tư 14/2017/TT-NHNN, Thông tư 04/2022/TT-NHNN
 * Nhiệm vụ: Cung cấp API nội bộ quản lý biểu lãi suất niêm yết, danh bạ cán bộ và tiếp nhận ý kiến thẩm định
 */

const SPREADSHEET_ID = '1VnEcYhBkeBluNJmAagoIQkuaa2Vqikye-2Kk71iKNms';

const SHEET_NAMES = {
  Y_KIEN: 'Y_KIEN_DONG_GOP',
  LAI_SUAT_NIEM_YET: 'Lai_suat_niem_yet',
  CAN_BO: 'DANH_SACH_CAN_BO'
};

// 1. Biểu lãi suất tiền gửi tiết kiệm niêm yết hiện hành của Quỹ
const DEFAULT_LAI_SUAT_NIEM_YET = [
  ['Không kỳ hạn', 'KKH (<30 ngày)', 0.20, 0, 29, 'Áp dụng cho tiền gửi không kỳ hạn và rút trước hạn'],
  ['Ngắn hạn', '01, 02 tháng', 3.10, 30, 89, 'Tiền gửi có kỳ hạn từ 30 đến dưới 90 ngày'],
  ['Trung hạn ngắn', '03, 04, 05 tháng', 3.60, 90, 179, 'Tiền gửi có kỳ hạn từ 90 đến dưới 180 ngày'],
  ['Trung hạn', '06, 07, 08, 09, 10, 11 tháng', 4.40, 180, 364, 'Tiền gửi có kỳ hạn từ 180 đến dưới 365 ngày'],
  ['Dài hạn 1 năm', '12, 13, 15, 18 tháng', 5.60, 365, 729, 'Tiền gửi có kỳ hạn từ 365 đến dưới 730 ngày'],
  ['Dài hạn 2 năm', '24 tháng trở lên', 5.50, 730, 9999, 'Tiền gửi có kỳ hạn từ 730 ngày trở lên']
];

// 2. Danh bạ 11 cán bộ, nhân viên, thành viên HĐQT, BKS, Ban Giám đốc QTDND Yên Thọ
const DEFAULT_DANH_SACH_CAN_BO = [
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

// 3. Danh sách các ý kiến thẩm định ban đầu
const DEFAULT_Y_KIEN_DONG_GOP = [
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

/**
 * Tự động tạo và chuẩn hóa 3 sheet nếu chưa tồn tại
 */
function setupDatabase(ss) {
  if (!ss) ss = SpreadsheetApp.openById(SPREADSHEET_ID);

  // 1. Tạo sheet Lai_suat_niem_yet
  let sheetLS = ss.getSheetByName(SHEET_NAMES.LAI_SUAT_NIEM_YET);
  if (!sheetLS) {
    sheetLS = ss.insertSheet(SHEET_NAMES.LAI_SUAT_NIEM_YET);
    sheetLS.appendRow(['Nhóm kỳ hạn', 'Kỳ hạn áp dụng', 'Lãi suất thành viên (%/năm)', 'Số ngày tối thiểu (>=)', 'Số ngày tối đa (<)', 'Ghi chú']);
    sheetLS.getRange(1, 1, 1, 6).setFontWeight('bold').setBackground('#E8F5E9');
    DEFAULT_LAI_SUAT_NIEM_YET.forEach(row => sheetLS.appendRow(row));
    sheetLS.autoResizeColumns(1, 6);
  }

  // 2. Tạo sheet DANH_SACH_CAN_BO
  let sheetCB = ss.getSheetByName(SHEET_NAMES.CAN_BO);
  if (!sheetCB) {
    sheetCB = ss.insertSheet(SHEET_NAMES.CAN_BO);
    sheetCB.appendRow(['Mã cán bộ', 'Họ và tên', 'Chức danh', 'Trạng thái tham gia', 'Số lượng ý kiến', 'Ý kiến đánh giá', 'Thời gian đóng góp gần nhất']);
    sheetCB.getRange(1, 1, 1, 7).setFontWeight('bold').setBackground('#E8F5E9');
    DEFAULT_DANH_SACH_CAN_BO.forEach(row => sheetCB.appendRow(row));
    sheetCB.autoResizeColumns(1, 7);
  }

  // 3. Tạo sheet Y_KIEN_DONG_GOP
  let sheetYK = ss.getSheetByName(SHEET_NAMES.Y_KIEN);
  if (!sheetYK) {
    sheetYK = ss.insertSheet(SHEET_NAMES.Y_KIEN);
    sheetYK.appendRow(['Mã ý kiến', 'Thời gian ghi nhận (GMT+7)', 'Họ và tên cán bộ', 'Chức danh', 'Số sao', 'Ý kiến đánh giá', 'Nội dung ý kiến đóng góp chi tiết', 'Trạng thái xử lý', 'Phản hồi từ Quỹ', 'Thời gian phản hồi']);
    sheetYK.getRange(1, 1, 1, 10).setFontWeight('bold').setBackground('#E8F5E9');
    DEFAULT_Y_KIEN_DONG_GOP.forEach(row => sheetYK.appendRow(row));
    sheetYK.autoResizeColumns(1, 10);
  }

  return { sheetLS, sheetCB, sheetYK };
}

/**
 * Xử lý yêu cầu GET: Đọc dữ liệu tổng hợp
 */
function doGet(e) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    setupDatabase(ss);

    const action = (e && e.parameter && e.parameter.action) ? e.parameter.action : 'getAll';

    // Đọc danh bạ cán bộ
    const sheetCB = ss.getSheetByName(SHEET_NAMES.CAN_BO);
    const cbValues = sheetCB.getDataRange().getValues();
    const canBoList = [];
    for (let i = 1; i < cbValues.length; i++) {
      const row = cbValues[i];
      if (!row[1]) continue;
      canBoList.push({
        id: row[0] || ('CB' + i),
        name: row[1],
        role: row[2],
        daThamGia: String(row[3]).toLowerCase().includes('đã') || row[3] === true || row[3] === 'TRUE',
        soLuongYKien: Number(row[4]) || 0,
        danhGia: row[5] || '',
        thoiGian: row[6] ? String(row[6]) : ''
      });
    }

    // Đọc danh sách ý kiến
    const sheetYK = ss.getSheetByName(SHEET_NAMES.Y_KIEN);
    const ykValues = sheetYK.getDataRange().getValues();
    const feedbacksList = [];
    let sumRating = 0;
    for (let i = 1; i < ykValues.length; i++) {
      const row = ykValues[i];
      if (!row[2]) continue;
      const soSao = Number(row[4]) || 5;
      sumRating += soSao;
      feedbacksList.push({
        code: row[0] || ('YK' + i),
        thoiGian: row[1] || '',
        name: row[2],
        role: row[3],
        rating: soSao,
        danhGia: row[5] || '',
        comment: row[6] || '',
        status: row[7] || 'Đã tiếp nhận',
        response: row[8] || '',
        responseTime: row[9] || ''
      });
    }

    // Đọc biểu lãi suất niêm yết
    const sheetLS = ss.getSheetByName(SHEET_NAMES.LAI_SUAT_NIEM_YET);
    const lsValues = sheetLS.getDataRange().getValues();
    const laiSuatList = [];
    for (let i = 1; i < lsValues.length; i++) {
      const row = lsValues[i];
      if (!row[1]) continue;
      laiSuatList.push({
        nhom: row[0] || '',
        kyHan: row[1],
        rate: Number(row[2]) || 0,
        minDays: Number(row[3]) || 0,
        maxDays: Number(row[4]) || 9999,
        note: row[5] || ''
      });
    }

    // Tính toán thống kê
    const totalFeedbacks = feedbacksList.length;
    const avgRating = totalFeedbacks > 0 ? (sumRating / totalFeedbacks).toFixed(1) : '5.0';
    const daThamGiaCount = canBoList.filter(c => c.daThamGia).length;
    const chuaThamGiaCount = canBoList.length - daThamGiaCount;

    // Tìm cán bộ đóng góp nhiều ý kiến nhất
    let topContributor = { name: 'Chưa có', count: 0, role: '' };
    canBoList.forEach(c => {
      if (c.soLuongYKien > topContributor.count) {
        topContributor = { name: c.name, count: c.soLuongYKien, role: c.role };
      }
    });

    const result = {
      success: true,
      timestamp: Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'dd/MM/yyyy HH:mm:ss'),
      stats: {
        totalFeedbacks: totalFeedbacks,
        avgRating: avgRating,
        totalCanBo: canBoList.length,
        daThamGiaCount: daThamGiaCount,
        chuaThamGiaCount: chuaThamGiaCount,
        participationRate: canBoList.length > 0 ? Math.round((daThamGiaCount / canBoList.length) * 100) : 0,
        topContributor: topContributor
      },
      canBoList: canBoList,
      feedbacksList: feedbacksList,
      laiSuatList: laiSuatList
    };

    return createJsonResponse(result);
  } catch (error) {
    return createJsonResponse({ success: false, error: error.message });
  }
}

/**
 * Xử lý yêu cầu POST: Tiếp nhận ý kiến đóng góp thẩm định từ cán bộ
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    if (!lock.waitLock(10000)) {
      return createJsonResponse({ success: false, message: 'Hệ thống đang xử lý, vui lòng thử lại sau giây lát.' });
    }

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    setupDatabase(ss);

    let payload;
    if (e.postData && e.postData.contents) {
      try {
        payload = JSON.parse(e.postData.contents);
      } catch (err) {
        payload = e.parameter;
      }
    } else {
      payload = e.parameter || {};
    }

    const canBoName = sanitizeForSheet((payload.name || payload.canBoName || '').trim());
    const canBoRole = sanitizeForSheet((payload.role || '').trim());
    let soSao = Number(payload.rating || payload.soSao || 5);
    if (isNaN(soSao) || soSao < 1 || soSao > 5) soSao = 5;
    const danhGia = sanitizeForSheet((payload.danhGia || payload.level || '').trim());
    const nhanXet = sanitizeForSheet((payload.comment || payload.nhanXet || '').trim());
    const nowStr = Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'dd/MM/yyyy HH:mm:ss');

    if (!canBoName || canBoName.length > 100) {
      return createJsonResponse({ success: false, message: 'Họ tên cán bộ không hợp lệ (tối đa 100 ký tự).' });
    }
    if (!nhanXet || nhanXet.length > 2500) {
      return createJsonResponse({ success: false, message: 'Vui lòng nhập nội dung ý kiến đóng góp hợp lệ (tối đa 2500 ký tự).' });
    }

    // 1. Thêm vào sheet Y_KIEN_DONG_GOP
    const sheetYK = ss.getSheetByName(SHEET_NAMES.Y_KIEN);
    const lastRowYK = sheetYK.getLastRow();
    const newCode = 'YK' + String(lastRowYK).padStart(2, '0');
    sheetYK.appendRow([newCode, nowStr, canBoName, canBoRole, soSao, danhGia, nhanXet, 'Đã tiếp nhận', '', '']);

    // 2. Cập nhật vào sheet DANH_SACH_CAN_BO
    const sheetCB = ss.getSheetByName(SHEET_NAMES.CAN_BO);
    const cbValues = sheetCB.getDataRange().getValues();
    let found = false;
    for (let i = 1; i < cbValues.length; i++) {
      if (String(cbValues[i][1]).trim().toLowerCase() === canBoName.toLowerCase()) {
        const currentCount = Number(cbValues[i][4]) || 0;
        sheetCB.getRange(i + 1, 4).setValue('Đã tham gia');
        sheetCB.getRange(i + 1, 5).setValue(currentCount + 1);
        sheetCB.getRange(i + 1, 6).setValue(danhGia || (soSao + ' sao'));
        sheetCB.getRange(i + 1, 7).setValue(nowStr);
        found = true;
        break;
      }
    }

    // Nếu là cán bộ mới chưa có trong danh bạ
    if (!found) {
      const newCBCode = 'CB' + String(cbValues.length).padStart(2, '0');
      sheetCB.appendRow([newCBCode, canBoName, canBoRole || 'Cán bộ Quỹ', 'Đã tham gia', 1, danhGia, nowStr]);
    }

    return createJsonResponse({
      success: true,
      message: 'Cảm ơn đồng chí đã hoàn thành đóng góp ý kiến thẩm định sản phẩm Tiết kiệm gửi góp!',
      data: {
        code: newCode,
        thoiGian: nowStr,
        name: canBoName,
        rating: soSao,
        danhGia: danhGia,
        comment: nhanXet
      }
    });

  } catch (error) {
    return createJsonResponse({ success: false, error: error.message });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Chuẩn hóa và chống Formula Injection (CWE-1236) khi lưu vào Google Sheets
 * Tự động vô hiệu hóa các ký tự điều khiển công thức (=, +, -, @, \t, \r)
 */
function sanitizeForSheet(val) {
  if (val === null || val === undefined) return '';
  const str = String(val).trim();
  if (/^[=+\-@\t\r]/.test(str)) {
    return "'" + str;
  }
  return str;
}

function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
