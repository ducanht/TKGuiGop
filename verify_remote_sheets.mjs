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

const options = {
  hostname: 'www.googleapis.com',
  path: `/drive/v3/files/${SPREADSHEET_ID}/export?mimeType=application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`,
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`
  }
};

const req = https.request(options, (res) => {
  const chunks = [];
  res.on('data', chunk => chunks.push(chunk));
  res.on('end', () => {
    const buffer = Buffer.concat(chunks);
    const wb = XLSX.read(buffer, { type: 'buffer' });
    console.log('Sheets currently in remote Google Spreadsheet:');
    console.log(wb.SheetNames);
    wb.SheetNames.forEach(name => {
      const sheet = wb.Sheets[name];
      const json = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      console.log(`Sheet "${name}" has ${json.length} rows. Header:`, json[0]);
    });
  });
});
req.end();
