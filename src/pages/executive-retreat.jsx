import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';

// 嚴格照資料夾原始順序：子網頁-高階主管共識旅程 (10張)
const expImages = [
  { src: '/images/executive-retreat/可搭配的旅程內容-圓桌對話.png', title: '圓桌對話', desc: '引導式圓桌，讓策略對話更聚焦。' },
  { src: '/images/executive-retreat/可搭配的旅程內容-團隊共學.png', title: '團隊共學', desc: '結合趨勢與案例的共學設計。' },
  { src: '/images/executive-retreat/可搭配的旅程內容-在地餐集.png', title: '在地餐集', desc: '以地方食材與餐食體驗連結土地。' },
  { src: '/images/executive-retreat/可搭配的旅程內容-山林慢行.png', title: '山林慢行', desc: '低強度山林慢行，鬆動思維。' },
  { src: '/images/executive-retreat/可搭配的旅程內容-文化體驗.png', title: '文化體驗', desc: '地方文化與藝術體驗，打開視野。' },
  { src: '/images/executive-retreat/可搭配的旅程內容-靜心觀景.png', title: '靜心觀景', desc: '留白與觀景，讓反思沉澱。' },
];

const consensusImages = [
  { src: '/images/executive-retreat/高階主管共識-放慢腳步與重新思考.png', title: '放慢腳步與重新思考', desc: '脫離日常會議慣性，在自然場域重新對齊方向。' },
  { src: '/images/executive-retreat/高階主管共識-連結自然與對方.png', title: '連結自然與對方', desc: '在慢行與對話中，重建與彼此、與土地的連結。' },
  { src: '/images/executive-retreat/高階主管共識-頁首橫幅.png', title: '高階主管共識 頁首橫幅', desc: '經營團隊在自然場域重新對齊方向。' },
  { src: '/images/executive-retreat/高階主管共識-領導團隊對話.png', title: '領導團隊對話', desc: '以圓桌與工作坊，收斂經營團隊的共識。' },
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

export default function ExecutiveRetreat() {
  usePageSeo({
    title: '高階主管共識營',
    description:
      '結合自然場域、永續趨勢與策略對話，協助經營團隊重新對齊使命、文化與永續轉型方向。',
    path: '/executive-retreat',
    keywords: ['共識營', '高階主管', '永續轉型', '策略對話', 'Executive Retreat'],
  });
  return (
    <div>
      <section className="relative py-20 bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-ftg-green hover:underline mb-4 inline-block">← 返回首頁</Link>
          <h1 className="section-title">高階主管共識營</h1>
          <p className="section-subtitle">
            結合自然場域、永續趨勢、策略對話與戶外慢行，協助高階主管團隊重新對齊企業使命、組織文化與永續轉型方向。
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <img src="/images/executive-retreat/高階主管共識-頁首橫幅.png" alt="高階主管共識營 頁首大橫幅" className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl" loading="lazy" />
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-ftg-forest mb-6">為什麼企業需要墾趣？</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">企業自己可以訂飯店、開會或找講師，但不一定能把自然場域、永續趨勢、策略對話、團隊共識、戶外慢行與後續行動報告整合成真正有效的高階主管 Retreat。</p>
            </div>
            <div className="bg-ftg-cream rounded-2xl p-8">
              <h3 className="text-xl font-bold text-ftg-forest mb-4">常見挑戰</h3>
              <ul className="space-y-3">
                {['難以跳出日常會議慣性', '高階主管對 ESG、文化與轉型共識不一致', '內部引導容易受部門立場與權力關係限制', '缺少後續行動路線與Opportunity Map'].map((item, i) => (
                  <li key={i} className="flex items-start"><span className="text-red-500 mr-2">✕</span><span className="text-gray-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">可搭配的旅程內容</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {expImages.map((p, i) => <PhotoCard key={i} {...p} />)}
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">高階主管共識營，可以帶來什麼？</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[consensusImages[0], consensusImages[1], consensusImages[3]].map((p, i) => <PhotoCard key={i} {...p} />)}
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">六大服務模組</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {['會前診斷：董事長／主管訪談、議題盤點', '場域設計：自然場域、住宿、交通、慢行路線', '趨勢導入：ESG、永續轉型、創價型 ESG', '策略對話：圓桌對話、工作坊、分組討論', '行動收斂：Opportunity Map、Roadmap、優先順序', '成果報告：Executive Retreat Report'].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  <span className="w-8 h-8 bg-ftg-green text-white rounded-full flex items-center justify-center font-bold mr-3">{i + 1}</span>
                  <p className="text-gray-700 font-medium">{item.split('：')[0]}</p>
                </div>
                <p className="text-gray-600 text-sm ml-11">{item.split('：')[1]}</p>
              </div>
            ))}
          </div>
          <div className="bg-ftg-green text-white rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">適合對象</h3>
            <p className="text-gray-100 mb-6">董事長、總經理與經營團隊 · 永續委員會與 ESG 高階決策小組 · 家族企業與接班團隊 · 中高階主管、策略部門</p>
            <Link to="/#contact" className="inline-block bg-ftg-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
              立即洽詢高階主管共識營
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
