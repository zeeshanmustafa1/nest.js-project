import { times } from 'lodash';

import type { Broker, Company } from '@/__generated__/types.d';

// joiningDate: Scalars["ISO8601DateTime"];

export const mockBrokers: Broker[] = [
  {
    id: '5000000d-556e-43ee-91f1-a7c17d8b508a',
    name: 'Dwight Schrute',
    createdAt: '2022-08-23',
    updatedAt: null,
    email: 'dumb@email.com',
    thumbnail: '/assets/broker-profile-image.png',
    joiningDate: '2023-01-01',
  },
  {
    id: '0000000d-556e-43ee-91f1-a7c17d8b508a',
    name: 'Dustin Stolly',
    createdAt: '2022-08-23',
    updatedAt: null,
    email: 'dumb@email.com',
    thumbnail: '/assets/broker-profile-image.png',
    joiningDate: '2023-01-01',
  },
  {
    id: '2000000d-556e-43ee-91f1-a7c17d8b508a',
    name: 'Michael Scott',
    createdAt: '2022-08-23',
    updatedAt: null,
    email: 'dumb@email.com',
    thumbnail: '/assets/broker-profile-image.png',
    joiningDate: '2023-01-01',
  },
  {
    id: '3000000d-556e-43ee-91f1-a7c17d8b508a',
    name: 'Jim Halpert',
    createdAt: '2022-08-23',
    updatedAt: null,
    email: 'dumb@email.com',
    thumbnail: '/assets/broker-profile-image.png',
    joiningDate: '2022-02-14',
  },
];

export const mockBrokerRow: IBrokerRow[] = [
  {
    title: 'Hot',
    description: 'View top 50 most active brokers this quarter by deal volume.',
    brokers: mockBrokers,
  },
  {
    title: 'Unicorns',
    description: 'View top 50 brokers with the highest volume of all time.',
    brokers: mockBrokers,
  },
  {
    title: 'Rising Star',
    description:
      'View the top 50 new brokers with the highest volume this quarter.',
    brokers: mockBrokers,
  },
];

export const mockedAgency: Company = {
  id: 'mocked-agency',
  title: 'Remax',
  slug: 'remax',
  createdAt: '2022-08-01T09:40:39.557Z',
  updatedAt: null,
  description:
    'RE/MAX, short for Real Estate Maximums, is an American international real estate company that operates through a franchise system. As...',
  logoUrl:
    'https://traded.co/wp-content/uploads/2020/12/Screen-Shot-2020-12-03-at-5.54.16-PM-150x150.png',
  address: '',
  contactEmail: 'remax@remax.com',
  contactPhone: '+1799984233',
};

export const mockPartnerAgencies: Company[] = times(20, (i) => ({
  id: i.toString(),
  title: `company-name-${i}`,
  createdAt: '2022-08-01T09:40:39.557Z',
  updatedAt: null,
  slug: `company-name-${i}`,
  logoUrl:
    i % 2 === 0
      ? 'https://traded.co/wp-content/uploads/2020/12/image-150x150.png'
      : 'https://traded.co/wp-content/uploads/2020/12/Screen-Shot-2020-12-03-at-5.54.16-PM-150x150.png',
}));

