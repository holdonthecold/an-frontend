"use client";

import { useState } from "react";

export default function Page() {
  const [messages, setMessages] = useState([]);

  const sendData = async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: messages,
      }),
    });

    const data = await res.json();
    console.log("后端返回：", data);
  };

  return (
    <div>
      <button onClick={sendData}>发送</button>
    </div>
  );
}
