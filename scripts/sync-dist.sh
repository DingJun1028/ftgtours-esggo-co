#!/usr/bin/env bash
# 5T-Trackable: 精準同步 dist 到 VPS，只帶真正會被線上請求的檔案。
#
# 為什麼需要這個：public/images/ 內混有大量未壓縮原始 PNG（單張 3MB，合計 178MB），
# 全部不被任何頁面引用。若整包 rsync，部署時間與磁碟都會被無用資產吃掉。
# 這些原始素材保留在 repo 與本機，不刪除——刪除不可逆，且未來轉 webp/avif 時還要用。
#
# 授權邊界：--delete 會刪除遠端多餘檔案。VPS /var/www/ftgtours/ 目前只由本站佔用，
#           故安全；若日後有其他服務共用該目錄，必須先移除 --delete。
set -euo pipefail

REPO="C:/Users/dingj/ftg-tours-website"
DIST="$REPO/dist"
STAGE="$REPO/.deploy-stage"
SSH_TARGET="${FTG_SSH_TARGET:-root@161.118.248.180}"
REMOTE_DIR="${FTG_REMOTE_DIR:-/var/www/ftgtours/}"

[ -d "$DIST" ] || { echo "找不到 dist/，請先 npm run build" >&2; exit 1; }

echo "== 1/3 依 dist 實際引用挑出要部署的檔案 =="
rm -rf "$STAGE"
mkdir -p "$STAGE"

# 引用來源 = index.html + 打包後的 JS bundle（React 的圖片路徑都在 bundle 裡）
python - "$DIST" "$STAGE" <<'PY'
import os, re, glob, shutil, sys
dist, stage = sys.argv[1], sys.argv[2]
refs = set()
for f in ['index.html'] + glob.glob(os.path.join('assets', '*.js')):
    t = open(os.path.join(dist, f), encoding='utf-8').read()
    refs |= set(re.findall(r'/images/[^\s"\'`)]+?\.(?:webp|png|jpe?g|svg)', t))

copied = missing = 0
for r in sorted(refs):
    src = os.path.join(dist, r.lstrip('/'))
    if not os.path.isfile(src):
        print('  ! dist 缺檔:', r); missing += 1; continue
    dst = os.path.join(stage, r.lstrip('/'))
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    shutil.copy2(src, dst); copied += 1

# 社群分享圖（og:image）
for extra in ['og-image.png']:
    s = os.path.join(dist, extra)
    if os.path.isfile(s):
        shutil.copy2(s, os.path.join(stage, extra)); copied += 1

# 沒被引用的 .txt/.map 等雜項排除；HTML 與 assets/ 整包帶（那是應用本身）
for sub in ['assets', 'fonts']:
    d = os.path.join(dist, sub)
    if os.path.isdir(d):
        shutil.copytree(d, os.path.join(stage, sub), dirs_exist_ok=True)

print('  圖片 %d 個已備妥%s' % (copied, '，缺 %d 個' % missing if missing else ''))
PY

COUNT=$(find "$STAGE" -type f | wc -l | tr -d ' ')
SIZE=$(du -sh "$STAGE" | cut -f1)
echo "== 2/3 部署包 = $COUNT 檔 / $SIZE =="
echo "== 3/3 rsync → $SSH_TARGET:$REMOTE_DIR =="
rsync -az --delete \
  -e "ssh -o StrictHostKeyChecking=accept-new" \
  "$STAGE"/ "$SSH_TARGET:$REMOTE_DIR"

echo "完成。遠端檔案數：$(ssh "$SSH_TARGET" "find '$REMOTE_DIR' -type f | wc -l" | tr -d ' ')"
