import type { Broker, Company, Deal } from '@/__generated__/types.d';

export interface SearchResponse {
  brokers: Broker[];
  agencies: Company[];
  lenders: Company[];
  deals: Deal[];
}
export type SearchSuggestion = Broker & Company & Deal;

export interface IListItem {
  title: string;
  value: string;
}

export interface Agency {
  Agents: string;
  Sold: string;
  Financed: string;
  Closed: string;
  'Last Closing': string;
}

export interface Lender {
  Closed: string;
  Financed: string;
  Relationships: string;
  Squarefeet: string;
}

export interface Agent {
  Company: string;
  Closed: string;
  Sold: string;
  Financed: string;
  'Last Closing': string;
}

export interface Transaction {
  SquareFootage: string;
  AssetType: string;
  Address: string;
  lastClosing: string;
}

export interface IConfiguration {
  agency: Agency;
  lender: Lender;
  agent: Agent;
  transaction: Transaction;
}

export interface SearchCardProps {
  card: SearchSuggestion;
  row: Boolean;
}
