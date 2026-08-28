import { useEffect } from 'react';

const SITE_URL = 'https://ftgtours.esggo.co';
const BRAND = 'FTG TOURS 墾趣旅遊';
const DEFAULT_TITLE = '墾趣旅遊 FTG TOURS | ESG Outdoor Wellbeing Travel';
const DEFAULT_DESCRIPTION =
  '台灣最懂戶外健康與永續行動的旅行解方品牌。提供企業員工旅遊、家庭日、ESG Team Day、Wellbeing Retreat、ESG Impact Note 等客製方案。';

const canonical = (path = '') => `${SITE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

export const usePageSeo = ({ title, description, path = '', keywords = [] }) => {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${BRAND}` : DEFAULT_TITLE;
    const metaDescription = description || DEFAULT_DESCRIPTION;

    document.title = fullTitle;

    const ensureMeta = (attr, value, content) => {
      let el = document.querySelector(`meta[${attr}="${value}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, value);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    ensureMeta('name', 'description', metaDescription);
    if (description) {
      ensureMeta('name', 'og:description', metaDescription);
    }
    ensureMeta('name', 'keywords', keywords.join(','));
    ensureMeta('name', 'og:title', fullTitle);
    ensureMeta('property', 'og:url', canonical(path));
    ensureMeta('property', 'og:type', 'website');

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonical(path));
  }, [title, description, path, keywords]);
};

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BRAND,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  description: DEFAULT_DESCRIPTION,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+886-2-7743-1006',
      email: 'hello@ftgtours.com',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: '台北市',
    addressRegion: '中山區',
    addressCountry: 'TW',
  },
  sameAs: ['https://ftgtours.esggo.co'],
};

export const localBusinessJsonLd = (service = 'ESG Outdoor Wellbeing Travel') => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BRAND,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressLocality: '台北市',
    addressRegion: '中山區',
    addressCountry: 'TW',
  },
  telephone: '+886-2-7743-1006',
  serviceType: service,
});

export const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BRAND,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  inLanguage: ['zh-Hant', 'zh-CN', 'en'],
  alternateName: {
    '@type': 'Text',
    '@value': 'FTG TOURS',
  },
};
