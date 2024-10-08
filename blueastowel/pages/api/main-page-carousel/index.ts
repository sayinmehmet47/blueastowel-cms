import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = process.env.PAYLOAD_API_SLUG;
  const apiKey = process.env.PAYLOAD_API_KEY;
  const url = `${process.env.PAYLOAD_APP_URL}/api/cms/main-page-carousel`;

  const response = await fetch(url, {
    headers: {
      Authorization: `${slug} API-Key ${apiKey}`,
    },
  });
  const data = await response.json();
  const images = data.docs.map(
    (doc: any) => `/api/fetch-image?path=${doc.image.url}`
  );
  res.status(200).json(images);
}
