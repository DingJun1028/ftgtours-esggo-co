import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';
import { useLanguage } from '../i18n/LanguageContext';
import FTGIcon from '../components/FTGIcon';
import CtaForm from '../components/CtaForm';

export default function JourneyDesign() {
  const { t } = useLanguage();
  usePageSeo({
    title: '了解墾趣旅程設計 | FTG TOURS',
    description: '從需求訪談到成果交付，墾趣如何為企業設計兼顧員工福祉、團隊凝聚與永續行動的旅程。',
    path: '/journey-design',
    keywords: ['旅程設計', '企業旅遊規劃', '客製化行程', 'ESG 旅程'],
  });

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-ftg-forest text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ftg-forest via-ftg-green/90 to-ftg-forest"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-ftg-orange hover:text-white transition-colors mb-6 text-sm">
            ← 返回首頁
          </Link>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif leading-tight">
            了解墾趣旅程設計
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            從需求訪談到成果交付，我們協助企業把每一次戶外活動，轉化為員工福祉、團隊凝聚與永續行動的解方。
          </p>
        </div>
      </section>

      {/* 設計理念 */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">墾趣的設計理念</h2>
            <p className="section-subtitle">每一次旅程，都是一次創造價值的機會</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'leaf', title: '自然為師', desc: '我們相信自然是最好的教室。走進山林與海岸，讓參與者在真實情境中學習、感受、連結。' },
              { icon: 'users', title: '以人為本', desc: '旅程設計的出發點是人——理解團隊狀態、尊重個體差異、創造有溫度的共同體驗。' },
              { icon: 'sustainable', title: '永續行動', desc: '把 ESG 精神融入每個環節，讓旅程不只是消耗，而是對地方、環境與社會的投資。' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-ftg-sand rounded-2xl">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-ftg-green/10 flex items-center justify-center">
                  <FTGIcon name={item.icon} size={32} className="text-ftg-green" />
                </div>
                <h3 className="text-xl font-bold text-ftg-forest mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 設計流程 */}
      <section className="section-padding bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">墾趣的設計流程</h2>
            <p className="section-subtitle">五個步驟，從需求到完成</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {[
              { num: 1, icon: 'clipboard', title: '需求理解與訪談', desc: '深入了解企業文化、目標、團隊狀態與預算期待。透過訪談找出真正重要的核心需求。' },
              { num: 2, icon: 'map', title: '行程提案與規劃', desc: '依需求設計最合適的行程方案，包含場地選擇、活動設計、交通住宿整合。' },
              { num: 3, icon: 'users', title: '細節確認與溝通', desc: '與企業端逐一確認每個環節，包含人數調整、特殊需求、風險評估與應急預案。' },
              { num: 4, icon: 'navigation', title: '專業執行與現場帶領', desc: '專業领队與活動引導人員現場執行，確保活動流暢、安全、達到預期效果。' },
              { num: 5, icon: 'award', title: '成果整理與回饋', desc: '活動後的回饋收集、照片整理、影響力摘要，讓旅程價值延續到組織內部。' },
            ].map((step, i) => (
              <div key={i} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-ftg-forest text-white flex items-center justify-center text-xl font-bold shadow-lg">
                    {step.num}
                  </div>
                  {i < 4 && <div className="w-0.5 h-full bg-ftg-green/30 mx-auto mt-2"></div>}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <FTGIcon name={step.icon} size={24} className="text-ftg-green" />
                    <h3 className="text-xl font-bold text-ftg-forest">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 為什麼選擇墾趣 */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">為什麼企業選擇墾趣</h2>
            <p className="section-subtitle">五大優勢，讓旅程與眾不同</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: 'mountain', title: '深耕戶外經驗', desc: '多年戶外導覽與旅遊經營經驗。' },
              { icon: 'compass', title: '專業路線設計', desc: '依據需求規劃最適合的旅程難度。' },
              { icon: 'shield', title: '完整旅行服務', desc: '合法旅行社、保險、交通一站式。' },
              { icon: 'link', title: '在地夥伴合作', desc: '在地夥伴合作，共創地方價值。' },
              { icon: 'sustainable', title: '永續行動實踐', desc: 'ESG Impact Note 成果摘要。' },
            ].map((item, i) => (
              <div key={i} className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-ftg-green/10 flex items-center justify-center">
                  <FTGIcon name={item.icon} size={24} className="text-ftg-green" />
                </div>
                <h3 className="font-bold text-ftg-forest mb-2 text-sm">{item.title}</h3>
                <p className="text-gray-600 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ftg-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">讓團隊旅行，不只是出遊</h2>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                我們協助企業把每一次戶外活動，轉化為員工福祉、團隊凝聚與永續行動的解方。
              </p>
              <div className="flex items-center gap-4 text-gray-300 text-sm">
                <div className="flex items-center gap-2"><FTGIcon name="shield" size={20} /> 合法旅行社</div>
                <div className="flex items-center gap-2"><FTGIcon name="award" size={20} /> 專業帶領</div>
                <div className="flex items-center gap-2"><FTGIcon name="heart" size={20} /> 全方位保障</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-800">
              <CtaForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
