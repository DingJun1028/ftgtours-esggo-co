import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';
import { useLanguage } from '../i18n/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  usePageSeo({
    title: t('home.h1') || 'ESG 戶外健康旅遊方案',
    description: t('home.metaDesc'),
    path: '/',
    keywords: ['ESG 旅遊', '企業員工旅遊', '團隊日', '家庭日', '身心平衡旅程'],
  });

  const products = [
    { title: t('home.p1Title'), desc: t('home.p1Desc'), link: '/corporate-travel' },
    { title: t('home.p2Title'), desc: t('home.p2Desc'), link: '/family-day' },
    { title: t('home.p3Title'), desc: t('home.p3Desc'), link: '/esg-team-day' },
    { title: t('home.p4Title'), desc: t('home.p4Desc'), link: '/wellbeing-retreat' },
    { title: t('home.p5Title'), desc: t('home.p5Desc'), link: '/executive-retreat' },
    { title: t('home.p6Title'), desc: t('home.p6Desc'), link: '/esg-impact-note' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-ftg-forest overflow-hidden">
        {/* 橫幅大圖 (LCP 優化: 不 lazy + fetchpriority high) */}
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif leading-tight">
            {t('home.heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            {t('home.heroSub')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/corporate-travel" className="bg-ftg-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors">
              {t('home.exploreBtn')}
            </Link>
            <a href="#esg-section" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-colors">
              {t('home.designBtn')}
            </a>
          </div>
        </div>
      </section>

      {/* Three Values Section */}
      <section id="esg-section" className="py-20 bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">{t('home.valuesTitle')}</h2>
            <p className="section-subtitle">
              {t('home.valuesSub')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-ftg-green/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🌲</span>
              </div>
              <h3 className="text-2xl font-bold text-ftg-forest mb-4">{t('home.v1Title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('home.v1Desc')}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-ftg-green/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-ftg-forest mb-4">{t('home.v2Title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('home.v2Desc')}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-ftg-green/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">💚</span>
              </div>
              <h3 className="text-2xl font-bold text-ftg-forest mb-4">{t('home.v3Title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('home.v3Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">{t('home.productsTitle')}</h2>
            <p className="section-subtitle">
              {t('home.productsSub')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <Link key={i} to={product.link} className="group bg-ftg-cream rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-ftg-green text-white rounded-full font-bold text-lg mb-4 group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-ftg-forest mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{product.desc}</p>
                <span className="text-ftg-green font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                  {t('home.learnMore')}
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
            {t('home.ctaTitle')}
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            {t('home.ctaSub')}
          </p>
          <a href="#/contact" className="inline-block bg-ftg-orange text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors">
            {t('home.ctaBtn')}
          </a>
        </div>
      </section>
    </div>
  );
}
