import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { message } = req.body;

    const response = await fetch('http://198.13.43.2:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3',
        prompt: message
      })
    });

    const data = await response.json();
    res.status(200).json({ reply: data.response });
  } catch (error) {
    res.status(500).json({ error: 'Request failed' });
  }
}
export default async function handler(req, res) {
  try {
    const { message } = req.body;

    const response = await fetch('http://198.13.43.2:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3',
        prompt: message
      })
    });

    const data = await response.json();
    res.status(200).json({ reply: data.response });
  } catch (error) {
    res.status(500).json({ error: 'Request failed' });
  }
}
