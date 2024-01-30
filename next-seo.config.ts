import type { NextSeoProps } from 'next-seo';

const AppConfig = {
  site_name: 'Traded | Commercial Real Estate Transactions & Broker Insights',
  title: 'Traded | Commercial Real Estate Transactions & Broker Insights',
  description:
    'Explore recent commercial real estate transactions, learn more about the the players involved, and network along the way!',
  locale: 'en_US',
  canonical: 'https://traded.co/',
  url: 'https://traded.co/',
  type: 'website',
  name: 'robots',
};

export const defaultSeoConfig: NextSeoProps = {
  openGraph: {
    ...AppConfig,
    defaultImageHeight: 160,
    defaultImageWidth: 160,
  },
  defaultTitle: AppConfig.title,
  title: AppConfig.title,
  description: AppConfig.description,
  canonical: AppConfig.canonical,
  twitter: {
    handle: '@handle',
    site: '@tradedny',
    cardType: 'summary_large_image',
  },
};