export const mockRecentActivity: IRecentActivity = {
  recentLeases: [
    {
      imageUrl: '/assets/transaction.jpg',
      dealDate: '2022-08-16T08:18:10.687Z',
      agents: [
        {
          id: '5000000d-556e-43ee-91f1-a7c17d8b508a',
          name: 'Dwight Schrute',
          thumbnail: '/assets/broker-profile-image.png',
        },
        {
          id: '0000000d-556e-43ee-91f1-a7c17d8b508a',
          name: 'Dustin Stolly',
          thumbnail: '/assets/broker-profile-image.png',
        },
      ],
      agencies: [mockedAgency, mockedAgency],
      address: '1530 Miramonte Avenue',
      state: 'CA',
      price: '$6.1M',
      ppsf: '$2585',
      sf: '2.4K',
      asset: 'Office',
      id: 'lease-1',
      type: 'Lease',
    },
    {
      imageUrl: '/assets/transaction.jpg',
      dealDate: '2022-08-15T08:18:10.687Z',
      agents: [],
      agencies: [],
      address: '10 Miramonte Avenue',
      state: 'CA',
      price: '$2.1M',
      ppsf: '$1585',
      sf: '1.4K',
      asset: 'Office',
      id: 'lease-2',
      type: 'Lease',
    },
    {
      imageUrl: '/assets/transaction.jpg',
      dealDate: '2022-08-16T08:18:10.687Z',
      agents: [],
      agencies: [],
      address: '1 Miramonte Avenue',
      state: 'CA',
      price: '$1.1M',
      ppsf: '$585',
      sf: '5K',
      asset: 'Office',
      id: 'lease-3',
      type: 'Lease',
    },
  ],
  recentLoans: [
    {
      imageUrl: '/assets/transaction.jpg',
      dealDate: '2022-08-16T05:18:10.687Z',
      agents: [],
      agencies: [],
      address: '2165 Nolensville Pk Nashville',
      state: 'TN',
      price: '$58.5M',
      ppsf: '',
      sf: '',
      asset: 'Multi Family',
      id: 'loan-1',
      type: 'Loan',
    },
    {
      imageUrl: '/assets/transaction.jpg',
      dealDate: '2022-08-16T05:18:10.687Z',
      agents: [],
      agencies: [],
      address: '314 Bel Air',
      state: 'CA',
      price: '$58.5M',
      ppsf: '',
      sf: '',
      asset: 'Multi Family',
      id: 'loan-2',
      type: 'Loan',
    },
    {
      imageUrl: '/assets/transaction.jpg',
      dealDate: '2022-08-16T05:18:10.687Z',
      agents: [],
      agencies: [],
      address: '314 Bel Air',
      state: 'CA',
      price: '$58.5M',
      ppsf: '',
      sf: '',
      asset: 'Multi Family',
      id: 'loan-3',
      type: 'Loan',
    },
  ],
  recentSales: [
    {
      imageUrl: '/assets/transaction.jpg',
      dealDate: '2022-08-16T08:18:10.687Z',
      agents: [],
      agencies: [
        {
          id: 1,
          name: 'mocked-company',
          logoUrl:
            'https://traded.co/wp-content/uploads/2020/12/image-150x150.png',
        },
      ],
      address: '1007 Blossom Hill Road',
      state: 'CA',
      price: '$10.6M',
      ppsf: '$936',
      sf: '11.3K',
      asset: 'Retail',
      id: 'sale-1',
      type: 'Sale',
    },
    {
      imageUrl: '/assets/transaction.jpg',
      dealDate: '2022-08-16T08:18:10.687Z',
      agents: [],
      agencies: [],
      address: '1007 Blossom Hill Road',
      state: 'CA',
      price: '$10.6M',
      ppsf: '$936',
      sf: '11.3K',
      asset: 'Retail',
      id: 'sale-2',
      type: 'Sale',
    },
    {
      imageUrl: '/assets/transaction.jpg',
      dealDate: '2022-08-16T08:18:10.687Z',
      agents: [],
      agencies: [],
      address: '1007 Blossom Hill Road',
      state: 'CA',
      price: '$10.6M',
      ppsf: '$936',
      sf: '11.3K',
      asset: 'Retail',
      id: 'sale-3',
      type: 'Sale',
    },
  ],
};

export const mockedStatsData = [
  {
    value: '$20.4B',
    label: 'VOLUME',
  },
  {
    value: '$16.8B',
    label: 'SOLD',
  },
  {
    value: '$3.5B',
    label: 'FINANCED',
  },
  {
    value: '72',
    label: 'CLOSED',
  },
  {
    value: '34M',
    label: 'SQUARE FEET',
  },
];
