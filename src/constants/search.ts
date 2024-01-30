import type { SearchResponse } from '@/modules/common/components/SearchInput/types';

export const response: SearchResponse = {
  brokers: [
    {
      id: '122',
      name: 'Test broker name',
      createdAt: '2022-08-01T09:40:39.557Z',
      updatedAt: '',
      joiningDate: '',
      email: 'test-broker-name@dev.dummy.com',
    },
  ],
  agencies: [
    {
      id: '123',
      title: 'Agency',
      createdAt: '2022-08-01T09:40:39.557Z',
      updatedAt: '',
    },
  ],
  lenders: [
    {
      id: 'lender-123',
      title: 'Lender',
      createdAt: '2022-08-01T09:40:39.557Z',
      updatedAt: '',
    },
  ],
  deals: [
    {
      id: '124',
      title: 'Property name',
      address: 'Miami Beach',
      valuation: '$5M',
      createdAt: '2022-08-01T09:40:39.557Z',
    },
  ],
};
