import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';

// 嚴格照資料夾原始順序：子網頁-員工身心平衡旅程
const images = [
  '員工身心平衡-頁首大橫幅.png',
  '旅程可以留下什麼-企業文化溫度.png',
  '旅程可以留下什麼-可分享的活動素材.png',
  '旅程可以留下什麼-員工放鬆回憶.png',
  '旅程可以留下什麼-團隊可更自交流.png',
  '旅程可以留下什麼-團隊更自然的連結.png',
  '旅程可以留下什麼-後續活動靈感.png',
  '旅程可以留下什麼-恢復能量.png',
  '旅程可以留下什麼-放鬆節奏.png',
  '旅程可以留下什麼-留下值得分享的回憶.png',
  '旅程可以留下什麼-自然中的安定感.png',
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

export default function WellbeingRetreat() {
  usePageSeo({
    title: '員工身心平衡',
    description:
      '一段好的身心平衡旅程，可以為企業與團隊留下自然中的安定感、放鬆節奏與更自然的連結。',
    path: '/wellbeing-retreat',
    keywords: ['員工身心平衡', 'Wellbeing Retreat', '團隊放鬆', '自然連結', '企業福祉'],
  });
  return (
    <div>
      <section className="relative py-20 bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-ftg-green hover:underline mb-4 inline-block">← 返回首頁</Link>
          <h1 className="section-title">員工身心平衡</h1>
          <p className="section-subtitle">
            一段好的身心平衡旅程，可以帶來什麼？又可以留下什麼？
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((name, i) => (
              <PhotoCard key={i} src={`/images/wellbeing-retreat/${encodeURIComponent(name)}`} title={captionOf(name)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
