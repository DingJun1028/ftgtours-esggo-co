import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';
import { useLanguage } from '../i18n/LanguageContext';
import FTGIcon from '../components/FTGIcon';
import CtaForm from '../components/CtaForm';

export default function Home() {
  const { t } = useLanguage();
  usePageSeo({
    title: t('home.h1') || 'ESG 戶外健康旅遊方案',
    description: t('home.metaDesc'),
    path: '/',
    keywords: ['ESG 旅遊', '企業員工旅遊', '團隊日', '家庭日', '身心平衡旅程'],
  });

  const products = [
    { title: t('home.p1Title'), desc: t('home.p1Desc'), link: '/corporate-travel', img: '/images/corporate-travel/企業員工旅遊-頁首大橫幅.png' },
    { title: t('home.p2Title'), desc: t('home.p2Desc'), link: '/family-day', img: '/images/family-day/企業家庭日-頁首大橫幅.png' },
    { title: t('home.p3Title'), desc: t('home.p3Desc'), link: '/esg-team-day', img: '/images/esg-team-day/team day-頁首大橫幅.png' },
    { title: t('home.p4Title'), desc: t('home.p4Desc'), link: '/wellbeing-retreat', img: '/images/wellbeing-retreat/員工身心平衡-頁首大橫幅.png' },
    { title: t('home.p5Title'), desc: t('home.p5Desc'), link: '/executive-retreat', img: '/images/executive-retreat/高階主管共識-頁首橫幅.png' },
    { title: t('home.p6Title'), desc: t('home.p6Desc'), link: '/esg-impact-note', img: '/images/esg-impact-note/ESG Impact Note-頁首大橫幅.png' },
  ];

  const featureIcons = ['leaf', 'utensils', 'users', 'link', 'sustainable'];
  const processIcons = ['users', 'map', 'shield', 'heart', 'clipboard'];
  const momentIcons = ['sun', 'users', 'compass', 'smile', 'award'];
  const stepIcons = ['1', '2', '3', '4', '5'];
  const safetyIcons = ['navigation', 'clipboard', 'safety', 'compass', 'users'];

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-ftg-forest overflow-hidden">
        <img
          src="/images/hero-banner.webp"
          alt="FTG TOURS 墾趣旅遊 企業員工旅遊戶外旅程橫幅"
          className="absolute inset-0 w-full h-full object-cover"
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ftg-forest/80 via-ftg-green/60 to-ftg-leaf/50"></div>
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-serif leading-tight whitespace-nowrap">
            {t('home.heroTitle')}
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            {t('home.heroSub')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link to="/corporate-travel" className="bg-ftg-green text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-ftg-forest transition-colors">
              {t('home.exploreBtn')}
            </Link>
            <a href="#esg-section" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-white/20 transition-colors">
              {t('home.designBtn')}
            </a>
          </div>
          {/* 4 Feature Tags */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['自然體驗', '在地連結', '團隊共融', '永續行動'].map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. 為什麼是墾趣 */}
      <section id="esg-section" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="section-title">為什麼是墾趣</h2>
            <p className="section-subtitle">五大優勢，讓旅程與眾不同</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: 'mountain', title: '深耕戶外生活的品牌經驗', desc: '多年戶外導覽與旅遊經營經驗。' },
              { icon: 'map', title: '戶外路線與難度設計', desc: '依據需求規劃最適合的旅程難度。' },
              { icon: 'clipboard', title: '完整的旅行專業執行', desc: '合法旅行社、保險、交通一站式。' },
              { icon: 'users', title: '與地方共同完成旅程', desc: '在地夥伴合作，共創地方價值。' },
              { icon: 'sustainable', title: '讓永續成為旅程中的實際行動', desc: 'ESG Impact Note 成果摘要。' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-ftg-green/10 flex items-center justify-center">
                  <FTGIcon name={item.icon} size={32} className="text-ftg-green" />
                </div>
                <h3 className="font-bold text-ftg-forest mb-2 text-sm">{item.title}</h3>
                <p className="text-gray-600 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 從一趟旅程，看見更多可能 (Three Values) */}
      <section id="esg-section" className="section-padding bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="section-title">{t('home.valuesTitle')}</h2>
            <p className="section-subtitle">{t('home.valuesSub')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-ftg-green/10 rounded-full flex items-center justify-center mb-6">
                <FTGIcon name="leaf" size={32} className="text-ftg-green" />
              </div>
              <h3 className="text-2xl font-bold text-ftg-forest mb-4">{t('home.v1Title')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('home.v1Desc')}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-ftg-green/10 rounded-full flex items-center justify-center mb-6">
                <FTGIcon name="users" size={32} className="text-ftg-green" />
              </div>
              <h3 className="text-2xl font-bold text-ftg-forest mb-4">{t('home.v2Title')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('home.v2Desc')}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-ftg-green/10 rounded-full flex items-center justify-center mb-6">
                <FTGIcon name="heart" size={32} className="text-ftg-green" />
              </div>
              <h3 className="text-2xl font-bold text-ftg-forest mb-4">{t('home.v3Title')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('home.v3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 墾趣的旅程特色 */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="section-title">{t('home.featuresTitle')}</h2>
            <p className="section-subtitle">五大特色，讓旅程與眾不同</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: 'leaf', title: '自然慢行', desc: '大自然是最好的教室。' },
              { icon: 'utensils', title: '地方餐食', desc: '品嚐在地好味。' },
              { icon: 'users', title: '親子共學', desc: '寓教於樂。' },
              { icon: 'star', title: '團隊互動', desc: '互動遊戲分組競賽。' },
              { icon: 'sustainable', title: '永續行動', desc: '親近淨山淨灘。' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-ftg-sand hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-ftg-green/10 flex items-center justify-center">
                  <FTGIcon name={item.icon} size={28} className="text-ftg-green" />
                </div>
                <h3 className="font-bold text-ftg-forest mb-2 text-sm">{item.title}</h3>
                <p className="text-gray-600 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 墾趣如何讓企業旅程更完整 */}
      <section className="section-padding bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="section-title">{t('home.processTitle')}</h2>
            <p className="section-subtitle">五步驟，讓企業旅程更完整</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: 'users', title: '需求了解與策略設計', desc: '了解企業文化、目標與期待。' },
              { icon: 'link', title: '在地資源與專業整合', desc: '在地資源與專業整合。' },
              { icon: 'shield', title: '安全與風險管理', desc: '安全與風險管理。' },
              { icon: 'heart', title: '暖心關懷與細節管理', desc: '暖心關懷與細節管理。' },
              { icon: 'star', title: '成效追蹤與後續鏈接', desc: '成效追蹤與後續鏈接。' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-ftg-green text-white flex items-center justify-center shadow-lg">
                  <FTGIcon name={item.icon} size={24} className="text-white" />
                </div>
                <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-ftg-forest text-white flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </div>
                <h3 className="font-bold text-ftg-forest mb-2 text-sm">{item.title}</h3>
                <p className="text-gray-600 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 六大企業旅遊與體驗方案 */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="section-title">{t('home.productsTitle')}</h2>
            <p className="section-subtitle">{t('home.productsSub')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <Link key={i} to={product.link} className="group bg-ftg-cream rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center w-10 h-10 bg-ftg-green text-white rounded-full font-bold text-sm mb-3 group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-ftg-forest mb-2">{product.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.desc}</p>
                  <span className="text-ftg-green font-semibold flex items-center text-sm group-hover:translate-x-2 transition-transform">
                    {t('home.learnMore')}
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 適合這些企業時刻 */}
      <section className="section-padding bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="section-title">適合這些企業時刻</h2>
            <p className="section-subtitle">五個常見的企業情境</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: 'sun', title: '年度員工旅遊' },
              { icon: 'users', title: '家庭日' },
              { icon: 'star', title: '部門同樂' },
              { icon: 'heart', title: '身心平衡與福利活動' },
              { icon: 'award', title: '高階主管共識鏈接' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-ftg-green/10 flex items-center justify-center">
                  <FTGIcon name={item.icon} size={28} className="text-ftg-green" />
                </div>
                <h3 className="font-bold text-ftg-forest text-sm">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 從需求到成行，墾趣陪你一起完成 */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="section-title">從需求到成行，墾趣陪你一起完成</h2>
            <p className="section-subtitle">五個步驟，從需求到完成</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: 'compass', title: '需求了解與諮詢', desc: '深入了解企業需求。' },
              { icon: 'map', title: '行程提案與精選', desc: '依需求精選行程。' },
              { icon: 'users', title: '細節規劃與確認', desc: '細節規劃與確認。' },
              { icon: 'navigation', title: '安心出遊與執行', desc: '安心出遊與執行。' },
              { icon: 'clipboard', title: '成果整理與延伸', desc: '成果整理與延伸。' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-ftg-green text-white flex items-center justify-center shadow-lg">
                  <FTGIcon name={item.icon} size={24} className="text-white" />
                </div>
                <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-ftg-forest text-white flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </div>
                <h3 className="font-bold text-ftg-forest mb-2 text-sm">{item.title}</h3>
                <p className="text-gray-600 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 專業執行，讓旅程更安全 */}
      <section className="section-padding bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="section-title">{t('home.safetyTitle')}</h2>
            <p className="section-subtitle">六大安全保障，放心走進自然</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: 'heart', title: '安全第一' },
              { icon: 'navigation', title: '交通報險安排' },
              { icon: 'shield', title: '旅遊保險完善' },
              { icon: 'award', title: '戶外專業帶領' },
              { icon: 'users', title: '在地夥伴合作' },
              { icon: 'leaf', title: 'ESG Impact Note' },
            ].map((item, i) => (
              <div key={i} className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-ftg-green/10 flex items-center justify-center">
                  <FTGIcon name={item.icon} size={24} className="text-ftg-green" />
                </div>
                <p className="text-sm font-medium text-ftg-forest">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. 讓旅程留下值得分享的成果 */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="section-title">讓旅程留下值得分享的成果</h2>
            <p className="section-subtitle">三種成果延伸</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'ESG Impact Note', desc: '彙整旅程亮點。' },
              { title: '年度活動規劃', desc: '整合年度旅遊活動。' },
              { title: '新聞報導與資源整合', desc: '提供 ESG 題材。' },
            ].map((item, i) => (
              <div key={i} className="bg-ftg-sand rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-ftg-forest mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA Section — 設計稿：深色森林底 + 右側表單 */}
      <section className="relative py-20 bg-ftg-forest text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ftg-forest via-ftg-green/90 to-ftg-forest"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">{t('home.ctaTitle')}</h2>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">{t('home.ctaSub')}</p>
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
