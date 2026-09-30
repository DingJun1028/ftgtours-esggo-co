import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
// 5T-Trustworthy: 聯絡資訊一律讀 src/data/company.js。原先此處硬寫
// 886 2 7743 1006 / hello@ftgtours.com / 台北市中山區，與隱私權政策
// 揭露的資料蒐集者（02-8512-3099 / service@ftg-tours.com.tw / 新北三重）
// 不符 — 政策頁與頁面互相矛盾即為自曝矛盾。
import { COMPANY } from '../data/company';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-ftg-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src="/images/logo.webp" alt="墾趣旅遊 FTG TOURS" className="h-10 md:h-12 w-auto mb-4" />
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footer.brandTagline')}
            </p>
          </div>

          {/* Corporate Programs */}
          <div>
            <h4 className="text-base font-semibold mb-3 md:mb-4">{t('footer.corpPrograms')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/corporate-travel" className="text-gray-300 hover:text-white transition-colors inline-flex items-center min-h-[44px] min-w-[44px] px-2 -mx-2">{t('products.corpTravel')}</Link></li>
              <li><Link to="/family-day" className="text-gray-300 hover:text-white transition-colors inline-flex items-center min-h-[44px] min-w-[44px] px-2 -mx-2">{t('products.familyDay')}</Link></li>
              <li><Link to="/esg-team-day" className="text-gray-300 hover:text-white transition-colors inline-flex items-center min-h-[44px] min-w-[44px] px-2 -mx-2">{t('products.esgTeamDay')}</Link></li>
              <li><Link to="/wellbeing-retreat" className="text-gray-300 hover:text-white transition-colors inline-flex items-center min-h-[44px] min-w-[44px] px-2 -mx-2">{t('products.wellbeing')}</Link></li>
            </ul>
          </div>

          {/* Advanced Programs */}
          <div>
            <h4 className="text-base font-semibold mb-3 md:mb-4">{t('footer.advancedPrograms')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/executive-retreat" className="text-gray-300 hover:text-white transition-colors inline-flex items-center min-h-[44px] min-w-[44px] px-2 -mx-2">{t('products.executive')}</Link></li>
              <li><Link to="/esg-impact-note" className="text-gray-300 hover:text-white transition-colors inline-flex items-center min-h-[44px] min-w-[44px] px-2 -mx-2">{t('products.impactNote')}</Link></li>
              <li><Link to="/journey-design" className="text-gray-300 hover:text-white transition-colors inline-flex items-center min-h-[44px] min-w-[44px] px-2 -mx-2">{t('nav.journeyDesign')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold mb-3 md:mb-4">{t('footer.contactUs')}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>{t('footer.phone')}：{COMPANY.phone}</li>
              <li>{t('footer.email')}：{COMPANY.email}</li>
              <li>{t('footer.address')}：{COMPANY.address}</li>
              <li>{t('footer.line')}：{COMPANY.lineId}</li>
              {/* 5T-Transparent: 這裡原本有 FB / IG / LINE / YouTube 四個
                  href="#" 的假連結 — 點下去只是跳回首頁頂端，等於假裝有社群帳號
                  卻一個都連不出去。沒有真實網址前寧可不放，也不放會壞的。
                  待官方提供各社群網址後，於此改為 <a href="真實網址" rel="noopener noreferrer">。 */}
            </ul>
          </div>
        </div>

        <div className="border-t border-green-500 mt-8 pt-6 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/images/logo.webp" alt="墾趣旅遊 FTG TOURS" className="h-8 w-auto" />
              <p>&copy; 2026 FTG TOURS 墾趣旅遊. {t('footer.rights')}</p>
            </div>
            <div className="space-x-4">
              <Link to="/about" className="hover:text-white transition-colors inline-flex items-center min-h-[44px] min-w-[44px] px-2 -mx-2">{t('footer.about')}</Link>
              <Link to="/privacy" className="hover:text-white transition-colors inline-flex items-center min-h-[44px] min-w-[44px] px-2 -mx-2">{t('footer.privacy')}</Link>
              <Link to="/terms" className="hover:text-white transition-colors inline-flex items-center min-h-[44px] min-w-[44px] px-2 -mx-2">{t('footer.terms')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
