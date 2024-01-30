import type { AgentsSortOption } from '@/modules/profile/components/TopAgents/types';
import type { SortOption } from '@/modules/profile/components/Transactions/types';

export const coveredLocations: LocationsCoveredByTraded = [
  {
    id: 1,
    type: 'national',
    state: 'National',
    url: '/assets/Icon/Map/National.svg',
  },
  {
    id: 2,
    type: 'new-york',
    state: 'New York',
    url: '/assets/Icon/Map/New_York.svg',
  },
  { id: 3, type: 'miami', state: 'Miami', url: '/assets/Icon/Map/Miami.svg' },
  {
    id: 4,
    type: 'los-angeles',
    state: 'Los Angeles',
    url: '/assets/Icon/Map/Los_Angeles.svg',
  },
  {
    id: 5,
    type: 'new-jersey',
    state: 'New Jersey',
    url: '/assets/Icon/Map/New_Jersey.svg',
  },
  {
    id: 6,
    type: 'boston',
    state: 'Boston',
    url: '/assets/Icon/Map/Boston.svg',
  },
  {
    id: 7,
    type: 'chicago',
    state: 'Chicago',
    url: '/assets/Icon/Map/Chicago.svg',
  },
];

export const assetClassTypes = [
  { type: 'all', label: 'All' },
  { type: 'retail', label: 'Retail' },
  { type: 'development-site', label: 'Development Site' },
  { type: 'office', label: 'Office' },
  { type: 'multifamily', label: 'MultiFamily' },
  { type: 'mixed-use', label: 'Mixed-use' },
  { type: 'industrial', label: 'Industrial' },
  { type: 'hotel', label: 'Hotel' },
  { type: 'self-storage', label: 'Self Storage' },
];

export const transactionTypes = [
  { type: 'all', label: 'Select Type' },
  { type: 'Lease', label: 'Lease' },
  { type: 'Loan', label: 'Loan' },
  { type: 'Sale', label: 'Sale' },
];

export const sortByOptions: Array<{ type: SortOption; label: string }> = [
  { type: 'most-recent', label: 'Most Recent' },
  { type: 'Date-Old to New', label: 'Date: Old to New' },
  { type: 'Date-New to Old', label: 'Date: New to Old' },
  { type: 'Price-High to Low', label: 'Price: High to Low' },
  { type: 'Price-Low to High', label: 'Price: Low to High' },
];

export const agentsSortyByOptions: Array<{
  type: AgentsSortOption;
  label: string;
}> = [
  { type: 'by-volume', label: 'By Volume' },
  { type: 'by-sales', label: 'By Number of Sales' },
  { type: 'by-loans', label: 'By Number of Loans' },
  { type: 'by-leases', label: 'By Number of Leases' },
];

export const WEBSITE_URL = process.env.NEXT_SITE_URL || 'https://traded.co';
