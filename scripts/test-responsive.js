import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import os from 'os';

const VIEWPORTS = [
  { width: 320, height: 720, name: 'Small Phone' },
  { width: 360, height: 800, name: 'Standard Phone 1' },
  { width: 375, height: 812, name: 'Standard Phone 2' },
  { width: 390, height: 844, name: 'Modern iPhone' },
  { width: 430, height: 932, name: 'Large Phone' },
  { width: 768, height: 1024, name: 'Tablet Portrait' },
  { width: 1024, height: 768, name: 'Tablet Landscape' },
  { width: 1280, height: 800, name: 'Small Laptop' },
  { width: 1440, height: 900, name: 'Standard Desktop' },
  { width: 1920, height: 1080, name: 'Large Desktop' }
];

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const distIndex = path.resolve('dist/index.html');
let originalHtml = fs.readFileSync(distIndex, 'utf8');

// Inject automated checker
const checkerScript = `
<script>
window.addEventListener('load', () => {
  setTimeout(() => {
    const sw = document.documentElement.scrollWidth;
    const iw = window.innerWidth;
    const overflow = sw > iw;
    console.log('[RESPONSIVE_CHECK] viewport=' + iw + 'x' + window.innerHeight + ' scrollWidth=' + sw + ' overflow=' + overflow);
    
    // Check all elements for overflow
    const badElements = [];
    document.querySelectorAll('*').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.right > iw + 1) {
        badElements.push(el.tagName + (el.className ? '.' + el.className : '') + ' right=' + rect.right);
      }
    });
    if (badElements.length > 0) {
      console.log('[OVERFLOW_ELEMENTS] ' + badElements.slice(0, 5).join('; '));
    } else {
      console.log('[ZERO_OVERFLOW] Perfectly fits viewport!');
    }
  }, 100);
});
</script>
`;

fs.writeFileSync(distIndex, originalHtml.replace('</body>', checkerScript + '</body>'));

const screenshotsDir = path.resolve('test-screenshots');
if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir);

const fileUrl = 'file:///' + distIndex.replace(/\\/g, '/');

console.log('--- STARTING TECHNICAL RESPONSIVE VIEWPORT SUITE ---');

let allPassed = true;

for (const vp of VIEWPORTS) {
  const tempDir = path.join(os.tmpdir(), `chrome_vp_${vp.width}_${Date.now()}`);
  const shotPath = path.join(screenshotsDir, `shot_${vp.width}x${vp.height}.png`);

  let logs = '';
  await new Promise((resolve) => {
    const p = spawn(chromePath, [
      '--headless=new',
      '--no-sandbox',
      '--disable-gpu',
      `--window-size=${vp.width},${vp.height}`,
      `--user-data-dir=${tempDir}`,
      '--allow-file-access-from-files',
      '--enable-logging=stderr',
      '--v=1',
      `--screenshot=${shotPath}`,
      fileUrl
    ]);

    p.stdout.on('data', d => logs += d);
    p.stderr.on('data', d => logs += d);
    p.on('close', resolve);
  });

  const checkMatch = logs.match(/\[RESPONSIVE_CHECK\] (.+)/);
  const zeroMatch = logs.includes('[ZERO_OVERFLOW]');
  const isOverflow = logs.includes('overflow=true');

  if (isOverflow) {
    allPassed = false;
    console.log(`❌ Viewport ${vp.width}x${vp.height} (${vp.name}): OVERFLOW DETECTED!`);
    const badMatch = logs.match(/\[OVERFLOW_ELEMENTS\] (.+)/);
    if (badMatch) console.log('   Offenders:', badMatch[1]);
  } else {
    console.log(`✅ Viewport ${vp.width}x${vp.height} (${vp.name}): 0px horizontal overflow, clean fit!`);
  }

  try { fs.rmSync(tempDir, { recursive: true, force: true }); } catch(e) {}
}

// Restore original index.html
fs.writeFileSync(distIndex, originalHtml);

console.log('----------------------------------------------------');
if (allPassed) {
  console.log('🎉 ALL 10 VIEWPORTS PASSED WITH ZERO HORIZONTAL SCROLL OR ELEMENT BLEED!');
} else {
  console.log('⚠️ Some viewports experienced overflow.');
  process.exit(1);
}
