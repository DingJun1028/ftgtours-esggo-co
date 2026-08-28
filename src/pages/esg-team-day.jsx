import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';
import { useLanguage } from '../i18n/LanguageContext';

// 嚴格照資料夾原始順序：子網頁-ESG戶外團隊日 (10張)
const teamImages = [
  { src: '/images/esg-team-day/ESG 戶外團隊-走進自然.png', tKey: 'esgTeamDay.imgTeam1' },
  { src: '/images/esg-team-day/team day-團隊共創.png', tKey: 'esgTeamDay.imgTeam2' },
  { src: '/images/esg-team-day/team day-連結地方與環境.png', tKey: 'esgTeamDay.imgTeam3' },
];

const expImages = [
  { src: '/images/esg-team-day/可搭配的旅程內容-友善環境行動.png', tKey: 'esgTeamDay.imgExp1' },
  { src: '/images/esg-team-day/可搭配的旅程內容-團隊合作任務.png', tKey: 'esgTeamDay.imgExp2' },
  { src: '/images/esg-team-day/可搭配的旅程內容-地方餐食.png', tKey: 'esgTeamDay.imgExp3' },
  { src: '/images/esg-team-day/可搭配的旅程內容-文化體驗.png', tKey: 'esgTeamDay.imgExp4' },
  { src: '/images/esg-team-day/可搭配的旅程內容-森林健走.png', tKey: 'esgTeamDay.imgExp5' },
  { src: '/images/esg-team-day/可搭配的旅程內容-自然觀察.png', tKey: 'esgTeamDay.imgExp6' },
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

export default function EsgTeamDay() {
  const { t } = useLanguage();
  usePageSeo({
    title: t('products.esgTeamDay'),
    description: t('esgTeamDay.metaDesc'),
    path: '/esg-team-day',
    keywords: ['ESG 戶外團隊日', '企業活動', '團隊凝聚', '無痕山林', '永續行動'],
  });

  const provideItems = [
    t('esgTeamDay.provide1'), t('esgTeamDay.provide2'),
    t('esgTeamDay.provide3'), t('esgTeamDay.provide4'),
  ];
  const modules = [
    t('esgTeamDay.mod1'), t('esgTeamDay.mod2'), t('esgTeamDay.mod3'),
    t('esgTeamDay.mod4'), t('esgTeamDay.mod5'), t('esgTeamDay.mod6'),
  ];

  return (
    <div>
      <section className="relative py-20 bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-ftg-green hover:underline mb-4 inline-block">{t('nav.backHome')}</Link>
          <h1 className="section-title">{t('products.esgTeamDay')}</h1>
          <p className="section-subtitle">
            {t('esgTeamDay.sub')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <img src="/images/esg-team-day/team day-頁首大橫幅.png" alt={t('products.esgTeamDay')} className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl" loading="lazy" />
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-ftg-forest mb-6">{t('common.whyNeed')}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t('esgTeamDay.whyP')}
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

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">{t('esgTeamDay.bringTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {teamImages.map((p, i) => <PhotoCard key={i} src={p.src} title={t(p.tKey)} desc={t(p.tKey + 'Desc')} />)}
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">{t('esgTeamDay.expTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {expImages.map((p, i) => <PhotoCard key={i} src={p.src} title={t(p.tKey)} desc={t(p.tKey + 'Desc')} />)}
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">{t('esgTeamDay.modulesTitle')}</h2>
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
            <p className="text-gray-100 mb-6">{t('esgTeamDay.audience')}</p>
            <Link to="/#contact" className="inline-block bg-ftg-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
              {t('esgTeamDay.ctaBtn')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
