import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { t, lang, setLang } = useLanguage();

  const productLinks = [
    { path: '/corporate-travel', label: t('products.corpTravel') },
    { path: '/family-day', label: t('products.familyDay') },
    { path: '/esg-team-day', label: t('products.esgTeamDay') },
    { path: '/wellbeing-retreat', label: t('products.wellbeing') },
    { path: '/executive-retreat', label: t('products.executive') },
    { path: '/esg-impact-note', label: t('products.impactNote') },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" alt="聖趣旅遊 FTG TOURS" className="h-12 md:h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/' ? 'text-ftg-green bg-ftg-sand' : 'text-gray-700 hover:text-ftg-green'}`}>
              {t('nav.home')}
            </Link>
            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-ftg-green flex items-center">
                {t('nav.products')}
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  {productLinks.map(link => (
                    <Link key={link.path} to={link.path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-ftg-sand hover:text-ftg-green">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center ml-2 border rounded-full overflow-hidden text-xs font-semibold">
              <button
                onClick={() => setLang('zh')}
                className={`px-3 py-1.5 transition-colors ${lang === 'zh' ? 'bg-ftg-green text-white' : 'text-gray-600 hover:bg-ftg-sand'}`}
              >
                {t('lang.zh')}
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 transition-colors ${lang === 'en' ? 'bg-ftg-green text-white' : 'text-gray-600 hover:bg-ftg-sand'}`}
              >
                {t('lang.en')}
              </button>
            </div>

            <a href="#/contact" className="bg-ftg-orange text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors ml-2">
              {t('nav.contact')}
            </a>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-md text-gray-700 hover:text-ftg-green">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="lg:hidden pb-4">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ftg-green" onClick={() => setMobileOpen(false)}>
              {t('nav.home')}
            </Link>
            <div className="px-3 py-2 text-sm font-semibold text-gray-500">{t('nav.products')}</div>
            {productLinks.map(link => (
              <Link key={link.path} to={link.path} className="block px-6 py-2 rounded-md text-sm text-gray-600 hover:text-ftg-green" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}

            {/* Mobile Language Switcher */}
            <div className="flex items-center px-3 mt-3 space-x-2">
              <span className="text-sm text-gray-500">{t('lang.label')}：</span>
              <button onClick={() => setLang('zh')} className={`px-3 py-1 rounded-full text-sm ${lang === 'zh' ? 'bg-ftg-green text-white' : 'bg-ftg-sand text-gray-700'}`}>{t('lang.zh')}</button>
              <button onClick={() => setLang('en')} className={`px-3 py-1 rounded-full text-sm ${lang === 'en' ? 'bg-ftg-green text-white' : 'bg-ftg-sand text-gray-700'}`}>{t('lang.en')}</button>
            </div>

            <a href="#/contact" className="block mx-3 mt-3 bg-ftg-orange text-white px-6 py-2 rounded-full text-sm font-medium text-center" onClick={() => setMobileOpen(false)}>
              {t('nav.contact')}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
