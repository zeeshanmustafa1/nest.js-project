export type Tabs =
  | 'Most Agents'
  | 'Most Financed'
  | 'Most Sold'
  | 'Most Leased Closed'
  | 'Largest Volume'
  | 'Most Deals Closed'
  | 'Most Square Feet'
  | 'Most Relationships';

export type AgencyTabs = Exclude<
  Tabs,
  | 'Largest Volume'
  | 'Most Deals Closed'
  | 'Most Square Feet'
  | 'Most Relationships'
>;

export type LenderTabs = Exclude<
  Tabs,
  'Most Agents' | 'Most Financed' | 'Most Sold' | 'Most Leased Closed'
>;
