export interface Links {
  title: string;
  link?: string;
  sublinks?: Sublinks[];
}

export interface Sublinks {
  title: string;
  link?: string;
  innerSubLinks?: InnerSublinks[];
}

export interface InnerSublinks {
  title: string;
  link: string;
}

export const headerAndDrawer: Links[] = [
  {
    title: 'Explore',
    sublinks: [
      {
        title: 'Feeds',
        innerSubLinks: [
          { title: '@tradedNy', link: '/instagram-feed/tradednewyork' },
          { title: '@tradedLa', link: '/instagram-feed/tradedla' },
          { title: '@tradedNj', link: '/instagram-feed/tradednewjersey' },
          { title: '@tradedBos', link: '/instagram-feed/tradedboston' },
          { title: '@tradedChi', link: '/instagram-feed/tradedchicago' },
          { title: '@tradedMia', link: '/instagram-feed/tradedmiami' },
          { title: '@tradedTex', link: '/instagram-feed/tradedtexas' },
        ],
      },
      {
        title: 'Deals',
        link: '/deals',
      },
      {
        title: 'Agencies',
        link: '/agencies',
      },
      {
        title: 'Lenders',
        link: '/lenders',
      },
      {
        title: 'Agents',
        link: '/brokers',
      },
      {
        title: 'Transfers',
        innerSubLinks: [
          {
            title: 'New York Transfers',
            link: '/transfers/new-york-transfers',
          },
          {
            title: 'Los Angeles Property Transfers',
            link: '/transfers/los-angeles-property-transfers',
          },
          {
            title: 'Miami Property Transfers',
            link: '/transfers/miami-property-transfers',
          },
        ],
      },
    ],
  },
  {
    title: 'Map',
    link: '/deals',
  },
  {
    title: 'Activity',
    sublinks: [
      {
        title: 'Leaderboards',
        link: '/leaderboard',
      },
      {
        title: 'Activity Feeds',
        link: '/activity',
      },
      {
        title: 'Rankings',
        link: '/rankings',
      },
    ],
  },
  {
    title: 'About',
    sublinks: [
      {
        title: 'FAQ',
        link: '/faq',
      },
      {
        title: 'Testimonials',
        link: '/testimonials',
      },
      {
        title: 'About Us',
        link: '/about-us',
      },
    ],
  },
];
