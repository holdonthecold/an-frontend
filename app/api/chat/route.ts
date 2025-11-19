export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "llama3",
      messages
    })
  });

  const data = await response.json();
  return Response.json(data);
}
