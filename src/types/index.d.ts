/// <reference path="@/__generated__/types.d" />

type CoveredLocation = {
  id: number;
  type: string;
  state: string;
  url: string;
};

type LocationsCoveredByTraded = Required<CoveredLocation>[];

interface IRecentActivity {
  recentLoans: Transaction<'Loan'>[];
  recentSales: Transaction<'Sale'>[];
  recentLeases: Transaction<'Lease'>[];
}

interface IBrokerRow {
  title: 'Hot' | 'Unicorns' | 'Rising Star' | 'Founder';
  description: string;
  brokers: Maybe<Broker[]>;
}

interface ILeaderBoardSlide {
  title?:
    | 'The Hot List'
    | 'Rising Talent'
    | 'The Unicorns'
    | 'Deal Junkies'
    | 'Whales'
    | 'The Loan Sharks'
    | 'Lease Beasts';
  subtitle?: string;
  icon?: string | StaticImport;
  brokers?: Maybe<Broker[]>;
}
