import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
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
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" alt="聖趣旅遊 FTG TOURS" className="h-10 md:h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/' ? 'text-ftg-green bg-ftg-sand' : 'text-gray-700 hover:text-ftg-green'}`}>
              {t('nav.home')}
            </Link>
            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-ftg-green flex items-center">
                {t('nav.products')}
                <svg className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                <div className="py-2">
                  {productLinks.map(link => (
                    <Link key={link.path} to={link.path} className={`block px-4 py-2.5 text-sm ${location.pathname === link.path ? 'text-ftg-green bg-ftg-sand font-semibold' : 'text-gray-700 hover:bg-ftg-sand hover:text-ftg-green'}`}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center ml-2 border border-gray-200 rounded-full overflow-hidden text-xs font-semibold">
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

            <a href="#/contact" className="bg-ftg-orange text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors ml-2 shadow-sm">
              {t('nav.contact')}
            </a>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-md text-gray-700 hover:text-ftg-green hover:bg-ftg-sand transition-colors" aria-label="選單">
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pb-4 pt-2 border-t border-gray-100">
            <Link to="/" className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-ftg-green hover:bg-ftg-sand" onClick={() => setMobileOpen(false)}>
              {t('nav.home')}
            </Link>
            
            {/* Mobile Products accordion */}
            <div>
              <button onClick={() => setMobileProducts(!mobileProducts)} className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-ftg-green hover:bg-ftg-sand">
                {t('nav.products')}
                <svg className={`h-4 w-4 transition-transform duration-200 ${mobileProducts ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileProducts ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 py-1">
                  {productLinks.map(link => (
                    <Link key={link.path} to={link.path} className={`block px-4 py-2.5 rounded-lg text-sm ${location.pathname === link.path ? 'text-ftg-green bg-ftg-sand font-semibold' : 'text-gray-600 hover:text-ftg-green hover:bg-ftg-sand'}`} onClick={() => setMobileOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 px-4 mt-3">
              <span className="text-sm text-gray-500">{t('lang.label')}：</span>
              <div className="flex border border-gray-200 rounded-full overflow-hidden">
                <button onClick={() => setLang('zh')} className={`px-3 py-1.5 text-sm font-medium ${lang === 'zh' ? 'bg-ftg-green text-white' : 'text-gray-600'}`}>{t('lang.zh')}</button>
                <button onClick={() => setLang('en')} className={`px-3 py-1.5 text-sm font-medium ${lang === 'en' ? 'bg-ftg-green text-white' : 'text-gray-600'}`}>{t('lang.en')}</button>
              </div>
            </div>

            <a href="#/contact" className="block mx-4 mt-4 bg-ftg-orange text-white px-6 py-3 rounded-full text-sm font-medium text-center shadow-sm" onClick={() => setMobileOpen(false)}>
              {t('nav.contact')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
