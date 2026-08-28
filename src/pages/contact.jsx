import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';

export default function Contact() {
  usePageSeo({
    title: '聯絡我們',
    description: '歡迎洽詢 FTG TOURS 墾趣旅遊的企業方案、ESG 戶外活動與員工旅遊規劃。',
    path: '/contact',
    keywords: ['聯絡', '洽詢', '企業方案', 'FTG TOURS', '墾趣旅遊'],
  });
  return (
    <div>
      <section className="relative py-20 bg-ftg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/" className="text-ftg-green hover:underline mb-4 inline-block">← 返回首頁</Link>
          <h1 className="section-title">聯絡我們</h1>
          <p className="section-subtitle">
            無論是企業員工旅遊、ESG 戶外活動，或客製化的永續旅程規劃，都歡迎與我們聯繫。
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="rounded-2xl bg-white shadow-lg p-8">
              <h3 className="text-lg font-bold text-ftg-green mb-2">電話</h3>
              <p className="text-gray-700">886 2 7743 1006</p>
            </div>
            <div className="rounded-2xl bg-white shadow-lg p-8">
              <h3 className="text-lg font-bold text-ftg-green mb-2">信箱</h3>
              <p className="text-gray-700">hello@ftgtours.com</p>
            </div>
            <div className="rounded-2xl bg-white shadow-lg p-8">
              <h3 className="text-lg font-bold text-ftg-green mb-2">地址</h3>
              <p className="text-gray-700">台北市中山區</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="mailto:hello@ftgtours.com"
              className="inline-block bg-ftg-orange text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors"
            >
              立即寫信洽詢
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
