import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const productLinks = [
    { path: '/corporate-travel', label: '企業員工旅遊' },
    { path: '/family-day', label: '企業家庭日' },
    { path: '/esg-team-day', label: 'ESG Outdoor Team Day' },
    { path: '/wellbeing-retreat', label: 'Employee Wellbeing Retreat' },
    { path: '/executive-retreat', label: '高階主管共識營' },
    { path: '/esg-impact-note', label: 'ESG Impact Note' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-ftg-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">FTG</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-ftg-green font-serif">墾趣旅遊</span>
              <span className="text-xs text-gray-500">FTG TOURS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/' ? 'text-ftg-green bg-ftg-sand' : 'text-gray-700 hover:text-ftg-green'}`}>
              首頁
            </Link>
            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-ftg-green flex items-center">
                企業戶外客製專案
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
            <a href="#/contact" className="bg-ftg-orange text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors">
              立即洽詢
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
              首頁
            </Link>
            <div className="px-3 py-2 text-sm font-semibold text-gray-500">企業戶外客製專案</div>
            {productLinks.map(link => (
              <Link key={link.path} to={link.path} className="block px-6 py-2 rounded-md text-sm text-gray-600 hover:text-ftg-green" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <a href="#/contact" className="block mx-3 mt-3 bg-ftg-orange text-white px-6 py-2 rounded-full text-sm font-medium text-center" onClick={() => setMobileOpen(false)}>
              立即洽詢
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
