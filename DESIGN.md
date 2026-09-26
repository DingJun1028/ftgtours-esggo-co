# DESIGN.md — FTG Tours 設計系統

> 更新日期：2026-09-26 | 版本：1.0

## 1. 色彩系統

### 品牌色
- `ftg-green`    #2d4a3e  — 品牌主色（森林綠）
- `ftg-forest`   #1a3c34  — 深層森林綠（文字、 icon 底）
- `ftg-leaf`     #4a7c59  — 淺綠（點綴、 Badge）
- `ftg-orange`   #e07a3d  — 品牌活潑色（ CTA、次要按鈕）

### 中性色
- `ftg-sand`     #f5f0e8  — 淺沙底（背景、卡片）
- `ftg-cream`    #faf7f2  — 奶白底（區塊底）
- `ftg-bark`     #8b6f47  — 樹皮色（次要文字、邊框）

### 使用統計（2026-09-26 稽核）
| token | 使用次數 | 狀態 |
|-------|---------|------|
| ftg-green  | 92   | ✅ 活躍 |
| ftg-forest | 77   | ✅ 活躍 |
| ftg-leaf   | 1    | ⚠️ 極少使用 |
| ftg-sand   | 22   | ✅ 活躍 |
| ftg-cream  | 26   | ✅ 活躍 |
| ftg-bark   | 0    | ❌ 未使用 |
| ftg-orange | 13   | ✅ 活躍 |

## 2. 字型系統

### 英文字型
- `font-sans`  — Inter, system-ui, sans-serif（正文、 UI 文字）

### 中文字型
- `font-serif` — Noto Serif TC, serif（標題、 引用、 品牌調性文字）

### 使用統計
| token | 使用次數 | 狀態 |
|-------|---------|------|
| font-sans  | 0  | ⚠️ 未顯式使用（系統 fallback 生效中） |
| font-serif | 3  | ✅ 少量使用 |

## 3. 間距與排版

- 基底間距：Tailwind spacing scale (`p-`, `m-`, `gap-`, `space-` 等)
- 文字排版：
  - 標題層級：`text-3xl sm:text-4xl md:text-5xl lg:text-6xl`
  - 正文字型：`text-base md:text-lg lg:text-xl`
  - 行高：`leading-relaxed` / `leading-tight`

## 4. 圖片資源管理

### 格式策略
- 首選 `.webp`（已針對主要素材轉換）
- 舊版 `.png` 已清理（保留無 `.webp` 配對者）

### 組織架構
```
public/images/
├── corporate/           # 企業方案頁橫幅
├── esg/                 # ESG 團隊日、 Impact Note 頁橫幅
├── executive/           # 高階主管共識營頁橫幅
├── family/              # 家庭日頁橫幅
├── services/            # 價值 proposition 圖片
├── wellbeing/           # 身心平衡旅程頁橫幅
├── 企業員工旅遊/         # 企業員工旅遊素材
├── 企業家庭日/           # 企業家庭日素材
├── 官網首頁示意1/        # 首頁示意圖
├── 官網首頁示意2/        # 首頁示意圖
├── 六大方案-*/          # 六大方案素材
└── family-day/          # 家庭日詳情頁圖片
```

## 5. 設計 token 稽核工具

- 腳本位置：`scripts/design-token-audit.js`
- 執行方式：`node scripts/design-token-audit.js`
- 報告輸出：`scripts/design-token-audit-report.txt`

## 6. 視覺規範（示意）

### 首頁 Hero 區塊
- 背景：深森林綠漸層 `from-[ftg-forest] via-[ftg-green] to-[ftg-leaf]`
- 文字：白色，字型為 `font-serif`
- 按鈕： `bg-ftg-green` / `hover:bg-ftg-forest`

### 卡片區塊
- 背景： `bg-ftg-sand` 或 `bg-ftg-cream`
- 文字：深色， `font-sans`
- 圖示： `text-ftg-green`

---

*文件維護責任：設計團隊*
*最終更新：2026-09-26*
