import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';

const ACTIVITY_TYPES = [
  '企業員工旅遊',
  '企業家庭日',
  'ESG 戶外團隊日',
  '員工身心平衡旅程',
  '高階主管共識營',
  'ESG Impact Note',
  '其他 / 綜合規劃',
];

export default function Contact() {
  usePageSeo({
    title: '聯絡我們',
    description: '歡迎洽詢 FTG TOURS 墾趣旅遊的企業方案、ESG 戶外活動與員工旅遊規劃。',
    path: '/contact',
    keywords: ['聯絡', '洽詢', '企業方案', 'FTG TOURS', '墾趣旅遊'],
  });

  const [form, setForm] = useState({
    company: '', contact_name: '', email: '', phone: '',
    participants: '', activity_type: '', preferred_date: '', message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus('success');
        setForm({ company: '', contact_name: '', email: '', phone: '', participants: '', activity_type: '', preferred_date: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || '送出失敗，請稍後再試');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('網路錯誤，請稍後再試');
    }
  };

  const inputCls = 'w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-ftg-green focus:border-ftg-green outline-none transition';
  const labelCls = 'block text-sm font-semibold text-ftg-forest mb-2';

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
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

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-ftg-forest mb-6 text-center">洽詢表單</h2>

            {status === 'success' && (
              <div className="mb-6 rounded-xl bg-green-50 border border-green-200 text-green-800 px-4 py-3 text-center">
                感謝您的洽詢，我們已收到您的訊息，將盡快與您聯繫！
              </div>
            )}
            {status === 'error' && (
              <div className="mb-6 rounded-xl bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-center">
                送出失敗：{errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelCls}>公司名稱</label>
                  <input name="company" value={form.company} onChange={handleChange} className={inputCls} placeholder="請填寫公司名稱" />
                </div>
                <div>
                  <label className={labelCls}>聯絡人</label>
                  <input name="contact_name" value={form.contact_name} onChange={handleChange} className={inputCls} placeholder="請填寫聯絡人姓名" required />
                </div>
                <div>
                  <label className={labelCls}>Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} className={inputCls} placeholder="name@company.com" required />
                </div>
                <div>
                  <label className={labelCls}>電話</label>
                  <input name="phone" value={form.phone} onChange={handleChange} className={inputCls} placeholder="聯絡電話" />
                </div>
                <div>
                  <label className={labelCls}>預計人數</label>
                  <input type="number" name="participants" value={form.participants} onChange={handleChange} className={inputCls} placeholder="如 20" min="1" />
                </div>
                <div>
                  <label className={labelCls}>預計時間</label>
                  <input name="preferred_date" value={form.preferred_date} onChange={handleChange} className={inputCls} placeholder="如 2026-09 或 待討論" />
                </div>
              </div>

              <div>
                <label className={labelCls}>活動類型</label>
                <select name="activity_type" value={form.activity_type} onChange={handleChange} className={inputCls} required>
                  <option value="">請選擇活動類型</option>
                  {ACTIVITY_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelCls}>想探索的旅程或需求</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} className={inputCls} placeholder="活動目的、想去的地點、特殊需求等" />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-block bg-ftg-orange text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors disabled:opacity-60"
                >
                  {status === 'sending' ? '送出中…' : '送出洽詢'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
