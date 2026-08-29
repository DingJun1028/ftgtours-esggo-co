import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function CtaForm({ ctaTitle, ctaSub, features }) {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    company: '', contact_name: '', email: '', phone: '',
    participants: '', activity_type: '', preferred_date: '', message: '',
  });
  const [status, setStatus] = useState('idle');
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
        setErrorMsg(data.error || t('contact.submitFailed'));
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(t('contact.networkError'));
    }
  };

  const inputCls = 'w-full px-3 py-2 md:px-4 md:py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-ftg-green focus:border-ftg-green outline-none transition text-sm md:text-base';
  const labelCls = 'block text-xs md:text-sm font-semibold text-ftg-forest mb-1 md:mb-2';

  if (status === 'success') {
    return (
      <div className="bg-ftg-green text-white rounded-2xl p-6 md:p-10 text-center">
        <div className="text-4xl md:text-5xl mb-4">✓</div>
        <h2 className="text-xl md:text-2xl font-bold mb-2">{t('contact.successTitle')}</h2>
        <p className="text-gray-100 text-sm md:text-base">{t('contact.successMsg')}</p>
      </div>
    );
  }

  return (
    <div className="bg-forest/90 backdrop-blur-sm text-white rounded-2xl shadow-xl mx-auto max-w-5xl w-full p-5 sm:p-7 md:p-9 lg:p-12">
      {/* Header */}
      <div className="text-center mb-5 sm:mb-6 md:mb-7 lg:mb-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">{ctaTitle}</h2>
        {ctaSub && <p className="text-gray-100 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">{ctaSub}</p>}
      </div>

      {/* Features */}
      {features && features.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 gap-y-3 mb-4 sm:mb-6 md:mb-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white/10 rounded-lg md:rounded-xl py-2.5 md:py-3 px-2 md:px-3 text-center min-w-0">
              <span className="text-xs md:text-sm font-medium block truncate">{f}</span>
            </div>
          ))}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
          <div>
            <label className={labelCls}>{t('contact.formCompany')}</label>
            <input name="company" value={form.company} onChange={handleChange} required className={inputCls} placeholder={t('contact.formCompanyPlaceholder')} />
          </div>
          <div>
            <label className={labelCls}>{t('contact.formContact')}</label>
            <input name="contact_name" value={form.contact_name} onChange={handleChange} required className={inputCls} placeholder={t('contact.formContactPlaceholder')} />
          </div>
          <div>
            <label className={labelCls}>{t('contact.formEmail')}</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} required className={inputCls} placeholder={t('contact.formEmailPlaceholder')} />
          </div>
          <div>
            <label className={labelCls}>{t('contact.formPhone')}</label>
            <input name="phone" value={form.phone} onChange={handleChange} className={inputCls} placeholder={t('contact.formPhonePlaceholder')} />
          </div>
          <div>
            <label className={labelCls}>{t('contact.formParticipants')}</label>
            <input name="participants" value={form.participants} onChange={handleChange} className={inputCls} placeholder={t('contact.formParticipantsPlaceholder')} />
          </div>
          <div>
            <label className={labelCls}>{t('contact.formActivityType')}</label>
            <select name="activity_type" value={form.activity_type} onChange={handleChange} required className={inputCls}>
              <option value="">{t('contact.formSelectOption')}</option>
              <option value="corporate-travel">{t('products.corpTravel')}</option>
              <option value="family-day">{t('products.familyDay')}</option>
              <option value="esg-team-day">{t('products.esgTeamDay')}</option>
              <option value="wellbeing">{t('products.wellbeing')}</option>
              <option value="executive">{t('products.executive')}</option>
              <option value="impact-note">{t('products.impactNote')}</option>
              <option value="other">{t('contact.otherOption')}</option>
            </select>
          </div>
          <div>
            <label className={labelCls}>{t('contact.formDate')}</label>
            <input name="preferred_date" type="date" value={form.preferred_date} onChange={handleChange} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>{t('contact.formMessage')}</label>
            <input name="message" value={form.message} onChange={handleChange} className={inputCls} placeholder={t('contact.formMessagePlaceholder')} />
          </div>
        </div>

        {errorMsg && <p className="text-red-300 text-sm">{errorMsg}</p>}

        <div className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-2">
          <button type="submit" disabled={status === 'sending'} className="bg-ftg-orange text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-orange-600 transition-colors disabled:opacity-60 flex-1 sm:flex-none">
            {status === 'sending' ? t('contact.submitting') : t('contact.submitBtn')}
          </button>
          <a href="/files/ftg-tours-brochure.pdf" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-white/10 transition-colors text-center flex-1 sm:flex-none">
            {t('contact.downloadBtn')}
          </a>
        </div>
      </form>
    </div>
  );
}
