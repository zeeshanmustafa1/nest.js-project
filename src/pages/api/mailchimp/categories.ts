import type { NextApiRequest, NextApiResponse } from 'next';

export default async function getInterestCategories(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const API_SERVER = process.env.MAILCHIMP_API_SERVER;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const CATEGORIES_ID = process.env.MAILCHIMP_CATEGORIES_ID;

  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/interest-categories/${CATEGORIES_ID}/interests`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `api_key ${API_KEY}`,
      },
    });
    if (!response.ok) {
      return res.status(400).json({
        error: `There was an error fetching the categories.`,
      });
    }
    const data = await response.json();
    return res
      .status(200)
      .json({ message: 'success', interests: data?.interests ?? [] });
  } catch {
    return res.status(500).json({ message: 'internal server error' });
  }
}
