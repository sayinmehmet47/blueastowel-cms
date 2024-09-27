// pages/api/partners.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = process.env.PAYLOAD_API_SLUG;
  const apiKey = process.env.PAYLOAD_API_KEY;
  const url = `${process.env.PAYLOAD_APP_URL}/api/cms/partners`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `${slug} API-Key ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching partners: ${response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch partners' });
  }
}
