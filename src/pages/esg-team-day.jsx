import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';

// 嚴格照資料夾原始順序：子網頁-ESG戶外團隊日
const images = [
  'ESG 戶外團隊-走進自然.png',
  'team day-團隊共創.png',
  'team day-連結地方與環境.png',
  'team day-頁首大橫幅.png',
  '可搭配的旅程內容-友善環境行動.png',
  '可搭配的旅程內容-團隊合作任務.png',
  '可搭配的旅程內容-地方餐食.png',
  '可搭配的旅程內容-文化體驗.png',
  '可搭配的旅程內容-森林健走.png',
  '可搭配的旅程內容-自然觀察.png',
];

const captionOf = (name) => name.replace(/\.png$/, '');

function PhotoCard({ src, title }) {
  return (
    <figure className="relative overflow-hidden rounded-2xl shadow-lg group">
      <img src={src} alt={title} className="w-full h-72 object-cover transition-transform group-hover:scale-105" loading="lazy" />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <h3 className="text-white text-lg font-bold">{title}</h3>
      </figcaption>
    </figure>
  );
}

export default function EsgTeamDay() {
  usePageSeo({
    title: 'ESG Outdoor Team Day',
    description:
      '讓員工在一天內親身參與永續行動的 Team Day，結合安全設計、團隊凝聚、ESG 學習與地方共益。',
    path: '/esg-team-day',
    keywords: ['ESG Team Day', '企業活動', '團隊凝聚', '無痕山林', '永續行動'],
  });
  return (
    <div>
      <section className="relative py-20 bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-ftg-green hover:underline mb-4 inline-block">← 返回首頁</Link>
          <h1 className="section-title">ESG Outdoor Team Day</h1>
          <p className="section-subtitle">
            讓 ESG 不只是報告文字，而是員工可以親身參與的一日戶外永續行動。
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((name, i) => (
              <PhotoCard key={i} src={`/images/esg-team-day/${encodeURIComponent(name)}`} title={captionOf(name)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
