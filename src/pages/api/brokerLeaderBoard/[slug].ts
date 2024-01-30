import type { NextApiRequest, NextApiResponse } from 'next';

import { initializeApollo } from '@/modules/core/use-apollo';

import { BrokerLeaderBoardDocument } from '../../../__generated__/types.d';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = initializeApollo();

  const {
    query: { slug },
  } = req;
  const { data } = await client.query({
    query: BrokerLeaderBoardDocument,
    variables: {
      slug,
    },
  });

  res.status(200).json({ data });
}
