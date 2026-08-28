import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';

const expImages = [
  { src: '/images/family-day/exp-1-food.png', title: '地方餐食', desc: '結合在地食材與地方餐食，體驗風土滋味。' },
  { src: '/images/family-day/exp-2-craft.png', title: '手作體驗', desc: '親子共同完成的手作體驗，留下共同記憶。' },
  { src: '/images/family-day/exp-3-forest.png', title: '森林慢行', desc: '親子同遊的森林慢行，放鬆而有節奏。' },
  { src: '/images/family-day/exp-4-no-trace.png', title: '無痕戶外', desc: '落實無痕戶外，培養孩子環境素養。' },
  { src: '/images/family-day/exp-5-task.png', title: '親子任務', desc: '分齡設計的親子任務，促進互動與合作。' },
  { src: '/images/family-day/exp-6-nature-obs.png', title: '親子自然觀察', desc: '引導親子一起觀察自然，建立連結。' },
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
  usePageSeo({
    title: '企業家庭日',
    description:
      '以自然教育、親子共學、無痕戶外與地方體驗，打造員工與家庭共同參與的企業家庭日。',
    path: '/family-day',
    keywords: ['企業家庭日', '親子活動', '雇主品牌', '永續教育', '員工家庭關懷'],
  });
  return (
    <div>
      <section className="relative py-20 bg-ftg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-ftg-green hover:underline mb-4 inline-block">← 返回首頁</Link>
          <h1 className="section-title">企業家庭日</h1>
          <p className="section-subtitle">
            以自然教育、親子共學、無痕戶外與地方體驗，打造員工與家庭共同參與的企業家庭日。
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <img src="/images/family-day/hero.png" alt="企業家庭日 頁首大橫幅" className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl" loading="lazy" />
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-ftg-forest mb-6">為什麼企業需要墾趣？</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                企業不是不會辦家庭日，而是不一定能把家庭日設計成兼具親子安全、自然教育、員工家庭關懷、地方共益與品牌雇主價值的活動。
              </p>
            </div>
            <div className="bg-ftg-cream rounded-2xl p-8">
              <h3 className="text-xl font-bold text-ftg-forest mb-4">常見挑戰</h3>
              <ul className="space-y-3">
                {['家庭日常流於吃喝玩樂，價值感不明顯', '親子分流、安全與動線管理複雜', 'HR／福委會難以兼顧教育性與現場執行', '缺少品牌 Employer 素材與後續傳播'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-red-500 mr-2">✕</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">可依需求搭配的體驗</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {expImages.map((p, i) => <PhotoCard key={i} {...p} />)}
          </div>

          <h2 className="text-3xl font-bold text-ftg-forest mb-8 text-center">墾趣可以提供</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {['企業家庭日需求訪談', '親子友善戶外場域選擇', '分齡活動與親子任務設計', '自然觀察、食農教育與無痕戶外', '地方文化、農村、部落或社區體驗', '現場安全、動線、餐食與分流管理', '品牌雇主與企業文化元素設計', '家庭日成果摘要與圖文素材整理'].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-ftg-green text-white rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">適合對象</h3>
            <p className="text-gray-100 mb-6">HR：員工家庭關懷、留才、幸福企業 · 福委會：年度家庭日、親子活動 · ESG／CSR 部門：親子永續教育 · 品牌／公關部門：品牌雇主、企業文化</p>
            <Link to="/#contact" className="inline-block bg-ftg-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
              立即洽詢企業家庭日方案
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
