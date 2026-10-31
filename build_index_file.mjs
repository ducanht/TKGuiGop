import fs from 'fs';

console.log('Reading template strings...');
const tmpl = JSON.parse(fs.readFileSync('D:/Antigravity Projects/TKGuiGop/data/template_strings.json', 'utf8'));

console.log('Constructing full HTML...');

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
    <meta name="description" content="Công cụ tính toán mô phỏng, định giá lãi suất dòng tiền và hệ thống văn kiện Quy định Tiết kiệm gửi góp định kỳ - QTDND Yên Thọ">

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
        /* Mobile Money Input Standard */
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
        /* Details summary animation */
        details summary::-webkit-details-marker {
            display: none;
        }
        details summary {
            list-style: none;
        }
        /* Print Styles */
        @media print {
            .no-print, header, nav, #bottomNavBar, .no-print-area {
                display: none !important;
            }
            body {
                background: white !important;
                color: black !important;
                padding: 0 !important;
                margin: 0 !important;
            }
            .tab-content {
                display: block !important;
            }
            .print-only {
                display: block !important;
            }
            .page-break {
                page-break-before: always;
            }
            #printHeader {
                display: block !important;
            }
            .shadow-xs, .shadow-sm, .shadow-md, .shadow-lg {
                box-shadow: none !important;
            }
            .border {
                border-color: #cbd5e1 !important;
            }
        }
        .print-only {
            display: none;
        }
        /* Custom scrollbars */
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

                <!-- Action Tools (Print, PWA, Hotline) -->
                <div class="flex items-center gap-2">
                    <button onclick="window.print()" class="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-emerald-800/90 hover:bg-emerald-700 text-white text-xs font-semibold border border-emerald-600 shadow-xs flex items-center gap-1.5 transition">
                        <svg class="w-4 h-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
                        </svg>
                        <span class="hidden sm:inline">In A4</span>
                    </button>
                    <button id="pwaInstallBtn" onclick="installPwaApp()" class="hidden px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-amber-950 text-xs font-bold shadow-xs items-center gap-1.5 transition">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                        </svg>
                        <span>Cài App</span>
                    </button>
                </div>
            </div>

            <!-- DESKTOP NAVIGATION TABS -->
            <div class="hidden sm:flex space-x-1 border-t border-emerald-800/50 pt-2 pb-2 overflow-x-auto text-xs font-semibold">
                <button id="tabBtn_calculator" onclick="switchTab('calculator')" class="px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 bg-white text-emerald-950 font-bold shadow-xs">
                    <svg class="w-4 h-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                    <span>Mô Phỏng & Định Giá</span>
                </button>
                <button id="tabBtn_analysis" onclick="switchTab('analysis')" class="px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 text-slate-300 hover:text-white hover:bg-emerald-800/50">
                    <svg class="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                    <span>Báo Cáo Phân Tích (11 Phần)</span>
                </button>
                <button id="tabBtn_regulations" onclick="switchTab('regulations')" class="px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 text-slate-300 hover:text-white hover:bg-emerald-800/50">
                    <svg class="w-4 h-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                    <span>Quy Định (PA 1 & PA 2)</span>
                </button>
                <button id="tabBtn_consulting" onclick="switchTab('consulting')" class="px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 text-slate-300 hover:text-white hover:bg-emerald-800/50">
                    <svg class="w-4 h-4 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                    <span>Cẩm Nang Nghiệp Vụ</span>
                </button>
                <button id="tabBtn_templates" onclick="switchTab('templates')" class="px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 text-slate-300 hover:text-white hover:bg-emerald-800/50">
                    <svg class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>
                    <span>Biểu Mẫu A4</span>
                </button>
                <button id="tabBtn_feedback" onclick="switchTab('feedback')" class="px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 text-slate-300 hover:text-white hover:bg-emerald-800/50">
                    <svg class="w-4 h-4 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
                    <span>Ý Kiến Cán Bộ</span>
                </button>
            </div>
        </div>
    </header>

    <!-- KHUNG IN A4 TIÊU CHUẨN (Chỉ hiện khi In) -->
    <div id="printHeader" class="print-only max-w-4xl mx-auto p-4 mb-4 border-b border-slate-300">
        <div class="flex justify-between items-start text-xs font-sans">
            <div>
                <div class="font-bold uppercase text-slate-900">QUỸ TÍN DỤNG NHÂN DÂN YÊN THỌ</div>
                <div>Thôn Tân Lộc, xã Quý Lộc, tỉnh Thanh Hóa</div>
                <div>Hotline: 0966.381.189 - 0989.349.336</div>
            </div>
            <div class="text-right">
                <div class="font-bold uppercase text-slate-900">BẢNG KẾ HOẠCH TÍCH LŨY TIẾT KIỆM GỬI GÓP</div>
                <div class="italic text-slate-600">Ngày lập: <span id="printDateSpan"></span></div>
            </div>
        </div>
        <div class="mt-3 pt-2 border-t border-dotted border-slate-300 text-xs flex justify-between">
            <div>Khách hàng: <strong id="printCustName" class="text-slate-900">...................................................</strong></div>
            <div>Số CCCD: <span id="printCustId">...................................</span></div>
            <div>Số ĐT: <span id="printCustPhone">...................................</span></div>
        </div>
    </div>

    <!-- MAIN APP CONTAINER -->
    <main class="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 lg:p-8">

        <!-- TAB 1: MÔ PHỎNG & ĐỊNH GIÁ LÃI SUẤT (Mounted by Default) -->
        <section id="tabContent_calculator" class="tab-content active space-y-6">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">

                <!-- CỘT TRÁI: NHẬP THAM SỐ & KỊCH BẢN (Ẩn khi in) -->
                <aside class="lg:col-span-4 space-y-5 no-print">
                    
                    <!-- Khối 1: Thông tin khách hàng & Tham số -->
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
                                <input type="text" id="custName" placeholder="Ví dụ: Lê Thị Mai" oninput="syncPrintHeader()"
                                    class="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none">
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
                                <div class="grid grid-cols-3 gap-1.5 text-xs">
                                    <button type="button" onclick="selectTerm(6)" id="termBtn_6" class="py-2 px-1 rounded-xl border border-slate-200 font-semibold hover:border-emerald-400 text-slate-700">6 tháng</button>
                                    <button type="button" onclick="selectTerm(12)" id="termBtn_12" class="py-2 px-1 rounded-xl border-2 border-emerald-600 bg-emerald-50/80 font-bold text-emerald-950">12 tháng</button>
                                    <button type="button" onclick="selectTerm(18)" id="termBtn_18" class="py-2 px-1 rounded-xl border border-slate-200 font-semibold hover:border-emerald-400 text-slate-700">18 tháng</button>
                                    <button type="button" onclick="selectTerm(24)" id="termBtn_24" class="py-2 px-1 rounded-xl border border-slate-200 font-semibold hover:border-emerald-400 text-slate-700">24 tháng</button>
                                    <button type="button" onclick="selectTerm(36)" id="termBtn_36" class="py-2 px-1 rounded-xl border border-slate-200 font-semibold hover:border-emerald-400 text-slate-700">36 tháng</button>
                                    <button type="button" onclick="selectTerm(60)" id="termBtn_60" class="py-2 px-1 rounded-xl border border-slate-200 font-semibold hover:border-emerald-400 text-slate-700">60 tháng</button>
                                </div>
                            </div>

                            <!-- Chu kỳ nộp tiền (Đa chu kỳ: 1T, 3T, 6T) -->
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
                                    <span id="appliedRateLabel" class="text-[11px] font-bold text-emerald-800">Cố định suốt kỳ</span>
                                </div>
                                <div class="relative">
                                    <input type="number" step="0.05" id="interestRate" value="4.75" oninput="onParameterChange(); calculateRRef();"
                                        class="money-input w-full px-3 py-2 text-base font-bold tabular-nums rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none">
                                    <span class="absolute right-3 top-2.5 sm:top-2 text-xs font-semibold text-slate-400">% / năm</span>
                                </div>
                            </div>

                            <!-- Ngày bắt đầu & Quy tắc ngày gửi -->
                            <div class="grid grid-cols-2 gap-2">
                                <div>
                                    <label class="block text-xs font-bold text-slate-700 mb-1">Ngày mở sổ (Kỳ 1)</label>
                                    <input type="date" id="startDate" onchange="onParameterChange(); calculateRRef();"
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

                            <!-- Tùy chọn dời ngày nghỉ cuối tuần -->
                            <div class="pt-1">
                                <label class="flex items-center gap-2 cursor-pointer text-xs text-slate-700 select-none">
                                    <input type="checkbox" id="shiftWeekend" checked onchange="onParameterChange()" class="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4">
                                    <span>Tự động dời ngày Thứ Bảy/Chủ Nhật sang Thứ Hai</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Kịch bản tư vấn mẫu nhanh -->
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
                                    <div class="text-xs font-bold text-slate-800">Tích lũy theo vụ mùa / Hàng quý</div>
                                    <div class="text-[11px] text-slate-500">3.000.000đ/quý • Kỳ hạn 24 tháng</div>
                                </div>
                                <span class="text-xs text-emerald-700 font-bold shrink-0">Áp dụng →</span>
                            </button>
                        </div>
                    </div>
                </aside>

                <!-- CỘT PHẢI: KẾT QUẢ, CÔNG CỤ ĐỊNH GIÁ R_REF & BẢNG TIẾN ĐỘ -->
                <section class="lg:col-span-8 space-y-5">
                    
                    <!-- 4 Thẻ KPI Tổng Quan Kết Quả -->
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                        <div class="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200 shadow-xs">
                            <span class="text-[11px] font-bold text-slate-500 uppercase block">Tổng Vốn Gốc Gửi</span>
                            <div id="kpiTotalPrincipal" class="text-base sm:text-xl font-extrabold text-slate-900 tabular-nums mt-1">6.000.000 đ</div>
                            <span id="kpiPeriodsCount" class="text-[11px] text-emerald-700 font-medium">12 lần nộp</span>
                        </div>
                        <div class="bg-white rounded-2xl p-3.5 sm:p-4 border border-emerald-200 shadow-xs bg-emerald-50/30">
                            <span class="text-[11px] font-bold text-emerald-800 uppercase block">Tiền Lãi Dự Kiến</span>
                            <div id="kpiTotalInterest" class="text-base sm:text-xl font-extrabold text-emerald-700 tabular-nums mt-1">154.375 đ</div>
                            <span class="text-[11px] text-slate-500 font-medium">Cơ sở 365 ngày</span>
                        </div>
                        <div class="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200 shadow-xs">
                            <span class="text-[11px] font-bold text-slate-500 uppercase block">Tổng Nhận Đáo Hạn</span>
                            <div id="kpiTotalMaturity" class="text-base sm:text-xl font-extrabold text-slate-900 tabular-nums mt-1">6.154.375 đ</div>
                            <span id="kpiMaturityDate" class="text-[11px] text-slate-500 font-medium">Đáo hạn: ...</span>
                        </div>
                        <div class="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200 shadow-xs">
                            <span class="text-[11px] font-bold text-slate-500 uppercase block">Chi Phí Vốn (COF)</span>
                            <div id="kpiEffectiveRate" class="text-base sm:text-xl font-extrabold text-teal-700 tabular-nums mt-1">2,57 %</div>
                            <span class="text-[11px] text-slate-500 font-medium">Trên tổng quy mô</span>
                        </div>
                    </div>

                    <!-- CÔNG CỤ ĐỊNH GIÁ LÃI SUẤT GỬI GÓP TỐI ƯU (R_REF DÒNG TIỀN) -->
                    <div class="bg-white rounded-2xl p-5 sm:p-6 shadow-xs border-2 border-emerald-500/80 no-print">
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-3">
                            <div>
                                <div class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                                    <svg class="w-3.5 h-3.5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                                    CÔNG CỤ ĐỊNH GIÁ DÒNG TIỀN HỘI ĐỒNG QUẢN TRỊ
                                </div>
                                <h3 class="text-base sm:text-lg font-bold text-slate-900 mt-1">
                                    Xác Định Lãi Suất Tham Chiếu Bình Quân (<span class="text-emerald-700">R_ref</span>)
                                </h3>
                            </div>
                            <div class="text-right">
                                <span class="text-xs text-slate-500">Lãi suất gửi 1 lần cùng kỳ:</span>
                                <span id="rSingleRateBadge" class="text-sm font-extrabold text-slate-900 ml-1">5,60%/năm</span>
                            </div>
                        </div>

                        <!-- Biểu lãi suất niêm yết hiện hành của Quỹ -->
                        <div class="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                            <div class="text-xs font-bold text-slate-700 mb-2 flex items-center justify-between">
                                <span>Biểu Lãi Suất Tiền Gửi Niêm Yết Hiện Hành (QTDND Yên Thọ)</span>
                                <span class="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Đồng bộ sheet Lai_suat_niem_yet</span>
                            </div>
                            <div class="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs">
                                <div class="p-2 rounded-lg bg-white border border-slate-200">
                                    <div class="text-[10px] text-slate-500">KKH (&lt;30N)</div>
                                    <div class="font-bold text-slate-800 mt-0.5">0,20%</div>
                                </div>
                                <div class="p-2 rounded-lg bg-white border border-slate-200">
                                    <div class="text-[10px] text-slate-500">1 - 2 tháng</div>
                                    <div class="font-bold text-slate-800 mt-0.5">3,10%</div>
                                </div>
                                <div class="p-2 rounded-lg bg-white border border-slate-200">
                                    <div class="text-[10px] text-slate-500">3 - 5 tháng</div>
                                    <div class="font-bold text-slate-800 mt-0.5">3,60%</div>
                                </div>
                                <div class="p-2 rounded-lg bg-white border border-slate-200">
                                    <div class="text-[10px] text-slate-500">6 - 11 tháng</div>
                                    <div class="font-bold text-slate-800 mt-0.5">4,40%</div>
                                </div>
                                <div class="p-2 rounded-lg bg-white border border-slate-200">
                                    <div class="text-[10px] text-slate-500">12 - 18 tháng</div>
                                    <div class="font-bold text-slate-800 mt-0.5">5,60%</div>
                                </div>
                                <div class="p-2 rounded-lg bg-white border border-slate-200">
                                    <div class="text-[10px] text-slate-500">&ge; 24 tháng</div>
                                    <div class="font-bold text-slate-800 mt-0.5">5,50%</div>
                                </div>
                            </div>
                        </div>

                        <!-- Thuật toán & Kết quả tính toán R_ref -->
                        <div class="mt-4 grid grid-cols-1 md:grid-cols-12 gap-4">
                            <!-- Cột trái: Công thức & Kết quả R_ref -->
                            <div class="md:col-span-6 p-4 rounded-xl bg-emerald-50/40 border border-emerald-200 text-xs space-y-2.5">
                                <div class="font-bold text-emerald-950 flex items-center justify-between">
                                    <span>Công thức dòng tiền bình quân gia quyền:</span>
                                    <span class="text-[10px] font-mono text-emerald-800">R_ref = ∑(Si×Di×Ri) / ∑(Si×Di)</span>
                                </div>
                                <div class="text-slate-600 leading-relaxed text-[11px]">
                                    Mỗi khoản nộp thứ <em>i</em> có số tiền <em>S_i</em> duy trì <em>D_i</em> ngày đến ngày đáo hạn, được áp mức lãi suất niêm yết <em>R_i</em> tương ứng với thời gian thực tế.
                                </div>
                                <div class="pt-2 border-t border-emerald-200/80 flex items-center justify-between">
                                    <span class="font-semibold text-slate-700">Lãi suất tham chiếu dòng tiền:</span>
                                    <span id="calculatedRRefText" class="text-base font-black text-emerald-900 tabular-nums">4,38 % / năm</span>
                                </div>
                            </div>

                            <!-- Cột phải: Biên độ cộng thêm Delta r & Lãi suất đề xuất -->
                            <div class="md:col-span-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-3">
                                <div>
                                    <div class="flex justify-between items-center mb-1">
                                        <span class="font-bold text-slate-700">Biên độ khuyến khích (Δr):</span>
                                        <span id="deltaRateLabel" class="font-bold text-emerald-800 tabular-nums">+0,30 % / năm</span>
                                    </div>
                                    <input type="range" id="deltaRateSlider" min="0" max="1.0" step="0.05" value="0.30" 
                                        oninput="onDeltaRateChange(this.value)"
                                        class="w-full accent-emerald-700 cursor-pointer">
                                </div>

                                <div class="pt-2 border-t border-slate-200 flex items-center justify-between">
                                    <div>
                                        <span class="text-[11px] font-bold text-slate-500 uppercase block">Lãi suất đề xuất cho HĐQT:</span>
                                        <span id="proposedRateText" class="text-lg font-black text-emerald-800 tabular-nums">4,68 % / năm</span>
                                    </div>
                                    <button onclick="applyRRefToSimulation()" class="px-3 py-2 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg shadow-xs transition flex items-center gap-1.5">
                                        <svg class="w-4 h-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                                        Áp dụng mức này
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Khối phân tích 2 chiều lợi ích -->
                        <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                            <div class="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200 flex items-start gap-2.5">
                                <svg class="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                <div>
                                    <strong class="font-bold text-emerald-950">Có lợi cho Quỹ:</strong>
                                    <span id="benefitFundText" class="text-slate-600 block mt-0.5">Tiết kiệm 0,92%/năm chi phí vốn so với huy động 1 lần cùng kỳ hạn.</span>
                                </div>
                            </div>
                            <div class="p-3 rounded-xl bg-blue-50/60 border border-blue-200 flex items-start gap-2.5">
                                <svg class="w-4 h-4 text-blue-700 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                                <div>
                                    <strong class="font-bold text-blue-950">Không thiệt cho Khách hàng:</strong>
                                    <span id="benefitCustText" class="text-slate-600 block mt-0.5">Cao hơn 0,30%/năm so với lãi suất bình quân các khoản lẻ khách tự gửi.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Bảng Chi Tiết Kế Hoạch Nộp Tiền & Phân Bổ Lãi -->
                    <div class="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200">
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-3">
                            <div>
                                <h3 class="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                                    Tiến Độ Nộp Tiền & Phân Bổ Lãi Từng Kỳ (Cơ sở 365 ngày)
                                </h3>
                                <p class="text-xs text-slate-500 mt-0.5">Cho phép chỉnh sửa trực tiếp ngày nộp và số tiền thực tế của từng kỳ.</p>
                            </div>
                            <div class="flex items-center gap-2 no-print self-start sm:self-auto">
                                <button onclick="openPledgeModal()" class="px-2.5 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition">
                                    <svg class="w-3.5 h-3.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                                    Vay cầm cố
                                </button>
                                <button onclick="window.print()" class="px-3 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs flex items-center gap-1.5 transition">
                                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
                                    In Bảng Kế Hoạch
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

        <!-- TAB 2: BÁO CÁO PHÂN TÍCH (Lazy Mounted) -->
        <section id="tabContent_analysis" class="tab-content hidden space-y-6">
            <!-- Will be mounted on first click from tmpl_tabContent_analysis -->
        </section>

        <!-- TAB 3: QUY ĐỊNH SẢN PHẨM (Lazy Mounted) -->
        <section id="tabContent_regulations" class="tab-content hidden space-y-6">
            <!-- Will be mounted on first click from tmpl_tabContent_regulations -->
        </section>

        <!-- TAB 4: CẨM NANG NGHIỆP VỤ (Lazy Mounted) -->
        <section id="tabContent_consulting" class="tab-content hidden space-y-6">
            <!-- Will be mounted on first click from tmpl_tabContent_consulting -->
        </section>

        <!-- TAB 5: BIỂU MẪU A4 (Lazy Mounted) -->
        <section id="tabContent_templates" class="tab-content hidden space-y-6">
            <!-- Will be mounted on first click from tmpl_tabContent_templates -->
        </section>

        <!-- TAB 6: Ý KIẾN ĐÓNG GÓP CỦA CÁN BỘ (Lazy Mounted) -->
        <section id="tabContent_feedback" class="tab-content hidden space-y-6">
            <!-- Will be mounted on first click from tmpl_tabContent_feedback -->
        </section>

    </main>

    <!-- FIXED BOTTOM NAVIGATION BAR FOR MOBILE (Không cuộn ngang, touch target 48px) -->
    <nav id="bottomNavBar" class="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50 px-2 py-1 flex justify-around items-center shadow-lg no-print">
        <button id="bottomNavBtn_calculator" onclick="switchTab('calculator')" class="flex-1 py-1 px-1 flex flex-col items-center justify-center text-emerald-800 font-bold transition">
            <svg class="w-5 h-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
            <span class="text-[10px] leading-tight">Mô phỏng</span>
        </button>
        <button id="bottomNavBtn_analysis" onclick="switchTab('analysis')" class="flex-1 py-1 px-1 flex flex-col items-center justify-center text-slate-500 font-medium transition">
            <svg class="w-5 h-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            <span class="text-[10px] leading-tight">Báo cáo</span>
        </button>
        <button id="bottomNavBtn_regulations" onclick="switchTab('regulations')" class="flex-1 py-1 px-1 flex flex-col items-center justify-center text-slate-500 font-medium transition">
            <svg class="w-5 h-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            <span class="text-[10px] leading-tight">Quy định</span>
        </button>
        <button id="bottomNavBtn_consulting" onclick="switchTab('consulting')" class="flex-1 py-1 px-1 flex flex-col items-center justify-center text-slate-500 font-medium transition">
            <svg class="w-5 h-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            <span class="text-[10px] leading-tight">Nghiệp vụ</span>
        </button>
        <button id="bottomNavBtn_templates" onclick="switchTab('templates')" class="flex-1 py-1 px-1 flex flex-col items-center justify-center text-slate-500 font-medium transition">
            <svg class="w-5 h-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>
            <span class="text-[10px] leading-tight">Biểu mẫu</span>
        </button>
        <button id="bottomNavBtn_feedback" onclick="switchTab('feedback')" class="flex-1 py-1 px-1 flex flex-col items-center justify-center text-slate-500 font-medium transition">
            <svg class="w-5 h-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
            <span class="text-[10px] leading-tight">Góp ý</span>
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
                        <div class="font-bold text-emerald-900 mb-1">Phương án: Vay Cầm Cố Sổ Tiết Kiệm</div>
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

        function getNiemYetRate(days) {
            for (const item of NIEM_YET_RATES) {
                if (days >= item.minDays && days <= item.maxDays) {
                    return item.rate;
                }
            }
            return 5.50;
        }

        function getSingleTermRate(months) {
            if (months < 3) return 3.10;
            if (months < 6) return 3.60;
            if (months < 12) return 4.40;
            if (months <= 18) return 5.60;
            return 5.50;
        }

        // State lưu trữ mô phỏng
        let currentTermMonths = 12;
        let currentDepositFreq = 1; // 1: Tháng, 3: Quý, 6: 6 tháng
        let scheduleData = [];
        let maturityDateObj = null;
        let currentRegOption = 'opt1';
        let calculatedRRef = 4.38;
        let deltaRate = 0.30;

        // Lazy load state mapping
        const tabMounted = {
            calculator: true,
            analysis: false,
            regulations: false,
            consulting: false,
            templates: false,
            feedback: false
        };

        // Utility: Lazy Mount Tab on demand
        function lazyMountTab(tabId) {
            if (tabMounted[tabId]) return;
            const tpl = document.getElementById('tmpl_tabContent_' + tabId);
            const target = document.getElementById('tabContent_' + tabId);
            if (tpl && target) {
                target.appendChild(tpl.content.cloneNode(true));
                tabMounted[tabId] = true;
                if (tabId === 'feedback') {
                    renderFeedbackList();
                }
            }
        }

        // Tab Switching Logic with Lazy Mounting
        function switchTab(tabId) {
            lazyMountTab(tabId);
            const tabs = ['calculator', 'analysis', 'regulations', 'consulting', 'templates', 'feedback'];
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
                        btmBtn.className = 'flex-1 py-1 px-1 flex flex-col items-center justify-center text-emerald-800 font-bold transition';
                    } else {
                        btmBtn.className = 'flex-1 py-1 px-1 flex flex-col items-center justify-center text-slate-500 font-medium transition';
                    }
                }
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Định dạng tiền tệ VNĐ
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
            if (dayOfWeek === 6) d.setDate(d.getDate() + 2); // T7 -> T2
            else if (dayOfWeek === 0) d.setDate(d.getDate() + 1); // CN -> T2
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

        // PWA Install prompt
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

        // Chuyển đổi Phương án Quy định
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

        // Toggle mở/đóng toàn bộ
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

        function toggleAllSituations(expand) {
            lazyMountTab('analysis');
            const sitItems = document.querySelectorAll('#situationsContainer details.sit-item');
            sitItems.forEach(d => {
                if (expand) d.setAttribute('open', '');
                else d.removeAttribute('open');
            });
            showToast(expand ? 'Đã mở 15 tình huống' : 'Đã thu gọn tình huống');
        }

        function toggleAllFaqs(expand) {
            lazyMountTab('analysis');
            const faqItems = document.querySelectorAll('#faqsContainer details.faq-item');
            faqItems.forEach(d => {
                if (expand) d.setAttribute('open', '');
                else d.removeAttribute('open');
            });
            showToast(expand ? 'Đã mở 18 câu hỏi' : 'Đã thu gọn câu hỏi');
        }

        // Chọn nhanh kỳ hạn
        function selectTerm(months) {
            currentTermMonths = months;
            [6, 12, 18, 24, 36, 60].forEach(m => {
                const btn = document.getElementById('termBtn_' + m);
                if (!btn) return;
                if (m === months) {
                    btn.className = 'py-2 px-1 rounded-xl border-2 border-emerald-600 bg-emerald-50/80 font-bold text-emerald-950 text-center';
                } else {
                    btn.className = 'py-2 px-1 rounded-xl border border-slate-200 font-semibold hover:border-emerald-400 text-slate-700 text-center';
                }
            });

            // Gợi ý lãi suất đề xuất phù hợp kỳ hạn
            if (months === 6) document.getElementById('interestRate').value = '4.00';
            else if (months === 12) document.getElementById('interestRate').value = '4.75';
            else if (months === 18) document.getElementById('interestRate').value = '4.75';
            else if (months === 24) document.getElementById('interestRate').value = '4.65';
            else if (months >= 36) document.getElementById('interestRate').value = '4.60';

            onParameterChange();
            calculateRRef();
        }

        // Chọn chu kỳ nộp tiền (1, 3, 6 tháng)
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
            calculateRRef();
        }

        function setQuickAmount(amount) {
            const input = document.getElementById('monthlyAmount');
            input.value = formatVND(amount);
            document.getElementById('amountTextHint').textContent = readSimpleMoneyHint(amount);
            onParameterChange();
            calculateRRef();
        }

        // Xử lý thay đổi tham số & Tạo bảng nộp tiền
        function onParameterChange() {
            const monthlyAmount = parseMoney(document.getElementById('monthlyAmount').value);
            document.getElementById('amountTextHint').textContent = readSimpleMoneyHint(monthlyAmount);

            const startStr = document.getElementById('startDate').value;
            if (!startStr) return;
            const startDate = parseLocalDate(startStr);
            const dayRule = document.getElementById('depositDayRule').value;
            const shiftWeekend = document.getElementById('shiftWeekend').checked;

            const preferredDay = dayRule === 'same' ? startDate.getDate() : Number(dayRule);

            // Ngày đáo hạn sổ luôn tính tròn kỳ hạn từ ngày mở sổ (Kỳ 1)
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
            syncPrintHeader();
        }

        // Cập nhật khi chỉnh sửa ngày hoặc tiền trực tiếp trên từng hàng của bảng
        function onRowEdit(idx, field, value) {
            if (field === 'actualDateStr') {
                scheduleData[idx].actualDateStr = value;
                scheduleData[idx].actualDate = parseLocalDate(value);
            } else if (field === 'amount') {
                scheduleData[idx].amount = parseMoney(value);
            }
            recalculateFromTable();
            calculateRRef();
        }

        // Render bảng nộp tiền và tính lãi chuẩn TT 14/2017
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

        // Tính toán lại toàn bộ lãi theo bảng
        function recalculateFromTable() {
            const rate = Number(document.getElementById('interestRate').value) || 0;
            let cumPrincipal = 0;
            let totalInterest = 0;

            scheduleData.forEach((row, idx) => {
                const days = Math.max(0, diffDays(row.actualDate, maturityDateObj));
                row.daysToMaturity = days;

                // Công thức TT 14/2017: Số tiền x Số ngày duy trì thực tế x Lãi suất / 365
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

            // Cập nhật KPIs
            document.getElementById('kpiTotalPrincipal').textContent = formatVND(cumPrincipal) + ' đ';
            document.getElementById('kpiPeriodsCount').textContent = \`\${scheduleData.length} lần nộp\`;
            document.getElementById('kpiTotalInterest').textContent = formatVND(totalInterest) + ' đ';
            document.getElementById('kpiTotalMaturity').textContent = formatVND(totalMaturity) + ' đ';
            if (maturityDateObj) {
                document.getElementById('kpiMaturityDate').textContent = \`Đáo hạn: \${toVNDateStr(maturityDateObj)}\`;
            }

            // Chi phí vốn bình quân COF = (Tổng lãi / Tổng gốc tích lũy) x (12 / Kỳ hạn) x 100%
            const effectiveCOF = cumPrincipal > 0 ? ((totalInterest / cumPrincipal) * (12 / currentTermMonths) * 100).toFixed(2) : '0';
            document.getElementById('kpiEffectiveRate').textContent = effectiveCOF.replace('.', ',') + ' %';

            // Footer bảng
            document.getElementById('tableFooterPrincipal').textContent = formatVND(cumPrincipal) + ' đ';
            document.getElementById('tableFooterInterest').textContent = formatVND(totalInterest) + ' đ';
            document.getElementById('tableFooterTotal').textContent = formatVND(totalMaturity) + ' đ';
        }

        // THUẬT TOÁN ĐỊNH GIÁ LÃI SUẤT THAM CHIẾU DÒNG TIỀN (R_REF)
        function calculateRRef() {
            if (!scheduleData || scheduleData.length === 0 || !maturityDateObj) return;

            let sumSD = 0;
            let sumSDR = 0;

            scheduleData.forEach((row) => {
                const days = Math.max(0, diffDays(row.actualDate, maturityDateObj));
                const applicableRate = getNiemYetRate(days);
                const sd = row.amount * days;
                const sdr = sd * (applicableRate / 100);

                sumSD += sd;
                sumSDR += sdr;
            });

            calculatedRRef = sumSD > 0 ? (sumSDR / sumSD) * 100 : 4.38;
            const singleRate = getSingleTermRate(currentTermMonths);
            const proposedRate = calculatedRRef + deltaRate;

            document.getElementById('calculatedRRefText').textContent = calculatedRRef.toFixed(2).replace('.', ',') + ' % / năm';
            document.getElementById('proposedRateText').textContent = proposedRate.toFixed(2).replace('.', ',') + ' % / năm';
            document.getElementById('rSingleRateBadge').textContent = singleRate.toFixed(2).replace('.', ',') + ' %/năm';

            // Lợi ích 2 chiều
            const fundSavings = singleRate - proposedRate;
            const custBenefit = proposedRate - calculatedRRef;

            const fundText = document.getElementById('benefitFundText');
            if (fundSavings >= 0) {
                fundText.textContent = \`Tiết kiệm \${fundSavings.toFixed(2).replace('.', ',')}%/năm chi phí vốn so với huy động 1 lần cùng kỳ hạn (\${singleRate.toFixed(2)}%).\`;
            } else {
                fundText.textContent = \`Lãi suất đề xuất cao hơn \${Math.abs(fundSavings).toFixed(2).replace('.', ',')}% so với lãi suất gửi 1 lần.\`;
            }

            const custText = document.getElementById('benefitCustText');
            custText.textContent = \`Hưởng cao hơn \${custBenefit.toFixed(2).replace('.', ',')}%/năm so với việc khách tự gửi từng sổ lẻ ngắn hạn.\`;
        }

        function onDeltaRateChange(val) {
            deltaRate = Number(val);
            document.getElementById('deltaRateLabel').textContent = \`+\${deltaRate.toFixed(2).replace('.', ',')} % / năm\`;
            calculateRRef();
        }

        function applyRRefToSimulation() {
            const proposed = (calculatedRRef + deltaRate).toFixed(2);
            document.getElementById('interestRate').value = proposed;
            onParameterChange();
            calculateRRef();
            showToast(\`Đã áp dụng mức lãi suất đề xuất \${proposed}%/năm vào mô phỏng\`);
        }

        function syncPrintHeader() {
            const name = document.getElementById('custName').value.trim();
            const printName = document.getElementById('printCustName');
            if (printName) printName.textContent = name || '...................................................';
            const printDate = document.getElementById('printDateSpan');
            if (printDate) printDate.textContent = toVNDateStr(new Date());
        }

        function resetCustomerInfo() {
            document.getElementById('custName').value = '';
            syncPrintHeader();
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
            calculateRRef();
            showToast('Đã áp dụng kịch bản mẫu thành công');
        }

        // MODAL SO SÁNH CẦM CỐ VS RÚT TRƯỚC HẠN
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

            // Chọn mặc định kỳ ở giữa kỳ hạn
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
            const withdrawRate = 0.20; // Lãi KKH theo TT 04/2022
            const pledgedRate = Number(document.getElementById('interestRate').value) || 4.75;
            const loanRate = pledgedRate + 2.0; // Lãi suất vay cầm cố = LS gửi + 2%/năm

            // Tính lãi nhận được nếu rút trước hạn
            let withdrawInterest = 0;
            for (let i = 0; i < periodNum; i++) {
                const r = scheduleData[i];
                const days = Math.max(0, diffDays(r.actualDate, targetRow.actualDate));
                withdrawInterest += (r.amount * days * (withdrawRate / 100)) / 365;
            }

            // Tính lợi ích nếu tiếp tục duy trì và vay cầm cố khoản thiếu
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

        // ==================== HỆ THỐNG GÓP Ý & SYNC GOOGLE SHEETS ====================
        const FEEDBACK_STORAGE_KEY = 'QTD_TIETKIEM_GUIGOP_FEEDBACKS_V2';
        const GAS_API_URL = 'https://script.google.com/macros/s/AKfycbz_9yF0QcQ75vO4M81Z9F_vY98f6C1iKqZq3Z8e5i4yGg5c-L4v4b8u-K4y/exec';

        const DEFAULT_FEEDBACKS = [
            {
                id: 'fb_1',
                timestamp: '31/10/2026 09:15',
                author: 'Nguyễn Văn Sơn',
                role: 'Tín dụng',
                option: 'Phương án 1 (Gửi hàng tháng)',
                rating: 5,
                content: 'Sản phẩm rất thiết thực cho bà con nhận lương hưu và tiểu thương chợ Yên Thọ. Mức 500k/tháng là hoàn toàn khả thi.',
                status: 'Đã tiếp nhận'
            },
            {
                id: 'fb_2',
                timestamp: '31/10/2026 08:30',
                author: 'Lê Đình Hùng',
                role: 'Ban Giám đốc',
                option: 'Phương án 2 (Đa chu kỳ)',
                rating: 5,
                content: 'Đồng ý triển khai Phương án 2 mở rộng thêm chu kỳ gửi hàng quý (3 tháng/lần) để đón nguồn tiền từ kiều hối và vụ mùa thu hoạch.',
                status: 'Đã tiếp nhận'
            }
        ];

        function getStoredFeedbacks() {
            try {
                const raw = localStorage.getItem(FEEDBACK_STORAGE_KEY);
                return raw ? JSON.parse(raw) : DEFAULT_FEEDBACKS;
            } catch (e) {
                return DEFAULT_FEEDBACKS;
            }
        }

        function saveStoredFeedbacks(list) {
            try {
                localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(list));
            } catch (e) {}
        }

        function setFeedbackRating(stars) {
            document.getElementById('fb_rating').value = stars;
            const container = document.getElementById('starRatingContainer');
            const btns = container.querySelectorAll('.star-btn');
            btns.forEach((btn, idx) => {
                btn.className = idx < stars ? 'star-btn text-amber-400 hover:scale-110 transition p-1 text-lg' : 'star-btn text-slate-300 hover:scale-110 transition p-1 text-lg';
            });
            const textEl = document.getElementById('starRatingText');
            const labels = ['', '1 sao (Kém)', '2 sao (Ít khả thi)', '3 sao (Bình thường)', '4 sao (Khả thi tốt)', '5 sao (Rất khả thi)'];
            if (textEl) textEl.textContent = \`\${stars} sao (\${labels[stars] || ''})\`;
        }

        function renderFeedbackList() {
            const container = document.getElementById('feedbackListContainer');
            if (!container) return;
            const list = getStoredFeedbacks();
            const badge = document.getElementById('feedbackCountBadge');
            if (badge) badge.textContent = list.length;

            if (list.length === 0) {
                container.innerHTML = '<div class="text-xs text-slate-400 italic text-center py-6">Chưa có ý kiến nào được ghi nhận.</div>';
                return;
            }

            container.innerHTML = list.map(item => {
                const starsHtml = '★'.repeat(item.rating || 5) + '☆'.repeat(5 - (item.rating || 5));
                const initial = (item.author || 'C').trim().charAt(0).toUpperCase();

                return \`
                    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition">
                        <div class="flex items-start justify-between gap-3">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 font-black text-sm flex items-center justify-center shrink-0 border border-emerald-200">
                                    \${initial}
                                </div>
                                <div>
                                    <div class="flex items-center gap-2">
                                        <span class="font-bold text-xs sm:text-sm text-slate-900">\${item.author}</span>
                                        <span class="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
                                            \${item.role}
                                        </span>
                                    </div>
                                    <!-- Sao đánh giá hiển thị ngay dưới tên cán bộ -->
                                    <div class="text-amber-400 text-xs mt-0.5 tracking-tight font-bold">
                                        \${starsHtml}
                                        <span class="text-[11px] text-slate-500 font-normal ml-1">• \${item.option}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="text-right shrink-0">
                                <div class="text-[10px] text-slate-400 font-medium">\${item.timestamp}</div>
                                <span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 mt-1">
                                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    \${item.status || 'Đã tiếp nhận'}
                                </span>
                            </div>
                        </div>
                        <div class="mt-2.5 pl-13 text-xs sm:text-sm text-slate-700 leading-relaxed">
                            \${item.content}
                        </div>
                    </div>
                \`;
            }).join('');
        }

        async function submitFeedbackForm(e) {
            e.preventDefault();
            const author = document.getElementById('fb_author').value.trim();
            const role = document.getElementById('fb_role').value;
            const content = document.getElementById('fb_content').value.trim();
            const rating = Number(document.getElementById('fb_rating').value) || 5;
            const optionEl = document.querySelector('input[name="fb_option"]:checked');
            const option = optionEl ? optionEl.value : 'Phương án 1 (Gửi hàng tháng)';

            if (!author || !content) {
                showToast('Vui lòng nhập đầy đủ họ tên và nội dung ý kiến', 'error');
                return;
            }

            const btn = document.getElementById('fb_submit_btn');
            btn.disabled = true;
            btn.innerHTML = '<span class="inline-block animate-spin mr-2">⟳</span> Đang lưu dữ liệu...';

            const newFb = {
                id: 'fb_' + Date.now(),
                timestamp: toVNDateStr(new Date()) + ' ' + String(new Date().getHours()).padStart(2, '0') + ':' + String(new Date().getMinutes()).padStart(2, '0'),
                author: author,
                role: role,
                option: option,
                rating: rating,
                content: content,
                status: 'Đã tiếp nhận'
            };

            // Lưu local trước
            const list = getStoredFeedbacks();
            list.unshift(newFb);
            saveStoredFeedbacks(list);
            renderFeedbackList();

            // Gửi lên Google Sheets
            try {
                await fetch(GAS_API_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newFb)
                });
            } catch (err) {}

            btn.disabled = false;
            btn.innerHTML = '<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg> Gửi Ý Kiến Ngay';
            document.getElementById('fb_content').value = '';
            showToast('Đã ghi nhận ý kiến đóng góp thành công!');
        }

        async function syncFeedbacksFromGoogleSheet() {
            showToast('Đang kết nối và đồng bộ từ Google Sheets...');
            try {
                const res = await fetch(GAS_API_URL + '?action=getFeedbacks');
                const data = await res.json();
                if (data && Array.isArray(data.feedbacks)) {
                    saveStoredFeedbacks(data.feedbacks);
                    renderFeedbackList();
                    showToast(\`Đã đồng bộ thành công \${data.feedbacks.length} ý kiến từ Google Sheets!\`);
                } else {
                    renderFeedbackList();
                    showToast('Đã làm mới dữ liệu ý kiến thành công!');
                }
            } catch (e) {
                renderFeedbackList();
                showToast('Đã làm mới dữ liệu ngoại tuyến thành công!');
            }
        }

        // ==================== KHỞI ĐỘNG HỆ THỐNG ====================
        window.addEventListener('DOMContentLoaded', () => {
            // Mặc định ngày bắt đầu là hôm nay
            const today = new Date();
            const dateInput = document.getElementById('startDate');
            if (dateInput) dateInput.value = toInputDateStr(today);

            // Chạy tính toán ban đầu cho Tab 1
            onParameterChange();
            calculateRRef();

            // Đăng ký Service Worker offline cache
            if ('serviceWorker' in navigator) {
                const swCode = \`
                    const CACHE_NAME = 'tkgui-gop-v2';
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

console.log('Writing index.html (length: ' + html.length + ')...');
fs.writeFileSync('D:/Antigravity Projects/TKGuiGop/index.html', html, 'utf8');
console.log('Successfully written index.html!');
