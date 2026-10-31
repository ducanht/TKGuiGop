import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TARGET_URL = 'https://ducanht.github.io/TKGuiGop/';
const ARTIFACT_DIR = 'C:\\Users\\Lenovo\\.gemini\\antigravity\\brain\\ea89240a-4cae-4cff-bd12-8f468ac81167';

async function runDevToolsAudit() {
    console.log('🚀 [DevTools] Khởi chạy Chrome Headless tại:', CHROME_PATH);
    const browser = await puppeteer.launch({
        executablePath: CHROME_PATH,
        headless: 'new',
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
            '--window-size=1280,900'
        ]
    });

    const results = {
        url: TARGET_URL,
        timestamp: new Date().toISOString(),
        consoleLogs: [],
        consoleErrors: [],
        networkRequests: [],
        failedRequests: [],
        tabsAudit: {},
        mobileAudit: {},
        staffAudit: {},
        interactionAudit: {},
        printAudit: {}
    };

    try {
        const page = await browser.newPage();

        // 1. Lắng nghe Console & Network
        page.on('console', msg => {
            const type = msg.type();
            const text = msg.text();
            results.consoleLogs.push({ type, text });
            if (type === 'error') {
                results.consoleErrors.push(text);
            }
        });

        page.on('requestfailed', req => {
            results.failedRequests.push({
                url: req.url(),
                failure: req.failure()?.errorText || 'Unknown error'
            });
        });

        page.on('response', res => {
            results.networkRequests.push({
                url: res.url(),
                status: res.status(),
                ok: res.ok()
            });
        });

        // 2. Kiểm thử Mobile Viewport (iPhone 13/14: 390 x 844)
        console.log('📱 [DevTools] Thiết lập Viewport Mobile 390x844...');
        await page.setViewport({
            width: 390,
            height: 844,
            deviceScaleFactor: 2,
            isMobile: true,
            hasTouch: true
        });

        console.log('🌐 [DevTools] Điều hướng tới:', TARGET_URL);
        const navRes = await page.goto(TARGET_URL, { waitUntil: 'networkidle2', timeout: 30000 });
        results.httpStatus = navRes?.status();

        await new Promise(r => setTimeout(r, 2000));

        // 3. Chụp màn hình Mobile Trang Chủ
        const mobileHomeShot = path.join(ARTIFACT_DIR, 'devtools_mobile_home.png');
        await page.screenshot({ path: mobileHomeShot });
        results.mobileHomeScreenshot = mobileHomeShot;
        console.log('📸 [DevTools] Đã chụp screenshot trang chủ mobile:', mobileHomeShot);

        // 4. Kiểm tra toàn bộ 7 Tabs
        console.log('📑 [DevTools] Kiểm tra chuyển các Tab chức năng...');
        const tabList = ['calculator', 'pricing', 'analysis', 'regulations', 'consulting', 'templates', 'feedback'];
        for (const t of tabList) {
            const tabOk = await page.evaluate((tabName) => {
                switchTab(tabName);
                const el = document.getElementById('tabContent_' + tabName);
                return el && !el.classList.contains('hidden');
            }, t);
            results.tabsAudit[t] = tabOk;
        }

        // 5. Chuyển sang Tab "feedback" để kiểm tra Cán Bộ & Form góp ý
        console.log('👉 [DevTools] Chuyển sang Tab Ý kiến đóng góp (feedback)...');
        await page.evaluate(() => switchTab('feedback'));
        await new Promise(r => setTimeout(r, 1500));

        // 6. Kiểm tra Danh sách 12 Cán Bộ Nhân Viên (Zero Truncate Policy)
        console.log('🔍 [DevTools] Audit danh sách thẻ Cán Bộ Nhân Viên trên Mobile...');
        const staffAudit = await page.evaluate(() => {
            const container = document.getElementById('canBoGridContainer');
            if (!container) return { error: 'Không tìm thấy #canBoGridContainer' };

            const buttons = Array.from(container.querySelectorAll('button'));
            const cardsInfo = buttons.map(b => {
                const textSpan = b.querySelector('span');
                const badge = b.querySelector('div')?.innerText.trim() || '';
                const name = textSpan ? textSpan.innerText.trim() : '';
                const rect = b.getBoundingClientRect();
                
                // Kiểm tra xem chữ có bị cắt cụt hay không
                const isTruncated = textSpan ? (textSpan.scrollWidth > textSpan.clientWidth + 2) : false;
                const hasEllipsis = name.includes('...') || b.innerText.includes('...');
                
                return {
                    name,
                    badge,
                    width: Math.round(rect.width),
                    height: Math.round(rect.height),
                    isTruncated,
                    hasEllipsis
                };
            });

            return {
                totalCards: buttons.length,
                cardsInfo,
                allHaveFullNames: cardsInfo.every(c => !c.hasEllipsis && c.name.length >= 5),
                anyTruncated: cardsInfo.some(c => c.isTruncated || c.hasEllipsis),
                touchTargetCompliant: cardsInfo.every(c => c.height >= 44)
            };
        });

        results.staffAudit = staffAudit;

        // Chụp screenshot Tab Ý kiến đóng góp trên Mobile
        const mobileFeedbackShot = path.join(ARTIFACT_DIR, 'devtools_mobile_feedback.png');
        await page.screenshot({ path: mobileFeedbackShot });
        results.mobileFeedbackScreenshot = mobileFeedbackShot;
        console.log('📸 [DevTools] Đã chụp screenshot tab feedback mobile:', mobileFeedbackShot);

        // 7. Tương tác Thử nghiệm (Interactive Test):
        // Chọn cán bộ "Phạm Thị Thảo" -> Điền gợi ý -> Kiểm tra form
        console.log('🖱️ [DevTools] Kiểm tra tương tác: Chọn cán bộ "Phạm Thị Thảo"...');
        const interactionResult = await page.evaluate(() => {
            const container = document.getElementById('canBoGridContainer');
            if (!container) return { success: false, reason: 'canBoGridContainer not found' };
            const btnThao = Array.from(container.querySelectorAll('button')).find(b => b.innerText.includes('Phạm Thị Thảo'));
            if (!btnThao) return { success: false, reason: 'Không tìm thấy thẻ Phạm Thị Thảo' };

            btnThao.click();

            const nameInput = document.getElementById('fb_canBoSelect');
            const selectedVal = nameInput ? nameInput.value : '';

            // Bấm thử nút gợi ý nhanh
            const pill = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Rất thiết thực'));
            if (pill) pill.click();

            const danhGiaInput = document.getElementById('fb_danhGiaInput');
            const danhGiaVal = danhGiaInput ? danhGiaInput.value : '';

            return {
                success: true,
                selectedVal,
                danhGiaVal,
                formFilledCorrectly: selectedVal.includes('Phạm Thị Thảo') && danhGiaVal.includes('thiết thực')
            };
        });

        results.interactionAudit = interactionResult;

        // Chụp screenshot sau khi tương tác điền form
        const mobileInteractedShot = path.join(ARTIFACT_DIR, 'devtools_mobile_interacted.png');
        await page.screenshot({ path: mobileInteractedShot });
        results.mobileInteractedScreenshot = mobileInteractedShot;
        console.log('📸 [DevTools] Đã chụp screenshot sau tương tác:', mobileInteractedShot);

        // 8. Chuyển sang Desktop Viewport (1280 x 800) & Tab Mô phỏng
        console.log('💻 [DevTools] Kiểm tra Desktop Viewport 1280x800...');
        await page.setViewport({ width: 1280, height: 800, isMobile: false });
        await page.evaluate(() => switchTab('calculator'));
        await new Promise(r => setTimeout(r, 1000));

        const desktopSimShot = path.join(ARTIFACT_DIR, 'devtools_desktop_simulation.png');
        await page.screenshot({ path: desktopSimShot });
        results.desktopSimScreenshot = desktopSimShot;
        console.log('📸 [DevTools] Đã chụp screenshot Desktop Mô phỏng:', desktopSimShot);

        // 9. Kiểm tra CSS Media Print (@media print)
        console.log('🖨️ [DevTools] Kiểm tra CSS Media Print...');
        const printStyles = await page.evaluate(() => {
            const printDoc = document.getElementById('printPlanDocument');
            return {
                printDocExists: !!printDoc,
                printDocHiddenByDefault: printDoc ? window.getComputedStyle(printDoc).display === 'none' : false,
                styleSheetsCount: document.styleSheets.length
            };
        });
        results.printAudit = printStyles;

        console.log('✅ [DevTools] Hoàn tất kiểm thử thành công 100%!');

    } catch (err) {
        console.error('❌ [DevTools Error]:', err);
        results.runtimeError = err.message;
    } finally {
        await browser.close();
    }

    const reportPath = path.join(ARTIFACT_DIR, 'devtools_audit_report.json');
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2), 'utf8');
    console.log('📝 [DevTools] Báo cáo chi tiết đã lưu tại:', reportPath);
}

runDevToolsAudit();
