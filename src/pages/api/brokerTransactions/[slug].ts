import type { NextApiRequest, NextApiResponse } from 'next';

import { initializeApollo } from '@/modules/core/use-apollo';

import { BrokerTransactionsDocument } from '../../../__generated__/types.d';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = initializeApollo();

  const {
    query: { slug },
  } = req;
  const body = JSON.parse(req.body);
  const { limit, page, sortBy, type, area, assetClass } = body;
  const { data } = await client.query({
    query: BrokerTransactionsDocument,
    variables: {
      slug,
      limit,
      page,
      sortBy,
      type,
      area,
      assetClass,
    },
  });

  res.status(200).json({ data });
}
