import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';
import { useLanguage } from '../i18n/LanguageContext';

// 嚴格照資料夾原始順序：子網頁-ESG Impact Note (13張)
const noteImages = [
  { src: '/images/esg-impact-note/ESG Impact Note-ESG行動亮點.png', tKey: 'impactNote.note1' },
  { src: '/images/esg-impact-note/ESG Impact Note-參與者回饋與感受.png', tKey: 'impactNote.note2' },
  { src: '/images/esg-impact-note/ESG Impact Note-地方及環境貢獻.png', tKey: 'impactNote.note3' },
  { src: '/images/esg-impact-note/ESG Impact Note-旅程與活動全貌.png', tKey: 'impactNote.note4' },
];

const resultImages = [
  { src: '/images/esg-impact-note/ESG成果內容-地方共好與社會價值.png', tKey: 'impactNote.res1' },
  { src: '/images/esg-impact-note/成果內容-ESG／SDGs 對應整理.png', tKey: 'impactNote.res2' },
  { src: '/images/esg-impact-note/成果內容-參與人次與投入紀錄.png', tKey: 'impactNote.res3' },
  { src: '/images/esg-impact-note/成果內容-員工回饋與影像故事.png', tKey: 'impactNote.res4' },
  { src: '/images/esg-impact-note/成果內容-後續改善與行動建議.png', tKey: 'impactNote.res5' },
  { src: '/images/esg-impact-note/成果內容-活動基本資訊與行程摘要.png', tKey: 'impactNote.res6' },
  { src: '/images/esg-impact-note/成果內容-環境友善行動成果.png', tKey: 'impactNote.res7' },
  { src: '/images/esg-impact-note/結果內容-員工回饋與影像故事.png', tKey: 'impactNote.res8' },
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

export default function EsgImpactNote() {
  const { t } = useLanguage();
  usePageSeo({
    title: t('products.impactNote'),
    description: t('impactNote.metaDesc'),
    path: '/esg-impact-note',
    keywords: ['ESG Impact Note', '活動成果', '雇主品牌', '永續溝通', 'ESG 素材'],
  });

  const provideItems = [
    t('impactNote.provide1'), t('impactNote.provide2'),
    t('impactNote.provide3'), t('impactNote.provide4'),
  ];
  const modules = [
    t('impactNote.mod1'), t('impactNote.mod2'), t('impactNote.mod3'),
    t('impactNote.mod4'), t('impactNote.mod5'), t('impactNote.mod6'),
  ];

  return (
    <div>
      <section className="relative py-20 bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-ftg-green hover:underline mb-4 inline-block">{t('nav.backHome')}</Link>
          <h1 className="section-title">{t('products.impactNote')}</h1>
          <p className="section-subtitle">
            {t('impactNote.sub')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <img src="/images/esg-impact-note/ESG Impact Note-頁首大橫幅.png" alt={t('products.impactNote')} className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl" loading="lazy" />
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-ftg-forest mb-6">{t('common.whyNeed')}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{t('impactNote.whyP')}</p>
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

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">{t('impactNote.noteTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {noteImages.map((p, i) => <PhotoCard key={i} src={p.src} title={t(p.tKey)} desc={t(p.tKey + 'Desc')} />)}
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">{t('impactNote.resultTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {resultImages.map((p, i) => <PhotoCard key={i} src={p.src} title={t(p.tKey)} desc={t(p.tKey + 'Desc')} />)}
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">{t('impactNote.modulesTitle')}</h2>
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
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 mb-12">
            <h3 className="text-lg font-bold text-gray-800 mb-2">{t('impactNote.disclaimerTitle')}</h3>
            <p className="text-gray-700 text-sm">{t('impactNote.disclaimer')}</p>
          </div>
          <div className="bg-ftg-green text-white rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">{t('common.benefitsTitle')}</h3>
            <p className="text-gray-100 mb-6">{t('impactNote.audience')}</p>
            <Link to="/#contact" className="inline-block bg-ftg-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
              {t('impactNote.ctaBtn')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
