export const routes = {
  agents: {
    path: '/agent/[slug]',
    getAgentHref: (agentSlug: string) => `/agent/${agentSlug}`,
  },
  agencies: {
    path: '/agency/[slug]',
    getAgencyHref: (agencySlug: string) => `/agency/${agencySlug}`,
  },
  lenders: {
    path: '/lender/[slug]',
    getLenderHref: (lenderSlug: string) => `/lender/${lenderSlug}`,
  },
  transactions: {
    path: 'property/[feed]/[transactionType]/[slug]',
    getTransactionHref: (
      feed: string,
      transactionType: string,
      transactionSlug: string
    ) => `/property/${feed}/${transactionType}/${transactionSlug}`,
  },
} as const;
