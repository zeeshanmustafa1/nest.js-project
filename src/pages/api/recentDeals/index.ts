import type { NextApiRequest, NextApiResponse } from 'next';

import { initializeApollo } from '@/modules/core/use-apollo';

import { RecentDealGetDocument } from '../../../__generated__/types.d';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = initializeApollo();

  const body = JSON.parse(req.body);
  const { limit, state } = body;
  const { data } = await client.query({
    query: RecentDealGetDocument,
    variables: {
      limit,
      state,
    },
  });

  res.status(200).json({ data });
}
