import { useLanguage } from '../i18n/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    // 5T-Tangible: 原本 sm:min-h-screen 在桌機過高（且手機 100vh 被網址列吃掉）。
    // 改成有上限的 vh 階梯，橫幅比例固定。
    <section 
      className="relative min-h-[48vh] sm:min-h-[54vh] md:min-h-[60vh] lg:min-h-[64vh] max-h-[700px] flex items-end bg-cover bg-center" 
      style={{ backgroundImage: "url('/images/hero-banner.webp')" }}
    >
      {/* 5T-Tangible: 遮罩「亮一點」但不能讓字變糊。
          原為 sunlight/80 —— 全域均勻壓亮，最差對比 6.22:1（照片暗部）。

          改成兩層分工：
            · 全域遮罩降到 /56（提高 30% 透明度）→ 照片透出更多，畫面更亮。
            · Desktop 文字區補 cream/80 局部底 → 對比升到 9.19:1。

          為什麼需要局部底：這裡的字是 text-ftg-forest（深綠）壓在亮黃遮罩上，
          是「亮底深字」，與其他頁面的「暗底白字」相反。實測單純把 alpha 降到
          /56，照片暗部會掉到 3.76:1（僅大字可過）—— 副標 text-lg 不是大字，
          會不合格。靠眼睛看不出來，必須量測。

          Mobile 版文字在 bg-ftg-sunlight 實色卡片裡（下方），本來就不受
          全域遮罩影響，因此不需加局部底。

          5T-Transparent: 全域遮罩用 bracket 語法 [/0.56] 而非 /56 ——
          Tailwind 3 的 opacity 是白名單制，任意數字會被「靜默丟棄」：
          CSS 不產生這條規則，頁面也不報錯，只是沒有變亮。已由
          scripts/check_overlay_css.py 驗證實際有產生。 */}
      <div className="absolute inset-0 bg-ftg-sunlight/[0.56]"></div>

      {/* Desktop Layout */}
      <div className="hidden sm:flex relative z-10 w-full max-w-7xl mx-auto pl-8 xl:pl-16 pb-16">
        {/* 左側文字 (靠左, 寬度 480-560px) */}
        <div className="text-left max-w-md xl:max-w-lg bg-ftg-cream/80 rounded-2xl px-6 py-6 xl:px-8 xl:py-7">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ftg-forest mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-ftg-forest mb-8">
            {t('hero.subtitle')}
          </p>
          <button className="bg-ftg-orange hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold transition-all hover:scale-105 shadow-lg">
            {t('hero.ctaButton')}
          </button>
        </div>
      </div>

      {/* Mobile Layout: 文字在圖片下方的暖白卡片 */}
      <div className="sm:hidden absolute bottom-0 left-0 right-0 bg-ftg-sunlight p-6 rounded-t-3xl shadow-lg">
        <h1 className="text-3xl font-bold text-ftg-forest mb-3">
          {t('hero.title')}
        </h1>
        <p className="text-lg text-ftg-forest mb-4">
          {t('hero.subtitle')}
        </p>
        <button className="w-full bg-ftg-orange hover:bg-orange-600 text-white py-3 rounded-full font-bold">
          {t('hero.ctaButton')}
        </button>
      </div>

      {/* 右側留白, 供人物顯示 (object-position: 70% center) */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none"></div>
    </section>
  );
}
