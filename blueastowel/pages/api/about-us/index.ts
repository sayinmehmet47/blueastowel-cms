import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = process.env.PAYLOAD_API_SLUG;
  const apiKey = process.env.PAYLOAD_API_KEY;
  const url = `${process.env.PAYLOAD_APP_URL}/api/cms/about-us`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `${slug} API-Key ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('API call error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
