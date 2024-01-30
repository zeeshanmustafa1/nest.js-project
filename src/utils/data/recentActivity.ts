import type {
  Broker,
  Company,
  Deal,
  RecentDeal,
} from '@/__generated__/types.d';

import { formatAmount } from '../helpers';
import { getUrlForPage } from '../urlMapper';

export const getDealRankings = (deals?: Deal[] | null) => {
  return deals?.map((deal) => ({
    imageUrl: deal?.mainImage,
    address: deal?.address,
    price: deal?.salePrice ? `$${formatAmount(deal?.salePrice)}` : '$',
    sf: deal?.totalSquareFootageDeal
      ? `${formatAmount(deal?.totalSquareFootageDeal)}`
      : '#',
    asset: deal?.assetType,
    dealDate: deal?.closingDate,
    agents: deal?.profiles,
    agencies: deal?.companies,

    state: deal?.properties && deal?.properties[0]?.state,

    ppsf: deal?.pricePerSquareFoot ? `$${deal?.pricePerSquareFoot}` : '$',

    id: deal?.id,
    url: getUrlForPage(
      'transaction',
      deal.slug,
      deal.feeds && deal?.feeds[0],
      deal.transactionType
    ),
  }));
};

export const getAgentRankings = (agents: Broker[]) => {
  return agents.map((agent, index) => ({
    id: `${agent?.id}-${agent?.name}-${index + 1}`,
    position: index + 1,
    imageUrl: agent?.thumbnail,
    name: agent?.name,
    closed: agent?.dealsCount,
    area: agent?.totalSquareFootage
      ? `${formatAmount(agent?.totalSquareFootage)}`
      : 'Not Available',
    volume: agent?.totalVolume
      ? `$${formatAmount(agent?.totalVolume)}`
      : 'Not Available',

    dealDate: agent?.lastDeal?.closingDate,
    url: getUrlForPage('agent', agent.slug),
    type: 'agentRanking',
  }));
};

export const getCompanyRankings = (
  companies?: Company[],
  companyType?: String
) => {
  return companies?.map((company, index) => ({
    id: `${company?.id}-${company?.title}-${index + 1}`,
    position: index + 1,
    imageUrl: company?.mainImage,
    name: company?.title,
    closed: `${formatAmount(company?.dealsCount?.toString() as string)}`,
    area: company?.totalSquareFootage
      ? `${formatAmount(company?.totalSquareFootage)}`
      : 'Not Available',
    volume: company?.totalVolume
      ? `$${formatAmount(company?.totalVolume)}`
      : 'Not Available',
    dealDate: company?.lastClosing,
    url: getUrlForPage(
      companyType === 'agency' ? 'agency' : 'lender',
      company?.slug
    ),
  }));
};

export const getRecentActivity = (recentDeal?: RecentDeal | null) => {
  return {
    recentLeases: recentDeal?.recentLeases?.map((lease) => ({
      imageUrl: lease?.mainImage,
      dealDate: lease?.closingDate,
      agents: lease?.profiles,
      agencies: lease?.companies,
      address: lease?.properties && lease?.properties[0]?.displayAddress,
      state: lease?.properties && lease?.properties[0]?.state,
      ppsf:
        // eslint-disable-next-line no-nested-ternary
        lease?.pricePerSquareFoot && lease?.properties?.[0]?.state !== 'Texas'
          ? `$${lease?.pricePerSquareFoot}`
          : lease?.properties?.[0]?.state === 'Texas'
          ? 'N/A'
          : '$',
      sf: lease?.totalSquareFootageDeal
        ? `${formatAmount(lease?.totalSquareFootageDeal)}`
        : '#',
      asset: lease?.assetType,
      id: lease?.id,
      url: getUrlForPage(
        'transaction',
        lease.slug,
        lease.feeds && lease?.feeds[0],
        lease.transactionType
      ),
    })),

    recentLoans: recentDeal?.recentLoans?.map((loan) => ({
      imageUrl: loan?.mainImage,
      dealDate: loan?.closingDate,
      agents: loan?.profiles,
      agencies: loan?.companies,
      address: loan?.properties && loan?.properties[0]?.displayAddress,
      state: loan?.properties && loan?.properties[0]?.state,
      price: loan?.salePrice ? `$${formatAmount(loan?.salePrice)}` : '$',
      ppsf: loan?.pricePerSquareFoot ? `$${loan?.pricePerSquareFoot}` : '$',
      sf: loan?.totalSquareFootageDeal
        ? `${formatAmount(loan?.totalSquareFootageDeal)}`
        : '#',
      asset: loan?.assetType,
      id: loan?.id,
      url: getUrlForPage(
        'transaction',
        loan.slug,
        loan.feeds && loan?.feeds[0],
        loan.transactionType
      ),
    })),

    recentSales: recentDeal?.recentSales?.map((sale) => ({
      imageUrl: sale?.mainImage,
      dealDate: sale?.closingDate,
      agents: sale?.profiles,
      agencies: sale?.companies,
      address: sale?.properties && sale?.properties[0]?.displayAddress,
      state: sale?.properties && sale?.properties[0]?.state,
      price: sale?.salePrice ? `$${formatAmount(sale?.salePrice)}` : '$',
      ppsf: sale?.pricePerSquareFoot ? `$${sale?.pricePerSquareFoot}` : '$',
      sf: sale?.totalSquareFootageDeal
        ? `${formatAmount(sale?.totalSquareFootageDeal)}`
        : '#',
      asset: sale?.assetType,
      id: sale?.id,
      url: getUrlForPage(
        'transaction',
        sale.slug,
        sale.feeds && sale?.feeds[0],
        sale.transactionType
      ),
    })),
  };
};
