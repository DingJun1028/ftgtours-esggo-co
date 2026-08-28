import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';

// 嚴格照資料夾原始順序：子網頁-企業家庭日
const images = [
  '企業家庭日-頁首大橫幅.png',
  '可搭配的體驗-地方餐食.png',
  '可搭配的體驗-手作體驗png.png',
  '可搭配的體驗-森林慢行.png',
  '可搭配的體驗-無痕戶外.png',
  '可搭配的體驗-親子任務.png',
  '可搭配的體驗-親子自然觀察.png',
  '好的企業家庭日-企業關懷更有感.png',
  '好的企業家庭日-地方連結與共益.png',
  '好的企業家庭日-留下美好的回憶.png',
  '好的企業家庭日-自然共學與成長.png',
  '好的企業家庭日-親子互動更緊密.png',
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

export default function FamilyDay() {
  usePageSeo({
    title: '企業家庭日',
    description:
      '可依需求搭配的體驗，讓企業家庭日成為企業關懷、地方連結與親子互動更緊密的一天。',
    path: '/family-day',
    keywords: ['企業家庭日', 'Family Day', '親子活動', '地方連結', '企業關懷'],
  });
  return (
    <div>
      <section className="relative py-20 bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-ftg-green hover:underline mb-4 inline-block">← 返回首頁</Link>
          <h1 className="section-title">企業家庭日</h1>
          <p className="section-subtitle">
            可依需求搭配的體驗，讓企業家庭日留下美好的回憶。
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((name, i) => (
              <PhotoCard key={i} src={`/images/family-day/${encodeURIComponent(name)}`} title={captionOf(name)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
