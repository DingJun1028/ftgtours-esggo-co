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
