import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-ftg-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/images/logo.png" alt="聖趣旅遊 FTG TOURS" className="h-10 md:h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-gray-300 text-sm">
              {t('footer.brandTagline')}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.corpPrograms')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#/corporate-travel" className="text-gray-300 hover:text-white">{t('products.corpTravel')}</a></li>
              <li><a href="#/family-day" className="text-gray-300 hover:text-white">{t('products.familyDay')}</a></li>
              <li><a href="#/esg-team-day" className="text-gray-300 hover:text-white">{t('products.esgTeamDay')}</a></li>
              <li><a href="#/wellbeing-retreat" className="text-gray-300 hover:text-white">{t('products.wellbeing')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.advancedPrograms')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#/executive-retreat" className="text-gray-300 hover:text-white">{t('products.executive')}</a></li>
              <li><a href="#/esg-impact-note" className="text-gray-300 hover:text-white">{t('products.impactNote')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contactUs')}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>{t('footer.phone')}：886 2 7743 1006</li>
              <li>{t('footer.email')}：hello@ftgtours.com</li>
              <li>{t('footer.address')}：台北市中山區</li>
              <li className="flex space-x-4 pt-2">
                <a href="#/" className="hover:text-white">FB</a>
                <a href="#/" className="hover:text-white">IG</a>
                <a href="#/" className="hover:text-white">LINE</a>
                <a href="#/" className="hover:text-white">YouTube</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 FTG TOURS 墾趣旅遊. {t('footer.rights')}</p>
          <div className="mt-2 space-x-4">
            <a href="#/" className="hover:text-white">{t('footer.privacy')}</a>
            <a href="#/" className="hover:text-white">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
