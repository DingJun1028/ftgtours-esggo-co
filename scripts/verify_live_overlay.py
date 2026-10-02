"""線上實證：確認已部署的 CSS 確實含目標遮罩規則（5T-Tangible：可感知且已上線）。

為什麼不只看本機 dist：
  部署鏈路（build → 打包 → 串流解壓 → 遠端搬移）任一環節都可能只送出一部分。
  「本機 dist 正確」不等於「線上是這一份」—— 必須讀線上實際內容。

本工具刻意不用快取：帶 no-cache 標頭並在 URL 加唯一 query，避免 CDN 拿到舊版。

用法：python scripts/verify_live_overlay.py
"""
import re
import sys
import time
import urllib.request

BASE = "https://ftgtours.esggo.co"
UA = {"User-Agent": "Mozilla/5.0", "Cache-Control": "no-cache", "Pragma": "no-cache"}

# (顯示名, CSS 選擇器轉義形式, 期望的色碼片段)
MUST_HAVE = [
    ("Home 全域 forest/[0.42]", r".bg-ftg-forest\/\[0\.42\]", None),
    ("Home 全域 white/[0.07]", r".bg-white\/\[0\.07\]", None),
    ("Home 局部底 black/25", r".bg-black\/25", "#00000040"),
    ("Hero 全域 sunlight/[0.56]", r".bg-ftg-sunlight\/\[0\.56\]", None),
    ("Hero 局部底 cream/80", r".bg-ftg-cream\/80", "#faf7f2cc"),
    ("figcaption black/50", r".bg-black\/50", "#00000080"),
]


def fetch(url):
    return urllib.request.urlopen(
        urllib.request.Request(url, headers=UA), timeout=60
    ).read().decode("utf-8", "replace")


def main() -> int:
    nonce = int(time.time() * 1000)
    html = fetch(f"{BASE}/?v={nonce}")
    m = re.search(r"assets/index-([A-Za-z0-9_-]+)\.css", html)
    if not m:
        print("❌ 線上 HTML 找不到 CSS bundle 引用")
        return 1
    css_name = f"index-{m.group(1)}.css"
    css = fetch(f"{BASE}/assets/{css_name}?v={nonce}")
    print("=" * 72)
    print(f"線上 CSS：{css_name}（{len(css):,} bytes，nonce={nonce}）")
    print("=" * 72)
    print()

    bad = 0
    for name, sel, expect_color in MUST_HAVE:
        found = re.search(sel + r"\{([^}]*)\}", css)
        if not found:
            print(f"  {name:26} ❌ 規則不存在")
            bad += 1
            continue
        body = found.group(1)
        color_ok = True
        detail = ""
        if expect_color:
            color_ok = expect_color.lower() in body.lower()
            detail = f"  色碼 {expect_color} {'✅' if color_ok else '❌ 實際 ' + body.strip()}"
        print(f"  {name:26} ✅ {body.strip()}{detail}")
        if not color_ok:
            bad += 1

    print()
    if bad:
        print(f"=== 結果：{bad} 項未在線上生效 ===")
        return 1
    print("=== 結果：全部遮罩已在線上生效 ✅ ===")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
