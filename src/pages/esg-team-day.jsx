import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';

// 嚴格照資料夾原始順序：子網頁-ESG戶外團隊日 (10張)
const teamImages = [
  { src: '/images/esg-team-day/ESG 戶外團隊-走進自然.png', title: '走進自然', desc: '讓 ESG 從報告文字變成親身參與的戶外行動。' },
  { src: '/images/esg-team-day/team day-團隊共創.png', title: '團隊共創', desc: '在任務與對話中凝聚團隊共識。' },
  { src: '/images/esg-team-day/team day-連結地方與環境.png', title: '連結地方與環境', desc: '把活動與地方共益、環境行動連結起來。' },
];

const expImages = [
  { src: '/images/esg-team-day/可搭配的旅程內容-友善環境行動.png', title: '友善環境行動', desc: '無痕山林、環境友善的實作任務。' },
  { src: '/images/esg-team-day/可搭配的旅程內容-團隊合作任務.png', title: '團隊合作任務', desc: '以 ESG 主題設計的團隊合作挑戰。' },
  { src: '/images/esg-team-day/可搭配的旅程內容-地方餐食.png', title: '地方餐食', desc: '結合在地食材與地方餐食體驗。' },
  { src: '/images/esg-team-day/可搭配的旅程內容-文化體驗.png', title: '文化體驗', desc: '地方文化與社區體驗，深化連結。' },
  { src: '/images/esg-team-day/可搭配的旅程內容-森林健走.png', title: '森林健走', desc: '低強度森林健走，鬆動身心。' },
  { src: '/images/esg-team-day/可搭配的旅程內容-自然觀察.png', title: '自然觀察', desc: '引導式自然觀察，打開感官。' },
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

export default function EsgTeamDay() {
  usePageSeo({
    title: 'ESG 戶外團隊日',
    description:
      '讓員工在一天內親身參與永續行動的 Team Day，結合安全設計、團隊凝聚、ESG 學習與地方共益。',
    path: '/esg-team-day',
    keywords: ['ESG Team Day', '企業活動', '團隊凝聚', '無痕山林', '永續行動'],
  });
  return (
    <div>
      <section className="relative py-20 bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-ftg-green hover:underline mb-4 inline-block">← 返回首頁</Link>
          <h1 className="section-title">ESG 戶外團隊日</h1>
          <p className="section-subtitle">
            讓 ESG 不只是報告文字，而是員工可以親身參與的一日戶外永續行動。
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <img src="/images/esg-team-day/team day-頁首大橫幅.png" alt="ESG 戶外團隊日 頁首大橫幅" className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl" loading="lazy" />
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-ftg-forest mb-6">為什麼企業需要墾趣？</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                企業自己可以辦一日遊或 Team Building，但不一定能把一天活動設計成安全、有團隊凝聚、有 ESG 學習、有地方共益、有成果素材的專案。
              </p>
            </div>
            <div className="bg-ftg-cream rounded-2xl p-8">
              <h3 className="text-xl font-bold text-ftg-forest mb-4">我們能夠提供什麼</h3>
              <ul className="space-y-3">
                {['把一日活動設計成安全、有凝聚力且有趣的 ESG 行動', '專業引導讓 ESG 從抽象變成員工親身參與', '完整活動設計與成果整理，企業不需從零開始', '產出可對內外溝通的照片、故事與 Basic Impact Note'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-ftg-green mr-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">ESG 戶外團隊日，可以帶來什麼？</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {teamImages.map((p, i) => <PhotoCard key={i} {...p} />)}
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">可搭配的旅程內容</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {expImages.map((p, i) => <PhotoCard key={i} {...p} />)}
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">六大服務模組</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {['需求對焦：訪談 HR、福委會與 ESG 需求', '場域與安全：路線選擇、難度分級、裝備提醒、天候備案', '戶外體驗：團隊健走、自然觀察、森呼吸', 'ESG 任務：無痕山林、地方共益、環境行動', '團隊收斂：小組反思、行動承諾、團隊對話', '成果整理：問卷、照片、Basic Impact Note'].map((item, i) => (
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
            <p className="text-gray-100 mb-6">HR：員工健康日、團隊凝聚 · 福委會：一日員工活動 · ESG／CSR 部門：員工 ESG 參與 · 高階主管：企業文化、品牌雇主形象</p>
            <Link to="/#contact" className="inline-block bg-ftg-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
              立即洽詢 ESG 戶外團隊日
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
