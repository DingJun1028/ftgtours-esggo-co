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
    { title: t('home.p1Title'), desc: t('home.p1Desc'), link: '/corporate-travel', img: '/images/corporate-travel/企業員工旅遊-團隊交流.png' },
    { title: t('home.p2Title'), desc: t('home.p2Desc'), link: '/family-day', img: '/images/family-day/好的企業家庭日-親子互動更緊密.png' },
    { title: t('home.p3Title'), desc: t('home.p3Desc'), link: '/esg-team-day', img: '/images/esg-team-day/ESG 戶外團隊-走進自然.png' },
    { title: t('home.p4Title'), desc: t('home.p4Desc'), link: '/wellbeing-retreat', img: '/images/wellbeing-retreat/員工身心平衡-頁首大橫幅.png' },
    { title: t('home.p5Title'), desc: t('home.p5Desc'), link: '/executive-retreat', img: '/images/executive-retreat/高階主管共識-頁首橫幅.png' },
    { title: t('home.p6Title'), desc: t('home.p6Desc'), link: '/esg-impact-note', img: '/images/esg-impact-note/ESG Impact Note-頁首大橫幅.png' },
  ];

  const featureIcons = ['🌲', '🍽️', '👨‍👩‍👧', '🤝', '♻️'];
  const processIcons = ['💬', '🗺️', '🛡️', '❤️', '📊'];
  const momentIcons = ['🏖️', '👨‍👩‍👧‍👦', '🎯', '🧘', '👔'];
  const stepIcons = ['1', '2', '3', '4', '5'];
  const safetyIcons = ['🚌', '📋', '🏥', '🧭', '🤝'];

  return (
    <div>
      {/* Hero Section */}
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
            <Link to="/corporate-travel" className="bg-ftg-orange text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-orange-600 transition-colors">
              {t('home.exploreBtn')}
            </Link>
            <a href="#esg-section" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-white/20 transition-colors">
              {t('home.designBtn')}
            </a>
          </div>
        </div>
      </section>

      {/* Three Values Section */}
      <section id="esg-section" className="section-padding bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="section-title">{t('home.valuesTitle')}</h2>
            <p className="section-subtitle">
              {t('home.valuesSub')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16">
            <div className="bg-white rounded-2xl card-responsive shadow-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-ftg-green/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl">🌲</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-ftg-forest mb-3 md:mb-4">{t('home.v1Title')}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {t('home.v1Desc')}
              </p>
            </div>

            <div className="bg-white rounded-2xl card-responsive shadow-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-ftg-green/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl">🤝</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-ftg-forest mb-3 md:mb-4">{t('home.v2Title')}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {t('home.v2Desc')}
              </p>
            </div>

            <div className="bg-white rounded-2xl card-responsive shadow-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-ftg-green/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl">💚</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-ftg-forest mb-3 md:mb-4">{t('home.v3Title')}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {t('home.v3Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - 墾趣的旅程特色 */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="section-title">{t('home.featuresTitle')}</h2>
          </div>
          <div className={`grid ${'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'} gap-4 md:gap-6`}>
            {t('home.featureList').map((item, i) => (
              <div key={i} className="text-center card-responsive bg-ftg-cream rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-ftg-green/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-2xl md:text-3xl">{featureIcons[i]}</span>
                </div>
                <h3 className="font-bold text-ftg-forest mb-2 text-sm md:text-base">{item.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - 墾趣如何讓企業旅程更完整 */}
      <section className="section-padding bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="section-title">{t('home.processTitle')}</h2>
          </div>
          <div className={`grid ${'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'} gap-4 md:gap-6`}>
            {t('home.processList').map((item, i) => (
              <div key={i} className="text-center card-responsive bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-ftg-green text-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl">{processIcons[i]}</span>
                </div>
                <h3 className="font-bold text-ftg-forest mb-2 text-xs md:text-sm">{item.title}</h3>
                <p className="text-gray-600 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section - 六大企業方案 */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="section-title">{t('home.productsTitle')}</h2>
            <p className="section-subtitle">
              {t('home.productsSub')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {products.map((product, i) => (
              <Link key={i} to={product.link} className="group bg-ftg-cream rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-ftg-green text-white rounded-full font-bold text-sm md:text-lg">
                    {i + 1}
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-ftg-forest mb-2 md:mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">{product.desc}</p>
                  <span className="text-ftg-green font-semibold flex items-center group-hover:translate-x-2 transition-transform text-sm md:text-base">
                    {t('home.learnMore')}
                    <svg className="ml-2 h-3 w-3 md:h-4 md:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Moments Section - 適合這些企業時刻 */}
      <section className="section-padding bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="section-title">{t('home.momentsTitle')}</h2>
          </div>
          <div className={`grid ${'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'} gap-4 md:gap-6`}>
            {t('home.momentList').map((item, i) => (
              <div key={i} className="text-center card-responsive bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-ftg-green/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-2xl md:text-3xl">{momentIcons[i]}</span>
                </div>
                <h3 className="font-bold text-ftg-forest mb-2 text-sm md:text-base">{item.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section - 從需求到成行 */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="section-title">{t('home.stepsTitle')}</h2>
          </div>
          <div className={`grid ${'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'} gap-4 md:gap-6`}>
            {t('home.stepList').map((item, i) => (
              <div key={i} className="text-center card-responsive bg-ftg-cream rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-ftg-orange text-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl font-bold">{stepIcons[i]}</span>
                </div>
                <h3 className="font-bold text-ftg-forest mb-2 text-sm md:text-base">{item.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section - 專業執行讓旅程更安全 */}
      <section className="section-padding bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="section-title">{t('home.safetyTitle')}</h2>
          </div>
          <div className={`grid ${'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'} gap-4 md:gap-6`}>
            {t('home.safetyList').map((item, i) => (
              <div key={i} className="text-center card-responsive bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-ftg-green/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-2xl md:text-3xl">{safetyIcons[i]}</span>
                </div>
                <h3 className="font-bold text-ftg-forest mb-2 text-sm md:text-base">{item.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section - 讓旅程留下值得分享的成果 */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="section-title">{t('home.resultsTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {t('home.resultList').map((item, i) => (
              <div key={i} className="bg-ftg-cream rounded-2xl card-responsive text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg md:text-xl font-bold text-ftg-forest mb-2 md:mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-ftg-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 font-serif">
            {t('home.ctaTitle2')}
          </h2>
          <p className="text-base md:text-lg text-gray-100 mb-6 md:mb-8">
            {t('home.ctaSub2')}
          </p>
          <a href="#/contact" className="inline-block bg-ftg-orange text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-orange-600 transition-colors">
            {t('home.ctaBtn')}
          </a>
        </div>
      </section>
    </div>
  );
}
