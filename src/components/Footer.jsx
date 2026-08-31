import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-ftg-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src="/images/logo.png" alt="墾趣旅遊 FTG TOURS" className="h-10 md:h-12 w-auto mb-4 grayscale contrast-100 brightness-110" />
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footer.brandTagline')}
            </p>
          </div>

          {/* Corporate Programs */}
          <div>
            <h4 className="text-base font-semibold mb-3 md:mb-4">{t('footer.corpPrograms')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#/corporate-travel" className="text-gray-300 hover:text-white transition-colors">{t('products.corpTravel')}</a></li>
              <li><a href="#/family-day" className="text-gray-300 hover:text-white transition-colors">{t('products.familyDay')}</a></li>
              <li><a href="#/esg-team-day" className="text-gray-300 hover:text-white transition-colors">{t('products.esgTeamDay')}</a></li>
              <li><a href="#/wellbeing-retreat" className="text-gray-300 hover:text-white transition-colors">{t('products.wellbeing')}</a></li>
            </ul>
          </div>

          {/* Advanced Programs */}
          <div>
            <h4 className="text-base font-semibold mb-3 md:mb-4">{t('footer.advancedPrograms')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#/executive-retreat" className="text-gray-300 hover:text-white transition-colors">{t('products.executive')}</a></li>
              <li><a href="#/esg-impact-note" className="text-gray-300 hover:text-white transition-colors">{t('products.impactNote')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold mb-3 md:mb-4">{t('footer.contactUs')}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>{t('footer.phone')}：886 2 7743 1006</li>
              <li>{t('footer.email')}：hello@ftgtours.com</li>
              <li>{t('footer.address')}：台北市中山區</li>
              <li className="flex space-x-4 pt-2">
                <a href="#/" className="hover:text-white transition-colors">FB</a>
                <a href="#/" className="hover:text-white transition-colors">IG</a>
                <a href="#/" className="hover:text-white transition-colors">LINE</a>
                <a href="#/" className="hover:text-white transition-colors">YouTube</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-500 mt-8 pt-6 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="墾趣旅遊 FTG TOURS" className="h-8 w-auto" />
              <p>&copy; 2026 FTG TOURS 墾趣旅遊. {t('footer.rights')}</p>
            </div>
            <div className="space-x-4">
              <a href="#/" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
              <a href="#/" className="hover:text-white transition-colors">{t('footer.terms')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
