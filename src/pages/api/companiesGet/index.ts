import type { NextApiRequest, NextApiResponse } from 'next';

import { initializeApollo } from '@/modules/core/use-apollo';

import { CompaniesDocument } from '../../../__generated__/types.d';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = initializeApollo();

  const body = JSON.parse(req.body);
  const {
    companyType,
    page,
    limit,
    sortBy,
    area,
    type,
    priceRange,
    agentsSortBy,
    agentsLimit,
    agentsPage,
    loanAmount,
  } = body;
  const { data } = await client.query({
    query: CompaniesDocument,
    variables: {
      companyType,
      limit,
      page,
      sortBy,
      area,
      type,
      priceRange,
      agentsLimit,
      agentsPage,
      agentsSortBy,
      loanAmount,
    },
  });

  res.status(200).json({ data });
}
