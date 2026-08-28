import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';

// 嚴格照資料夾原始順序：子網頁-企業員工旅遊 (14張)
const travelImages = [
  { src: '/images/corporate-travel/企業員工旅遊-團隊交流.png', title: '團隊交流', desc: '在自然與移動中，鬆開職務角色、重新交流。' },
  { src: '/images/corporate-travel/企業員工旅遊-放鬆與充電.png', title: '放鬆與充電', desc: '放慢步調，讓身心真正充電。' },
  { src: '/images/corporate-travel/企業員工旅遊-自然與地方體驗.png', title: '自然與地方體驗', desc: '把旅遊與自然、地方文化連結起來。' },
];

const valueImages = [
  { src: '/images/corporate-travel/可延伸加值服務-串接 Team Day／Wellbeing Retreat.png', title: '串接 Team Day／Wellbeing Retreat', desc: '一次規劃，延伸為系列活動。' },
  { src: '/images/corporate-travel/可延伸加值服務-年度企業活動規劃.png', title: '年度企業活動規劃', desc: '協助企業編排全年活動節奏。' },
  { src: '/images/corporate-travel/可延伸的加值服務-Basic Impact Summary.png', title: 'Basic Impact Summary', desc: '基礎影響力摘要，便於內部溝通。' },
  { src: '/images/corporate-travel/可延伸的加值服務-ESG Impact Note.png', title: 'ESG Impact Note', desc: '升級為 ESG Impact Note 成果報告。' },
];

const expImages = [
  { src: '/images/corporate-travel/搭配旅程-地方餐食.png', title: '地方餐食', desc: '結合在地食材與地方餐食體驗。' },
  { src: '/images/corporate-travel/搭配旅程-文化體驗.png', title: '文化體驗', desc: '地方文化、部落或社區體驗。' },
  { src: '/images/corporate-travel/搭配旅程-森林慢行.png', title: '森林慢行', desc: '低強度森林慢行，鬆動身心。' },
  { src: '/images/corporate-travel/搭配旅程-無痕戶外.png', title: '無痕戶外', desc: '落實無痕戶外，友善環境。' },
  { src: '/images/corporate-travel/搭配旅程-親近自然.png', title: '親近自然', desc: '引導式親近自然，打開感官。' },
  { src: '/images/corporate-travel/搭配旅程-輕量團隊互動.png', title: '輕量團隊互動', desc: '低壓力的團隊互動設計。' },
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

export default function CorporateTravel() {
  usePageSeo({
    title: '企業員工旅遊',
    description:
      '把傳統員工旅遊升級為戶外健康、地方文化與團隊互動體驗，降低企業規劃負擔並提升活動價值。',
    path: '/corporate-travel',
    keywords: ['企業員工旅遊', 'Team Building', '戶外體驗', 'ESG 活動', '公司旅遊'],
  });
  return (
    <div>
      <section className="relative py-20 bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-ftg-green hover:underline mb-4 inline-block">← 返回首頁</Link>
          <h1 className="section-title">企業員工旅遊</h1>
          <p className="section-subtitle">
            將傳統員工旅遊升級為結合自然健走、地方文化、永續學習與團隊互動的戶外體驗。
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <img src="/images/corporate-travel/企業員工旅遊-頁首大橫幅.png" alt="企業員工旅遊 頁首大橫幅" className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl" loading="lazy" />
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-ftg-forest mb-6">為什麼企業需要墾趣？</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                企業不是不會辦員工旅遊，而是不一定能把員工旅遊設計成兼具戶外安全、活動品質、團隊互動、地方文化、永續學習與成果素材的專案。
              </p>
              <p className="text-gray-600 leading-relaxed">
                墾能以戶外專業與旅行社執行能力，協助企業降低規劃負擔，提升活動價值。
              </p>
            </div>
            <div className="bg-ftg-cream rounded-2xl p-8">
              <h3 className="text-xl font-bold text-ftg-forest mb-4">我們能夠提供什麼</h3>
              <ul className="space-y-3">
                {['把員工旅遊設計成獨特、難被比價的戶外體驗', '專業規劃與現場執行，減輕福委會／HR 負擔', '活動後交付成果與延伸素材，價值延續', '專業戶外引導把安全與節奏安排妥當'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-ftg-green mr-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">企業員工旅遊，可以帶來什麼？</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {travelImages.map((p, i) => <PhotoCard key={i} {...p} />)}
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">可延伸加值服務</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {valueImages.map((p, i) => <PhotoCard key={i} {...p} />)}
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">搭配旅程</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {expImages.map((p, i) => <PhotoCard key={i} {...p} />)}
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">墾趣可以提供</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {['企業需求訪談與旅遊目的設定', '戶外場域與路線難度設計', '行前裝備建議與戶外安全提醒', '交通、餐飲、住宿與現場執行', '自然健走、地方文化與食農體驗', '低壓力 Team Building 與團隊互動', '無痕戶外、地方共益與永續學習', '活動照片、員工回饋與成果摘要'].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-ftg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-ftg-green text-xl">✓</span>
                </div>
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-ftg-green text-white rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">適合對象</h3>
            <p className="text-gray-100 mb-6">HR／人資部門 · 福委會 · ESG／CSR 部門 · 品牌／公關部門</p>
            <Link to="/#contact" className="inline-block bg-ftg-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
              立即洽詢企業員工旅遊方案
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
