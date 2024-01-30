import type { NextApiRequest, NextApiResponse } from 'next';

import { initializeApollo } from '@/modules/core/use-apollo';

import type { CompanyStatisticsGraphQuery } from '../../../__generated__/types.d';
import { CompanyStatisticsGraphDocument } from '../../../__generated__/types.d';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = initializeApollo();

  const {
    query: { slug },
  } = req;
  const { companyType } = JSON.parse(req.body);
  const { data } = await client.query<CompanyStatisticsGraphQuery>({
    query: CompanyStatisticsGraphDocument,
    variables: {
      slug,
      companyType,
    },
  });

  res.status(200).json({ data });
}
