import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

import { SendEmailMutationDocument } from '@/__generated__/types.d';
import { initializeApollo } from '@/modules/core/use-apollo';

interface RecaptchaResponse {
  success: boolean;
  'error-codes'?: string[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = initializeApollo();

  const input = req.body;
  const { token } = input;

  // Validate reCAPTCHA token
  const recaptchaResponse = await fetch(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    }
  );

  const recaptchaData = (await recaptchaResponse.json()) as RecaptchaResponse;

  if (!recaptchaData.success) {
    // reCAPTCHA verification failed. Do whatever you want here.
    res.status(400).json({ error: 'reCAPTCHA verification failed' });
    return;
  }

  // Now you can perform your mutation operation and handle its response separately
  delete input.token; // mutation doesnt accept token as input
  const apolloResponse = await client.mutate({
    mutation: SendEmailMutationDocument,
    variables: {
      input,
    },
  });

  // Do whatever you want with apolloResponse. I'm assuming it has a `data` field
  if (apolloResponse.data) {
    res.status(200).json({ data: apolloResponse.data });
  } else {
    res.status(400).json({ error: 'Failed to send' });
  }
}
