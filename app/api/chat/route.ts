export async function POST(req: Request) {
  const messages = await req.json();  // 这里仍然允许使用 await，因为它在 async 函数里

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
