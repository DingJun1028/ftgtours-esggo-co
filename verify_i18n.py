import re, os

src_dir = 'src'
keys = set()
for root, _, files in os.walk(src_dir):
    for fn in files:
        if fn.endswith(('.jsx', '.js')):
            with open(os.path.join(root, fn), encoding='utf-8') as fh:
                txt = fh.read()
            for m in re.findall(r"t\(['\"]([^'\"]+)['\"]\)", txt):
                keys.add(m)

# 讀 translations.js，去掉 // 註解與 export，改為可 exec
raw = open(os.path.join(src_dir, 'i18n', 'translations.js'), encoding='utf-8').read()
lines = []
for line in raw.splitlines():
    if line.strip().startswith('//'):
        continue
    lines.append(line.replace('export const', 'const'))
src = '\n'.join(lines)
ns = {}
exec(src + '\nns["translations"]=translations', ns)
trans = ns['translations']

missing_zh = [k for k in keys if k not in trans['zh']]
missing_en = [k for k in keys if k not in trans['en']]
# photo desc 子鍵
desc_missing_zh = [k+'Desc' for k in keys if k in trans['zh'] and (k+'Desc') not in trans['zh']]
desc_missing_en = [k+'Desc' for k in keys if k in trans['en'] and (k+'Desc') not in trans['en']]

print('總 t() key 數:', len(keys))
print('zh 缺失:', missing_zh)
print('en 缺失:', missing_en)
print('zh photo Desc 缺失:', desc_missing_zh)
print('en photo Desc 缺失:', desc_missing_en)
print('OK' if not (missing_zh or missing_en or desc_missing_zh or desc_missing_en) else 'HAS MISSING')
