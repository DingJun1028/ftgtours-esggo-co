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
      <img src={src} alt={title} className="w-full h-60 sm:h-72 object-cover transition-transform group-hover:scale-105" loading="lazy" />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-5">
        <h3 className="text-white text-base sm:text-lg font-bold leading-snug">{title}</h3>
        <p className="text-gray-200 text-xs sm:text-sm mt-1">{desc}</p>
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
      <section className="subpage-hero">
        <img src="/images/family-day/企業家庭日-頁首大橫幅.png" alt={t('products.familyDay')} className="subpage-hero__img" loading="lazy" />
        <div className="subpage-hero__overlay"></div>
        <div className="subpage-hero__dim"></div>
        <div className="subpage-hero__content">
          <Link to="/" className="text-ftg-orange hover:underline mb-3 sm:mb-4 inline-block font-medium text-sm sm:text-base">{t('nav.backHome')}</Link>
          <h1 className="subpage-hero__title">{t('products.familyDay')}</h1>
          <p className="subpage-hero__subtitle">{t('familyDay.sub')}</p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ftg-forest mb-4 md:mb-6">{t('common.whyNeed')}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                {t('familyDay.whyP')}
              </p>
            </div>
            <div className="bg-ftg-cream rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-ftg-forest mb-4">{t('common.weProvide')}</h3>
              <ul className="space-y-3">
                {provideItems.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-ftg-green mr-2">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ftg-forest mb-6 md:mb-8 text-center">{t('familyDay.expTitle')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-16">
            {expImages.map((p, i) => <PhotoCard key={i} src={p.src} title={t(p.tKey)} desc={t(p.tKey + 'Desc')} />)}
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ftg-forest mb-6 md:mb-8 text-center">{t('familyDay.goodTitle')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 md:mb-12">
            {goodImages.map((p, i) => <PhotoCard key={i} src={p.src} title={t(p.tKey)} desc={t(p.tKey + 'Desc')} />)}
          </div>

          <div className="bg-ftg-green text-white rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4">{t('common.benefitsTitle')}</h3>
            <p className="text-gray-100 mb-5 sm:mb-6 text-sm sm:text-base">{t('familyDay.audience')}</p>
            <Link to="/#contact" className="inline-block bg-ftg-orange text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors text-sm sm:text-base">
              {t('familyDay.ctaBtn')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
