import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';
import { useLanguage } from '../i18n/LanguageContext';

// 嚴格照資料夾原始順序：子網頁-企業員工旅遊 (14張)
const travelImages = [
  { src: '/images/corporate-travel/企業員工旅遊-團隊交流.png', tKey: 'corporateTravel.imgTravel1' },
  { src: '/images/corporate-travel/企業員工旅遊-放鬆與充電.png', tKey: 'corporateTravel.imgTravel2' },
  { src: '/images/corporate-travel/企業員工旅遊-自然與地方體驗.png', tKey: 'corporateTravel.imgTravel3' },
];

const valueImages = [
  { src: '/images/corporate-travel/可延伸加值服務-串接 Team Day／Wellbeing Retreat.png', tKey: 'corporateTravel.imgVal1' },
  { src: '/images/corporate-travel/可延伸加值服務-年度企業活動規劃.png', tKey: 'corporateTravel.imgVal2' },
  { src: '/images/corporate-travel/可延伸的加值服務-Basic Impact Summary.png', tKey: 'corporateTravel.imgVal3' },
  { src: '/images/corporate-travel/可延伸的加值服務-ESG Impact Note.png', tKey: 'corporateTravel.imgVal4' },
];

const expImages = [
  { src: '/images/corporate-travel/搭配旅程-地方餐食.png', tKey: 'corporateTravel.imgExp1' },
  { src: '/images/corporate-travel/搭配旅程-文化體驗.png', tKey: 'corporateTravel.imgExp2' },
  { src: '/images/corporate-travel/搭配旅程-森林慢行.png', tKey: 'corporateTravel.imgExp3' },
  { src: '/images/corporate-travel/搭配旅程-無痕戶外.png', tKey: 'corporateTravel.imgExp4' },
  { src: '/images/corporate-travel/搭配旅程-親近自然.png', tKey: 'corporateTravel.imgExp5' },
  { src: '/images/corporate-travel/搭配旅程-輕量團隊互動.png', tKey: 'corporateTravel.imgExp6' },
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
  const { t } = useLanguage();
  usePageSeo({
    title: t('products.corpTravel'),
    description: t('corporateTravel.metaDesc'),
    path: '/corporate-travel',
    keywords: ['企業員工旅遊', 'Team Building', '戶外體驗', 'ESG 活動', '公司旅遊'],
  });

  const provideItems = [
    t('corporateTravel.provide1'), t('corporateTravel.provide2'),
    t('corporateTravel.provide3'), t('corporateTravel.provide4'),
  ];
  const canProvideItems = [
    t('corporateTravel.provide1'), t('corporateTravel.provide2'),
    t('corporateTravel.provide3'), t('corporateTravel.provide4'),
    t('corporateTravel.provide5'), t('corporateTravel.provide6'),
    t('corporateTravel.provide7'), t('corporateTravel.provide8'),
  ];

  return (
    <div>
      <section className="relative py-20 bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-ftg-green hover:underline mb-4 inline-block">{t('nav.backHome')}</Link>
          <h1 className="section-title">{t('products.corpTravel')}</h1>
          <p className="section-subtitle">
            {t('corporateTravel.sub')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <img src="/images/corporate-travel/企業員工旅遊-頁首大橫幅.png" alt={t('products.corpTravel')} className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl" loading="lazy" />
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-ftg-forest mb-6">{t('common.whyNeed')}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t('corporateTravel.whyP1')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('corporateTravel.whyP2')}
              </p>
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

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">{t('corporateTravel.bringTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {travelImages.map((p, i) => <PhotoCard key={i} src={p.src} title={t(p.tKey)} desc={t(p.tKey + 'Desc')} />)}
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">{t('corporateTravel.valueTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {valueImages.map((p, i) => <PhotoCard key={i} src={p.src} title={t(p.tKey)} desc={t(p.tKey + 'Desc')} />)}
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">{t('corporateTravel.expTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {expImages.map((p, i) => <PhotoCard key={i} src={p.src} title={t(p.tKey)} desc={t(p.tKey + 'Desc')} />)}
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">{t('corporateTravel.canProvideTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {canProvideItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-ftg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-ftg-green text-xl">✓</span>
                </div>
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-ftg-green text-white rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">{t('common.benefitsTitle')}</h3>
            <p className="text-gray-100 mb-6">{t('corporateTravel.audience')}</p>
            <Link to="/#contact" className="inline-block bg-ftg-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
              {t('corporateTravel.ctaBtn')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
