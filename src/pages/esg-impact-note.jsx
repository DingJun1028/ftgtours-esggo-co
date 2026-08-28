import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';

// 嚴格照資料夾原始順序：子網頁-ESG Impact Note
const images = [
  'ESG Impact Note-ESG行動亮點.png',
  'ESG Impact Note-參與者回饋與感受.png',
  'ESG Impact Note-地方及環境貢獻.png',
  'ESG Impact Note-旅程與活動全貌.png',
  'ESG Impact Note-頁首大橫幅.png',
  'ESG成果內容-地方共好與社會價值.png',
  '成果內容-ESG／SDGs 對應整理.png',
  '成果內容-參與人次與投入紀錄.png',
  '成果內容-員工回饋與影像故事.png',
  '成果內容-後續改善與行動建議.png',
  '成果內容-活動基本資訊與行程摘要.png',
  '成果內容-環境友善行動成果.png',
  '結果內容-員工回饋與影像故事.png',
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

export default function EsgImpactNote() {
  usePageSeo({
    title: 'ESG Impact Note',
    description:
      '把一場企業旅程整理成可對應 ESG／SDGs、地方共益與員工回饋的 Impact Note，讓成果可被看見、被延伸。',
    path: '/esg-impact-note',
    keywords: ['ESG Impact Note', '企業影響力', 'SDGs', '成果報告', 'ESG 行動'],
  });
  return (
    <div>
      <section className="relative py-20 bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-ftg-green hover:underline mb-4 inline-block">← 返回首頁</Link>
          <h1 className="section-title">ESG Impact Note</h1>
          <p className="section-subtitle">
            一趟企業旅程，可以整理出哪些內容？我們協助你把活動轉化為可被溝通、可被衡量的 ESG 成果。
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((name, i) => (
              <PhotoCard key={i} src={`/images/esg-impact-note/${encodeURIComponent(name)}`} title={captionOf(name)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
