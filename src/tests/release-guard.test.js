import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { translations } from '../i18n/translations';

// 5T-Trustworthy: 這組測試在「部署前」擋掉正式版最容易被忽略的兩類問題。
// 兩者都曾真實發生過：品牌字漂成「墳/塾」，以及下載連結指向不存在的檔案。

const ROOT = path.resolve(import.meta.dirname, '../..');
const SRC = path.join(ROOT, 'src');

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(jsx?|html)$/.test(e.name)) out.push(p);
  }
  return out;
}

// 這個 repo 刻意把「歷史錯字」寫進測試作為 WRONG 清單，
// 掃描時要排除 src/tests/ 與註解，否則會自我誤報。
const WRONG_BRAND = [0x587e, 0x58fe, 0x8056, 0x58ba, 0x8fb7].map((c) => String.fromCodePoint(c));

describe('品牌碼位 (5T-Trustworthy)', () => {
  it('no source file renders a historical wrong brand char', () => {
    const offenders = [];
    for (const f of walk(SRC)) {
      if (f.includes(`${path.sep}tests${path.sep}`)) continue; // 測試刻意列出錯字
      const lines = fs.readFileSync(f, 'utf8').split('\n');
      lines.forEach((ln, i) => {
        // 跳過註解行
        const t = ln.trim();
        if (t.startsWith('*') || t.startsWith('//') || t.startsWith('/*')) return;
        for (const w of WRONG_BRAND) {
          if (ln.includes(w)) {
            offenders.push(`${path.relative(ROOT, f)}:${i + 1} U+${w.codePointAt(0).toString(16).toUpperCase()}`);
          }
        }
      });
    }
    expect(offenders).toEqual([]);
  });

  it('the correct brand char U+58BE is actually present', () => {
    const ken = String.fromCodePoint(0x58be);
    const files = walk(SRC).filter((f) => !f.includes(`${path.sep}tests${path.sep}`));
    const hits = files.filter((f) => fs.readFileSync(f, 'utf8').includes(ken));
    expect(hits.length).toBeGreaterThan(0);
  });
});

describe('內部連結 (5T-Transparent)', () => {
  it('every internal asset link resolves to a real file in public/', () => {
    const offenders = [];
    for (const f of walk(SRC)) {
      if (f.includes(`${path.sep}tests${path.sep}`)) continue;
      const c = fs.readFileSync(f, 'utf8');
      for (const m of c.matchAll(/(?:href|src)=["'`](\/[^"'`#?]+)["'`]/g)) {
        const url = m[1];
        if (!/\.[a-z0-9]{2,5}$/i.test(url)) continue; // 路由或無副檔名，跳過
        const disk = path.join(ROOT, 'public', decodeURIComponent(url));
        if (!fs.existsSync(disk)) offenders.push(`${path.relative(ROOT, f)} -> ${url}`);
      }
    }
    expect(offenders).toEqual([]);
  });
});

describe('翻譯鍵對稱 (5T-Trustworthy)', () => {
  it('zh and en contact namespaces expose the same keys', () => {
    const zh = Object.keys(translations.zh.contact).sort();
    const en = Object.keys(translations.en.contact).sort();
    expect(zh).toEqual(en);
  });

  it('zh and en top-level namespaces match', () => {
    const zh = Object.keys(translations.zh).sort();
    const en = Object.keys(translations.en).sort();
    expect(zh).toEqual(en);
  });
});

// 5T-Trustworthy: 自架字型子集的守衛。
// 背景：本站字型改為「依實際用字硬子集」後，體積從 Google Fonts 的 17.6MB / 366 檔
// 降到 734KB / 2 檔。代價是新增文案若用到子集沒有的字，該字會掉回系統字型——
// 這在畫面上很難察覺，所以在此變成可攔截的失敗。
describe('自架字型子集 (5T-Trustworthy)', () => {
  const FONT_DIR = path.join(ROOT, 'public', 'fonts');
  const cp = (ch) => `U+${ch.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')}`;

  // 掃描範圍對齊 scripts/build-fonts.py 的 SCAN（此處排除 dist/node_modules）。
  function scanForHan() {
    const files = [...walk(SRC)];
    for (const extra of ['index.html', 'public']) {
      const p = path.join(ROOT, extra);
      if (fs.existsSync(p) && fs.statSync(p).isDirectory()) files.push(...walk(p));
      else if (fs.existsSync(p)) files.push(p);
    }
    const han = new Set();
    for (const f of files) {
      if (f.includes(`${path.sep}node_modules${path.sep}`)) continue;
      // 測試檔不會被渲染，其用字不影響字型需求；否則把中文斷言訊息
      // 寫進測試檔就會反向改變字型子集需求，形成自我糾纏。
      if (f.includes(`${path.sep}tests${path.sep}`)) continue;
      for (const m of fs.readFileSync(f, 'utf8').match(/[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/g) || []) {
        han.add(m);
      }
    }
    return han;
  }

  it('字型實體檔存在且非空', () => {
    for (const f of ['noto-serif-tc.woff2', 'inter-latin.woff2']) {
      const p = path.join(FONT_DIR, f);
      expect(fs.existsSync(p), `${f} 不存在`).toBe(true);
      expect(fs.statSync(p).size, `${f} 是空檔或過小`).toBeGreaterThan(1024);
    }
  });

  it('子集涵蓋全站用到的每一個漢字', () => {
    const manifest = JSON.parse(fs.readFileSync(path.join(SRC, 'font-subset-manifest.json'), 'utf8'));
    const covered = new Set(manifest.fonts['noto-serif-tc'].codepoints.split(' '));
    const han = scanForHan();
    const missing = [...han].filter((c) => !covered.has(cp(c)));
    expect(
      missing,
      `${missing.length} 個字不在 Noto Serif TC 子集內，會掉回系統字型：${missing.join('')}\n` +
        '修法：.fontenv/Scripts/python.exe scripts/build-fonts.py'
    ).toEqual([]);
  });

  it('index.css 不再引用 Google Fonts（@import 會序列阻塞）', () => {
    const css = fs.readFileSync(path.join(SRC, 'index.css'), 'utf8');
    expect(css).not.toContain('fonts.googleapis.com');
  });

  it('fonts.css 為兩個字型各宣告一次 @font-face', () => {
    const css = fs.readFileSync(path.join(SRC, 'fonts.css'), 'utf8');
    expect((css.match(/@font-face/g) || []).length).toBe(2);
    expect(css).toContain("'Noto Serif TC'");
    expect(css).toContain("'Inter'");
  });

  it('index.html 以 preload 預載字型，且帶 crossorigin', () => {
    const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
    for (const f of ['noto-serif-tc', 'inter-latin']) {
      const re = new RegExp(`<link rel="preload" href="/fonts/${f}\\.woff2"[^>]*crossorigin`);
      expect(html, `缺少 ${f}.woff2 的 preload 或 crossorigin`).toMatch(re);
    }
  });
});
