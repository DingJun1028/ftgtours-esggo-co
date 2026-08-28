import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePageSeo } from '../utils/seo';
import { useLanguage } from '../i18n/LanguageContext';

// reCAPTCHA v3 Site Key（由使用者提供，注入於 Vite env 或下方常數）
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || 'REPLACE_WITH_YOUR_V3_SITE_KEY';

export default function Contact() {
  const { t } = useLanguage();
  usePageSeo({
    title: t('contact.title'),
    description: t('contact.metaDesc'),
    path: '/contact',
    keywords: ['聯絡', '洽詢', '企業方案', 'FTG TOURS', '墾趣旅遊'],
  });

  // 載入 reCAPTCHA v3 script
  useEffect(() => {
    if (RECAPTCHA_SITE_KEY.startsWith('REPLACE')) return;
    if (document.querySelector(`script[src*="recaptcha/api.js"]`)) return;
    const s = document.createElement('script');
    s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    s.async = true;
    document.head.appendChild(s);
  }, []);

  const ACTIVITY_TYPES = [
    t('products.corpTravel'),
    t('products.familyDay'),
    t('products.esgTeamDay'),
    t('products.wellbeing'),
    t('products.executive'),
    t('products.impactNote'),
    t('contact.otherOption'),
  ];

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

    // reCAPTCHA v3：取得 token 附在表單（後端 ftgtours-api Worker 可加驗證）
    let recaptchaToken = '';
    try {
      if (!RECAPTCHA_SITE_KEY.startsWith('REPLACE') && window.grecaptcha) {
        recaptchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit_contact' });
      }
    } catch (err) {
      console.warn('reCAPTCHA skipped:', err);
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, recaptchaToken }),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus('success');
        setForm({ company: '', contact_name: '', email: '', phone: '', participants: '', activity_type: '', preferred_date: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || t('contact.submitFailed'));
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(t('contact.networkError'));
    }
  };

  const inputCls = 'w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-ftg-green focus:border-ftg-green outline-none transition';
  const labelCls = 'block text-sm font-semibold text-ftg-forest mb-2';

  return (
    <div>
      <section className="relative py-20 bg-ftg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/" className="text-ftg-green hover:underline mb-4 inline-block">{t('nav.backHome')}</Link>
          <h1 className="section-title">{t('contact.title')}</h1>
          <p className="section-subtitle">
            {t('contact.sub')}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
            <div className="rounded-2xl bg-white shadow-lg p-8">
              <h3 className="text-lg font-bold text-ftg-green mb-2">{t('contact.phone')}</h3>
              <p className="text-gray-700">886 2 7743 1006</p>
            </div>
            <div className="rounded-2xl bg-white shadow-lg p-8">
              <h3 className="text-lg font-bold text-ftg-green mb-2">{t('contact.email')}</h3>
              <p className="text-gray-700">hello@ftgtours.com</p>
            </div>
            <div className="rounded-2xl bg-white shadow-lg p-8">
              <h3 className="text-lg font-bold text-ftg-green mb-2">{t('contact.address')}</h3>
              <p className="text-gray-700">台北市中山區</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-ftg-forest mb-6 text-center">{t('contact.formTitle')}</h2>

            {status === 'success' && (
              <div className="mb-6 rounded-xl bg-green-50 border border-green-200 text-green-800 px-4 py-3 text-center">
                {t('contact.successMsg')}
              </div>
            )}
            {status === 'error' && (
              <div className="mb-6 rounded-xl bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-center">
                {t('contact.failPrefix')}{errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelCls}>{t('contact.company')}</label>
                  <input name="company" value={form.company} onChange={handleChange} className={inputCls} placeholder={t('contact.companyPh')} />
                </div>
                <div>
                  <label className={labelCls}>{t('contact.contactName')}</label>
                  <input name="contact_name" value={form.contact_name} onChange={handleChange} className={inputCls} placeholder={t('contact.contactNamePh')} required />
                </div>
                <div>
                  <label className={labelCls}>{t('contact.email')}</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} className={inputCls} placeholder="name@company.com" required />
                </div>
                <div>
                  <label className={labelCls}>{t('contact.phone')}</label>
                  <input name="phone" value={form.phone} onChange={handleChange} className={inputCls} placeholder={t('contact.phonePh')} />
                </div>
                <div>
                  <label className={labelCls}>{t('contact.participants')}</label>
                  <input type="number" name="participants" value={form.participants} onChange={handleChange} className={inputCls} placeholder={t('contact.participantsPh')} min="1" />
                </div>
                <div>
                  <label className={labelCls}>{t('contact.preferredDate')}</label>
                  <input name="preferred_date" value={form.preferred_date} onChange={handleChange} className={inputCls} placeholder={t('contact.preferredDatePh')} />
                </div>
              </div>

              <div>
                <label className={labelCls}>{t('contact.activityType')}</label>
                <select name="activity_type" value={form.activity_type} onChange={handleChange} className={inputCls} required>
                  <option value="">{t('contact.activityTypePh')}</option>
                  {ACTIVITY_TYPES.map((tp) => (
                    <option key={tp} value={tp}>{tp}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelCls}>{t('contact.message')}</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} className={inputCls} placeholder={t('contact.messagePh')} />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-block bg-ftg-orange text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors disabled:opacity-60"
                >
                  {status === 'sending' ? t('contact.sending') : t('contact.submitBtn')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
