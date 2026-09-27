# DESIGN.md — FTG Tours 設計系統

**更新日期**：2026-09-28 | **版本**：2.0（重寫版）

---

## 0. SSOT 原則（Single Source of Truth）

**token 清單的唯一真實來源是 `tailwind.config.js`。**

本文件、`scripts/design-token-audit.cjs`、任何元件都**不得**另存一份 token 副本。
- 新增 / 移除 / 改值 → 改 `tailwind.config.js`
- 確認使用狀態 → 跑稽核工具（§5），不要讀本文件的表格當真相
- 本文件中的次數為 2026-09-28 實測快照，僅供快速閱讀；數字過時以稽核報告為準

> 已移除：`ftg-bark` token 已於 `tailwind.config.js` 刪除，舊版文件記載的 `ftg-bark` 屬錯誤資訊，勿再使用。

---

## 1. 色彩系統

所有色彩 token 皆在 `ftg-` 命名空間下。

| Token | Hex | 語意用途 | 實測使用 | 狀態 |
|---|---|---|---|---|
| `ftg-green` | `#2d4a3e` | 主品牌深綠、icon、區塊底強調 | 90 次 | ✅ 主力 |
| `ftg-forest` | `#1a3c34` | 最深綠，標題文字、深底文字 | 76 次 | ✅ 主力 |
| `ftg-leaf` | `#4a7c59` | 中綠，點綴與次要強調 | 1 次 | ✅ 低量（可保留，勿刪） |
| `ftg-sand` | `#f5f0e8` | 暖米白，區塊底、卡片底 | 22 次 | ✅ 常用 |
| `ftg-cream` | `#faf7f2` | 淺米白，深底上的文字、頁面底 | 26 次 | ✅ 常用 |
| `ftg-orange` | `#e07a3d` | 暖橘，CTA 按鈕、高亮 | 13 次 | ✅ CTA 專用 |
| `ftg-sunlight` | `#f5f0e8` | **語意別名** → `sand` | 3 次 | ✅ 見 §1.1 |
| `ftg-deepgreen` | `#1a3c34` | **語意別名** → `forest` | 1 次 | ✅ 見 §1.1 |

### 1.1 語意別名：sunlight 與 deepgreen

`sunlight` 與 `deepgreen` **不是新色票**，是程式語意的別名，指向既有色值：

| 別名 | 實際指向 | Hex | 語意角色 |
|---|---|---|---|
| `ftg-sunlight` | `ftg-sand` | `#f5f0e8` | Hero 暖白漸層遮罩、手機版卡片底 |
| `ftg-deepgreen` | `ftg-forest` | `#1a3c34` | streams 頁最深綠底 |

**設計稿未給這兩者獨立色票**，故沿用最接近的既有值。

> 若日後設計確認需要獨立色相：**只改 `tailwind.config.js` 的 `sunlight` 與 `deepgreen` 這兩行即可，不影響任何呼叫端**（class 名稱不變）。

實測呼叫端：
- `src/components/Hero.jsx:13` — `from-ftg-sunlight via-ftg-sunlight/70 to-transparent`
- `src/components/Hero.jsx:32` — `bg-ftg-sunlight`（手機版暖白卡片）
- `src/pages/streams/index.jsx:5` — `bg-ftg-deepgreen text-ftg-cream`

### 1.2 設計風格

深藍／深綠 + 暖金的低彩度配色，簡約線條風。不使用高飽和漸層、不堆疊裝飾性陰影。

---

## 2. 字型系統

| Token | Stack | 用途 | 實測使用 |
|---|---|---|---|
| `font-sans` | `Inter, system-ui, sans-serif` | 內文、說明文字、UI | 1 次（基礎設定） |
| `font-serif` | `Noto Serif TC, serif` | 中文大標題、頁面 hero 標題 | 3 次 |

- `font-serif` 用於所有中文大標題（`Home.jsx:46`、`JourneyDesign.jsx:25,126`、`src/index.css:55` 的 `.display` 類別）
- `font-bold` 等字重為 Tailwind 內建 scale，**不是**自訂 token

### 2.1 間距與排版

- 基底間距：Tailwind spacing scale（`p-` / `m-` / `gap-` / `space-`），不另建 token
- 標題層級：`text-3xl sm:text-4xl md:text-5xl lg:text-6xl`
- 內文層級：`text-base md:text-lg lg:text-xl`
- 行高：`leading-tight`（標題）／ `leading-relaxed`（內文）

---

## 3. 圖片資源管理

### 3.1 格式策略

| 規則 | 內容 |
|---|---|
| **首選格式** | `.webp`（一律優先，兼顧畫質與體積） |
| **PNG / JPG 清除策略** | 僅作為尚未轉檔的原始素材，不進版。確認同名 `.webp` 已存在且畫面等價後，刪除該 `.png` 與其同名目錄 |
| **殘留物** | `*.png/` 這類「以副檔名當目錄」的零位元目錄應一併移除 |
| **目前統計** | 71 個 PNG、36 個 WebP |
| **總量** | `public/images` 約 179 MB（大量 PNG 為主因） |

### 3.2 目錄結構

