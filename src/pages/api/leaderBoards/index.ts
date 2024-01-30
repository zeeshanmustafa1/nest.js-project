import type { NextApiRequest, NextApiResponse } from 'next';

import { initializeApollo } from '@/modules/core/use-apollo';

import { LeaderBoardGetDocument } from '../../../__generated__/types.d';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = initializeApollo();

  const { state } = JSON.parse(req.body);
  const { data } = await client.query({
    query: LeaderBoardGetDocument,
    variables: {
      state,
    },
  });

  res.status(200).json({ data });
}
