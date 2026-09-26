const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const ftgColors = ['green', 'forest', 'leaf', 'sand', 'cream', 'bark', 'orange'];
const fonts = ['sans', 'serif'];

// 收集所有 js/jsx 檔案
const collectFiles = (dir, files = []) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectFiles(full, files);
    else if (/\.(js|jsx)$/.test(entry.name)) files.push(full);
  }
  return files;
};

const files = collectFiles(path.join(root, 'src'));

// 掃描 ftg-* class 與 font-* class
const colorUsage = {};
const fontUsage = {};
const totalFiles = files.length;
let scanned = 0;

for (const f of files) {
  scanned++;
  const content = fs.readFileSync(f, 'utf8');
  // 抓 ftg-xxx 類別
  const colorMatches = content.match(/ftg-(green|forest|leaf|sand|cream|bark|orange)/g);
  if (colorMatches) {
    for (const c of colorMatches) {
      const color = c.replace('ftg-', '');
      colorUsage[color] = (colorUsage[color] || 0) + 1;
    }
  }
  // 抓 font-xxx 類別
  const fontMatches = content.match(/font-(sans|serif)/g);
  if (fontMatches) {
    for (const f of fontMatches) {
      const font = f.replace('font-', '');
      fontUsage[font] = (fontUsage[font] || 0) + 1;
    }
  }
}

// 輸出報告
console.log('設計 token 稽核報告');
console.log('===================');
console.log(`掃描檔案數：${totalFiles}`);
console.log(`實際掃描：${scanned}`);
console.log('');
console.log('ftg-* color class 使用統計：');
for (const color of ftgColors) {
  const count = colorUsage[color] || 0;
  console.log(`  ftg-${color}: ${count} 次`);
}
console.log('');
console.log('font-* class 使用統計：');
for (const font of fonts) {
  const count = fontUsage[font] || 0;
  console.log(`  font-${font}: ${count} 次`);
}
console.log('');
console.log('稽核結論：');
const unusedColors = ftgColors.filter(c => !colorUsage[c]);
const unusedFonts = fonts.filter(f => !fontUsage[f]);
if (unusedColors.length > 0) {
  console.log(`  未使用的 color token: ftg-${unusedColors.join(', ftg-')}`);
}
if (unusedFonts.length > 0) {
  console.log(`  未使用的 font token: font-${unusedFonts.join(', font-')}`);
}
if (unusedColors.length === 0 && unusedFonts.length === 0) {
  console.log('  所有設計 token 均有使用，設計系統完整。');
}
