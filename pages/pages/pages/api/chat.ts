export default async function handler(req, res) {
  const { message } = req.body;

  // 这里代理到你的后端（例如 Ollama 或 Vercel Edge Function）
  const backend = process.env.AN_BACKEND_URL;

  const response = await fetch(backend, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const data = await response.json();

  res.status(200).json(data);
}
