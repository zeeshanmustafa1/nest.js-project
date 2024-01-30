import type { NextApiRequest, NextApiResponse } from 'next';

import type { GetBlogQuery } from '@/__generated__/types.d';
import { GetBlogsDocument } from '@/__generated__/types.d';
import { initializeApollo } from '@/modules/core/use-apollo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = initializeApollo();

  const {
    query: { searchTerm },
  } = req;
  const { data } = await client.query<GetBlogQuery>({
    query: GetBlogsDocument,
    variables: {
      page: 1,
      limit: 5,
      q: JSON.stringify({ title_cont: searchTerm }),
    },
  });

  res.status(200).json({ data });
}
