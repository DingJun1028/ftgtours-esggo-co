import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';
import { useLanguage } from '../i18n/LanguageContext';

// 嚴格照資料夾原始順序：子網頁-高階主管共識旅程 (10張)
const expImages = [
  { src: '/images/executive-retreat/可搭配的旅程內容-圓桌對話.png', tKey: 'executive.imgExp1' },
  { src: '/images/executive-retreat/可搭配的旅程內容-團隊共學.png', tKey: 'executive.imgExp2' },
  { src: '/images/executive-retreat/可搭配的旅程內容-在地餐集.png', tKey: 'executive.imgExp3' },
  { src: '/images/executive-retreat/可搭配的旅程內容-山林慢行.png', tKey: 'executive.imgExp4' },
  { src: '/images/executive-retreat/可搭配的旅程內容-文化體驗.png', tKey: 'executive.imgExp5' },
  { src: '/images/executive-retreat/可搭配的旅程內容-靜心觀景.png', tKey: 'executive.imgExp6' },
];

const consensusImages = [
  { src: '/images/executive-retreat/高階主管共識-放慢腳步與重新思考.png', tKey: 'executive.imgCon1' },
  { src: '/images/executive-retreat/高階主管共識-連結自然與對方.png', tKey: 'executive.imgCon2' },
  { src: '/images/executive-retreat/高階主管共識-頁首橫幅.png', tKey: 'executive.imgCon3' },
  { src: '/images/executive-retreat/高階主管共識-領導團隊對話.png', tKey: 'executive.imgCon3' },
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
  const { t } = useLanguage();
  usePageSeo({
    title: t('products.executive'),
    description: t('executive.metaDesc'),
    path: '/executive-retreat',
    keywords: ['共識營', '高階主管', '永續轉型', '策略對話', '主管共識旅程'],
  });

  const provideItems = [
    t('executive.provide1'), t('executive.provide2'),
    t('executive.provide3'), t('executive.provide4'),
  ];
  const modules = [
    t('executive.mod1'), t('executive.mod2'), t('executive.mod3'),
    t('executive.mod4'), t('executive.mod5'), t('executive.mod6'),
  ];
  const consensusShow = [consensusImages[0], consensusImages[1], consensusImages[3]];

  return (
    <div>
      <section className="subpage-hero">
        <img src="/images/executive-retreat/高階主管共識-頁首橫幅.png" alt={t('products.executive')} className="subpage-hero__img" loading="lazy" />
        <div className="subpage-hero__overlay"></div>
        <div className="subpage-hero__dim"></div>
        <div className="subpage-hero__content">
          <Link to="/" className="text-ftg-orange hover:underline mb-4 inline-block font-medium">{t('nav.backHome')}</Link>
          <h1 className="subpage-hero__title">{t('products.executive')}</h1>
          <p className="subpage-hero__subtitle">{t('executive.sub')}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-ftg-forest mb-6">{t('common.whyNeed')}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{t('executive.whyP')}</p>
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

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">{t('executive.expTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {expImages.map((p, i) => <PhotoCard key={i} src={p.src} title={t(p.tKey)} desc={t(p.tKey + 'Desc')} />)}
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">{t('executive.bringTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {consensusShow.map((p, i) => <PhotoCard key={i} src={p.src} title={t(p.tKey)} desc={t(p.tKey + 'Desc')} />)}
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">{t('executive.modulesTitle')}</h2>
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
            <p className="text-gray-100 mb-6">{t('executive.audience')}</p>
            <Link to="/#contact" className="inline-block bg-ftg-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
              {t('executive.ctaBtn')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
