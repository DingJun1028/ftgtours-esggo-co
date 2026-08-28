import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';
import { useLanguage } from '../i18n/LanguageContext';

// 嚴格照資料夾原始順序：子網頁-員工身心平衡旅程 (11張)
const images = [
  { src: '/images/wellbeing-retreat/員工身心平衡-頁首大橫幅.png', tKey: 'wellbeing.imgBanner' },
  { src: '/images/wellbeing-retreat/旅程可以留下什麼-企業文化溫度.png', tKey: 'wellbeing.img1' },
  { src: '/images/wellbeing-retreat/旅程可以留下什麼-可分享的活動素材.png', tKey: 'wellbeing.img2' },
  { src: '/images/wellbeing-retreat/旅程可以留下什麼-員工放鬆回憶.png', tKey: 'wellbeing.img3' },
  { src: '/images/wellbeing-retreat/旅程可以留下什麼-團隊可更自交流.png', tKey: 'wellbeing.img4' },
  { src: '/images/wellbeing-retreat/旅程可以留下什麼-團隊更自然的連結.png', tKey: 'wellbeing.img5' },
  { src: '/images/wellbeing-retreat/旅程可以留下什麼-後續活動靈感.png', tKey: 'wellbeing.img6' },
  { src: '/images/wellbeing-retreat/旅程可以留下什麼-恢復能量.png', tKey: 'wellbeing.img7' },
  { src: '/images/wellbeing-retreat/旅程可以留下什麼-放鬆節奏.png', tKey: 'wellbeing.img8' },
  { src: '/images/wellbeing-retreat/旅程可以留下什麼-留下值得分享的回憶.png', tKey: 'wellbeing.img9' },
  { src: '/images/wellbeing-retreat/旅程可以留下什麼-自然中的安定感.png', tKey: 'wellbeing.img10' },
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
  const { t } = useLanguage();
  usePageSeo({
    title: t('products.wellbeing'),
    description: t('wellbeing.metaDesc'),
    path: '/wellbeing-retreat',
    keywords: ['員工身心平衡旅程', '員工福祉', '高壓紓壓', '團隊對話', '自然休養'],
  });

  const provideItems = [
    t('wellbeing.provide1'), t('wellbeing.provide2'),
    t('wellbeing.provide3'), t('wellbeing.provide4'),
  ];
  const modules = [
    t('wellbeing.mod1'), t('wellbeing.mod2'), t('wellbeing.mod3'),
    t('wellbeing.mod4'), t('wellbeing.mod5'), t('wellbeing.mod6'),
  ];

  return (
    <div>
      <section className="relative py-20 bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-ftg-green hover:underline mb-4 inline-block">{t('nav.backHome')}</Link>
          <h1 className="section-title">{t('products.wellbeing')}</h1>
          <p className="section-subtitle">
            {t('wellbeing.sub')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <img src="/images/wellbeing-retreat/員工身心平衡-頁首大橫幅.png" alt={t('products.wellbeing')} className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl" loading="lazy" />
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-ftg-forest mb-6">{t('common.whyNeed')}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{t('wellbeing.whyP')}</p>
            </div>
            <div className="bg-ftg-cream rounded-2xl p-8">
              <h3 className="text-xl font-bold text-ftg-forest mb-4">{t('common.weProvide')}</h3>
              <ul className="space-y-3">
                {provideItems.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-ftg-green mr-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">{t('wellbeing.leaveTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {images.slice(1).map((p, i) => <PhotoCard key={i} src={p.src} title={t(p.tKey)} desc={t(p.tKey + 'Desc')} />)}
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">{t('wellbeing.modulesTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {modules.map((item, i) => (
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
            <h3 className="text-2xl font-bold mb-4">{t('common.benefitsTitle')}</h3>
            <p className="text-gray-100 mb-6">{t('wellbeing.audience')}</p>
            <Link to="/#contact" className="inline-block bg-ftg-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
              {t('wellbeing.ctaBtn')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
