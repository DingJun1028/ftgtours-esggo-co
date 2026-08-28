import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';
import { useLanguage } from '../i18n/LanguageContext';

// 嚴格照資料夾原始順序：子網頁-企業家庭日 (12張)
const expImages = [
  { src: '/images/family-day/可搭配的體驗-地方餐食.png', tKey: 'familyDay.imgExp1' },
  { src: '/images/family-day/可搭配的體驗-手作體驗png.png', tKey: 'familyDay.imgExp2' },
  { src: '/images/family-day/可搭配的體驗-森林慢行.png', tKey: 'familyDay.imgExp3' },
  { src: '/images/family-day/可搭配的體驗-無痕戶外.png', tKey: 'familyDay.imgExp4' },
  { src: '/images/family-day/可搭配的體驗-親子任務.png', tKey: 'familyDay.imgExp5' },
  { src: '/images/family-day/可搭配的體驗-親子自然觀察.png', tKey: 'familyDay.imgExp6' },
];

const goodImages = [
  { src: '/images/family-day/好的企業家庭日-企業關懷更有感.png', tKey: 'familyDay.imgGood1' },
  { src: '/images/family-day/好的企業家庭日-地方連結與共益.png', tKey: 'familyDay.imgGood2' },
  { src: '/images/family-day/好的企業家庭日-留下美好的回憶.png', tKey: 'familyDay.imgGood3' },
  { src: '/images/family-day/好的企業家庭日-自然共學與成長.png', tKey: 'familyDay.imgGood4' },
  { src: '/images/family-day/好的企業家庭日-親子互動更緊密.png', tKey: 'familyDay.imgGood5' },
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

export default function FamilyDay() {
  const { t } = useLanguage();
  usePageSeo({
    title: t('products.familyDay'),
    description: t('familyDay.metaDesc'),
    path: '/family-day',
    keywords: ['企業家庭日', '親子活動', '雇主品牌', '永續教育', '員工家庭關懷'],
  });

  const provideItems = [
    t('familyDay.provide1'), t('familyDay.provide2'),
    t('familyDay.provide3'), t('familyDay.provide4'),
  ];

  return (
    <div>
      <section className="relative py-20 bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-ftg-green hover:underline mb-4 inline-block">{t('nav.backHome')}</Link>
          <h1 className="section-title">{t('products.familyDay')}</h1>
          <p className="section-subtitle">
            {t('familyDay.sub')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <img src="/images/family-day/企業家庭日-頁首大橫幅.png" alt={t('products.familyDay')} className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl" loading="lazy" />
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-ftg-forest mb-6">{t('common.whyNeed')}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t('familyDay.whyP')}
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

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">{t('familyDay.expTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {expImages.map((p, i) => <PhotoCard key={i} src={p.src} title={t(p.tKey)} desc={t(p.tKey + 'Desc')} />)}
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">{t('familyDay.goodTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {goodImages.map((p, i) => <PhotoCard key={i} src={p.src} title={t(p.tKey)} desc={t(p.tKey + 'Desc')} />)}
          </div>

          <div className="bg-ftg-green text-white rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">{t('common.benefitsTitle')}</h3>
            <p className="text-gray-100 mb-6">{t('familyDay.audience')}</p>
            <Link to="/#contact" className="inline-block bg-ftg-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
              {t('familyDay.ctaBtn')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
