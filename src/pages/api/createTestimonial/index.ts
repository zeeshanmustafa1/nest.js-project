import type { NextApiRequest, NextApiResponse } from 'next';

import { initializeApollo } from '@/modules/core/use-apollo';

import { CreateTestimonialDocument } from '../../../__generated__/types.d';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = initializeApollo();

  const body = JSON.parse(req.body);
  const { firstName, lastName, email, state, content, titleAndCompany } = body;
  const { data } = await client.mutate({
    mutation: CreateTestimonialDocument,
    variables: {
      firstName,
      lastName,
      email,
      state,
      content,
      titleAndCompany,
    },
  });

  res.status(200).json({ data });
}