```
public/images/
├── hero-banner.webp / hero-banner-1.webp / hero-banner-2.webp   # 首頁 banner
├── logo.png                                                       # 品牌標誌
├── services/          value-local / value-nature / value-team / corporate-travel .webp
├── corporate/         hero-corporate.webp
├── wellbeing/         hero-travel.webp / hero-wellbeing.webp
├── executive/         hero-executive.webp
├── family/            hero-family.webp
├── esg/               hero-esg-team.webp / hero-impact-note.webp
├── 5t/                best_practices_evolution_1 / _2 .webp
├── <中文方案名>/        對應方案內頁 .webp
├── family-day/ wellbeing-retreat/ corporate-travel/ 等詳情頁目錄
└── *.png/             待清除的 PNG 原始檔與零位元殘留目錄
```

命名規則：kebab-case 英文；內頁方案沿用既有中文目錄名，本文件不強制改名。

### 3.3 已知問題（待修）

`src/components/Hero.jsx:10` 引用 `/images/hero/hero-main.webp`，但 `public/images/hero/` **目錄不存在**。
實際檔案為 `public/images/hero-banner.webp`（與 `Home.jsx:36` 的引用一致）。Hero 底圖目前會失效，需修正路徑或補上檔案。

---

## 4. 間距與圓角慣例

- 圓角：卡片 `rounded-xl`、Hero 手機卡片 `rounded-t-3xl`、按鈕 `rounded-full`、icon 圓底 `rounded-full`
- 透明度變體寫法：`bg-ftg-green/10`、`via-ftg-sunlight/70`（Tailwind 內建 alpha，不需另設 token）
- 中性灰階沿用 Tailwind 內建（`gray-200`、`gray-600`），不另建 token

---

## 5. 設計 token 稽核工具

| 項目 | 內容 |
|---|---|
| **腳本路徑** | `scripts/design-token-audit.cjs` |
| **執行指令** | `node scripts/design-token-audit.cjs`（於專案根目錄） |
| **報告輸出** | `scripts/design-token-audit-report.txt`（同時印到 stdout） |
| **SSOT 來源** | 執行時即時解析 `tailwind.config.js`，腳本內不硬編碼 token 副本 |
| **掃描範圍** | `src/**` 下所有 `.js` / `.jsx`（2026-09-28 為 27 個檔案） |

### 5.1 它能抓出什麼

1. **已定義 token 的使用次數** → 找出閒置（0 次）token，協助收斂設計系統
2. **已使用但未定義的類別** → 列出 token 名稱與出現的檔案清單

### 5.2 主要價值：抓 Tailwind 的靜默失效

**Tailwind 對未定義的類別不報錯、不警告，樣式直接無聲失效。**
例如寫了 `bg-ftg-bark`（token 已刪除），build 照樣成功、頁面照樣跑，只是不會有任何顏色，
且沒有任何工具會跳出錯誤。這是本專案最危險的失敗型態，因此稽核工具必須獨立於 build 流程執行。

腳本只在 `className` / `class` 屬性的字串內容中比對，刻意排除：
- `href="/files/xxx.pdf"` — URL，非類別
- `data-ftg-seo="true"` — data 屬性，非類別
- 註解文字與變數插值 `${...}`

### 5.3 執行時機

修改 `tailwind.config.js` 後、或撰寫新元件使用色票前，務必跑一次。
報告結論若出現 🔴（未定義類別）必須當次修正；🟡（閒置 token）不影響功能。

---

## 6. 視覺規範（class 用法範例）

### 6.1 首頁 Hero 區塊

參考實作：`src/components/Hero.jsx`

漸層遮罩（左 → 右，由暖白漸隱）：

```jsx
{/* Hero 漸層 (Left → Right) */}
<div className="absolute inset-0 bg-gradient-to-r from-ftg-sunlight via-ftg-sunlight/70 to-transparent" />
```

標題與說明（最深綠文字）：

```jsx
<div className="text-left max-w-md xl:max-w-lg">
  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ftg-forest mb-6 leading-tight">
    {t('hero.title')}
  </h1>
  <p className="text-lg sm:text-xl lg:text-2xl text-ftg-forest mb-8">
    {t('hero.subtitle')}
  </p>
</div>
```

CTA 按鈕（暖橘 + 全圓角 + 縮放回饋）：

```jsx
<button className="bg-ftg-orange hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold transition-all hover:scale-105 shadow-lg">
  {t('hero.ctaButton')}
</button>
```

手機版暖白卡片（疊在圖片下方）：

```jsx
<div className="sm:hidden absolute bottom-0 left-0 right-0 bg-ftg-sunlight p-6 rounded-t-3xl shadow-lg">
  ...
</div>
```

### 6.2 卡片區塊

參考實作：`src/pages/esg-team-day.jsx`（`IconCard` local 元件）

```jsx
<div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center h-full">
  {/* 圖示圓底：ftg-green 10% 淡化底 + 原色 icon */}
  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-ftg-green/10 text-ftg-green flex items-center justify-center mb-3 sm:mb-4">
    <FTGIcon name={icon} size={28} className="text-ftg-green" />
  </div>
  <h3 className="text-base sm:text-lg font-bold text-ftg-forest mb-2">{title}</h3>
  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
</div>
```

### 6.3 深底頁面

```jsx
{/* streams 頁：最深綠底 + 淺米白文字 */}
<div className="min-h-screen pt-20 bg-ftg-deepgreen text-ftg-cream">
```

### 6.4 禁用清單

- `ftg-bark` — 已從 `tailwind.config.js` 移除，寫了會靜默失效
- 硬編碼 hex（`#2d4a3e`）— 一律改用 token

---

*文件維護責任：設計團隊*
*最終更新：2026-09-28*
