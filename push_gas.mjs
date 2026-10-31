import fs from 'fs';
import path from 'path';
import os from 'os';
import https from 'https';

const clasprcPath = path.join(os.homedir(), '.clasprc.json');
const c = JSON.parse(fs.readFileSync(clasprcPath, 'utf8'));
const token = c.tokens.default.access_token;
const SCRIPT_ID = '1uMWI0w0F4vZcAffdmee5j6tgEcqErluj7-4Ampap0dCdMjMIvywhv5bc';

const codeJs = fs.readFileSync('D:/Antigravity Projects/TKGuiGop/backend/Code.js', 'utf8');
const manifest = fs.readFileSync('D:/Antigravity Projects/TKGuiGop/backend/appsscript.json', 'utf8');

const postData = JSON.stringify({
  files: [
    {
      name: 'appsscript',
      type: 'JSON',
      source: manifest
    },
    {
      name: 'Code',
      type: 'SERVER_JS',
      source: codeJs
    }
  ]
});

const options = {
  hostname: 'script.googleapis.com',
  path: `/v1/projects/${SCRIPT_ID}/content`,
  method: 'PUT',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    console.log('Update Script status:', res.statusCode);
    if (res.statusCode === 200) {
      console.log('Apps Script updated successfully with 3-sheet backend logic!');
    } else {
      console.log('Error:', body);
    }
  });
});

req.on('error', e => console.error(e));
req.write(postData);
req.end();
