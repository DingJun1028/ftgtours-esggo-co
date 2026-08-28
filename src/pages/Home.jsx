import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';

export default function Home() {
  usePageSeo({
    title: 'ESG 戶外健康旅遊方案',
    description:
      'FTG TOURS 墾趣旅遊提供企業 ESG Team Day、員工旅遊、家庭日與 Retreat 等戶外健康旅遊方案，讓企業福祉與永續行動兼得。',
    path: '/',
    keywords: ['ESG 旅遊', '企業員工旅遊', 'Team Day', '家庭日', 'Retreat'],
  });
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-ftg-forest via-ftg-green to-ftg-leaf">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif leading-tight">
            走進自然，創造更有意義的旅程
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            墾趣結合戶外導覽、旅行服務與在地連結，為企業設計兼顧員工身心健康、團隊連結、環境友善與地方價值的旅程。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/corporate-travel" className="bg-ftg-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors">
              探索企業方案
            </Link>
            <a href="#esg-section" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-colors">
              了解墾趣旅程設計
            </a>
          </div>
        </div>
      </section>

      {/* Three Values Section */}
      <section id="esg-section" className="py-20 bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">一趟旅程，可以創造三種價值</h2>
            <p className="section-subtitle">
              結合戶外導覽、旅行服務與在地連結，為企業設計兼顧員工身心健康、團隊連結、環境友善與地方價值的旅程。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-ftg-green/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🌲</span>
              </div>
              <h3 className="text-2xl font-bold text-ftg-forest mb-4">親近自然</h3>
              <p className="text-gray-600 leading-relaxed">
                走進山林與海岸，放慢腳步、感受自然，讓身心回到平衡。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-ftg-green/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-ftg-forest mb-4">連結地方</h3>
              <p className="text-gray-600 leading-relaxed">
                走入在地、認識文化，支持地方產業，創造正向的影響力。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-ftg-green/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">💚</span>
              </div>
              <h3 className="text-2xl font-bold text-ftg-forest mb-4">照顧員工與團隊</h3>
              <p className="text-gray-600 leading-relaxed">
                建立信任與共識，提升幸福感與向心力，團隊更有力量。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">六大企業方案</h2>
            <p className="section-subtitle">
              從一日入門到旗艦 Retreat，滿足不同企業階段與預算需求。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: '企業員工旅遊', desc: '把傳統員工旅遊升級為戶外健康、地方文化與團隊互動體驗。', link: '/corporate-travel' },
              { title: '企業家庭日', desc: '讓家庭日成為親子自然教育、家庭關懷與品牌雇主活動。', link: '/family-day' },
              { title: 'ESG Outdoor Team Day', desc: '讓 ESG 變成員工一天內可親身參與的戶外永續行動。', link: '/esg-team-day' },
              { title: 'Employee Wellbeing Retreat', desc: '從高壓工作中恢復能量，團隊在自然場域重新連結。', link: '/wellbeing-retreat' },
              { title: '高階主管共識營', desc: '在自然場域中重新對齊使命、文化與永續轉型方向。', link: '/executive-retreat' },
              { title: 'ESG Impact Note', desc: '把活動成果整理成 HR、ESG、品牌部皆可用的成果素材。', link: '/esg-impact-note' },
            ].map((product, i) => (
              <Link key={i} to={product.link} className="group bg-ftg-cream rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-ftg-green text-white rounded-full font-bold text-lg mb-4 group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-ftg-forest mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{product.desc}</p>
                <span className="text-ftg-green font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                  了解更多
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ftg-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            讓團隊旅行，不只是出遊
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            從需求訪談到成果交付，我們協助企業把每一次戶外活動，轉化為員工福祉、團隊凝聚與永續行動的解方。
          </p>
          <a href="#/contact" className="inline-block bg-ftg-orange text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors">
            立即洽詢企業方案
          </a>
        </div>
      </section>
    </div>
  );
}
