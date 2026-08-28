import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';

// 嚴格照資料夾原始順序：子網頁-員工身心平衡旅程 (11張)
const images = [
  { src: '/images/wellbeing-retreat/員工身心平衡-頁首大橫幅.png', title: '員工身心平衡 頁首大橫幅', desc: '一段好的身心平衡旅程，從頁首開始。' },
  { src: '/images/wellbeing-retreat/旅程可以留下什麼-企業文化溫度.png', title: '企業文化溫度', desc: '呈現關懷員工、重視福祉的企業文化溫度。' },
  { src: '/images/wellbeing-retreat/旅程可以留下什麼-可分享的活動素材.png', title: '可分享的活動素材', desc: '產出可內外使用的照片與活動素材包。' },
  { src: '/images/wellbeing-retreat/旅程可以留下什麼-員工放鬆回憶.png', title: '員工放鬆回憶', desc: '留下員工真實放鬆與投入的回憶畫面。' },
  { src: '/images/wellbeing-retreat/旅程可以留下什麼-團隊可更自交流.png', title: '團隊更自在的交流', desc: '在輕鬆情境中，讓對話與交流更自在。' },
  { src: '/images/wellbeing-retreat/旅程可以留下什麼-團隊更自然的連結.png', title: '更自然的連結', desc: '脫離工作角色，建立更自然的團隊連結。' },
  { src: '/images/wellbeing-retreat/旅程可以留下什麼-後續活動靈感.png', title: '後續活動靈感', desc: '為下一次員工活動留下靈感與方向。' },
  { src: '/images/wellbeing-retreat/旅程可以留下什麼-恢復能量.png', title: '恢復能量', desc: '在自然場域放慢步調，協助員工從高壓中回充。' },
  { src: '/images/wellbeing-retreat/旅程可以留下什麼-放鬆節奏.png', title: '放鬆節奏', desc: '建立慢旅節奏，讓身心重新找回平衡。' },
  { src: '/images/wellbeing-retreat/旅程可以留下什麼-留下值得分享的回憶.png', title: '值得分享的回憶', desc: '形成可分享的活動回憶，強化雇主品牌。' },
  { src: '/images/wellbeing-retreat/旅程可以留下什麼-自然中的安定感.png', title: '自然中的安定感', desc: '森林與自然環境帶來穩定與安定感。' },
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

export default function WellbeingRetreat() {
  usePageSeo({
    title: '員工身心平衡旅程',
    description:
      '為企業設計二日或三日員工福祉 Retreat，協助團隊在自然場域恢復能量、重建連結與對話節奏。',
    path: '/wellbeing-retreat',
    keywords: ['Wellbeing Retreat', '員工福祉', '高壓紓壓', '團隊對話', '自然休養'],
  });
  return (
    <div>
      <section className="relative py-20 bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-ftg-green hover:underline mb-4 inline-block">← 返回首頁</Link>
          <h1 className="section-title">員工身心平衡旅程</h1>
          <p className="section-subtitle">
            為企業設計二日或三日的員工身心平衡活動，協助員工從高壓工作中恢復能量。
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <img src="/images/wellbeing-retreat/員工身心平衡-頁首大橫幅.png" alt="員工身心平衡旅程 頁首大橫幅" className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl" loading="lazy" />
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-ftg-forest mb-6">為什麼企業需要墾趣？</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">企業自己可以訂飯店與交通，但不一定能把戶外活動設計成安全、有節奏、有身心恢復、有團隊對話、有 ESG 成果的員工福祉專案。</p>
            </div>
            <div className="bg-ftg-cream rounded-2xl p-8">
              <h3 className="text-xl font-bold text-ftg-forest mb-4">我們能夠提供什麼</h3>
              <ul className="space-y-3">
                {['從需求訪談開始，為企業設計有恢復節奏的戶外專案', '專業戶外引導與天候備案，安全與體能差異都顧及', '以引導式團隊對話，讓員工福祉成效可被看見', '交付照片、問卷與 Impact Note 等可留下來的成果素材'].map((item, i) => (
                  <li key={i} className="flex items-start"><span className="text-ftg-green mr-2">✓</span><span className="text-gray-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">旅程可以留下什麼？</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {images.slice(1).map((p, i) => <PhotoCard key={i} {...p} />)}
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">六大服務模組</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {['需求診斷：企業訪談、員工狀態盤點', '場域與路線：森林、步道、地方場域', '戶外與自然修復：森林健走、森呼吸、慢行', '住宿餐飲與節奏：住宿、餐飲、慢旅節奏', '團隊對話：團隊任務、反思引導、行動承諾', '成果整理：問卷、照片、Impact Note、素材包'].map((item, i) => (
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
            <p className="text-gray-100 mb-6">HR：員工福祉、壓力舒緩、人才留任 · 中高階主管：團隊修復 · ESG／CSR 部門：員工關懷 · 高壓產業團隊：科技、金融、醫療</p>
            <Link to="/#contact" className="inline-block bg-ftg-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
              立即洽詢 員工身心平衡旅程
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
