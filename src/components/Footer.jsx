export default function Footer() {
  return (
    <footer className="bg-ftg-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-ftg-green font-bold text-lg">FTG</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif">墾趣旅遊</h3>
                <p className="text-xs text-gray-300">FTG TOURS</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              走進自然，創造更有意義的旅程。
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">企業方案</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/corporate-travel" className="text-gray-300 hover:text-white">企業員工旅遊</a></li>
              <li><a href="/family-day" className="text-gray-300 hover:text-white">企業家庭日</a></li>
              <li><a href="/esg-team-day" className="text-gray-300 hover:text-white">ESG Outdoor Team Day</a></li>
              <li><a href="/wellbeing-retreat" className="text-gray-300 hover:text-white">Employee Wellbeing Retreat</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">進階方案</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/executive-retreat" className="text-gray-300 hover:text-white">高階主管共識營</a></li>
              <li><a href="/esg-impact-note" className="text-gray-300 hover:text-white">ESG Impact Note 專案</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">聯絡我們</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>電話：886 2 7743 1006</li>
              <li>信箱：hello@ftgtours.com</li>
              <li>地址：台北市中山區</li>
              <li className="flex space-x-4 pt-2">
                <a href="#" className="hover:text-white">FB</a>
                <a href="#" className="hover:text-white">IG</a>
                <a href="#" className="hover:text-white">LINE</a>
                <a href="#" className="hover:text-white">YouTube</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 FTG TOURS 墾趣旅遊. All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white">隱私政策</a>
            <a href="#" className="hover:text-white">服務條款</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
