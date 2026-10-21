// Headless render: start the Motion Canvas editor (vite), drive its Render
// button with Playwright, then copy the ffmpeg output into the deck.
import {createServer} from 'vite';
import {chromium} from 'playwright';
import {execFileSync} from 'node:child_process';
import {copyFileSync, existsSync, rmSync, statSync} from 'node:fs';

const OUT = 'output/project.mp4';
const DEST = '../../presentations/2026-08-nais-as-a-service/assets/naas-growth.mp4';
const SHOTS = process.env.SHOTS; // optional dir for editor screenshots

rmSync('output', {recursive: true, force: true});
const server = await createServer({server: {port: 9123}, logLevel: 'warn'});
await server.listen();
// GPU flags matter: with SwiftShader (headless default) a frame takes seconds.
const browser = await chromium.launch({
  args: ['--enable-gpu', '--use-angle=metal', '--ignore-gpu-blocklist'],
});
try {
  const page = await browser.newPage({viewport: {width: 1600, height: 1000}});
  page.on('console', m => m.type() === 'error' && console.error('[editor]', m.text()));
  await page.goto('http://localhost:9123/');
  // The "Video Settings" panel (open by default) holds the Render button.
  const render = page.getByRole('button', {name: 'Render', exact: true});
  await render.click();
  if (SHOTS) await page.screenshot({path: `${SHOTS}/editor.png`});
  // While rendering the button reads "Abort"; it flips back when done.
  await page.getByRole('button', {name: 'Abort', exact: true}).waitFor();
  await render.waitFor({timeout: 600_000});
  // Then give ffmpeg a moment to finalise the file.
  for (let s = -1, still = 0; still < 2; ) {
    await new Promise(r => setTimeout(r, 1000));
    const n = existsSync(OUT) ? statSync(OUT).size : 0;
    still = n > 0 && n === s ? still + 1 : 0;
    s = n;
  }
} finally {
  await browser.close();
  await server.close();
}
copyFileSync(OUT, DEST);
try {
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-sseof', '-0.1', '-i', DEST, '-frames:v', '1', '-q:v', '3', DEST.replace(/\.mp4$/, '-poster.jpg')]);
} catch {
  console.warn('ffmpeg not found: poster frame not updated');
}
console.log(`Rendered ${DEST} (${(statSync(DEST).size / 1e6).toFixed(1)} MB)`);
