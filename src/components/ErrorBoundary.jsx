import React from 'react';
import FTGIcon from './FTGIcon.jsx';

/**
 * 品牌化錯誤邊界。
 *
 * 為什麼要自訂：未自訂時 React 會掛上自己的預設邊界，那段文字是英文
 * 開發者口吻、還帶 💿 / 👋 兩個 emoji。對一隻正式官網來說，等於把
 * 「出錯了，開發者你好」直接秀給造訪的客戶看，而且違反本專案
 * 「圖示不用 emoji、走高級簡約線條風」的既定規則。
 *
 * 5T-Tangible: 訪客在出錯時仍看到品牌語彙與可行動的出路（重試 / 回首頁），
 *              而不是一段與品牌無關的除錯訊息。
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.handleReset = this.handleReset.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    // 5T-Traceable: 保留可追溯的診斷資訊，不吞掉 stack。
    // TODO: 若之後接上 Sentry / Cloudflare Analytics，在此改為上报。
    console.error('[FTG] unhandled render error:', error, info?.componentStack);
  }

  handleReset() {
    this.setState({ error: null });
  }

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;

    return (
      <div
        role="alert"
        className="min-h-screen bg-ftg-cream text-ftg-forest flex items-center justify-center px-4"
      >
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full bg-ftg-forest/10 flex items-center justify-center mx-auto mb-6 text-ftg-forest">
            <FTGIcon name="compass" size={32} />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">頁面暫時無法顯示</h1>
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            這個頁面剛才沒有載入成功。請重新載入，或回到首頁繼續瀏覱其他旅程。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={this.handleReset}
              className="px-6 py-3 rounded-full bg-ftg-forest text-white text-sm font-medium hover:bg-ftg-green transition-colors"
            >
              重新載入
            </button>
            <a
              href="#/"
              className="px-6 py-3 rounded-full border border-ftg-forest text-ftg-forest text-sm font-medium hover:bg-ftg-forest hover:text-white transition-colors"
            >
              返回首頁
            </a>
          </div>
        </div>
      </div>
    );
  }
}
