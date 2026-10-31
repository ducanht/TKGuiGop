import fs from 'fs';
import path from 'path';
import os from 'os';
import https from 'https';

const clasprcPath = path.join(os.homedir(), '.clasprc.json');
const c = JSON.parse(fs.readFileSync(clasprcPath, 'utf8'));
const token = c.tokens.default.access_token;
const SCRIPT_ID = '1uMWI0w0F4vZcAffdmee5j6tgEcqErluj7-4Ampap0dCdMjMIvywhv5bc';
const DEPLOYMENT_ID = 'AKfycbwOMk-2EIFd6rxT-rKcTUiUdlvYENZ8fIHx5QKrJu6oZ2J83f_xGxgpep0N13y7xvkM';

// 1. Create version
const verReqData = JSON.stringify({ description: 'v2 3-sheets and stats' });
const req1 = https.request({
  hostname: 'script.googleapis.com',
  path: `/v1/projects/${SCRIPT_ID}/versions`,
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(verReqData)
  }
}, res => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    console.log('Create version status:', res.statusCode);
    const verData = JSON.parse(body);
    const versionNumber = verData.versionNumber;
    console.log('Created version number:', versionNumber);

    if (versionNumber) {
      // 2. Update deployment
      const depData = JSON.stringify({
        deploymentConfig: {
          scriptId: SCRIPT_ID,
          versionNumber: versionNumber,
          manifestFileName: 'appsscript',
          description: 'Deploy v2 with 3-sheets and stats'
        }
      });
      const req2 = https.request({
        hostname: 'script.googleapis.com',
        path: `/v1/projects/${SCRIPT_ID}/deployments/${DEPLOYMENT_ID}`,
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(depData)
        }
      }, res2 => {
        let b2 = '';
        res2.on('data', c2 => b2 += c2);
        res2.on('end', () => {
          console.log('Update deployment status:', res2.statusCode);
          console.log('Response:', b2);
        });
      });
      req2.write(depData);
      req2.end();
    }
  });
});
req1.write(verReqData);
req1.end();
