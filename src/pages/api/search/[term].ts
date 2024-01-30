import type { NextApiRequest, NextApiResponse } from 'next';

import { initializeApollo } from '@/modules/core/use-apollo';

import type { SearchGetQuery } from '../../../__generated__/types.d';
import { SearchGetDocument } from '../../../__generated__/types.d';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = initializeApollo();

  const {
    query: { term },
  } = req;
  const { data } = await client.query<SearchGetQuery>({
    query: SearchGetDocument,
    variables: {
      term,
    },
  });

  res.status(200).json({ data });
}
