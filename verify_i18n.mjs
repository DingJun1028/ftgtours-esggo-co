import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const NOISE = new Set(['.', 'script', 'meta', 'link', '：', '']);
const keys = new Set();
function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f.endsWith('.jsx') || f.endsWith('.js')) {
      const txt = readFileSync(p, 'utf8');
      for (const m of txt.matchAll(/t\(['"]([^'"]+)['"]\)/g)) {
        const k = m[1];
        if (NOISE.has(k)) continue;
        keys.add(k);
      }
    }
  }
}
walk('src');

const mod = await import('./src/i18n/translations.js');
const trans = mod.translations;

function getPath(obj, path) {
  return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);
}

const missZh = [...keys].filter(k => getPath(trans.zh, k) === undefined);
const missEn = [...keys].filter(k => getPath(trans.en, k) === undefined);

// 真正的 photo card key：在程式裡用 tKey + 'Desc' 模式
// 從 jsx 抓 `tKey: 'xxx'` 再檢查 xxx 與 xxxDesc 都存在
const photoSet = new Set();
for (const f of readdirSync('src/pages')) {
  const txt = readFileSync(join('src/pages', f), 'utf8');
  for (const m of txt.matchAll(/tKey:\s*['"]([^'"]+)['"]/g)) {
    photoSet.add(m[1]);
  }
}
const descZh = [...photoSet].filter(k => getPath(trans.zh, k) === undefined || getPath(trans.zh, k+'Desc') === undefined);
const descEn = [...photoSet].filter(k => getPath(trans.en, k) === undefined || getPath(trans.en, k+'Desc') === undefined);

console.log('總 t() key 數:', keys.size);
console.log('photo card tKey 數:', photoSet.size);
console.log('zh 缺失:', missZh);
console.log('en 缺失:', missEn);
console.log('zh photo Desc 缺失:', descZh);
console.log('en photo Desc 缺失:', descEn);
console.log((missZh.length||missEn.length||descZh.length||descEn.length) ? 'HAS MISSING' : 'OK ✅ 所有 key 雙語齊全');
