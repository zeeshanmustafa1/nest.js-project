import type { UserRoles } from '@/modules/profile/components/Contact/types';
import type {
  AgencyProfileSections,
  BrokerProfileSections,
  DealProfileSections,
  ProfileSections,
} from '@/modules/profile/types';

export const agentProfileSections: Array<BrokerProfileSections> = [
  'Transactions',
  'Relationships',
  'Activity',
  'Deal Rankings',
  'Stats',
  'Bio',
  'Contact',
];

export const agentProfileSectionsNoRelationships: Array<BrokerProfileSections> =
  ['Transactions', 'Activity', 'Deal Rankings', 'Stats', 'Bio', 'Contact'];

export const agencyProfileSections: Array<AgencyProfileSections> = [
  'Transactions',
  'Activity',
  'Agents',
  'Agent Rankings',
  'Deal Rankings',
  'About',
  'Stats',
];

export const dealProfileSections: Array<DealProfileSections> = [
  'Map & Info',
  'Comparables',
  'Social',
  'Contact',
];

export const dealProfileSectionsNoSocial: Array<DealProfileSections> = [
  'Map & Info',
  'Comparables',
  'Contact',
];

export const profileSectionByIcon: Record<ProfileSections, string> = {
  Transactions: '/assets/Icon/Colored/Coins.svg',
  Relationships: '/assets/Icon/Colored/ThumbsUp.svg',
  Contact: '/assets/Icon/Colored/Contact.svg',
  Activity: '/assets/Icon/Colored/CoffeeMug.svg',
  Agents: '/assets/Icon/Colored/SmartphoneOnHand.svg',
  'Agent Rankings': '/assets/Icon/Colored/Medal.svg',
  'Deal Rankings': '/assets/Icon/Colored/TrendUp.svg',
  About: '/assets/Icon/Colored/SearchWithDollarSign.svg',
  Stats: '/assets/Icon/Colored/DiamondTrendUp.svg',
  Leaderboards: '/assets/Icon/Colored/Medal.svg',
  Bio: '/assets/Icon/Colored/SearchWithDollarSign.svg',
  // TODO: Update Icons
  'Map & Info': '',
  Comparables: '/assets/Icon/Colored/Medal.svg',
  Social: '/assets/Icon/Colored/SmartphoneOnHand.svg',
};

export const defaultMessageValue =
  'Hi Adam Spies, I saw your profile on Traded and wanted to see if i can get some help';

export const userRoleSelectValues: Array<{ label: string; type: UserRoles }> = [
  { label: "I'm an investor", type: 'investor' },
  { label: "I'm a tenant", type: 'tenant' },
  { label: "I'm an agent", type: 'agent' },
  { label: 'Other', type: 'other' },
];

export const socialMedias = [
  'linkedinUrl',
  'facebookUrl',
  'websiteUrl',
  'youtubeUrl',
  'twitterUrl',
];

export const mockedLeaderboardsHighlights = [
  {
    id: '1',
    position: '8',
    location: 'National',
    leaderboard: 'Hotlist',
    icon: '/assets/Icon/Colored/Fire.svg',
  },
  {
    id: '3',
    position: '6',
    location: 'National',
    leaderboard: 'The Loan Sharks',
    icon: '/assets/Icon/Colored/Unicorn.svg',
  },
  {
    id: '4',
    position: '3',
    location: 'National',
    leaderboard: 'Deal Junkies',
    icon: '/assets/Icon/Colored/Fire.svg',
  },
  {
    id: '5',
    position: '8',
    location: 'National',
    leaderboard: 'Unicorns',
    icon: '/assets/Icon/Colored/Unicorn.svg',
  },
];

export const socialMediaLinks = {
  facebook: 'https://twitter.com/tradedny',
  twitter: 'https://www.facebook.com/Tradedny/',
  instagram: 'https://www.instagram.com/tradedny',
};
