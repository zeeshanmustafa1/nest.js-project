import type { NextApiRequest, NextApiResponse } from 'next';

import { initializeApollo } from '@/modules/core/use-apollo';

import { DealsDocument } from '../../../__generated__/types.d';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = initializeApollo();

  const body = JSON.parse(req.body);
  const {
    page,
    limit,
    assetClass,
    area,
    type,
    priceRange,
    dateRange,
    search,
    sortBy,
    state,
  } = body;
  const { data } = await client.query({
    query: DealsDocument,
    variables: {
      limit,
      page,
      sortBy,
      assetClass,
      area,
      type,
      priceRange,
      dateRange,
      search,
      state,
    },
  });

  res.status(200).json({ data });
}
