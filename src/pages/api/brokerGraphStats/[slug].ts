import type { NextApiRequest, NextApiResponse } from 'next';

import { initializeApollo } from '@/modules/core/use-apollo';

import type { BrokerStatisticsGraphQuery } from '../../../__generated__/types.d';
import { BrokerStatisticsGraphDocument } from '../../../__generated__/types.d';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = initializeApollo();

  const {
    query: { slug },
  } = req;
  const { data } = await client.query<BrokerStatisticsGraphQuery>({
    query: BrokerStatisticsGraphDocument,
    variables: {
      slug,
    },
  });

  res.status(200).json({ data });
}
