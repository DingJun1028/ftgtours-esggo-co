import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';

// 嚴格照資料夾原始順序：子網頁-ESG Impact Note (13張)
const noteImages = [
  { src: '/images/esg-impact-note/ESG Impact Note-ESG行動亮點.png', title: 'ESG 行動亮點', desc: '把活動中的環境、社會行動轉譯為可回報的 ESG 亮點。' },
  { src: '/images/esg-impact-note/ESG Impact Note-參與者回饋與感受.png', title: '參與者回饋與感受', desc: '整理員工真實回饋，成為雇主品牌與福祉溝通素材。' },
  { src: '/images/esg-impact-note/ESG Impact Note-地方及環境貢獻.png', title: '地方及環境貢獻', desc: '呈現活動對地方共益與環境友善的具體貢獻。' },
  { src: '/images/esg-impact-note/ESG Impact Note-旅程與活動全貌.png', title: '旅程與活動全貌', desc: '以一頁全貌圖重現活動脈絡，便於內部與外部溝通。' },
];

const resultImages = [
  { src: '/images/esg-impact-note/ESG成果內容-地方共好與社會價值.png', title: '地方共好與社會價值', desc: '彙整地方共益、社會價值等可量化成果。' },
  { src: '/images/esg-impact-note/成果內容-ESG／SDGs 對應整理.png', title: 'ESG／SDGs 對應整理', desc: '將活動對應至 SDGs 與企業 ESG 目標。' },
  { src: '/images/esg-impact-note/成果內容-參與人次與投入紀錄.png', title: '參與人次與投入紀錄', desc: '紀錄參與人次、投入工時與資源使用。' },
  { src: '/images/esg-impact-note/成果內容-員工回饋與影像故事.png', title: '員工回饋與影像故事', desc: '以影像與故事呈現員工真實體驗。' },
  { src: '/images/esg-impact-note/成果內容-後續改善與行動建議.png', title: '後續改善與行動建議', desc: '提出下一次活動的改善與行動建議。' },
  { src: '/images/esg-impact-note/成果內容-活動基本資訊與行程摘要.png', title: '活動基本資訊與行程摘要', desc: '整理活動基本資訊與行程摘要，便於歸檔。' },
  { src: '/images/esg-impact-note/成果內容-環境友善行動成果.png', title: '環境友善行動成果', desc: '彙整無痕戶外、減碳等環境友善行動。' },
  { src: '/images/esg-impact-note/結果內容-員工回饋與影像故事.png', title: '員工回饋與影像故事（續）', desc: '補充更多員工視角與影像紀錄。' },
];

function PhotoCard({ src, title, desc }) {
  return (
    <figure className="relative overflow-hidden rounded-2xl shadow-lg group">
      <img src={src} alt={title} className="w-full h-72 object-cover transition-transform group-hover:scale-105" loading="lazy" />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <h3 className="text-white text-lg font-bold">{title}</h3>
        <p className="text-gray-200 text-sm">{desc}</p>
      </figcaption>
    </figure>
  );
}

export default function EsgImpactNote() {
  usePageSeo({
    title: 'ESG Impact Note',
    description:
      '把企業戶外活動成果整理成 HR、ESG、品牌部門皆可使用的 Impact Note 與溝通素材。',
    path: '/esg-impact-note',
    keywords: ['ESG Impact Note', '活動成果', '雇主品牌', '永續溝通', 'ESG 素材'],
  });
  return (
    <div>
      <section className="relative py-20 bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-ftg-green hover:underline mb-4 inline-block">← 返回首頁</Link>
          <h1 className="section-title">ESG Impact Note 專案</h1>
          <p className="section-subtitle">
            把一次企業戶外活動，整理成可被內部溝通、品牌雇主與永續報告參考的成果素材。
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <img src="/images/esg-impact-note/ESG Impact Note-頁首大橫幅.png" alt="ESG Impact Note 頁首大橫幅" className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl" loading="lazy" />
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-ftg-forest mb-6">為什麼企業需要墾趣？</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">企業自己可以拍照或寫活動紀錄，但不一定能把一場活動整理成 HR、永續部、品牌部與高階主管都能使用的成果素材。</p>
            </div>
            <div className="bg-ftg-cream rounded-2xl p-8">
              <h3 className="text-xl font-bold text-ftg-forest mb-4">常見挑戰</h3>
              <ul className="space-y-3">
                {['企業活動後常只有照片與花絮', '永續部門難以把活動轉成 ESG 語言', '素材分散，缺少可回報主管與內外溝通的格式', '活動成果在活動結束後就歸檔消失'].map((item, i) => (
                  <li key={i} className="flex items-start"><span className="text-red-500 mr-2">✕</span><span className="text-gray-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">一趟企業旅程，可以整理出哪些內容？</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {noteImages.map((p, i) => <PhotoCard key={i} {...p} />)}
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">可整理的成果內容</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {resultImages.map((p, i) => <PhotoCard key={i} {...p} />)}
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">六大服務模組</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {['成果需求訪談：了解 HR、ESG、品牌部門需要什麼素材', '指標與問卷設計：參與數據、員工回饋、ESG 行動紀錄', '現場素材蒐集：照片、故事、地方共益、團隊互動', 'ESG 敘事轉譯：將活動轉成員工福祉、地方共益、環境教育語言', 'Impact Note 製作：3–15 頁成果摘要或報告', '後續建議：年度活動、下一次專案、ESG 延伸方案'].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  <span className="w-8 h-8 bg-ftg-green text-white rounded-full flex items-center justify-center font-bold mr-3">{i + 1}</span>
                  <p className="text-gray-700 font-medium">{item.split('：')[0]}</p>
                </div>
                <p className="text-gray-600 text-sm ml-11">{item.split('：')[1]}</p>
              </div>
            ))}
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 mb-12">
            <h3 className="text-lg font-bold text-gray-800 mb-2">注意說明</h3>
            <p className="text-gray-700 text-sm">ESG Impact Note 是企業活動成果摘要與 ESG 溝通素材，不取代正式永續報告、第三方查證、碳盤查或醫療心理評估。</p>
          </div>
          <div className="bg-ftg-green text-white rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">適合對象</h3>
            <p className="text-gray-100 mb-6">HR：員工福祉、活動成果 · 福委會：年度活動成果摘要 · ESG／CSR 部門：員工 ESG 參與、永續報告參考 · 品牌／公關部門：雇主品牌、企業故事</p>
            <Link to="/#contact" className="inline-block bg-ftg-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
              立即洽詢 ESG Impact Note
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
