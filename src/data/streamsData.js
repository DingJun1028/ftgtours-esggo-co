// 六流體系資料 —— 本檔為文案的唯一真實來源 (SSOT)
//
// 5T-Transparent: 刻意不放進 src/i18n/translations.js。
// 這個 repo 其他頁面用 t('wellbeing.xxx')，但那���的前提是「文案只存在
// translations.js 一處」。六流的文案本來就以 title/titleEn 成對存在本檔，
// 若再複製一份進 translations.js，就會產生兩個真實來源 —— 正是本季修掉
// 的 no-dupe-key 靜默覆蓋同一類風險（改了一處、忘了另一處，譯文默默不同步）。
// 因此這裡以 lang 欄位直接選字串，不做第二次複製。
//
// 每流皆包含: id, emoji, title/desc (zh) + titleEn/descEn (en)

export const streamsPage = {
  title: '六流體系',
  titleEn: 'Six Streams',
  sub: '墾趣永續旅程設計哲學 — 六流循環：覺曉 • 凝聚 • 復元 • 共好 • 留念 • 基礎',
  subEn: 'FTG sustainable journey design — six streams in cycle: awareness, cohesion, restoration, mutuality, memorial, foundation',
  metaDesc:
    '墾趣以六流體系設計企業永續旅程：覺曉流凝聚 ESG 共識，復元流照顧員工身心，共好流連結家庭與地方。',
  metaDescEn:
    'FTG designs corporate sustainability journeys with six streams: awareness builds ESG consensus, restoration supports employee wellbeing, mutuality connects families and local communities.',
  keywords: ['六流體系', '永續旅程設計', 'ESG 戶外', '企業永續', '團隊共識'],
  keywordsEn: ['six streams', 'sustainable journey design', 'ESG outdoor', 'corporate sustainability', 'team consensus'],
};

export const streams = [
  { id: 'awareness', emoji: '🌱', title: '覺曉流', desc: 'ESG 戶外團隊日', titleEn: 'Awareness Stream', descEn: 'ESG Outdoor Team Day' },
  { id: 'cohesion', emoji: '🤝', title: '凝聚流', desc: '高階主管共識營', titleEn: 'Cohesion Stream', descEn: 'Executive Consensus Retreat' },
  { id: 'restoration', emoji: '🌲', title: '復元流', desc: '員工身心平衡', titleEn: 'Restoration Stream', descEn: 'Employee Wellbeing Program' },
  { id: 'mutuality', emoji: '👨‍👩‍👧', title: '共好流', desc: '企業家庭日', titleEn: 'Mutuality Stream', descEn: 'Corporate Family Day' },
  { id: 'memorial', emoji: '📊', title: '留念流', desc: 'ESG Impact Note', titleEn: 'Memorial Stream', descEn: 'ESG Impact Documentation' },
  { id: 'foundation', emoji: '🏔️', title: '基礎流', desc: '企業員工旅遊', titleEn: 'Foundation Stream', descEn: 'Team Travel Program' },
];

/** 依語言取出該流的中/英文欄位。 */
export const pickLang = (item, lang) => (lang === 'en' ? item.titleEn : item.title);
export const pickDesc = (item, lang) => (lang === 'en' ? item.descEn : item.desc);

// P-type: 單一頁面布局 (6 卡片 + 流動關係圖)
export const streamsLayout = {
  type: 'p-type', // single page
  cardsPerRow: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8',
  diagram: 'flex flex-wrap justify-center items-center gap-4',
};
