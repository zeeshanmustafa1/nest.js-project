import type { NextApiRequest, NextApiResponse } from 'next';

export default async function subscribe(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, selectedIds } = JSON.parse(req.body);

  const interests: Record<string, boolean> = {};

  selectedIds.forEach((id: string) => {
    interests[id] = true;
  });

  if (!email || !email.length) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const API_SERVER = process.env.MAILCHIMP_API_SERVER;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  try {
    const response = await fetch(url, {
      method: 'post',
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        interests,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `api_key ${API_KEY}`,
      },
    });
    if (!response.ok) {
      const error = await response.json();
      if (error.title === 'Member Exists') {
        return res.status(error?.status).json({
          message: 'Already Subscribed!',
        });
      }
      return res.status(error?.status).json({
        message: 'Error while subscribing to Newletter',
      });
    }
    return res.status(201).json({ message: 'success' });
  } catch (error) {
    return res.status(500).json({ message: 'internal server error' });
  }
}
