import type { Broker, Company, Deal, Graph } from '@/__generated__/types.d';

export type ProfileSections =
  | 'Transactions'
  | 'Relationships'
  | 'Activity'
  | 'Deal Rankings'
  | 'Leaderboards'
  | 'Stats'
  | 'Contact'
  | 'Agents'
  | 'Agent Rankings'
  | 'About'
  | 'Map & Info'
  | 'Social'
  | 'Comparables'
  | 'Bio';

export interface ProfileSectionProps
  extends Partial<BrokerProfileSectionProps>,
    Partial<AgencyProfileSectionProps>,
    Partial<DealProfileSectionProps> {
  broker?: Broker;
  agency?: Company;
  deal?: Deal;
  slug?: string | null;
  agencyType?: string | null;
  dealsCount?: number;
  instagram?: string;
  facebook?: string;
  twitter?: string;
}

export interface BrokerProfileSectionProps {
  broker: Broker;
}

export interface AgencyProfileSectionProps {
  agency: Company;
}

export interface DealProfileSectionProps {
  deal: Deal;
}

export type BrokerProfileSections = Exclude<
  ProfileSections,
  'Agents' | 'Agent Rankings'
>;
export type AgencyProfileSections = Exclude<
  ProfileSections,
  'Relationships' | 'Leaderboards' | 'Contact'
>;

export type DealProfileSections = Exclude<
  ProfileSections,
  | 'Transactions'
  | 'Relationships'
  | 'Activity'
  | 'Deal Rankings'
  | 'Leaderboards'
  | 'Statistics'
  | 'Agents'
  | 'Agent Rankings'
>;

export interface StatisticsSectionProps {
  agencyChartData?: Graph;
  deals?: Deal[];
  toolTip?: boolean;
  type: 'agency' | 'agent';
}
