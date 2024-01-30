import type { Maybe } from '@/__generated__/types.d';
import { routes } from '@/constants/routes';

export const getUrlForPage = (
  urlType:
    | 'agent'
    | 'broker'
    | 'agency'
    | 'comapny'
    | 'lender'
    | 'transaction'
    | 'deal',
  slug: Maybe<string> | undefined,
  feed: Maybe<string> | undefined = '',
  transactionType: Maybe<string> | undefined = ''
) => {
  const lowerCasedUrlType = urlType?.toLowerCase();
  const propertyStatus = {
    Sale: 'sold',
    Loan: 'loan',
    Lease: 'leased',
  };
  if (slug) {
    switch (lowerCasedUrlType) {
      case 'agent' || 'broker':
        return slug ? routes.agents.getAgentHref(slug) : '/agents';
      case 'agency' || 'company':
        return slug ? routes.agencies.getAgencyHref(slug) : '/agencies';
      case 'lender':
        return slug ? routes.lenders.getLenderHref(slug) : '/lenders';
      case 'transaction' || 'deal':
        return slug
          ? routes.transactions.getTransactionHref(
              feed ? feed?.toLowerCase().replaceAll(' ', '-') : 'feed',
              transactionType
                ? (
                    propertyStatus[
                      transactionType as keyof typeof propertyStatus
                    ] || 'deal'
                  ).toLowerCase()
                : 'deal',
              slug
            )
          : '/';
      default:
        return '/';
    }
  } else return '/';
};
