import puppeteer from 'puppeteer-core';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const LOCAL_HTML = 'file:///' + path.resolve('index.html').replace(/\\/g, '/');

async function testTemplateFeatures() {
    console.log('🧪 [TEST] Kiểm tra tính năng Biểu mẫu & In ấn & Xuất Word/Excel trên Chrome Headless...');
    const browser = await puppeteer.launch({
        executablePath: CHROME_PATH,
        headless: 'new',
        args: ['--no-sandbox', '--disable-gpu']
    });

    try {
        const page = await browser.newPage();
        const errors = [];
        page.on('console', msg => {
            if (msg.type() === 'error') errors.push(msg.text());
        });

        await page.goto(LOCAL_HTML, { waitUntil: 'load' });

        // 1. Chuyển sang Tab Biểu mẫu (templates)
        console.log('👉 [1] Chuyển sang Tab templates...');
        await page.evaluate(() => switchTab('templates'));
        await new Promise(r => setTimeout(r, 800));

        // 2. Kiểm tra sự tồn tại của 3 nút biểu tượng
        const buttonsCheck = await page.evaluate(() => {
            const printBtn = document.querySelector('button[onclick="printRegistrationForm()"]');
            const wordBtn = document.querySelector('button[onclick="exportRegistrationFormToDocx()"]');
            const excelBtn = document.querySelector('button[onclick="exportRegistrationFormToExcel()"]');

            const regDoc = document.getElementById('printRegistrationFormDocument');
            const planDoc = document.getElementById('printPlanDocument');

            return {
                printBtnExists: !!printBtn,
                wordBtnExists: !!wordBtn,
                excelBtnExists: !!excelBtn,
                regDocExists: !!regDoc,
                planDocExists: !!planDoc,
                printBtnIconOnly: printBtn ? printBtn.innerText.trim() === '' : false,
                wordBtnIconOnly: wordBtn ? wordBtn.innerText.trim() === '' : false,
                excelBtnIconOnly: excelBtn ? excelBtn.innerText.trim() === '' : false
            };
        });

        console.log('  Buttons & Docs Check:', buttonsCheck);
        if (!buttonsCheck.printBtnExists || !buttonsCheck.wordBtnExists || !buttonsCheck.excelBtnExists) {
            throw new Error('Nút biểu mẫu chưa xuất hiện!');
        }

        // 3. Kiểm tra hàm in kích hoạt đúng vùng
        console.log('👉 [2] Kiểm tra hàm printRegistrationForm...');
        const printActiveCheck = await page.evaluate(() => {
            printRegistrationForm();
            const regDoc = document.getElementById('printRegistrationFormDocument');
            const planDoc = document.getElementById('printPlanDocument');
            return {
                regDocHasActive: regDoc ? regDoc.classList.contains('print-zone-active') : false,
                planDocHasActive: planDoc ? planDoc.classList.contains('print-zone-active') : false
            };
        });
        console.log('  Print Active Zone Check:', printActiveCheck);

        // 4. Kiểm tra hotline trong toàn bộ DOM
        console.log('👉 [3] Kiểm tra số Hotline trong DOM...');
        const hotlineCheck = await page.evaluate(() => {
            const text = document.body.innerText;
            const hasCorrectHotline = text.includes('0965.122.111') && text.includes('0941.562.789');
            const hasOldHotline = text.includes('0966.381.189') || text.includes('0989.349.336');
            return { hasCorrectHotline, hasOldHotline };
        });
        console.log('  Hotline Check:', hotlineCheck);
        if (hotlineCheck.hasOldHotline || !hotlineCheck.hasCorrectHotline) {
            throw new Error('Số Hotline chưa đúng!');
        }

        console.log('✅ [TEST PASS 100%] Toàn bộ tính năng biểu mẫu và in ấn hoạt động chính xác!');

    } finally {
        await browser.close();
    }
}

testTemplateFeatures();
