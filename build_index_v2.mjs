import fs from 'fs';

console.log('Updating build_index_v2.mjs with refined tab labels and routing...');

const tmpl = JSON.parse(fs.readFileSync('D:/Antigravity Projects/TKGuiGop/data/template_strings_v2.json', 'utf8'));

const html = `<!DOCTYPE html>
<html lang="vi" class="h-full bg-slate-50">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Mô Phỏng & Quy Định Tiết Kiệm Gửi Góp Định Kỳ - QTDND Yên Thọ</title>
    
    <!-- PWA & Theme Meta -->
    <meta name="theme-color" content="#064e3b">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="TK Gửi Góp">
    <meta name="description" content="Công cụ mô phỏng tích lũy, xác định lãi suất tham chiếu dòng tiền và quản trị văn kiện Quy định Tiết kiệm gửi góp định kỳ - QTDND Yên Thọ">

    <!-- Fonts: Be Vietnam Pro -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap" rel="stylesheet">

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Be Vietnam Pro"', 'system-ui', '-apple-system', 'sans-serif'],
                        mono: ['"SF Mono"', 'ui-monospace', 'Menlo', 'monospace']
                    },
                    colors: {
                        brand: {
                            50: '#ecfdf5',
                            100: '#d1fae5',
                            500: '#10b981',
                            700: '#047857',
                            800: '#065f46',
                            900: '#064e3b',
                            950: '#022c22'
                        }
                    }
                }
            }
        }
    </script>

    <!-- Inline Web App Manifest (Data URI) -->
    <link rel="manifest" href="data:application/manifest+json;base64,eyJuYW1lIjoiVGnhur90IEtp4buHbSBH4butaSBHw7NwIC0gUVRETkQgWcOqbiBUaOG7jSIsInNob3J0X25hbWUiOiJUS0d1aUdvcCIsInN0YXJ0X3VybCI6Ii4vaW5kZXguaHRtbCIsImRpc3BsYXkiOiJzdGFuZGFsb25lIiwiYmFja2dyb3VuZF9jb2xvciI6IiMwMjJjMjIiLCJ0aGVtZV9jb2xvciI6IiMwNjRlM2IifQ==">

    <style>
        * {
            -webkit-tap-highlight-color: transparent;
            box-sizing: border-box;
        }
        body {
            font-family: 'Be Vietnam Pro', system-ui, -apple-system, sans-serif;
            font-feature-settings: "cv02", "cv03", "cv04", "cv11";
        }
        .tabular-nums {
            font-variant-numeric: tabular-nums;
        }
        .money-input {
            min-height: 44px;
            font-size: 16px !important;
            font-weight: 700;
        }
        @media (min-width: 640px) {
            .money-input {
                min-height: 42px;
                font-size: 15px !important;
            }
        }
        details summary::-webkit-details-marker {
            display: none;
        }
        details summary {
            list-style: none;
        }

        /* KHẮC KHOẢNG IN A4 CHUẨN MỰC - TRIỆT TIÊU 100% HEADER/FOOTER VÀ THÀNH PHẦN NGOÀI BẢNG KẾ HOẠCH */
        @media print {
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
        }
        .print-only {
            display: none;
        }

        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f5f9;
        }
        ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
        }
    </style>
</head>
<body class="h-full flex flex-col bg-slate-100 text-slate-800 antialiased selection:bg-emerald-100 selection:text-emerald-900 pb-20 sm:pb-6">

    <!-- HEADER HỆ THỐNG -->
    <header class="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white shadow-md sticky top-0 z-40 border-b border-emerald-800/80 no-print">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 sm:h-18">
                <!-- Logo & Tên đơn vị -->
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 p-0.5 shadow-md flex items-center justify-center shrink-0">
                        <div class="w-full h-full bg-emerald-950 rounded-[10px] flex items-center justify-center font-black text-amber-300 text-lg sm:text-xl tracking-tighter">
                            YT
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <span class="text-xs sm:text-sm font-bold tracking-tight text-white uppercase">Quỹ Tín Dụng Nhân Dân Yên Thọ</span>
                            <span class="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-emerald-700/80 text-emerald-200 border border-emerald-600 hidden md:inline-block">
                                HĐQT 2026 - 2027
                            </span>
                        </div>
                        <div class="text-[11px] sm:text-xs text-emerald-200/90 font-medium truncate max-w-[260px] sm:max-w-md">
                            Hệ Thống Mô Phỏng & Quản Trị Quy Định Tiết Kiệm Gửi Góp
                        </div>
                    </div>
                </div>

                <!-- Action Tools (Print A4, PWA) -->
                <div class="flex items-center gap-2">
                    <button onclick="printPlanOnly()" class="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-emerald-800/90 hover:bg-emerald-700 text-white text-xs font-semibold border border-emerald-600 shadow-xs flex items-center gap-1.5 transition">
                        <svg class="w-4 h-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
                        </svg>
                        <span class="hidden sm:inline">In Bảng Kế Hoạch A4</span>
                    </button>
                    <button id="pwaInstallBtn" onclick="installPwaApp()" class="hidden px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-amber-950 text-xs font-bold shadow-xs items-center gap-1.5 transition">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                        </svg>
                        <span>Cài App</span>
                    </button>
                </div>
            </div>

            <!-- DESKTOP NAVIGATION TABS (CHUẨN HÓA TÊN GỌI) -->
            <div class="hidden sm:flex space-x-1 border-t border-emerald-800/50 pt-2 pb-2 overflow-x-auto text-xs font-semibold">
                <button id="tabBtn_calculator" onclick="switchTab('calculator')" class="px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 bg-white text-emerald-950 font-bold shadow-xs">
                    <svg class="w-4 h-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                    <span>Mô Phỏng</span>
                </button>
                <button id="tabBtn_pricing" onclick="switchTab('pricing')" class="px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 text-slate-300 hover:text-white hover:bg-emerald-800/50">
                    <svg class="w-4 h-4 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    <span>Lãi Suất Tham Chiếu</span>
                </button>
                <button id="tabBtn_analysis" onclick="switchTab('analysis')" class="px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 text-slate-300 hover:text-white hover:bg-emerald-800/50">
                    <svg class="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                    <span>Phân Tích</span>
                </button>
                <button id="tabBtn_regulations" onclick="switchTab('regulations')" class="px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 text-slate-300 hover:text-white hover:bg-emerald-800/50">
                    <svg class="w-4 h-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                    <span>Quy Định</span>
                </button>
                <button id="tabBtn_consulting" onclick="switchTab('consulting')" class="px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 text-slate-300 hover:text-white hover:bg-emerald-800/50">
                    <svg class="w-4 h-4 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                    <span>Nghiệp Vụ</span>
                </button>
                <button id="tabBtn_templates" onclick="switchTab('templates')" class="px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 text-slate-300 hover:text-white hover:bg-emerald-800/50">
                    <svg class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>
                    <span>Biểu Mẫu</span>
                </button>
                <button id="tabBtn_feedback" onclick="switchTab('feedback')" class="px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 text-slate-300 hover:text-white hover:bg-emerald-800/50">
                    <svg class="w-4 h-4 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
                    <span>Ý Kiến Cán Bộ</span>
                </button>
            </div>
        </div>
    </header>

    <!-- BẢN IN KẾ HOẠCH A4 CHUYÊN BIỆT (CHỈ HIỆN KHI IN, TRIỆT TIÊU 100% HEADER/FOOTER WEBSITE) -->
    <div id="printPlanDocument" class="print-only font-sans p-2 text-black">
        <div class="flex justify-between items-start border-b-2 border-black pb-3 mb-4">
            <div>
                <div class="font-bold text-xs uppercase text-black">QUỸ TÍN DỤNG NHÂN DÂN YÊN THỌ</div>
                <div class="text-[11px] text-gray-700">Thôn Tân Lộc, xã Quý Lộc, tỉnh Thanh Hóa</div>
                <div class="text-[11px] text-gray-700">Hotline: 0966.381.189 - 0989.349.336</div>
            </div>
            <div class="text-right">
                <div class="font-bold text-xs uppercase text-black">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</div>
                <div class="text-[11px] font-semibold text-gray-800">Độc lập - Tự do - Hạnh phúc</div>
                <div class="text-[11px] italic text-gray-600 mt-0.5">Quý Lộc, ngày <span id="printCurrentDay">...</span> tháng <span id="printCurrentMonth">...</span> năm <span id="printCurrentYear">202...</span></div>
            </div>
        </div>

        <div class="text-center my-4">
            <h1 class="text-base sm:text-lg font-bold uppercase text-black tracking-wide">BẢNG KẾ HOẠCH TÍCH LŨY TIẾT KIỆM GỬI GÓP ĐỊNH KỲ</h1>
            <div class="text-xs italic text-gray-700 mt-1">Phương pháp tính lãi theo ngày duy trì thực tế (Cơ sở 365 ngày - Thông tư 14/2017/TT-NHNN)</div>
        </div>

        <div class="border border-gray-400 rounded-lg p-3 my-3 text-xs leading-relaxed space-y-1.5">
            <div class="grid grid-cols-2 gap-2">
                <div>Khách hàng / Thành viên: <strong id="pDoc_custName" class="text-black uppercase">...................................................</strong></div>
                <div>Kỳ hạn gửi: <strong id="pDoc_termMonths">12 tháng (Hàng tháng)</strong></div>
            </div>
            <div class="grid grid-cols-2 gap-2">
                <div>Số CCCD/CMND: <span id="pDoc_custId">...................................</span></div>
                <div>Lãi suất gửi góp áp dụng: <strong id="pDoc_interestRate">4,75% / năm</strong> (Cố định suốt kỳ)</div>
            </div>
            <div class="grid grid-cols-2 gap-2">
                <div>Số điện thoại liên hệ: <span id="pDoc_custPhone">...................................</span></div>
                <div>Số tiền nộp định kỳ mỗi kỳ: <strong id="pDoc_monthlyAmount">500.000 đ</strong></div>
            </div>
            <div class="grid grid-cols-3 gap-2 pt-1 border-t border-dotted border-gray-300">
                <div>Ngày mở sổ: <strong id="pDoc_startDate">...../...../202...</strong></div>
                <div>Ngày đáo hạn: <strong id="pDoc_maturityDate">...../...../202...</strong></div>
                <div>Tổng số lần nộp: <strong id="pDoc_totalPeriods">12 kỳ</strong></div>
            </div>
            <div class="grid grid-cols-3 gap-2 pt-1 border-t border-dotted border-gray-300 font-bold">
                <div>Tổng vốn tích lũy: <span id="pDoc_totalPrincipal" class="text-black">12.000.000 đ</span></div>
                <div>Tiền lãi dự kiến: <span id="pDoc_totalInterest" class="text-black">305.162 đ</span></div>
                <div>Tổng nhận đáo hạn: <span id="pDoc_totalMaturity" class="text-black">12.305.162 đ</span></div>
            </div>
        </div>

        <div class="my-4">
            <table class="w-full text-left border-collapse text-xs border border-black">
                <thead>
                    <tr class="bg-gray-100 border-b border-black text-black font-bold uppercase text-[10px]">
                        <th class="py-2 px-1.5 text-center border-r border-black w-10">Kỳ</th>
                        <th class="py-2 px-2 border-r border-black">Ngày dự kiến</th>
                        <th class="py-2 px-2 border-r border-black">Ngày nộp thực tế</th>
                        <th class="py-2 px-2 text-right border-r border-black">Số tiền nộp (đ)</th>
                        <th class="py-2 px-1.5 text-center border-r border-black w-12">Số ngày</th>
                        <th class="py-2 px-2 text-right border-r border-black">Tiền lãi kỳ (đ)</th>
                        <th class="py-2 px-2 text-right">Lũy kế gốc (đ)</th>
                    </tr>
                </thead>
                <tbody id="printScheduleTableBody" class="divide-y divide-gray-300 tabular-nums">
                    <!-- Populated dynamically via JS -->
                </tbody>
                <tfoot>
                    <tr class="border-t-2 border-black font-bold bg-gray-50 text-black text-xs tabular-nums">
                        <td colspan="3" class="py-2.5 px-2 border-r border-black">TỔNG CỘNG TOÀN KỲ HẠN:</td>
                        <td id="pDoc_footPrincipal" class="py-2.5 px-2 text-right border-r border-black">12.000.000 đ</td>
                        <td class="py-2.5 px-1.5 text-center border-r border-black">-</td>
                        <td id="pDoc_footInterest" class="py-2.5 px-2 text-right border-r border-black">305.162 đ</td>
                        <td id="pDoc_footTotal" class="py-2.5 px-2 text-right">12.305.162 đ</td>
                    </tr>
                </tfoot>
            </table>
        </div>

        <div class="text-[11px] italic text-gray-700 leading-relaxed my-2">
            * Tiền lãi được tính theo số ngày duy trì thực tế của từng khoản nộp đến ngày đáo hạn theo Thông tư 14/2017/TT-NHNN. Trường hợp rút trước hạn, toàn bộ số dư sẽ áp dụng lãi suất không kỳ hạn theo quy định hiện hành của Ngân hàng Nhà nước.
        </div>

        <div class="grid grid-cols-2 gap-8 pt-6 text-center text-xs">
            <div>
                <div class="font-bold uppercase text-black">GIAO DỊCH VIÊN LẬP BẢNG</div>
                <div class="text-[10px] italic text-gray-500">(Ký và ghi rõ họ tên)</div>
                <div class="h-20"></div>
            </div>
            <div>
                <div class="font-bold uppercase text-black">KHÁCH HÀNG TÍCH LŨY</div>
                <div class="text-[10px] italic text-gray-500">(Ký và ghi rõ họ tên)</div>
                <div class="h-20"></div>
            </div>
        </div>
    </div>

    <!-- MAIN APP CONTAINER -->
    <main class="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 lg:p-8">

        <!-- TAB 1: MÔ PHỎNG (Mounted by Default) -->
        <section id="tabContent_calculator" class="tab-content active space-y-6">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">

                <!-- CỘT TRÁI: NHẬP THAM SỐ & KỊCH BẢN (Ẩn khi in) -->
                <aside class="lg:col-span-4 space-y-5 no-print">
                    
                    <!-- Khối: Thông tin khách hàng & Tham số -->
                    <div class="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200">
                        <div class="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                            <h2 class="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2">
                                <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                                Thiết Lập Gói Tiết Kiệm
                            </h2>
                            <button onclick="resetCustomerInfo()" class="text-xs text-slate-400 hover:text-emerald-700 font-medium transition">
                                Làm mới
                            </button>
                        </div>

                        <div class="space-y-3.5">
                            <!-- Họ tên khách hàng -->
                            <div>
                                <label class="block text-xs font-bold text-slate-700 mb-1">Họ tên thành viên / Khách hàng</label>
                                <input type="text" id="custName" placeholder="Ví dụ: Lê Thị Mai" oninput="syncCustomerInfo()"
                                    class="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none">
                            </div>

                            <!-- Số CCCD & Số điện thoại -->
                            <div class="grid grid-cols-2 gap-2">
                                <div>
                                    <label class="block text-xs font-bold text-slate-700 mb-1">Số CCCD/CMND</label>
                                    <input type="text" id="custId" placeholder="038..." oninput="syncCustomerInfo()"
                                        class="w-full px-2.5 py-1.5 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none">
                                </div>
                                <div>
                                    <label class="block text-xs font-bold text-slate-700 mb-1">Số điện thoại</label>
                                    <input type="text" id="custPhone" placeholder="09..." oninput="syncCustomerInfo()"
                                        class="w-full px-2.5 py-1.5 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none">
                                </div>
                            </div>

                            <!-- Số tiền gửi mỗi lần -->
                            <div>
                                <div class="flex justify-between items-center mb-1">
                                    <label class="text-xs font-bold text-slate-700">Số tiền nộp mỗi kỳ (VNĐ) <span class="text-rose-500">*</span></label>
                                    <span id="amountTextHint" class="text-[11px] font-bold text-emerald-800">500 nghìn</span>
                                </div>
                                <div class="relative">
                                    <input type="text" inputmode="numeric" id="monthlyAmount" value="500.000" 
                                        oninput="handleMoneyInput(this); onParameterChange();"
                                        class="money-input w-full px-3 py-2 text-base font-bold tabular-nums rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-emerald-50/20 text-emerald-950">
                                    <span class="absolute right-3 top-2.5 sm:top-2 text-xs font-semibold text-slate-400">đồng</span>
                                </div>
                                <!-- Nút chọn nhanh số tiền -->
                                <div class="flex flex-wrap gap-1.5 mt-2">
                                    <button type="button" onclick="setQuickAmount(500000)" class="px-2 py-1 text-xs rounded-lg border border-slate-200 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 font-semibold text-slate-700">500k</button>
                                    <button type="button" onclick="setQuickAmount(1000000)" class="px-2 py-1 text-xs rounded-lg border border-slate-200 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 font-semibold text-slate-700">1 tr</button>
                                    <button type="button" onclick="setQuickAmount(2000000)" class="px-2 py-1 text-xs rounded-lg border border-slate-200 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 font-semibold text-slate-700">2 tr</button>
                                    <button type="button" onclick="setQuickAmount(3000000)" class="px-2 py-1 text-xs rounded-lg border border-slate-200 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 font-semibold text-slate-700">3 tr</button>
                                    <button type="button" onclick="setQuickAmount(5000000)" class="px-2 py-1 text-xs rounded-lg border border-slate-200 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 font-semibold text-slate-700">5 tr</button>
                                </div>
                            </div>

                            <!-- Kỳ hạn gửi -->
                            <div>
                                <label class="block text-xs font-bold text-slate-700 mb-1">Kỳ hạn gửi tích lũy <span class="text-rose-500">*</span></label>
                                <div class="grid grid-cols-4 sm:grid-cols-7 gap-1.5 text-xs">
                                    <button type="button" onclick="selectTerm(3)" id="termBtn_3" class="py-2 px-1 rounded-xl border border-slate-200 font-semibold hover:border-emerald-400 text-slate-700 text-center">3 tháng</button>
                                    <button type="button" onclick="selectTerm(6)" id="termBtn_6" class="py-2 px-1 rounded-xl border border-slate-200 font-semibold hover:border-emerald-400 text-slate-700 text-center">6 tháng</button>
                                    <button type="button" onclick="selectTerm(12)" id="termBtn_12" class="py-2 px-1 rounded-xl border-2 border-emerald-600 bg-emerald-50/80 font-bold text-emerald-950 text-center">12 tháng</button>
                                    <button type="button" onclick="selectTerm(18)" id="termBtn_18" class="py-2 px-1 rounded-xl border border-slate-200 font-semibold hover:border-emerald-400 text-slate-700 text-center">18 tháng</button>
                                    <button type="button" onclick="selectTerm(24)" id="termBtn_24" class="py-2 px-1 rounded-xl border border-slate-200 font-semibold hover:border-emerald-400 text-slate-700 text-center">24 tháng</button>
                                    <button type="button" onclick="selectTerm(36)" id="termBtn_36" class="py-2 px-1 rounded-xl border border-slate-200 font-semibold hover:border-emerald-400 text-slate-700 text-center">36 tháng</button>
                                    <button type="button" onclick="selectTerm(60)" id="termBtn_60" class="py-2 px-1 rounded-xl border border-slate-200 font-semibold hover:border-emerald-400 text-slate-700 text-center">60 tháng</button>
                                </div>
                            </div>

                            <!-- Chu kỳ nộp tiền (1, 3, 6 tháng) -->
                            <div>
                                <label class="block text-xs font-bold text-slate-700 mb-1">Chu kỳ nộp tiền định kỳ <span class="text-rose-500">*</span></label>
                                <div class="grid grid-cols-3 gap-1.5 text-xs">
                                    <button type="button" onclick="changeDepositFreq(1)" id="freqBtn_1" class="py-2 px-2 rounded-xl border-2 border-emerald-600 bg-emerald-50/80 font-bold text-emerald-950 text-center">
                                        <div>01 Tháng/lần</div>
                                        <div class="text-[10px] font-normal text-emerald-800">Hàng tháng</div>
                                    </button>
                                    <button type="button" onclick="changeDepositFreq(3)" id="freqBtn_3" class="py-2 px-2 rounded-xl border border-slate-200 font-semibold hover:border-emerald-400 text-slate-700 text-center">
                                        <div>03 Tháng/lần</div>
                                        <div class="text-[10px] font-normal text-slate-500">Hàng quý</div>
                                    </button>
                                    <button type="button" onclick="changeDepositFreq(6)" id="freqBtn_6" class="py-2 px-2 rounded-xl border border-slate-200 font-semibold hover:border-emerald-400 text-slate-700 text-center">
                                        <div>06 Tháng/lần</div>
                                        <div class="text-[10px] font-normal text-slate-500">Định kỳ 6T</div>
                                    </button>
                                </div>
                                <div id="freqHintText" class="text-[11px] text-slate-500 mt-1 italic">
                                    Kỳ hạn 12 tháng, gửi 1 tháng/lần: Tổng cộng 12 lần nộp tiền.
                                </div>
                            </div>

                            <!-- Lãi suất gửi góp áp dụng -->
                            <div>
                                <div class="flex justify-between items-center mb-1">
                                    <label class="text-xs font-bold text-slate-700">Lãi suất gửi góp (%/năm) <span class="text-rose-500">*</span></label>
                                    <span class="text-[11px] font-bold text-emerald-800">Cố định suốt kỳ</span>
                                </div>
                                <div class="relative">
                                    <input type="number" step="0.05" id="interestRate" value="4.75" oninput="onParameterChange();"
                                        class="money-input w-full px-3 py-2 text-base font-bold tabular-nums rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none">
                                    <span class="absolute right-3 top-2.5 sm:top-2 text-xs font-semibold text-slate-400">% / năm</span>
                                </div>
                            </div>

                            <!-- Ngày bắt đầu & Quy tắc ngày gửi -->
                            <div class="grid grid-cols-2 gap-2">
                                <div>
                                    <label class="block text-xs font-bold text-slate-700 mb-1">Ngày mở sổ (Kỳ 1)</label>
                                    <input type="date" id="startDate" onchange="onParameterChange();"
                                        class="w-full px-2.5 py-2 text-xs font-semibold rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none">
                                </div>
                                <div>
                                    <label class="block text-xs font-bold text-slate-700 mb-1">Ngày nộp định kỳ</label>
                                    <select id="depositDayRule" onchange="onParameterChange()" class="w-full px-2 py-2 text-xs font-semibold rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none bg-white">
                                        <option value="same">Cùng ngày mở sổ</option>
                                        <option value="5">Ngày 05 hàng tháng</option>
                                        <option value="10">Ngày 10 hàng tháng</option>
                                        <option value="15">Ngày 15 hàng tháng</option>
                                        <option value="20">Ngày 20 hàng tháng</option>
                                        <option value="25">Ngày 25 hàng tháng</option>
                                    </select>
                                </div>
                            </div>

                            <!-- Dời ngày cuối tuần -->
                            <div class="pt-1">
                                <label class="flex items-center gap-2 cursor-pointer text-xs text-slate-700 select-none">
                                    <input type="checkbox" id="shiftWeekend" checked onchange="onParameterChange()" class="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4">
                                    <span>Tự động dời ngày Thứ Bảy/Chủ Nhật sang Thứ Hai</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Kịch bản tư vấn nhanh -->
                    <div class="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200">
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">Kịch Bản Tư Vấn Nhanh</h3>
                        <div class="space-y-2">
                            <button onclick="applyScenario('huutri')" class="w-full p-2.5 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 text-left transition flex items-center justify-between">
                                <div>
                                    <div class="text-xs font-bold text-slate-800">Cán bộ hưu trí / Người cao tuổi</div>
                                    <div class="text-[11px] text-slate-500">500.000đ/tháng • Kỳ hạn 12 tháng</div>
                                </div>
                                <span class="text-xs text-emerald-700 font-bold shrink-0">Áp dụng →</span>
                            </button>
                            <button onclick="applyScenario('tieuthuong')" class="w-full p-2.5 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 text-left transition flex items-center justify-between">
                                <div>
                                    <div class="text-xs font-bold text-slate-800">Tiểu thương buôn bán chợ</div>
                                    <div class="text-[11px] text-slate-500">2.000.000đ/tháng • Kỳ hạn 24 tháng</div>
                                </div>
                                <span class="text-xs text-emerald-700 font-bold shrink-0">Áp dụng →</span>
                            </button>
                            <button onclick="applyScenario('hangquy')" class="w-full p-2.5 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 text-left transition flex items-center justify-between">
                                <div>
                                    <div class="text-xs font-bold text-slate-800">Tích lũy vụ mùa / Hàng quý</div>
                                    <div class="text-[11px] text-slate-500">3.000.000đ/quý • Kỳ hạn 24 tháng</div>
                                </div>
                                <span class="text-xs text-emerald-700 font-bold shrink-0">Áp dụng →</span>
                            </button>
                        </div>
                    </div>
                </aside>

                <!-- CỘT PHẢI: KẾT QUẢ, SO SÁNH 3 PHƯƠNG ÁN & BẢNG TIẾN ĐỘ -->
                <section class="lg:col-span-8 space-y-5">
                    
                    <!-- 4 Thẻ KPI Tổng Quan Kết Quả -->
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                        <div class="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200 shadow-xs">
                            <span class="text-[11px] font-bold text-slate-500 uppercase block">Tổng Vốn Gốc Gửi</span>
                            <div id="kpiTotalPrincipal" class="text-base sm:text-xl font-extrabold text-slate-900 tabular-nums mt-1">12.000.000 đ</div>
                            <span id="kpiPeriodsCount" class="text-[11px] text-emerald-700 font-medium">12 lần nộp</span>
                        </div>
                        <div class="bg-white rounded-2xl p-3.5 sm:p-4 border border-emerald-200 shadow-xs bg-emerald-50/30">
                            <span class="text-[11px] font-bold text-emerald-800 uppercase block">Tiền Lãi Dự Kiến</span>
                            <div id="kpiTotalInterest" class="text-base sm:text-xl font-extrabold text-emerald-700 tabular-nums mt-1">305.162 đ</div>
                            <span class="text-[11px] text-slate-500 font-medium">Cơ sở 365 ngày</span>
                        </div>
                        <div class="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200 shadow-xs">
                            <span class="text-[11px] font-bold text-slate-500 uppercase block">Tổng Nhận Đáo Hạn</span>
                            <div id="kpiTotalMaturity" class="text-base sm:text-xl font-extrabold text-slate-900 tabular-nums mt-1">12.305.162 đ</div>
                            <span id="kpiMaturityDate" class="text-[11px] text-slate-500 font-medium">Đáo hạn: ...</span>
                        </div>
                        <div class="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200 shadow-xs">
                            <span class="text-[11px] font-bold text-slate-500 uppercase block">Chi Phí Vốn (COF)</span>
                            <div id="kpiEffectiveRate" class="text-base sm:text-xl font-extrabold text-teal-700 tabular-nums mt-1">2,54 %</div>
                            <span class="text-[11px] text-slate-500 font-medium">Trên tổng quy mô</span>
                        </div>
                    </div>

                    <!-- KHỐI SO SÁNH 3 CHIỀU TIỀN LÃI (THAM CHIẾU MINH BẠCH CHO KHÁCH HÀNG) -->
                    <div class="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200 space-y-3">
                        <div class="flex items-center justify-between pb-2.5 border-b border-slate-200">
                            <h3 class="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                                <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                                So Sánh Minh Bạch 3 Phương Án Tiền Lãi Nhận Được
                            </h3>
                            <span class="text-[11px] text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                                Tham chiếu dòng tiền
                            </span>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                            <!-- Cột 1: Gửi góp định kỳ (Đang chọn) -->
                            <div class="p-3.5 rounded-xl bg-emerald-50/70 border-2 border-emerald-400/80 relative">
                                <span class="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-emerald-700 text-white font-extrabold text-[10px]">
                                    ĐANG CHỌN
                                </span>
                                <div class="font-bold text-emerald-950 text-xs uppercase">Tiết Kiệm Gửi Góp Định Kỳ</div>
                                <div class="text-[11px] text-emerald-800 mt-0.5">Nộp dần từng kỳ từ thu nhập</div>
                                
                                <div class="mt-3 pt-2 border-t border-emerald-200/80">
                                    <span class="text-[11px] text-slate-500 block">Tiền lãi thực nhận:</span>
                                    <div id="simCompare_guiGopInterest" class="text-base sm:text-lg font-black text-emerald-900 tabular-nums mt-0.5">305.162 đ</div>
                                    <span id="simCompare_guiGopRate" class="text-[11px] text-emerald-700 font-bold block mt-0.5">Lãi suất: 4,68% / năm (Cố định)</span>
                                </div>
                                <div class="mt-2 text-[11px] text-slate-600 leading-relaxed">
                                    ✓ Tích lũy linh hoạt, không cần vốn lớn ban đầu.<br>
                                    ✓ Sinh lời tối đa trên từng kỳ gửi.
                                </div>
                            </div>

                            <!-- Cột 2: Kỳ hạn tương đương dòng tiền bình quân -->
                            <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                                <div class="font-bold text-slate-800 text-xs uppercase">Kỳ Hạn Tương Đương Dòng Tiền</div>
                                <div class="text-[11px] text-slate-500 mt-0.5" id="simCompare_tuongDuongTerm">Kỳ hạn 6 - 7 tháng niêm yết</div>
                                
                                <div class="mt-3 pt-2 border-t border-slate-200">
                                    <span class="text-[11px] text-slate-500 block">Tiền lãi tương đương:</span>
                                    <div id="simCompare_tuongDuongInterest" class="text-base sm:text-lg font-black text-slate-800 tabular-nums mt-0.5">284.700 đ</div>
                                    <span id="simCompare_tuongDuongRate" class="text-[11px] text-slate-600 font-bold block mt-0.5">Lãi suất tương đương: 4,40% / năm</span>
                                </div>
                                <div class="mt-2 text-[11px] text-emerald-800 font-semibold leading-relaxed" id="simCompare_tuongDuongAdvantage">
                                    ✓ Gửi góp sinh lời cao hơn <strong class="text-emerald-950">+20.462 đ</strong> so với việc khách tự chia nhỏ gửi từng sổ lẻ ngắn hạn.
                                </div>
                            </div>

                            <!-- Cột 3: Gửi 1 lần cùng kỳ hạn -->
                            <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                                <div class="font-bold text-slate-800 text-xs uppercase">Gửi 1 Lần Cùng Kỳ Hạn</div>
                                <div class="text-[11px] text-slate-500 mt-0.5" id="simCompare_cungKyTerm">Gửi 100% vốn (12.000.000 đ) ngay từ ngày đầu (12T)</div>
                                
                                <div class="mt-3 pt-2 border-t border-slate-200">
                                    <span class="text-[11px] text-slate-500 block">Tiền lãi nếu gửi 1 lần:</span>
                                    <div id="simCompare_cungKyInterest" class="text-base sm:text-lg font-bold text-slate-700 tabular-nums mt-0.5">672.000 đ</div>
                                    <span id="simCompare_cungKyRate" class="text-[11px] text-slate-600 font-semibold block mt-0.5">Lãi suất niêm yết: 5,60% / năm</span>
                                </div>
                                <div class="mt-2 text-[11px] text-slate-500 leading-relaxed">
                                    * Đòi hỏi khách hàng phải có sẵn ngay toàn bộ vốn từ ngày mở sổ.
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Bảng Chi Tiết Tiến Độ Nộp Tiền & Phân Bổ Lãi -->
                    <div class="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200">
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-3">
                            <div>
                                <h3 class="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                                    Tiến Độ Nộp Tiền & Phân Bổ Lãi Từng Kỳ (Cơ sở 365 ngày)
                                </h3>
                                <p class="text-xs text-slate-500 mt-0.5">Mỗi lần nộp được tính lãi theo số ngày gửi thực tế theo Thông tư 14/2017/TT-NHNN, áp dụng <strong>MỘT mức lãi suất cố định của sổ</strong> trong suốt kỳ hạn (theo Điều 6 Quy chế QTDND Yên Thọ).</p>
                                <div class="flex flex-wrap items-center gap-2 mt-2">
                                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 text-emerald-200 border border-emerald-600/70 text-xs font-semibold shadow-xs">
                                        <span class="text-amber-400">⚖️</span> Cơ sở 365 ngày (TT 14/2017)
                                    </span>
                                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 text-emerald-200 border border-emerald-600/70 text-xs font-semibold shadow-xs">
                                        <span class="text-amber-400">🛡️</span> Rút trước hạn (TT 04/2022)
                                    </span>
                                </div>
                            </div>
                            <div class="flex items-center gap-2 no-print self-start sm:self-auto flex-wrap">
                                <button onclick="openPledgeModal()" class="px-2.5 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition">
                                    <svg class="w-3.5 h-3.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                                    Vay cầm cố
                                </button>
                                <button onclick="exportPlanToExcel()" class="px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-300 shadow-xs flex items-center gap-1.5 transition">
                                    <svg class="w-3.5 h-3.5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                                    Xuất Excel
                                </button>
                                <button onclick="printPlanOnly()" class="px-3 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs flex items-center gap-1.5 transition">
                                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
                                    In Bảng Kế Hoạch A4
                                </button>
                            </div>
                        </div>

                        <!-- Table container -->
                        <div class="overflow-x-auto mt-4">
                            <table class="w-full text-left border-collapse text-xs">
                                <thead>
                                    <tr class="border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider bg-slate-50">
                                        <th class="py-2.5 px-2.5 text-center">Kỳ</th>
                                        <th class="py-2.5 px-3">Ngày dự kiến</th>
                                        <th class="py-2.5 px-3">Ngày nộp thực tế</th>
                                        <th class="py-2.5 px-3 text-right">Số tiền nộp</th>
                                        <th class="py-2.5 px-2.5 text-center">Số ngày</th>
                                        <th class="py-2.5 px-3 text-right">Tiền lãi</th>
                                        <th class="py-2.5 px-3 text-right">Lũy kế gốc</th>
                                    </tr>
                                </thead>
                                <tbody id="scheduleTableBody" class="divide-y divide-slate-100 font-medium tabular-nums">
                                    <!-- Rendered dynamically via JS -->
                                </tbody>
                                <tfoot>
                                    <tr class="border-t-2 border-slate-300 font-bold bg-slate-50/80 text-xs sm:text-sm text-slate-900 tabular-nums">
                                        <td colspan="3" class="py-3 px-3">TỔNG CỘNG TOÀN KỲ HẠN:</td>
                                        <td id="tableFooterPrincipal" class="py-3 px-3 text-right text-emerald-950 font-black">0 đ</td>
                                        <td class="py-3 px-2 text-center text-slate-400">-</td>
                                        <td id="tableFooterInterest" class="py-3 px-3 text-right text-emerald-700 font-black">0 đ</td>
                                        <td id="tableFooterTotal" class="py-3 px-3 text-right text-slate-900 font-black">0 đ</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </section>

        <!-- TAB 2: LÃI SUẤT THAM CHIẾU (HĐQT) (Lazy Mounted) -->
        <section id="tabContent_pricing" class="tab-content hidden space-y-6">
            <!-- Will be mounted on first click from tmpl_tabContent_pricing -->
        </section>

        <!-- TAB 3: PHÂN TÍCH (Lazy Mounted) -->
        <section id="tabContent_analysis" class="tab-content hidden space-y-6">
            <!-- Will be mounted on first click from tmpl_tabContent_analysis -->
        </section>

        <!-- TAB 4: QUY ĐỊNH (Lazy Mounted) -->
        <section id="tabContent_regulations" class="tab-content hidden space-y-6">
            <!-- Will be mounted on first click from tmpl_tabContent_regulations -->
        </section>

        <!-- TAB 5: NGHIỆP VỤ (Lazy Mounted) -->
        <section id="tabContent_consulting" class="tab-content hidden space-y-6">
            <!-- Will be mounted on first click from tmpl_tabContent_consulting -->
        </section>

        <!-- TAB 6: BIỂU MẪU (Lazy Mounted) -->
        <section id="tabContent_templates" class="tab-content hidden space-y-6">
            <!-- Will be mounted on first click from tmpl_tabContent_templates -->
        </section>

        <!-- TAB 7: Ý KIẾN CÁN BỘ (Lazy Mounted) -->
        <section id="tabContent_feedback" class="tab-content hidden space-y-6">
            <!-- Will be mounted on first click from tmpl_tabContent_feedback -->
        </section>

    </main>

    <!-- FIXED BOTTOM NAVIGATION BAR FOR MOBILE (7 NÚT KHÔNG CUỘN NGANG) -->
    <nav id="bottomNavBar" class="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50 px-1 py-1 flex justify-around items-center shadow-lg no-print">
        <button id="bottomNavBtn_calculator" onclick="switchTab('calculator')" class="flex-1 py-1 px-0.5 flex flex-col items-center justify-center text-emerald-800 font-bold transition">
            <svg class="w-4 h-4 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
            <span class="text-[9px] leading-tight">Mô phỏng</span>
        </button>
        <button id="bottomNavBtn_pricing" onclick="switchTab('pricing')" class="flex-1 py-1 px-0.5 flex flex-col items-center justify-center text-slate-500 font-medium transition">
            <svg class="w-4 h-4 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            <span class="text-[9px] leading-tight">Tham chiếu</span>
        </button>
        <button id="bottomNavBtn_analysis" onclick="switchTab('analysis')" class="flex-1 py-1 px-0.5 flex flex-col items-center justify-center text-slate-500 font-medium transition">
            <svg class="w-4 h-4 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            <span class="text-[9px] leading-tight">Phân tích</span>
        </button>
        <button id="bottomNavBtn_regulations" onclick="switchTab('regulations')" class="flex-1 py-1 px-0.5 flex flex-col items-center justify-center text-slate-500 font-medium transition">
            <svg class="w-4 h-4 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            <span class="text-[9px] leading-tight">Quy định</span>
        </button>
        <button id="bottomNavBtn_consulting" onclick="switchTab('consulting')" class="flex-1 py-1 px-0.5 flex flex-col items-center justify-center text-slate-500 font-medium transition">
            <svg class="w-4 h-4 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            <span class="text-[9px] leading-tight">Nghiệp vụ</span>
        </button>
        <button id="bottomNavBtn_templates" onclick="switchTab('templates')" class="flex-1 py-1 px-0.5 flex flex-col items-center justify-center text-slate-500 font-medium transition">
            <svg class="w-4 h-4 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>
            <span class="text-[9px] leading-tight">Biểu mẫu</span>
        </button>
        <button id="bottomNavBtn_feedback" onclick="switchTab('feedback')" class="flex-1 py-1 px-0.5 flex flex-col items-center justify-center text-slate-500 font-medium transition">
            <svg class="w-4 h-4 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
            <span class="text-[9px] leading-tight">Góp ý</span>
        </button>
    </nav>

    <!-- MODAL SO SÁNH VAY CẦM CỐ VS RÚT TRƯỚC HẠN (TT 04/2022) -->
    <div id="pledgeModal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 hidden flex items-center justify-center p-3 sm:p-4 no-print">
        <div class="bg-white rounded-2xl max-w-xl w-full p-5 sm:p-6 shadow-xl border border-slate-200 space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-200">
                <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    So Sánh Tài Chính: Rút Trước Hạn vs Vay Cầm Cố
                </h3>
                <button onclick="closePledgeModal()" class="text-slate-400 hover:text-slate-600 text-lg font-bold p-1">&times;</button>
            </div>

            <div class="space-y-3 text-xs sm:text-sm">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Thời điểm cần tiền đột xuất</label>
                    <select id="pledgeMonthSelect" onchange="calculatePledgeComparison()" class="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 outline-none bg-white">
                        <!-- Populated via JS -->
                    </select>
                </div>

                <div class="grid grid-cols-2 gap-3 text-xs">
                    <div class="p-3.5 rounded-xl bg-rose-50 border border-rose-200">
                        <div class="font-bold text-rose-900 mb-1">Phương án: Tất Toán Rút Trước Hạn</div>
                        <div class="text-slate-600 text-[11px] mb-2 leading-relaxed">
                            Theo Thông tư 04/2022/TT-NHNN, toàn bộ khoản tiền gửi sẽ bị áp lãi suất không kỳ hạn (0,20%/năm) cho toàn bộ thời gian đã gửi.
                        </div>
                        <div class="text-[11px] text-slate-500">Tiền lãi nhận được:</div>
                        <div id="compareWithdrawInterest" class="text-sm font-extrabold text-rose-700 tabular-nums">0 đ</div>
                    </div>
                    <div class="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
                        <div class="font-bold text-emerald-950 mb-1">Phương án: Vay Cầm Cố Sổ Tiết Kiệm</div>
                        <div class="text-slate-600 text-[11px] mb-2 leading-relaxed">
                            Vay cầm cố sổ tiết kiệm tại Quỹ, bảo toàn 100% lãi suất gửi góp ban đầu cho đến ngày đáo hạn.
                        </div>
                        <div class="text-[11px] text-slate-500">Lợi ích ròng bảo toàn:</div>
                        <div id="comparePledgeBenefit" class="text-sm font-extrabold text-emerald-700 tabular-nums">0 đ</div>
                    </div>
                </div>

                <div id="pledgeAdviceBox" class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                    <!-- Advice text generated via JS -->
                </div>
            </div>

            <div class="pt-2 flex justify-end">
                <button onclick="closePledgeModal()" class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition">
                    Đóng cửa sổ
                </button>
            </div>
        </div>
    </div>

    <!-- TOAST NOTIFICATION CONTAINER -->
    <div id="toastContainer" class="fixed top-4 right-4 z-50 space-y-2 pointer-events-none"></div>

    <!-- ==================== LAZY LOADING TEMPLATES ==================== -->
    <template id="tmpl_tabContent_pricing">
        ${tmpl.pricingContent}
    </template>

    <template id="tmpl_tabContent_analysis">
        ${tmpl.analysisContent}
    </template>

    <template id="tmpl_tabContent_regulations">
        ${tmpl.regulationsContent}
    </template>

    <template id="tmpl_tabContent_consulting">
        ${tmpl.consultingContent}
    </template>

    <template id="tmpl_tabContent_templates">
        ${tmpl.templatesContent}
    </template>

    <template id="tmpl_tabContent_feedback">
        ${tmpl.feedbackContent}
    </template>

    <!-- ==================== APPLICATION SCRIPTS ==================== -->
    <script>
        // Cấu hình Biểu lãi suất niêm yết hiện hành của Quỹ
        const NIEM_YET_RATES = [
            { maxDays: 29, minDays: 0, termName: 'Không kỳ hạn', rate: 0.20 },
            { maxDays: 89, minDays: 30, termName: '01 - 02 tháng', rate: 3.10 },
            { maxDays: 179, minDays: 90, termName: '03 - 05 tháng', rate: 3.60 },
            { maxDays: 364, minDays: 180, termName: '06 - 11 tháng', rate: 4.40 },
            { maxDays: 729, minDays: 365, termName: '12 - 18 tháng', rate: 5.60 },
            { maxDays: 99999, minDays: 730, termName: '24 tháng trở lên', rate: 5.50 }
        ];

        function getNiemYetItem(days) {
            for (const item of NIEM_YET_RATES) {
                if (days >= item.minDays && days <= item.maxDays) {
                    return item;
                }
            }
            return { termName: '24 tháng trở lên', rate: 5.50 };
        }

        function getNiemYetRate(days) {
            return getNiemYetItem(days).rate;
        }

        function getSingleTermRate(months) {
            if (months < 3) return 3.10;
            if (months < 6) return 3.60;
            if (months < 12) return 4.40;
            if (months <= 18) return 5.60;
            return 5.50;
        }

        function getEquivalentTermLabel(months, freq) {
            const avgMonths = (months + freq) / 2;
            if (avgMonths < 3) return '01 - 02 tháng niêm yết (3,10%)';
            if (avgMonths < 6) return '03 - 05 tháng niêm yết (3,60%)';
            if (avgMonths < 12) return '06 - 07 tháng niêm yết (4,40%)';
            if (avgMonths <= 18) return '12 - 13 tháng niêm yết (5,60%)';
            return '18 - 24 tháng niêm yết (5,50%)';
        }

        function getEquivalentTermRate(months, freq) {
            const avgMonths = (months + freq) / 2;
            if (avgMonths < 3) return 3.10;
            if (avgMonths < 6) return 3.60;
            if (avgMonths < 12) return 4.40;
            if (avgMonths <= 18) return 5.60;
            return 5.50;
        }

        // State lưu trữ mô phỏng Tab 1
        let currentTermMonths = 12;
        let currentDepositFreq = 1;
        let scheduleData = [];
        let maturityDateObj = null;
        let currentRegOption = 'opt1';

        // State lưu trữ Tab 2 Pricing (HĐQT)
        let pricingScheduleData = [];
        let pricingCalculatedRRef = 4.38;
        let pricingDeltaRate = 0.30;

        // Lazy load state mapping (7 tabs)
        const tabMounted = {
            calculator: true,
            pricing: false,
            analysis: false,
            regulations: false,
            consulting: false,
            templates: false,
            feedback: false
        };

        function lazyMountTab(tabId) {
            if (tabMounted[tabId]) return;
            const tpl = document.getElementById('tmpl_tabContent_' + tabId);
            const target = document.getElementById('tabContent_' + tabId);
            if (tpl && target) {
                target.appendChild(tpl.content.cloneNode(true));
                tabMounted[tabId] = true;
                if (tabId === 'pricing') {
                    initPricingTab();
                } else if (tabId === 'feedback') {
                    renderFeedbackList();
                }
            }
        }

        function switchTab(tabId) {
            lazyMountTab(tabId);
            const tabs = ['calculator', 'pricing', 'analysis', 'regulations', 'consulting', 'templates', 'feedback'];
            tabs.forEach(t => {
                const contentEl = document.getElementById('tabContent_' + t);
                const topBtn = document.getElementById('tabBtn_' + t);
                const btmBtn = document.getElementById('bottomNavBtn_' + t);

                if (contentEl) {
                    if (t === tabId) {
                        contentEl.classList.remove('hidden');
                        contentEl.classList.add('active');
                    } else {
                        contentEl.classList.add('hidden');
                        contentEl.classList.remove('active');
                    }
                }

                if (topBtn) {
                    if (t === tabId) {
                        topBtn.className = 'px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 bg-white text-emerald-950 font-bold shadow-xs';
                    } else {
                        topBtn.className = 'px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 text-slate-300 hover:text-white hover:bg-emerald-800/50';
                    }
                }

                if (btmBtn) {
                    if (t === tabId) {
                        btmBtn.className = 'flex-1 py-1 px-0.5 flex flex-col items-center justify-center text-emerald-800 font-bold transition';
                    } else {
                        btmBtn.className = 'flex-1 py-1 px-0.5 flex flex-col items-center justify-center text-slate-500 font-medium transition';
                    }
                }
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function formatVND(n) {
            return Math.round(Number(n) || 0).toLocaleString('vi-VN');
        }

        function parseMoney(str) {
            if (typeof str === 'number') return str;
            if (!str) return 0;
            return Number(String(str).replace(/[^0-9]/g, '')) || 0;
        }

        function handleMoneyInput(el) {
            const val = parseMoney(el.value);
            el.value = formatVND(val);
        }

        function toInputDateStr(date) {
            const y = date.getFullYear();
            const m = String(date.getMonth() + 1).padStart(2, '0');
            const d = String(date.getDate()).padStart(2, '0');
            return \`\${y}-\${m}-\${d}\`;
        }

        function toVNDateStr(date) {
            const d = String(date.getDate()).padStart(2, '0');
            const m = String(date.getMonth() + 1).padStart(2, '0');
            const y = date.getFullYear();
            return \`\${d}/\${m}/\${y}\`;
        }

        function parseLocalDate(str) {
            const [y, m, d] = str.split('-').map(Number);
            return new Date(y, m - 1, d);
        }

        function diffDays(d1, d2) {
            const utc1 = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());
            const utc2 = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate());
            return Math.round((utc2 - utc1) / (1000 * 60 * 60 * 24));
        }

        function addMonthsKeepDay(startDate, monthsToAdd, targetDay) {
            const y = startDate.getFullYear();
            const m = startDate.getMonth() + monthsToAdd;
            const targetYear = y + Math.floor(m / 12);
            const targetMonth = ((m % 12) + 12) % 12;
            const daysInTargetMonth = new Date(targetYear, targetMonth + 1, 0).getDate();
            const safeDay = Math.min(targetDay, daysInTargetMonth);
            return new Date(targetYear, targetMonth, safeDay);
        }

        function adjustIfWeekend(date) {
            const d = new Date(date.getTime());
            const dayOfWeek = d.getDay();
            if (dayOfWeek === 6) d.setDate(d.getDate() + 2);
            else if (dayOfWeek === 0) d.setDate(d.getDate() + 1);
            return d;
        }

        function readSimpleMoneyHint(amount) {
            if (amount >= 1000000) {
                const mil = amount / 1000000;
                return Number.isInteger(mil) ? \`\${mil} triệu\` : \`\${mil.toFixed(1)} triệu\`;
            }
            if (amount >= 1000) {
                const k = amount / 1000;
                return \`\${k} nghìn\`;
            }
            return amount > 0 ? \`\${amount} đ\` : '0 đ';
        }

        function showToast(msg, type = 'success') {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            const bg = type === 'success' ? 'bg-emerald-900 border-emerald-600 text-white' : 'bg-rose-900 border-rose-600 text-white';
            toast.className = \`px-4 py-3 rounded-xl border shadow-lg text-xs font-semibold flex items-center gap-2 transform transition-all duration-300 translate-y-2 opacity-0 \${bg}\`;
            toast.innerHTML = \`
                <svg class="w-4 h-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>\${msg}</span>
            \`;
            container.appendChild(toast);
            setTimeout(() => {
                toast.classList.remove('translate-y-2', 'opacity-0');
            }, 10);
            setTimeout(() => {
                toast.classList.add('opacity-0');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        let deferredPrompt = null;
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            const btn = document.getElementById('pwaInstallBtn');
            if (btn) btn.classList.remove('hidden');
        });

        function installPwaApp() {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        showToast('Đã cài đặt ứng dụng thành công!');
                    }
                    deferredPrompt = null;
                });
            } else {
                showToast('Để cài đặt: Bấm nút Chia sẻ/Menu trình duyệt -> Chọn "Thêm vào màn hình chính"');
            }
        }

        function switchRegulationOption(optId) {
            currentRegOption = optId;
            const opt1Btn = document.getElementById('regOptBtn_1');
            const opt2Btn = document.getElementById('regOptBtn_2');
            const opt1Content = document.getElementById('regOption1Content');
            const opt2Content = document.getElementById('regOption2Content');

            if (optId === 'opt1') {
                if (opt1Btn) opt1Btn.className = 'flex-1 py-2 px-3 rounded-lg font-bold text-xs sm:text-sm bg-white text-emerald-900 shadow-xs border border-emerald-300 transition-all text-center flex items-center justify-center gap-2';
                if (opt2Btn) opt2Btn.className = 'flex-1 py-2 px-3 rounded-lg font-medium text-xs sm:text-sm text-slate-300 hover:text-white hover:bg-emerald-800/50 transition-all text-center flex items-center justify-center gap-2';
                if (opt1Content) opt1Content.classList.remove('hidden');
                if (opt2Content) opt2Content.classList.add('hidden');
            } else {
                if (opt2Btn) opt2Btn.className = 'flex-1 py-2 px-3 rounded-lg font-bold text-xs sm:text-sm bg-white text-emerald-900 shadow-xs border border-emerald-300 transition-all text-center flex items-center justify-center gap-2';
                if (opt1Btn) opt1Btn.className = 'flex-1 py-2 px-3 rounded-lg font-medium text-xs sm:text-sm text-slate-300 hover:text-white hover:bg-emerald-800/50 transition-all text-center flex items-center justify-center gap-2';
                if (opt2Content) opt2Content.classList.remove('hidden');
                if (opt1Content) opt1Content.classList.add('hidden');
            }
        }

        function toggleAllRegulations(expand) {
            lazyMountTab('regulations');
            const activeContainer = document.getElementById(currentRegOption === 'opt1' ? 'regOption1Content' : 'regOption2Content');
            if (!activeContainer) return;
            const items = activeContainer.querySelectorAll('details.reg-item');
            items.forEach(d => {
                if (expand) d.setAttribute('open', '');
                else d.removeAttribute('open');
            });
            showToast(expand ? 'Đã hiển thị toàn bộ các điều khoản' : 'Đã thu gọn các điều khoản');
        }

        function toggleAllAnalysis(expand) {
            lazyMountTab('analysis');
            const secItems = document.querySelectorAll('#tabContent_analysis details');
            secItems.forEach(d => {
                if (expand) d.setAttribute('open', '');
                else d.removeAttribute('open');
            });
            showToast(expand ? 'Đã hiển thị toàn bộ báo cáo phân tích' : 'Đã thu gọn các mục báo cáo');
        }

        // Tình huống và Câu hỏi nay nằm trong Tab Nghiệp Vụ (consulting)
        function toggleAllSituations(expand) {
            lazyMountTab('consulting');
            const sitItems = document.querySelectorAll('#situationsContainer details.sit-item');
            sitItems.forEach(d => {
                if (expand) d.setAttribute('open', '');
                else d.removeAttribute('open');
            });
            showToast(expand ? 'Đã mở 15 tình huống' : 'Đã thu gọn tình huống');
        }

        function toggleAllFaqs(expand) {
            lazyMountTab('consulting');
            const faqItems = document.querySelectorAll('#faqsContainer details.faq-item');
            faqItems.forEach(d => {
                if (expand) d.setAttribute('open', '');
                else d.removeAttribute('open');
            });
            showToast(expand ? 'Đã mở 18 câu hỏi' : 'Đã thu gọn câu hỏi');
        }

        function selectTerm(months) {
            currentTermMonths = months;
            [3, 6, 12, 18, 24, 36, 60].forEach(m => {
                const btn = document.getElementById('termBtn_' + m);
                if (!btn) return;
                if (m === months) {
                    btn.className = 'py-2 px-1 rounded-xl border-2 border-emerald-600 bg-emerald-50/80 font-bold text-emerald-950 text-center';
                } else {
                    btn.className = 'py-2 px-1 rounded-xl border border-slate-200 font-semibold hover:border-emerald-400 text-slate-700 text-center';
                }
            });

            // Kiểm soát tính tương thích chu kỳ nộp với kỳ hạn
            const btnFreq3 = document.getElementById('freqBtn_3');
            const btnFreq6 = document.getElementById('freqBtn_6');

            if (months === 3) {
                if (btnFreq3) { btnFreq3.disabled = true; btnFreq3.classList.add('opacity-40', 'cursor-not-allowed'); }
                if (btnFreq6) { btnFreq6.disabled = true; btnFreq6.classList.add('opacity-40', 'cursor-not-allowed'); }
                if (currentDepositFreq > 1) changeDepositFreq(1);
            } else if (months === 6) {
                if (btnFreq3) { btnFreq3.disabled = false; btnFreq3.classList.remove('opacity-40', 'cursor-not-allowed'); }
                if (btnFreq6) { btnFreq6.disabled = true; btnFreq6.classList.add('opacity-40', 'cursor-not-allowed'); }
                if (currentDepositFreq === 6) changeDepositFreq(1);
            } else {
                if (btnFreq3) { btnFreq3.disabled = false; btnFreq3.classList.remove('opacity-40', 'cursor-not-allowed'); }
                if (btnFreq6) { btnFreq6.disabled = false; btnFreq6.classList.remove('opacity-40', 'cursor-not-allowed'); }
            }

            if (months === 3) document.getElementById('interestRate').value = '3.65';
            else if (months === 6) document.getElementById('interestRate').value = '4.15';
            else if (months === 12) document.getElementById('interestRate').value = '4.75';
            else if (months === 18) document.getElementById('interestRate').value = '4.75';
            else if (months === 24) document.getElementById('interestRate').value = '4.65';
            else if (months >= 36) document.getElementById('interestRate').value = '4.60';

            onParameterChange();
        }

        function changeDepositFreq(freq) {
            currentDepositFreq = freq;
            [1, 3, 6].forEach(f => {
                const btn = document.getElementById('freqBtn_' + f);
                if (!btn) return;
                if (f === freq) {
                    btn.className = 'py-2 px-2 rounded-xl border-2 border-emerald-600 bg-emerald-50/80 font-bold text-emerald-950 text-center';
                } else {
                    btn.className = 'py-2 px-2 rounded-xl border border-slate-200 font-semibold hover:border-emerald-400 text-slate-700 text-center';
                }
            });

            const hint = document.getElementById('freqHintText');
            const totalPeriods = Math.floor(currentTermMonths / freq);
            if (hint) {
                const freqName = freq === 1 ? '1 tháng/lần (Hàng tháng)' : (freq === 3 ? '3 tháng/lần (Hàng quý)' : '06 tháng/lần');
                hint.textContent = \`Kỳ hạn \${currentTermMonths} tháng, gửi \${freqName}: Tổng cộng \${totalPeriods} lần nộp tiền.\`;
            }

            onParameterChange();
        }

        function setQuickAmount(amount) {
            const input = document.getElementById('monthlyAmount');
            input.value = formatVND(amount);
            document.getElementById('amountTextHint').textContent = readSimpleMoneyHint(amount);
            onParameterChange();
        }

        function onParameterChange() {
            const monthlyAmount = parseMoney(document.getElementById('monthlyAmount').value);
            document.getElementById('amountTextHint').textContent = readSimpleMoneyHint(monthlyAmount);

            const startStr = document.getElementById('startDate').value;
            if (!startStr) return;
            const startDate = parseLocalDate(startStr);
            const dayRule = document.getElementById('depositDayRule').value;
            const shiftWeekend = document.getElementById('shiftWeekend').checked;

            const preferredDay = dayRule === 'same' ? startDate.getDate() : Number(dayRule);
            maturityDateObj = addMonthsKeepDay(startDate, currentTermMonths, startDate.getDate());

            const totalPeriods = Math.floor(currentTermMonths / currentDepositFreq);
            scheduleData = [];

            for (let i = 0; i < totalPeriods; i++) {
                const monthOffset = i * currentDepositFreq;
                let scheduledDate;
                if (i === 0) {
                    scheduledDate = new Date(startDate.getTime());
                } else {
                    scheduledDate = addMonthsKeepDay(startDate, monthOffset, preferredDay);
                }

                const actualDate = shiftWeekend ? adjustIfWeekend(scheduledDate) : new Date(scheduledDate.getTime());

                scheduleData.push({
                    period: i + 1,
                    monthOffset: monthOffset,
                    scheduledDate: scheduledDate,
                    actualDate: actualDate,
                    actualDateStr: toInputDateStr(actualDate),
                    amount: monthlyAmount,
                    daysToMaturity: 0,
                    interest: 0,
                    cumPrincipal: 0,
                    cumInterest: 0,
                    isEarlyOrLate: false
                });
            }

            renderAndCalculateTable();
            syncCustomerInfo();
        }

        function onRowEdit(idx, field, value) {
            if (field === 'actualDateStr') {
                scheduleData[idx].actualDateStr = value;
                scheduleData[idx].actualDate = parseLocalDate(value);
            } else if (field === 'amount') {
                scheduleData[idx].amount = parseMoney(value);
            }
            recalculateFromTable();
        }

        function renderAndCalculateTable() {
            const tbody = document.getElementById('scheduleTableBody');
            tbody.innerHTML = '';

            scheduleData.forEach((row, idx) => {
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-slate-50 transition';
                tr.id = 'row_' + idx;

                tr.innerHTML = \`
                    <td class="py-2.5 px-2.5 text-center font-bold text-slate-700">\${row.period}</td>
                    <td class="py-2.5 px-3 text-slate-600 text-xs">\${toVNDateStr(row.scheduledDate)}</td>
                    <td class="py-2.5 px-3">
                        <input type="date" value="\${row.actualDateStr}" 
                            onchange="onRowEdit(\${idx}, 'actualDateStr', this.value)"
                            class="px-2 py-1 text-xs font-semibold rounded-lg border border-slate-300 bg-white focus:ring-1 focus:ring-emerald-500 outline-none">
                    </td>
                    <td class="py-2.5 px-3 text-right">
                        <input type="text" inputmode="numeric" value="\${formatVND(row.amount)}"
                            oninput="onRowEdit(\${idx}, 'amount', this.value); handleMoneyInput(this);"
                            class="px-2 py-1 text-xs font-bold text-right rounded-lg border border-slate-300 bg-white focus:ring-1 focus:ring-emerald-500 outline-none w-28 tabular-nums">
                    </td>
                    <td id="cell_days_\${idx}" class="py-2.5 px-2.5 text-center text-slate-600 font-semibold tabular-nums">0</td>
                    <td id="cell_interest_\${idx}" class="py-2.5 px-3 text-right font-semibold text-emerald-800 tabular-nums">0 đ</td>
                    <td id="cell_cumPrincipal_\${idx}" class="py-2.5 px-3 text-right font-bold text-slate-800 tabular-nums">0 đ</td>
                \`;
                tbody.appendChild(tr);
            });

            recalculateFromTable();
        }

        function recalculateFromTable() {
            const rate = Number(document.getElementById('interestRate').value) || 0;
            let cumPrincipal = 0;
            let totalInterest = 0;

            scheduleData.forEach((row, idx) => {
                const days = Math.max(0, diffDays(row.actualDate, maturityDateObj));
                row.daysToMaturity = days;

                const periodInterest = (row.amount * days * (rate / 100)) / 365;
                row.interest = periodInterest;

                cumPrincipal += row.amount;
                row.cumPrincipal = cumPrincipal;
                totalInterest += periodInterest;

                const daysCell = document.getElementById('cell_days_' + idx);
                const intCell = document.getElementById('cell_interest_' + idx);
                const cumCell = document.getElementById('cell_cumPrincipal_' + idx);

                if (daysCell) daysCell.textContent = days;
                if (intCell) intCell.textContent = formatVND(periodInterest) + ' đ';
                if (cumCell) cumCell.textContent = formatVND(cumPrincipal) + ' đ';
            });

            const totalMaturity = cumPrincipal + totalInterest;

            document.getElementById('kpiTotalPrincipal').textContent = formatVND(cumPrincipal) + ' đ';
            document.getElementById('kpiPeriodsCount').textContent = \`\${scheduleData.length} lần nộp\`;
            document.getElementById('kpiTotalInterest').textContent = formatVND(totalInterest) + ' đ';
            document.getElementById('kpiTotalMaturity').textContent = formatVND(totalMaturity) + ' đ';
            if (maturityDateObj) {
                document.getElementById('kpiMaturityDate').textContent = \`Đáo hạn: \${toVNDateStr(maturityDateObj)}\`;
            }

            const effectiveCOF = cumPrincipal > 0 ? ((totalInterest / cumPrincipal) * (12 / currentTermMonths) * 100).toFixed(2) : '0';
            document.getElementById('kpiEffectiveRate').textContent = effectiveCOF.replace('.', ',') + ' %';

            document.getElementById('tableFooterPrincipal').textContent = formatVND(cumPrincipal) + ' đ';
            document.getElementById('tableFooterInterest').textContent = formatVND(totalInterest) + ' đ';
            document.getElementById('tableFooterTotal').textContent = formatVND(totalMaturity) + ' đ';

            updateSimulationComparison(cumPrincipal, totalInterest, rate);
        }

        function updateSimulationComparison(totalPrincipal, guiGopInterest, appliedRate) {
            document.getElementById('simCompare_guiGopInterest').textContent = formatVND(guiGopInterest) + ' đ';
            document.getElementById('simCompare_guiGopRate').textContent = \`Lãi suất: \${appliedRate}% / năm\`;

            const eqTermName = getEquivalentTermLabel(currentTermMonths, currentDepositFreq);
            const eqRate = getEquivalentTermRate(currentTermMonths, currentDepositFreq);
            document.getElementById('simCompare_tuongDuongTerm').textContent = \`Tương đương \${eqTermName}\`;
            document.getElementById('simCompare_tuongDuongRate').textContent = \`Lãi suất tương đương: \${eqRate.toFixed(2).replace('.', ',')}% / năm\`;

            let eqInterest = 0;
            scheduleData.forEach(r => {
                eqInterest += (r.amount * r.daysToMaturity * (eqRate / 100)) / 365;
            });
            document.getElementById('simCompare_tuongDuongInterest').textContent = formatVND(eqInterest) + ' đ';

            const diffEq = guiGopInterest - eqInterest;
            const advBox = document.getElementById('simCompare_tuongDuongAdvantage');
            if (diffEq >= 0) {
                advBox.innerHTML = \`✓ Gửi góp sinh lời cao hơn <strong class="text-emerald-950">+\${formatVND(diffEq)} đ</strong> so với việc khách tự chia nhỏ gửi từng sổ lẻ ngắn hạn.\`;
            } else {
                advBox.innerHTML = \`Tiền lãi gửi góp thấp hơn \${formatVND(Math.abs(diffEq))} đ so với lãi kỳ hạn tương đương.\`;
            }

            const singleRate = getSingleTermRate(currentTermMonths);
            document.getElementById('simCompare_cungKyTerm').textContent = \`Gửi 100% vốn (\${formatVND(totalPrincipal)} đ) ngay từ ngày đầu (\${currentTermMonths}T)\`;
            document.getElementById('simCompare_cungKyRate').textContent = \`Lãi suất niêm yết: \${singleRate.toFixed(2).replace('.', ',')}% / năm\`;

            const totalDays = scheduleData.length > 0 ? scheduleData[0].daysToMaturity : (currentTermMonths * 30);
            const singleInterest = (totalPrincipal * totalDays * (singleRate / 100)) / 365;
            document.getElementById('simCompare_cungKyInterest').textContent = formatVND(singleInterest) + ' đ';
        }

        function syncCustomerInfo() {
            const name = document.getElementById('custName').value.trim();
            const id = document.getElementById('custId').value.trim();
            const phone = document.getElementById('custPhone').value.trim();

            const pName = document.getElementById('pDoc_custName');
            const pId = document.getElementById('pDoc_custId');
            const pPhone = document.getElementById('pDoc_custPhone');

            if (pName) pName.textContent = name || '...................................................';
            if (pId) pId.textContent = id || '...................................';
            if (pPhone) pPhone.textContent = phone || '...................................';
        }

        function resetCustomerInfo() {
            document.getElementById('custName').value = '';
            document.getElementById('custId').value = '';
            document.getElementById('custPhone').value = '';
            syncCustomerInfo();
            showToast('Đã làm mới thông tin khách hàng');
        }

        function applyScenario(type) {
            if (type === 'huutri') {
                setQuickAmount(500000);
                selectTerm(12);
                changeDepositFreq(1);
                document.getElementById('interestRate').value = '4.75';
            } else if (type === 'tieuthuong') {
                setQuickAmount(2000000);
                selectTerm(24);
                changeDepositFreq(1);
                document.getElementById('interestRate').value = '4.65';
            } else if (type === 'hangquy') {
                setQuickAmount(3000000);
                selectTerm(24);
                changeDepositFreq(3);
                document.getElementById('interestRate').value = '4.80';
            }
            onParameterChange();
            showToast('Đã áp dụng kịch bản mẫu thành công');
        }

        function printPlanOnly() {
            syncCustomerInfo();

            const now = new Date();
            document.getElementById('printCurrentDay').textContent = String(now.getDate()).padStart(2, '0');
            document.getElementById('printCurrentMonth').textContent = String(now.getMonth() + 1).padStart(2, '0');
            document.getElementById('printCurrentYear').textContent = now.getFullYear();

            const freqName = currentDepositFreq === 1 ? 'Hàng tháng' : (currentDepositFreq === 3 ? 'Hàng quý' : '06 tháng/lần');
            document.getElementById('pDoc_termMonths').textContent = \`\${currentTermMonths} tháng (\${freqName})\`;
            document.getElementById('pDoc_interestRate').textContent = document.getElementById('interestRate').value + '% / năm';
            document.getElementById('pDoc_monthlyAmount').textContent = formatVND(parseMoney(document.getElementById('monthlyAmount').value)) + ' đ';

            if (scheduleData.length > 0) {
                document.getElementById('pDoc_startDate').textContent = toVNDateStr(scheduleData[0].actualDate);
            }
            if (maturityDateObj) {
                document.getElementById('pDoc_maturityDate').textContent = toVNDateStr(maturityDateObj);
            }
            document.getElementById('pDoc_totalPeriods').textContent = \`\${scheduleData.length} kỳ\`;

            const totalPrincipal = document.getElementById('tableFooterPrincipal').textContent;
            const totalInterest = document.getElementById('tableFooterInterest').textContent;
            const totalMaturity = document.getElementById('tableFooterTotal').textContent;

            document.getElementById('pDoc_totalPrincipal').textContent = totalPrincipal;
            document.getElementById('pDoc_totalInterest').textContent = totalInterest;
            document.getElementById('pDoc_totalMaturity').textContent = totalMaturity;

            document.getElementById('pDoc_footPrincipal').textContent = totalPrincipal;
            document.getElementById('pDoc_footInterest').textContent = totalInterest;
            document.getElementById('pDoc_footTotal').textContent = totalMaturity;

            const tbody = document.getElementById('printScheduleTableBody');
            tbody.innerHTML = '';

            scheduleData.forEach(row => {
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

            window.print();
        }

        function exportPlanToExcel() {
            if (!scheduleData || scheduleData.length === 0) {
                showToast('Chưa có dữ liệu kế hoạch để xuất Excel', 'error');
                return;
            }

            const custName = document.getElementById('custName').value.trim() || 'Thành_viên';
            const custId = document.getElementById('custId').value.trim() || '-';
            const custPhone = document.getElementById('custPhone').value.trim() || '-';
            const rate = Number(document.getElementById('interestRate').value) || 0;
            const totalPrincipal = scheduleData.reduce((s, r) => s + r.amount, 0);
            const totalInterest = scheduleData.reduce((s, r) => s + r.interest, 0);
            const totalMaturity = totalPrincipal + totalInterest;

            const freqName = currentDepositFreq === 1 ? 'Hàng tháng' : (currentDepositFreq === 3 ? 'Hàng quý' : '06 tháng/lần');

            let rowsXml = '';
            scheduleData.forEach(r => {
                rowsXml += \`
                <Row>
                    <Cell ss:StyleID="CellCenter"><Data ss:Type="Number">\${r.period}</Data></Cell>
                    <Cell ss:StyleID="CellCenter"><Data ss:Type="String">\${toVNDateStr(r.scheduledDate)}</Data></Cell>
                    <Cell ss:StyleID="CellCenter"><Data ss:Type="String">\${toVNDateStr(r.actualDate)}</Data></Cell>
                    <Cell ss:StyleID="CellMoney"><Data ss:Type="Number">\${Math.round(r.amount)}</Data></Cell>
                    <Cell ss:StyleID="CellCenter"><Data ss:Type="Number">\${r.daysToMaturity}</Data></Cell>
                    <Cell ss:StyleID="CellMoney"><Data ss:Type="Number">\${Math.round(r.interest)}</Data></Cell>
                    <Cell ss:StyleID="CellMoney"><Data ss:Type="Number">\${Math.round(r.cumPrincipal)}</Data></Cell>
                </Row>\`;
            });

            const xml = \`<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Styles>
  <Style ss:ID="Default" ss:Name="Normal"><Alignment ss:Vertical="Center"/><Font ss:FontName="Be Vietnam Pro" ss:Size="10"/></Style>
  <Style ss:ID="HeaderTitle"><Alignment ss:Horizontal="Center" ss:Vertical="Center"/><Font ss:FontName="Be Vietnam Pro" ss:Size="13" ss:Bold="1" ss:Color="#064E3B"/></Style>
  <Style ss:ID="SubTitle"><Alignment ss:Horizontal="Center" ss:Vertical="Center"/><Font ss:FontName="Be Vietnam Pro" ss:Size="10" ss:Italic="1" ss:Color="#475569"/></Style>
  <Style ss:ID="TableHeader"><Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/><Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/><Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/></Borders><Font ss:FontName="Be Vietnam Pro" ss:Size="10" ss:Bold="1" ss:Color="#FFFFFF"/><Interior ss:Color="#065F46" ss:Pattern="Solid"/></Style>
  <Style ss:ID="CellCenter"><Alignment ss:Horizontal="Center" ss:Vertical="Center"/><Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/><Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/></Borders><Font ss:FontName="Be Vietnam Pro" ss:Size="10"/></Style>
  <Style ss:ID="CellMoney"><Alignment ss:Horizontal="Right" ss:Vertical="Center"/><Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/><Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/></Borders><Font ss:FontName="Be Vietnam Pro" ss:Size="10"/><NumberFormat ss:Format="#,##0"/></Style>
  <Style ss:ID="CellTotal"><Alignment ss:Horizontal="Right" ss:Vertical="Center"/><Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2" ss:Color="#064E3B"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/><Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2" ss:Color="#064E3B"/></Borders><Font ss:FontName="Be Vietnam Pro" ss:Size="10" ss:Bold="1" ss:Color="#064E3B"/><Interior ss:Color="#ECFDF5" ss:Pattern="Solid"/><NumberFormat ss:Format="#,##0"/></Style>
  <Style ss:ID="CellTotalLabel"><Alignment ss:Horizontal="Left" ss:Vertical="Center"/><Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2" ss:Color="#064E3B"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CBD5E1"/><Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2" ss:Color="#064E3B"/></Borders><Font ss:FontName="Be Vietnam Pro" ss:Size="10" ss:Bold="1" ss:Color="#064E3B"/><Interior ss:Color="#ECFDF5" ss:Pattern="Solid"/></Style>
 </Styles>
 <Worksheet ss:Name="KeHoachGuiGop">
  <Table ss:ExpandedColumnCount="7" x:FullColumns="1" x:FullRows="1" ss:DefaultRowHeight="20">
   <Column ss:Width="40"/>
   <Column ss:Width="95"/>
   <Column ss:Width="95"/>
   <Column ss:Width="110"/>
   <Column ss:Width="65"/>
   <Column ss:Width="105"/>
   <Column ss:Width="120"/>

   <Row ss:Height="24"><Cell ss:MergeAcross="6" ss:StyleID="HeaderTitle"><Data ss:Type="String">QUỸ TÍN DỤNG NHÂN DÂN YÊN THỌ</Data></Cell></Row>
   <Row ss:Height="18"><Cell ss:MergeAcross="6" ss:StyleID="SubTitle"><Data ss:Type="String">Thôn Tân Lộc, xã Quý Lộc, tỉnh Thanh Hóa - Hotline: 0966.381.189 - 0989.349.336</Data></Cell></Row>
   <Row ss:Height="24"><Cell ss:MergeAcross="6" ss:StyleID="HeaderTitle"><Data ss:Type="String">BẢNG KẾ HOẠCH TÍCH LŨY TIẾT KIỆM GỬI GÓP ĐỊNH KỲ</Data></Cell></Row>
   <Row ss:Height="18"><Cell ss:MergeAcross="6" ss:StyleID="SubTitle"><Data ss:Type="String">Cơ sở tính lãi 365 ngày theo Thông tư 14/2017/TT-NHNN</Data></Cell></Row>
   <Row/>

   <Row><Cell><Data ss:Type="String">Khách hàng:</Data></Cell><Cell ss:MergeAcross="2"><Data ss:Type="String">\${custName}</Data></Cell><Cell><Data ss:Type="String">Kỳ hạn gửi:</Data></Cell><Cell ss:MergeAcross="1"><Data ss:Type="String">\${currentTermMonths} tháng (\${freqName})</Data></Cell></Row>
   <Row><Cell><Data ss:Type="String">Số CCCD:</Data></Cell><Cell ss:MergeAcross="2"><Data ss:Type="String">\${custId}</Data></Cell><Cell><Data ss:Type="String">Lãi suất:</Data></Cell><Cell ss:MergeAcross="1"><Data ss:Type="String">\${rate}% / năm (Cố định suốt kỳ)</Data></Cell></Row>
   <Row><Cell><Data ss:Type="String">Số ĐT:</Data></Cell><Cell ss:MergeAcross="2"><Data ss:Type="String">\${custPhone}</Data></Cell><Cell><Data ss:Type="String">Tổng vốn tích lũy:</Data></Cell><Cell ss:MergeAcross="1" ss:StyleID="CellMoney"><Data ss:Type="Number">\${Math.round(totalPrincipal)}</Data></Cell></Row>
   <Row><Cell><Data ss:Type="String">Tiền lãi dự kiến:</Data></Cell><Cell ss:MergeAcross="2" ss:StyleID="CellMoney"><Data ss:Type="Number">\${Math.round(totalInterest)}</Data></Cell><Cell><Data ss:Type="String">Tổng nhận đáo hạn:</Data></Cell><Cell ss:MergeAcross="1" ss:StyleID="CellMoney"><Data ss:Type="Number">\${Math.round(totalMaturity)}</Data></Cell></Row>
   <Row/>

   <Row ss:Height="24">
    <Cell ss:StyleID="TableHeader"><Data ss:Type="String">Kỳ</Data></Cell>
    <Cell ss:StyleID="TableHeader"><Data ss:Type="String">Ngày dự kiến</Data></Cell>
    <Cell ss:StyleID="TableHeader"><Data ss:Type="String">Ngày nộp thực tế</Data></Cell>
    <Cell ss:StyleID="TableHeader"><Data ss:Type="String">Số tiền nộp (VNĐ)</Data></Cell>
    <Cell ss:StyleID="TableHeader"><Data ss:Type="String">Số ngày</Data></Cell>
    <Cell ss:StyleID="TableHeader"><Data ss:Type="String">Tiền lãi kỳ (VNĐ)</Data></Cell>
    <Cell ss:StyleID="TableHeader"><Data ss:Type="String">Lũy kế gốc (VNĐ)</Data></Cell>
   </Row>

   \${rowsXml}

   <Row ss:Height="22">
    <Cell ss:MergeAcross="2" ss:StyleID="CellTotalLabel"><Data ss:Type="String">TỔNG CỘNG TOÀN KỲ HẠN</Data></Cell>
    <Cell ss:StyleID="CellTotal"><Data ss:Type="Number">\${Math.round(totalPrincipal)}</Data></Cell>
    <Cell ss:StyleID="CellCenter"><Data ss:Type="String">-</Data></Cell>
    <Cell ss:StyleID="CellTotal"><Data ss:Type="Number">\${Math.round(totalInterest)}</Data></Cell>
    <Cell ss:StyleID="CellTotal"><Data ss:Type="Number">\${Math.round(totalMaturity)}</Data></Cell>
   </Row>
  </Table>
 </Worksheet>
</Workbook>\`;

            const blob = new Blob([xml], { type: 'application/vnd.ms-excel;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            const safeName = custName.replace(/[^a-zA-Z0-9_\u00C0-\u1EF9]/g, '_');
            a.href = url;
            a.download = \`Ke_Hoach_Gui_Gop_\${safeName}_\${currentTermMonths}T.xls\`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showToast('Đã xuất file Excel bảng kế hoạch thành công!');
        }

        // ==================== TAB 2: ĐỊNH GIÁ & LÃI SUẤT THAM CHIẾU (HĐQT) ====================
        function initPricingTab() {
            updatePricingCalculation();
        }

        function onPricingDeltaChange(val) {
            pricingDeltaRate = Number(val);
            document.getElementById('pricingDeltaLabel').textContent = \`+\${pricingDeltaRate.toFixed(2).replace('.', ',')} % / năm\`;
            updatePricingCalculation();
        }

        function updatePricingCalculation() {
            const amountInput = document.getElementById('pricingMonthlyAmount');
            if (!amountInput) return;
            const monthlyAmount = parseMoney(amountInput.value);
            const term = Number(document.getElementById('pricingTermSelect').value) || 12;
            const freqSelect = document.getElementById('pricingFreqSelect');
            
            // Tự động điều chỉnh chu kỳ phù hợp kỳ hạn
            if (term === 3 && freqSelect && freqSelect.value !== '1') {
                freqSelect.value = '1';
            } else if (term === 6 && freqSelect && freqSelect.value === '6') {
                freqSelect.value = '1';
            }
            const freq = Number(freqSelect ? freqSelect.value : 1) || 1;

            const startDate = new Date();
            const maturityDate = addMonthsKeepDay(startDate, term, startDate.getDate());

            const totalPeriods = Math.floor(term / freq);
            let sumSD = 0;
            let sumSDR = 0;
            let totalPrincipal = 0;
            let totalInterestNiemyet = 0;
            let totalInterestProposed = 0;

            pricingScheduleData = [];

            for (let i = 0; i < totalPeriods; i++) {
                const monthOffset = i * freq;
                const depositDate = addMonthsKeepDay(startDate, monthOffset, startDate.getDate());
                const days = Math.max(0, diffDays(depositDate, maturityDate));

                const item = getNiemYetItem(days);
                const sd = monthlyAmount * days;
                const sdr = sd * (item.rate / 100);

                sumSD += sd;
                sumSDR += sdr;
                totalPrincipal += monthlyAmount;

                const intNiemyet = (monthlyAmount * days * (item.rate / 100)) / 365;
                totalInterestNiemyet += intNiemyet;

                pricingScheduleData.push({
                    period: i + 1,
                    depositDate: depositDate,
                    amount: monthlyAmount,
                    days: days,
                    termName: item.termName,
                    rate: item.rate,
                    sd: sd,
                    intNiemyet: intNiemyet,
                    intProposed: 0
                });
            }

            pricingCalculatedRRef = sumSD > 0 ? (sumSDR / sumSD) * 100 : 4.38;
            const proposedRate = pricingCalculatedRRef + pricingDeltaRate;

            pricingScheduleData.forEach(r => {
                r.intProposed = (r.amount * r.days * (proposedRate / 100)) / 365;
                totalInterestProposed += r.intProposed;
            });

            document.getElementById('pricingRRefResult').textContent = pricingCalculatedRRef.toFixed(2).replace('.', ',') + ' %';
            document.getElementById('pricingProposedRateResult').textContent = proposedRate.toFixed(2).replace('.', ',') + ' %';

            const singleRate = getSingleTermRate(term);
            document.getElementById('pricingSingleRateLabel').textContent = singleRate.toFixed(2).replace('.', ',') + '%/năm';

            const fundSavingsPercent = singleRate - proposedRate;
            const custBenefitPercent = proposedRate - pricingCalculatedRRef;

            document.getElementById('pricingFundSavingsPercent').textContent = fundSavingsPercent >= 0 
                ? \`Tiết kiệm \${fundSavingsPercent.toFixed(2).replace('.', ',')}%/năm\`
                : \`Cao hơn \${Math.abs(fundSavingsPercent).toFixed(2).replace('.', ',')}%\`;
            document.getElementById('pricingCustBenefitPercent').textContent = \`Cao hơn +\${custBenefitPercent.toFixed(2).replace('.', ',')}%/năm\`;

            document.getElementById('pricingSummaryTotalPrincipal').textContent = formatVND(totalPrincipal) + ' đ';

            const totalDays = pricingScheduleData.length > 0 ? pricingScheduleData[0].days : (term * 30);
            const singleInterestMoney = (totalPrincipal * totalDays * (singleRate / 100)) / 365;
            document.getElementById('pRow1_rate').textContent = singleRate.toFixed(2).replace('.', ',') + ' %';
            document.getElementById('pRow1_interest').textContent = formatVND(singleInterestMoney) + ' đ';
            document.getElementById('pRow1_cof').textContent = singleRate.toFixed(2).replace('.', ',') + ' %';

            const eqTermName = getEquivalentTermLabel(term, freq);
            document.getElementById('pRow2_termLabel').textContent = \`Tương đương \${eqTermName}\`;
            document.getElementById('pRow2_rate').textContent = pricingCalculatedRRef.toFixed(2).replace('.', ',') + ' %';
            document.getElementById('pRow2_interest').textContent = formatVND(totalInterestNiemyet) + ' đ';
            const cof2 = totalPrincipal > 0 ? ((totalInterestNiemyet / totalPrincipal) * (12 / term) * 100).toFixed(2) : '0';
            document.getElementById('pRow2_cof').textContent = cof2.replace('.', ',') + ' %';

            document.getElementById('pRow3_rate').textContent = proposedRate.toFixed(2).replace('.', ',') + ' %';
            document.getElementById('pRow3_interest').textContent = formatVND(totalInterestProposed) + ' đ';
            const cof3 = totalPrincipal > 0 ? ((totalInterestProposed / totalPrincipal) * (12 / term) * 100).toFixed(2) : '0';
            document.getElementById('pRow3_cof').textContent = cof3.replace('.', ',') + ' %';

            const fundSaveMoney = singleInterestMoney - totalInterestProposed;
            const custBenefitMoney = totalInterestProposed - totalInterestNiemyet;
            const fundPercentSave = singleInterestMoney > 0 ? ((fundSaveMoney / singleInterestMoney) * 100).toFixed(1) : '0';
            const custPercentBenefit = totalInterestNiemyet > 0 ? ((custBenefitMoney / totalInterestNiemyet) * 100).toFixed(1) : '0';

            document.getElementById('pRow3_fundSaveMoney').textContent = \`+\${formatVND(fundSaveMoney)} đ (-\${fundPercentSave}%)\`;
            document.getElementById('pRow3_custBenefitMoney').textContent = \`+\${formatVND(custBenefitMoney)} đ (+\${custPercentBenefit}%)\`;

            const tbody = document.getElementById('pricingScheduleTableBody');
            tbody.innerHTML = '';

            pricingScheduleData.forEach(row => {
                const diffRow = row.intProposed - row.intNiemyet;
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-slate-50 transition';
                tr.innerHTML = \`
                    <td class="py-2.5 px-2.5 text-center font-bold text-slate-700">\${row.period}</td>
                    <td class="py-2.5 px-3 text-slate-600">\${toVNDateStr(row.depositDate)}</td>
                    <td class="py-2.5 px-3 text-right font-semibold">\${formatVND(row.amount)}</td>
                    <td class="py-2.5 px-2.5 text-center font-bold text-slate-800">\${row.days}</td>
                    <td class="py-2.5 px-3 text-slate-700">\${row.termName}</td>
                    <td class="py-2.5 px-2.5 text-center font-bold text-slate-800">\${row.rate.toFixed(2)}%</td>
                    <td class="py-2.5 px-3 text-right font-medium text-slate-700">\${formatVND(row.intNiemyet)} đ</td>
                    <td class="py-2.5 px-3 text-right font-bold text-emerald-900 bg-emerald-50/40">\${formatVND(row.intProposed)} đ</td>
                    <td class="py-2.5 px-3 text-right font-bold \${diffRow >= 0 ? 'text-blue-700' : 'text-slate-500'}">\${diffRow >= 0 ? '+' : ''}\${formatVND(diffRow)} đ</td>
                \`;
                tbody.appendChild(tr);
            });

            document.getElementById('pFoot_totalPrincipal').textContent = formatVND(totalPrincipal) + ' đ';
            const avgDays = totalPrincipal > 0 ? Math.round(sumSD / totalPrincipal) : 0;
            document.getElementById('pFoot_avgDays').textContent = avgDays;
            document.getElementById('pFoot_totalInterestNiemyet').textContent = formatVND(totalInterestNiemyet) + ' đ';
            document.getElementById('pFoot_totalInterestProposed').textContent = formatVND(totalInterestProposed) + ' đ';
            const totalCustAdv = totalInterestProposed - totalInterestNiemyet;
            const custAdvEl = document.getElementById('pFoot_totalCustAdvantage');
            if (custAdvEl) {
                custAdvEl.textContent = '+' + formatVND(totalCustAdv) + ' đ';
            }
        }

        function applyPricingToSimulation() {
            const proposedRate = (pricingCalculatedRRef + pricingDeltaRate).toFixed(2);
            const term = Number(document.getElementById('pricingTermSelect').value) || 12;
            const freq = Number(document.getElementById('pricingFreqSelect').value) || 1;
            const amount = parseMoney(document.getElementById('pricingMonthlyAmount').value);

            setQuickAmount(amount);
            selectTerm(term);
            changeDepositFreq(freq);
            document.getElementById('interestRate').value = proposedRate;

            onParameterChange();
            switchTab('calculator');
            showToast(\`Đã áp dụng mức lãi suất đề xuất \${proposedRate}%/năm sang Tab Mô phỏng\`);
        }

        // ==================== MODAL VAY CẦM CỐ VS RÚT TRƯỚC HẠN ====================
        function openPledgeModal() {
            const modal = document.getElementById('pledgeModal');
            const select = document.getElementById('pledgeMonthSelect');
            select.innerHTML = '';

            scheduleData.forEach((row) => {
                const opt = document.createElement('option');
                opt.value = row.period;
                opt.textContent = \`Kỳ \${row.period} - Ngày \${toVNDateStr(row.actualDate)} (Đã gửi \${formatVND(row.cumPrincipal)} đ)\`;
                select.appendChild(opt);
            });

            const midIndex = Math.floor(scheduleData.length / 2);
            select.selectedIndex = Math.max(0, midIndex);

            calculatePledgeComparison();
            modal.classList.remove('hidden');
        }

        function closePledgeModal() {
            document.getElementById('pledgeModal').classList.add('hidden');
        }

        function calculatePledgeComparison() {
            const periodNum = Number(document.getElementById('pledgeMonthSelect').value) || 1;
            const targetRow = scheduleData[periodNum - 1];
            if (!targetRow) return;

            const cumPrincipal = targetRow.cumPrincipal;
            const withdrawRate = 0.20;
            const pledgedRate = Number(document.getElementById('interestRate').value) || 4.75;
            const loanRate = pledgedRate + 2.0;

            let withdrawInterest = 0;
            for (let i = 0; i < periodNum; i++) {
                const r = scheduleData[i];
                const days = Math.max(0, diffDays(r.actualDate, targetRow.actualDate));
                withdrawInterest += (r.amount * days * (withdrawRate / 100)) / 365;
            }

            const totalNormalInterest = Number(document.getElementById('tableFooterInterest').textContent.replace(/[^0-9]/g, '')) || 0;
            const remainingDays = Math.max(0, diffDays(targetRow.actualDate, maturityDateObj));
            const loanInterestCost = (cumPrincipal * remainingDays * (loanRate / 100)) / 365;
            const netPledgeBenefit = Math.max(0, totalNormalInterest - loanInterestCost);

            document.getElementById('compareWithdrawInterest').textContent = formatVND(withdrawInterest) + ' đ';
            document.getElementById('comparePledgeBenefit').textContent = formatVND(netPledgeBenefit) + ' đ';

            const adviceBox = document.getElementById('pledgeAdviceBox');
            if (netPledgeBenefit > withdrawInterest) {
                const diff = netPledgeBenefit - withdrawInterest;
                adviceBox.innerHTML = \`<strong class="text-emerald-800">Khuyến nghị tư vấn:</strong> Khách hàng <strong class="text-emerald-900">NÊN CHỌN VAY CẦM CỐ</strong>. Nhờ giữ nguyên lãi suất \${pledgedRate}% cho toàn bộ số tiền đã gửi, khách hàng sẽ nhận được thêm khoảng <strong class="text-emerald-900">\${formatVND(diff)} đ</strong> so với việc rút trước hạn chịu lãi 0,20%.\`;
            } else {
                adviceBox.innerHTML = \`<strong class="text-slate-800">Khuyến nghị tư vấn:</strong> Do thời gian còn lại đến ngày đáo hạn dài, việc tất toán trước hạn có thể phù hợp hơn nếu khách hàng không muốn gánh chi phí vay.\`;
            }
        }

        // ==================== HỆ THỐNG GÓP Ý & THẨM ĐỊNH NỘI BỘ ====================
        const FEEDBACK_STORAGE_KEY = 'QTD_TIETKIEM_GUIGOP_FEEDBACKS_REAL_V2';
        const CAN_BO_STORAGE_KEY = 'QTD_TIETKIEM_GUIGOP_CAN_BO_REAL_V2';
        const SPREADSHEET_ID = '1VnEcYhBkeBluNJmAagoIQkuaa2Vqikye-2Kk71iKNms';
        const GAS_API_URL = 'https://script.google.com/macros/s/AKfycbwOMk-2EIFd6rxT-rKcTUiUdlvYENZ8fIHx5QKrJu6oZ2J83f_xGxgpep0N13y7xvkM/exec';

        // 12 Cán bộ nhân viên thực tế tại QTDND Yên Thọ
        const INITIAL_CAN_BO_LIST = [
            { code: 'CB01', name: 'Trịnh Đức Anh', role: 'Chủ tịch Hội đồng quản trị', status: 'Chưa tham gia', count: 0 },
            { code: 'CB02', name: 'Nguyễn Văn Sơn', role: 'Giám đốc Quỹ', status: 'Chưa tham gia', count: 0 },
            { code: 'CB03', name: 'Vũ Thị Hiền', role: 'UV HĐQT', status: 'Chưa tham gia', count: 0 },
            { code: 'CB04', name: 'Nguyễn Thị Mến', role: 'Kế toán trưởng', status: 'Chưa tham gia', count: 0 },
            { code: 'CB05', name: 'Bùi Thị Thảo', role: 'Trưởng Ban Kiểm soát', status: 'Chưa tham gia', count: 0 },
            { code: 'CB06', name: 'Trịnh Thị Hiền', role: 'Kiểm soát viên KTNB', status: 'Chưa tham gia', count: 0 },
            { code: 'CB07', name: 'Nguyễn Hữu Nhân', role: 'Cán bộ Tín dụng', status: 'Chưa tham gia', count: 0 },
            { code: 'CB08', name: 'Lưu Thị Định', role: 'Cán bộ Tín dụng', status: 'Chưa tham gia', count: 0 },
            { code: 'CB09', name: 'Trần Như Huyền', role: 'Cán bộ Tín dụng', status: 'Chưa tham gia', count: 0 },
            { code: 'CB10', name: 'Phạm Thị Thảo', role: 'Thủ quỹ', status: 'Chưa tham gia', count: 0 },
            { code: 'CB11', name: 'Hoàng Thị Lan', role: 'Kế toán viên', status: 'Chưa tham gia', count: 0 },
            { code: 'CB12', name: 'Nguyễn Thị Sinh', role: 'Thẩm định tài sản', status: 'Chưa tham gia', count: 0 }
        ];

        let currentCanBoFilter = 'all';
        let selectedCanBoName = '';

        function getStoredCanBoList() {
            try {
                const raw = localStorage.getItem(CAN_BO_STORAGE_KEY);
                return raw ? JSON.parse(raw) : INITIAL_CAN_BO_LIST;
            } catch (e) {
                return INITIAL_CAN_BO_LIST;
            }
        }

        function saveStoredCanBoList(list) {
            try {
                localStorage.setItem(CAN_BO_STORAGE_KEY, JSON.stringify(list));
            } catch (e) {}
        }

        function getStoredFeedbacks() {
            try {
                const raw = localStorage.getItem(FEEDBACK_STORAGE_KEY);
                return raw ? JSON.parse(raw) : [];
            } catch (e) {
                return [];
            }
        }

        function saveStoredFeedbacks(list) {
            try {
                localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(list));
            } catch (e) {}
        }

        function setFeedbackRating(stars) {
            document.getElementById('fb_rating').value = stars;
            const container = document.getElementById('starRatingContainer') || document;
            const starsBtns = container.querySelectorAll('.fb-star');
            starsBtns.forEach((btn, idx) => {
                btn.className = idx < stars ? 'fb-star text-2xl text-amber-400 hover:scale-110 transition' : 'fb-star text-2xl text-slate-300 hover:scale-110 transition';
            });
            const valEl = document.getElementById('fb_ratingValue');
            if (valEl) valEl.textContent = stars + '/5 sao';
        }

        function setQuickRatingText(text) {
            const input = document.getElementById('fb_danhGiaInput');
            if (input) {
                input.value = text;
                input.focus();
            }
        }

        function onCanBoSelectChange(name) {
            selectedCanBoName = name;
            const canBoList = getStoredCanBoList();
            const found = canBoList.find(c => c.name === name);
            const roleInput = document.getElementById('fb_role');
            if (found && roleInput) {
                roleInput.value = found.role;
            }
            renderCanBoGrid(currentCanBoFilter);
        }

        function onSelectCanBoCard(name) {
            selectedCanBoName = name;
            const selectEl = document.getElementById('fb_canBoSelect');
            if (selectEl) {
                selectEl.value = name;
                onCanBoSelectChange(name);
            }
            const formSection = document.getElementById('feedbackFormSection');
            if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            showToast('Đã chọn đồng chí ' + name + ' - Mời đóng góp ý kiến thẩm định bên dưới');
        }

        function filterCanBoList(type) {
            currentCanBoFilter = type;
            const btnAll = document.getElementById('cbFilterBtn_all');
            const btnDone = document.getElementById('cbFilterBtn_done');
            const btnPending = document.getElementById('cbFilterBtn_pending');

            const activeClass = 'px-2.5 py-1 rounded-lg bg-white text-emerald-950 font-bold shadow-xs transition';
            const normalClass = 'px-2.5 py-1 rounded-lg text-slate-600 hover:text-emerald-900 transition';

            if (btnAll) btnAll.className = type === 'all' ? activeClass : normalClass;
            if (btnDone) btnDone.className = type === 'done' ? activeClass : normalClass;
            if (btnPending) btnPending.className = type === 'pending' ? activeClass : normalClass;

            renderCanBoGrid(type);
        }

        function renderCanBoGrid(filterType = 'all') {
            const container = document.getElementById('canBoGridContainer');
            if (!container) return;

            const list = getStoredCanBoList();
            let filtered = list;
            if (filterType === 'done') {
                filtered = list.filter(c => c.status === 'Đã tham gia');
            } else if (filterType === 'pending') {
                filtered = list.filter(c => c.status !== 'Đã tham gia');
            }

            container.innerHTML = filtered.map(c => {
                const isDone = c.status === 'Đã tham gia';
                const isSelected = selectedCanBoName === c.name;

                return \`
                    <button type="button" onclick="onSelectCanBoCard('\${c.name}')"
                        class="p-2.5 sm:p-3 rounded-xl border text-left flex flex-col justify-between gap-1.5 transition cursor-pointer min-h-[64px] \${
                            isSelected 
                                ? 'border-2 border-emerald-600 bg-emerald-50/90 shadow-xs ring-2 ring-emerald-500/30' 
                                : (isDone ? 'border-emerald-200 bg-emerald-50/20 hover:border-emerald-400' : 'border-slate-200 bg-slate-50/60 hover:border-emerald-300')
                        }">
                        <span class="font-bold text-xs sm:text-sm text-slate-900 leading-snug break-words \${isSelected ? 'text-emerald-950 font-black' : ''}">
                            \${c.name}
                        </span>
                        <div class="mt-auto pt-0.5">
                            \${isDone 
                                ? \`<span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-md border border-emerald-300">
                                      ✓ Đã tham gia
                                   </span>\`
                                : \`<span class="inline-flex items-center gap-1 text-[10px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                                      Chưa tham gia
                                   </span>\`
                            }
                        </div>
                    </button>
                \`;
            }).join('');
        }

        function renderFeedbackKPIs() {
            const feedbacks = getStoredFeedbacks();
            const canBoList = getStoredCanBoList();

            // 1. Tổng số ý kiến
            const totalFeedbacksEl = document.getElementById('stat_totalFeedbacks');
            if (totalFeedbacksEl) totalFeedbacksEl.textContent = feedbacks.length + ' ý kiến';

            // 2. Điểm đánh giá bình quân
            const sumRating = feedbacks.reduce((acc, cur) => acc + (cur.rating || 5), 0);
            const avgRating = feedbacks.length > 0 ? (sumRating / feedbacks.length).toFixed(1) : '5.0';
            const avgRatingEl = document.getElementById('stat_avgRating');
            if (avgRatingEl) avgRatingEl.textContent = avgRating.replace('.', ',') + ' / 5,0';

            // 3. Tỷ lệ tham gia
            const totalCanBo = canBoList.length;
            const doneCanBo = canBoList.filter(c => c.status === 'Đã tham gia').length;
            const partPercent = totalCanBo > 0 ? ((doneCanBo / totalCanBo) * 100).toFixed(1) : '0';
            const partEl = document.getElementById('stat_participation');
            const partRateEl = document.getElementById('stat_participationRate');
            if (partEl) partEl.textContent = doneCanBo + ' / ' + totalCanBo + ' cán bộ';
            if (partRateEl) partRateEl.textContent = 'Tỷ lệ: ' + partPercent.replace('.', ',') + '%';

            // 4. Cán bộ đóng góp nhiều nhất
            let topCanBo = null;
            canBoList.forEach(c => {
                if (c.count > 0 && (!topCanBo || c.count > topCanBo.count)) {
                    topCanBo = c;
                }
            });
            const topAuthorEl = document.getElementById('stat_topContributor');
            const topCountEl = document.getElementById('stat_topContributorCount');
            if (topAuthorEl) topAuthorEl.textContent = topCanBo ? topCanBo.name : 'Chưa có';
            if (topCountEl) topCountEl.textContent = topCanBo ? (topCanBo.count + ' ý kiến đóng góp') : '0 ý kiến đóng góp';

            // Cập nhật badge đếm trên header tab và sổ
            const badge1 = document.getElementById('feedbackCountBadge');
            if (badge1) badge1.textContent = feedbacks.length + ' ý kiến';
            const badge2 = document.getElementById('feedbackCountBadgeHeader');
            if (badge2) badge2.textContent = feedbacks.length;
        }

        function renderFeedbackList() {
            renderFeedbackKPIs();
            renderCanBoGrid(currentCanBoFilter);

            const container = document.getElementById('feedbackListContainer');
            if (!container) return;
            const list = getStoredFeedbacks();

            if (list.length === 0) {
                container.innerHTML = \`
                    <div class="text-center py-12 px-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                        <div class="text-2xl">📝</div>
                        <div class="font-bold text-slate-800 text-sm">Chưa có ý kiến thẩm định nào trên hệ thống</div>
                        <div class="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                            Kính mời các đồng chí trong danh bạ chọn tên bên cạnh và gửi ý kiến đóng góp đầu tiên để Quỹ tổng hợp báo cáo Hội đồng quản trị.
                        </div>
                    </div>
                \`;
                return;
            }

            container.innerHTML = list.map(item => {
                const starsHtml = '★'.repeat(item.rating || 5) + '☆'.repeat(5 - (item.rating || 5));
                const initial = (item.author || 'C').trim().charAt((item.author || 'C').trim().lastIndexOf(' ') + 1) || item.author.charAt(0);

                return \`
                    <div class="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-emerald-300 transition space-y-3">
                        <div class="flex items-start justify-between gap-3">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 font-black text-sm flex items-center justify-center shrink-0 border border-emerald-300 shadow-xs">
                                    \${initial}
                                </div>
                                <div>
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="font-bold text-xs sm:text-sm text-slate-900">\${item.author}</span>
                                        <span class="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
                                            \${item.role}
                                        </span>
                                    </div>
                                    <div class="text-amber-400 text-xs mt-0.5 tracking-tight font-bold flex items-center gap-1.5 flex-wrap">
                                        <span>\${starsHtml}</span>
                                        <span class="text-[11px] text-emerald-900 font-semibold">\${item.danhGia || item.ratingLabel || ''}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="text-right shrink-0">
                                <div class="text-[10px] text-slate-400 font-medium tabular-nums">\${item.timestamp}</div>
                                <span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300 mt-1">
                                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                                    \${item.status || 'Đã tiếp nhận'}
                                </span>
                            </div>
                        </div>

                        <!-- Nội dung góp ý chi tiết -->
                        <div class="pl-1 sm:pl-13 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                            \${item.content}
                        </div>

                        <!-- Phản hồi từ Quỹ nếu có -->
                        \${item.response ? \`
                            <div class="mt-2 ml-1 sm:ml-13 p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950">
                                <div class="font-bold flex items-center gap-1.5 mb-1 text-emerald-900">
                                    <svg class="w-3.5 h-3.5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/></svg>
                                    Phản hồi từ Ban Điều Hành:
                                </div>
                                <p class="text-slate-700 leading-relaxed">\${item.response}</p>
                                \${item.responseTime ? \`<div class="text-[10px] text-slate-400 mt-1 text-right tabular-nums">\${item.responseTime}</div>\` : ''}
                            </div>
                        \` : ''}
                    </div>
                \`;
            }).join('');
        }

        async function submitFeedbackForm(e) {
            e.preventDefault();
            const selectEl = document.getElementById('fb_canBoSelect');
            const author = selectEl ? selectEl.value : '';
            const role = document.getElementById('fb_role') ? document.getElementById('fb_role').value : 'Cán bộ';
            const rating = Number(document.getElementById('fb_rating').value) || 5;
            const danhGia = document.getElementById('fb_danhGiaInput') ? document.getElementById('fb_danhGiaInput').value.trim() : 'Rất thiết thực, khả thi cao';
            const content = document.getElementById('fb_content').value.trim();

            if (!author || !content) {
                showToast('Vui lòng chọn họ tên cán bộ và nhập đầy đủ nội dung ý kiến', 'error');
                return;
            }

            const btn = document.getElementById('fbSubmitBtn');
            if (btn) {
                btn.disabled = true;
                btn.innerHTML = '<span class="inline-block animate-spin mr-2">⟳</span> Đang lưu dữ liệu...';
            }

            const now = new Date();
            const timeStr = toVNDateStr(now) + ' ' + String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');

            const newFb = {
                id: 'YK_' + Date.now(),
                timestamp: timeStr,
                author: author,
                role: role,
                rating: rating,
                danhGia: danhGia,
                content: content,
                status: 'Đã tiếp nhận',
                response: '',
                responseTime: ''
            };

            // Lưu feedbacks vào state & localStorage
            const list = getStoredFeedbacks();
            list.unshift(newFb);
            saveStoredFeedbacks(list);

            // Cập nhật cán bộ trong danh bạ
            const canBoList = getStoredCanBoList();
            const cb = canBoList.find(c => c.name === author);
            if (cb) {
                cb.status = 'Đã tham gia';
                cb.count = (cb.count || 0) + 1;
                saveStoredCanBoList(canBoList);
            }

            // Render lại ngay lập tức
            renderFeedbackList();

            // Đồng bộ dữ liệu lên hệ thống nếu có kết nối
            try {
                fetch(GAS_API_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        author: author,
                        role: role,
                        rating: rating,
                        ratingLabel: danhGia,
                        content: content
                    })
                }).catch(() => {});
            } catch (err) {}

            if (btn) {
                btn.disabled = false;
                btn.innerHTML = '<svg class="w-4 h-4 text-emerald-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg> <span>Gửi Ý Kiến Thẩm Định</span>';
            }

            document.getElementById('fb_content').value = '';
            showToast('Đã ghi nhận ý kiến thẩm định của đồng chí ' + author + ' thành công!');
        }

        async function syncFeedbacksFromGoogleSheet() {
            showToast('Đang kết nối và làm mới dữ liệu từ hệ thống...');
            try {
                // 1. Đọc sheet DANH_SACH_CAN_BO qua GViz API
                const urlCB = 'https://docs.google.com/spreadsheets/d/' + SPREADSHEET_ID + '/gviz/tq?tqx=out:json&sheet=' + encodeURIComponent('DANH_SACH_CAN_BO');
                const resCB = await fetch(urlCB);
                const textCB = await resCB.text();
                const jsonCB = JSON.parse(textCB.substring(textCB.indexOf('{'), textCB.lastIndexOf('}') + 1));
                const rowsCB = jsonCB.table.rows.map(r => r.c.map(cell => cell ? cell.v : null));

                const freshCanBoList = [];
                for (let i = 0; i < rowsCB.length; i++) {
                    const r = rowsCB[i];
                    if (!r[1] || r[0] === 'Mã cán bộ' || r[1] === 'Họ và tên') continue;
                    freshCanBoList.push({
                        code: r[0] || ('CB' + (freshCanBoList.length + 1)),
                        name: String(r[1]).trim(),
                        role: r[2] ? String(r[2]).trim() : 'Cán bộ',
                        status: 'Chưa tham gia',
                        count: 0
                    });
                }

                // 2. Đọc sheet Y_KIEN_DONG_GOP qua GViz API
                const urlYK = 'https://docs.google.com/spreadsheets/d/' + SPREADSHEET_ID + '/gviz/tq?tqx=out:json&sheet=' + encodeURIComponent('Y_KIEN_DONG_GOP');
                const resYK = await fetch(urlYK);
                const textYK = await resYK.text();
                const jsonYK = JSON.parse(textYK.substring(textYK.indexOf('{'), textYK.lastIndexOf('}') + 1));
                const rowsYK = jsonYK.table.rows.map(r => r.c.map(cell => cell ? cell.v : null));

                const freshFeedbacks = [];
                for (let i = 0; i < rowsYK.length; i++) {
                    const r = rowsYK[i];
                    if (!r[2] || r[0] === 'Mã ý kiến' || r[2] === 'Họ và tên cán bộ') continue;
                    freshFeedbacks.push({
                        id: r[0] || ('YK_' + i),
                        timestamp: r[1] || '',
                        author: String(r[2]).trim(),
                        role: r[3] || '',
                        rating: Number(r[4]) || 5,
                        danhGia: r[5] || '',
                        content: r[6] || '',
                        status: r[7] || 'Đã tiếp nhận',
                        response: r[8] || '',
                        responseTime: r[9] || ''
                    });
                }

                // 3. So khớp trạng thái cán bộ theo các ý kiến thực tế
                freshFeedbacks.forEach(fb => {
                    const cb = freshCanBoList.find(c => c.name === fb.author);
                    if (cb) {
                        cb.status = 'Đã tham gia';
                        cb.count = (cb.count || 0) + 1;
                    }
                });

                if (freshCanBoList.length > 0) {
                    saveStoredCanBoList(freshCanBoList);
                }
                saveStoredFeedbacks(freshFeedbacks);

                renderFeedbackList();
                showToast('Đã làm mới dữ liệu thành công! Có ' + freshFeedbacks.length + ' ý kiến và ' + freshCanBoList.length + ' cán bộ.');
            } catch (err) {
                console.warn('Sync error, fallback local:', err);
                renderFeedbackList();
                showToast('Đang hiển thị dữ liệu lưu trữ nội bộ đầy đủ!');
            }
        }

        // ==================== KHỞI ĐỘNG HỆ THỐNG ====================
        window.addEventListener('DOMContentLoaded', () => {
            const today = new Date();
            const dateInput = document.getElementById('startDate');
            if (dateInput) dateInput.value = toInputDateStr(today);

            onParameterChange();

            // Đăng ký Service Worker offline cache
            if ('serviceWorker' in navigator) {
                const swCode = \`
                    const CACHE_NAME = 'tkgui-gop-v4';
                    self.addEventListener('install', (e) => {
                        self.skipWaiting();
                    });
                    self.addEventListener('activate', (e) => {
                        e.waitUntil(clients.claim());
                    });
                    self.addEventListener('fetch', (e) => {
                        e.respondWith(
                            caches.match(e.request).then(res => res || fetch(e.request).catch(() => caches.match('./index.html')))
                        );
                    });
                \`;
                const blob = new Blob([swCode], { type: 'application/javascript' });
                const swUrl = URL.createObjectURL(blob);
                navigator.serviceWorker.register(swUrl).catch(() => {});
            }
        });
    </script>
</body>
</html>
`;

console.log('Writing index.html with length: ' + html.length + '...');
fs.writeFileSync('D:/Antigravity Projects/TKGuiGop/index.html', html, 'utf8');
console.log('Successfully written refined index.html!');
