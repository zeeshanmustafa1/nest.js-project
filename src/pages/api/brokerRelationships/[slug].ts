import type { NextApiRequest, NextApiResponse } from 'next';

import { initializeApollo } from '@/modules/core/use-apollo';

import { BrokerRelationshipsDocument } from '../../../__generated__/types.d';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = initializeApollo();

  const {
    query: { slug },
  } = req;
  const { page } = JSON.parse(req.body);
  const { data } = await client.query({
    query: BrokerRelationshipsDocument,
    variables: {
      slug,
      limit: 10,
      page,
    },
  });

  res.status(200).json({ data });
}
