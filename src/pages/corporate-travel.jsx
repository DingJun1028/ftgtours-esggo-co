import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';

// 嚴格照資料夾原始順序：子網頁-企業員工旅遊
const images = [
  '企業員工旅遊-團隊交流.png',
  '企業員工旅遊-放鬆與充電.png',
  '企業員工旅遊-自然與地方體驗.png',
  '企業員工旅遊-頁首大橫幅.png',
  '可延伸加值服務-串接 Team Day／Wellbeing Retreat.png',
  '可延伸加值服務-年度企業活動規劃.png',
  '可延伸的加值服務-Basic Impact Summary.png',
  '可延伸的加值服務-ESG Impact Note.png',
  '搭配旅程-地方餐食.png',
  '搭配旅程-文化體驗.png',
  '搭配旅程-森林慢行.png',
  '搭配旅程-無痕戶外.png',
  '搭配旅程-親近自然.png',
  '搭配旅程-輕量團隊互動.png',
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

export default function CorporateTravel() {
  usePageSeo({
    title: '企業員工旅遊',
    description:
      '把傳統員工旅遊升級為戶外健康、地方文化與團隊互動體驗，降低企業規劃負擔並提升活動價值。',
    path: '/corporate-travel',
    keywords: ['企業員工旅遊', 'Team Building', '戶外體驗', 'ESG 活動', '公司旅遊'],
  });
  return (
    <div>
      <section className="relative py-20 bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-ftg-green hover:underline mb-4 inline-block">← 返回首頁</Link>
          <h1 className="section-title">企業員工旅遊</h1>
          <p className="section-subtitle">
            將傳統員工旅遊升級為結合自然健走、地方文化、永續學習與團隊互動的戶外體驗。
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((name, i) => (
              <PhotoCard key={i} src={`/images/corporate-travel/${encodeURIComponent(name)}`} title={captionOf(name)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
