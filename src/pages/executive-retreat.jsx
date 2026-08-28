import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';

// 嚴格照資料夾原始順序：子網頁-高階主管共識旅程
const images = [
  '可搭配的旅程內容-圓桌對話.png',
  '可搭配的旅程內容-團隊共學.png',
  '可搭配的旅程內容-在地餐集.png',
  '可搭配的旅程內容-山林慢行.png',
  '可搭配的旅程內容-文化體驗.png',
  '可搭配的旅程內容-靜心觀景.png',
  '高階主管共識-放慢腳步與重新思考.png',
  '高階主管共識-連結自然與對方.png',
  '高階主管共識-頁首橫幅.png',
  '高階主管共識-領導團隊對話.png',
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

export default function ExecutiveRetreat() {
  usePageSeo({
    title: '高階主管共識營',
    description:
      '結合自然場域、永續趨勢與策略對話，協助經營團隊重新對齊使命、文化與永續轉型方向。',
    path: '/executive-retreat',
    keywords: ['共識營', '高階主管', '永續轉型', '策略對話', 'Executive Retreat'],
  });
  return (
    <div>
      <section className="relative py-20 bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-ftg-green hover:underline mb-4 inline-block">← 返回首頁</Link>
          <h1 className="section-title">高階主管共識營</h1>
          <p className="section-subtitle">
            結合自然場域、永續趨勢、策略對話與戶外慢行，協助高階主管團隊重新對齊方向。
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((name, i) => (
              <PhotoCard key={i} src={`/images/executive-retreat/${encodeURIComponent(name)}`} title={captionOf(name)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
