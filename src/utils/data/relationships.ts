import type { Broker } from '@/__generated__/types.d';
import { routes } from '@/constants/routes';

export type RelationshipStat = {
  text: string;
  type: 'stat' | 'link';
  url?: string;
};

export const getRelationshipStats = (
  broker: Broker,
  isRelationWithAgency: boolean
): Array<RelationshipStat> => [
  {
    text: `The first deal done together was ${
      (isRelationWithAgency
        ? broker?.agencyFirstDealTogether
        : broker?.firstDealTogether) ?? '0 days'
    } ago.`,
    type: 'stat',
  },
  {
    text: `Since then they have done ${
      (isRelationWithAgency
        ? broker?.agencyNumberOfDealsTogether
        : broker.numberOfDealsTogether) ?? 0
    } deals together.`,
    type: 'stat',
  },
  {
    text: `The largest deal they have ever done together was a sale for $${
      (isRelationWithAgency
        ? Number(broker?.agencyLargestDealSaleTogether).toLocaleString('en-US')
        : Number(broker?.largestDealSaleTogether).toLocaleString('en-US')) ?? 0
    }.`,
    type: 'stat',
  },
  {
    text: `The last deal they have done together was ${
      (isRelationWithAgency
        ? broker?.agencyLastDealTogether
        : broker?.lastDealTogether) ?? '0 days'
    } ago.`,
    type: 'stat',
  },
  {
    text: `View ${broker?.name} Profile`,
    type: 'link',
    url: routes.agents.getAgentHref(broker?.slug as string),
  },
];
