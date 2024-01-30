import type { NextApiRequest, NextApiResponse } from 'next';

import { initializeApollo } from '@/modules/core/use-apollo';

import { DealComparablesDocument } from '../../../__generated__/types.d';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = initializeApollo();

  const {
    query: { slug },
  } = req;
  const body = JSON.parse(req.body);
  const { limit, page } = body;
  const { data } = await client.query({
    query: DealComparablesDocument,
    variables: {
      slug,
      limit,
      page,
    },
  });

  res.status(200).json({ data });
}
