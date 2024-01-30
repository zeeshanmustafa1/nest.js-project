import type { NextApiRequest, NextApiResponse } from 'next';

import { initializeApollo } from '@/modules/core/use-apollo';

import { CompanyTransactionsDocument } from '../../../__generated__/types.d';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = initializeApollo();

  const {
    query: { slug },
  } = req;
  const body = JSON.parse(req.body);
  const { limit, page, sortBy, companyType, type, area, assetClass } = body;
  const { data } = await client.query({
    query: CompanyTransactionsDocument,
    variables: {
      slug,
      limit,
      page,
      sortBy,
      companyType,
      type,
      area,
      assetClass,
    },
  });

  res.status(200).json({ data });
}
