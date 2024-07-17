import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = process.env.PAYLOAD_API_SLUG;
  const apiKey = process.env.PAYLOAD_API_KEY;
  const path = req.query.path as string;
  const url = `${process.env.PAYLOAD_APP_URL}${path}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `${slug} API-Key ${apiKey}`,
    },
  });

  if (!response.ok) {
    res.status(response.status).json({ error: 'Failed to fetch image' });
    return;
  }

  const data = await response.arrayBuffer();
  const headers = new Headers({
    'content-disposition': `attachment; filename="${path.split('/').pop()}"`,
    'content-type':
      response.headers.get('content-type') || 'application/octet-stream',
    'content-length': response.headers.get('content-length') || '',
  });

  res.status(200);
  headers.forEach((value, key) => {
    res.setHeader(key, value);
  });
  res.send(Buffer.from(data));
}
