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
# 這台 VPS 停用 root SSH（實測 7 把金鑰全被拒），只有 ubuntu 帳號可登入，
# 且 sudo 免密。這裡用別名而非寫死金鑰路徑，憑證位置由 ~/.ssh/config 管理。
SSH_TARGET="${FTG_SSH_TARGET:-esggo-vps}"
REMOTE_DIR="${FTG_REMOTE_DIR:-/var/www/ftgtours/}"
SSH_OPTS="${FTG_SSH_OPTS:--o ConnectTimeout=20}"

[ -d "$DIST" ] || { echo "找不到 dist/，請先 npm run build" >&2; exit 1; }

echo "== 1/3 依 dist 實際引用挑出要部署的檔案 =="
rm -rf "$STAGE"
mkdir -p "$STAGE"

# 引用來源 = index.html + 打包後的 JS bundle（React 的圖片路徑都在 bundle 裡）
python - "$DIST" "$STAGE" <<'PY'
import os, re, glob, shutil, sys
dist, stage = sys.argv[1], sys.argv[2]
refs = set()
# 注意：glob 的 pattern 必須相對於 dist，不能寫死 'assets/*.js'——
# 那會以「當前工作目錄」（repo root）解析，結果永遠抓不到 dist/assets/*.js，
# 於是只掃到 index.html 裡的 2 條引用，其餘 68 條圖片全部漏掉，卻因為
# 自我一致的計數而靜默通過。改成以 dist 為 base 展開。
for f in ['index.html'] + glob.glob(os.path.join(dist, 'assets', '*.js')):
    t = open(f, encoding='utf-8').read()
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

# 應用本體：index.html 與打包產物必須整包帶，漏了 index.html 頁面就是壞的。
for sub in ['assets', 'fonts']:
    d = os.path.join(dist, sub)
    if os.path.isdir(d):
        shutil.copytree(d, os.path.join(stage, sub), dirs_exist_ok=True)
shutil.copy2(os.path.join(dist, 'index.html'), os.path.join(stage, 'index.html'))

# 引用數與實際複製數必須一致——不一致代表正則漏抓或 dist 沒建置完，
# 那種情況下寧可部署失敗也不要靜默送出缺圖的站點。
if copied != len(refs) + 1:  # +1 = og-image.png
    print('  ! 引用 %d 條，實際複製 %d 個（期望 %d）— 中止部署'
          % (len(refs), copied, len(refs) + 1))
    sys.exit(1)

# 「數字自洽」擋不住「掃描範圍本身就不對」。所以再加一道絕對下限：
# 這個站點的圖片引用量是已知的量級，若掃描結果低於門檻，代表
# glob 路徑寫錯或 dist 是舊的，寧可失敗也不要部署一個缺圖站點。
MIN_REFS = 30
if len(refs) < MIN_REFS:
    print('  ! 只掃到 %d 條引用，低於下限 %d — 掃描範圍可能錯誤，中止部署'
          % (len(refs), MIN_REFS))
    sys.exit(1)

print('  引用 %d 條圖片 + og-image，%d 個檔案已備妥' % (len(refs), copied))
PY

COUNT=$(find "$STAGE" -type f | wc -l | tr -d ' ')
SIZE=$(du -sh "$STAGE" | cut -f1)
echo "== 2/3 部署包 = $COUNT 檔 / $SIZE =="

# 為什麼用 tar 串流而不是 rsync：本機 Git-Bash 沒有 rsync（只有 tar），
# 而遠端有。裝 Windows 版 rsync 得額外開啟 delta-transfer 等功能鍵，
# 對這個「每次都是全新檔名」的 SPA 沒有增量收益，純增加維護面。
#
# 為什麼要兩段式：SSH 只能以 ubuntu 登入，無權直接寫 /var/www。
# 若把 --rsync-path 設成 sudo rsync，密碼提示會在非互動模式失敗。
# 所以先解到 ubuntu 家目錄（可寫），再由遠端 sudo 在就地搬移。
REMOTE_STAGE="${FTG_REMOTE_STAGE:-ftg-stage}"
echo "== 3/3 串流解壓 → $SSH_TARGET:~\$HOME/$REMOTE_STAGE（ubuntu 可寫區）=="
tar -czf - -C "$STAGE" . | ssh $SSH_OPTS "$SSH_TARGET" \
  "mkdir -p ~\$HOME/$REMOTE_STAGE && tar -xzf - -C ~\$HOME/$REMOTE_STAGE"

echo "== 遠端 sudo 就地搬移到 $REMOTE_DIR =="
ssh $SSH_OPTS "$SSH_TARGET" \
  "sudo -n rsync -az --delete ~\$HOME/$REMOTE_STAGE/ '$REMOTE_DIR/' && sudo -n rm -rf ~\$HOME/$REMOTE_STAGE"

REMOTE_COUNT=$(ssh $SSH_OPTS "$SSH_TARGET" "sudo -n find '$REMOTE_DIR' -type f | wc -l" | tr -d ' ')
echo "完成。遠端檔案數：$REMOTE_COUNT（預期 $COUNT）"
[ "$REMOTE_COUNT" = "$COUNT" ] || { echo "  ! 遠端檔案數與部署包不符，請檢查" >&2; exit 1; }
