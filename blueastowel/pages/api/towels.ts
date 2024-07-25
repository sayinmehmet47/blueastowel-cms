import { TowelsResponse } from '@/types/towel';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TowelsResponse>
) {
  const slug = process.env.PAYLOAD_API_SLUG;
  const apiKey = process.env.PAYLOAD_API_KEY;
  const url = `${process.env.PAYLOAD_APP_URL}/api/cms/towels`;

  const response = await fetch(url, {
    headers: {
      Authorization: `${slug} API-Key ${apiKey}`,
    },
  });
  const data: TowelsResponse = await response.json();

  res.status(200).json(data);
}
