import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = process.env.PAYLOAD_API_SLUG;
  const apiKey = process.env.PAYLOAD_API_KEY;
  const url = `${process.env.PAYLOAD_APP_URL}/api/main-page`;

  // check if the environment variables are set
  if (!slug || !apiKey || !url) {
    return res.status(500).json({ error: 'Environment variables are not set' });
  }

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `${slug} API-Key ${apiKey}`,
      },
    });

    // Check if the fetch was successful
    if (!response.ok) {
      // Respond with the status code from the failed fetch
      return res
        .status(response.status)
        .json({ error: 'Failed to fetch data' });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    // Log the error for server-side debugging
    console.error(error);

    // Respond with a 500 Internal Server Error status code and error message
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
