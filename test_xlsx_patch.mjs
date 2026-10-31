import fs from 'fs';
import path from 'path';
import os from 'os';
import https from 'https';

const clasprcPath = path.join(os.homedir(), '.clasprc.json');
const c = JSON.parse(fs.readFileSync(clasprcPath, 'utf8'));
const token = c.tokens.default.access_token;

// 1. Create test spreadsheet
const postData = JSON.stringify({
  name: 'Test_MultiSheet',
  mimeType: 'application/vnd.google-apps.spreadsheet'
});

const req = https.request({
  hostname: 'www.googleapis.com',
  path: '/drive/v3/files',
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
}, res => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    const data = JSON.parse(body);
    console.log('Created test ID:', data.id);
    const testId = data.id;

    // Now test uploading our downloaded remote_sheet.xlsx (which is an xlsx)
    const xlsxBuffer = fs.readFileSync('D:/Antigravity Projects/TKGuiGop/data/remote_sheet.xlsx');
    const uploadReq = https.request({
      hostname: 'www.googleapis.com',
      path: `/upload/drive/v3/files/${testId}?uploadType=media`,
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Length': xlsxBuffer.length
      }
    }, uploadRes => {
      let b2 = '';
      uploadRes.on('data', chunk => b2 += chunk);
      uploadRes.on('end', () => {
        console.log('Upload XLSX status:', uploadRes.statusCode);
        console.log('Upload result:', b2);

        // Delete test spreadsheet
        const delReq = https.request({
          hostname: 'www.googleapis.com',
          path: `/drive/v3/files/${testId}`,
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        }, () => {
          console.log('Deleted test spreadsheet');
        });
        delReq.end();
      });
    });
    uploadReq.write(xlsxBuffer);
    uploadReq.end();
  });
});
req.write(postData);
req.end();
