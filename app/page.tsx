"use client"; // 标记为客户端代码

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    const sendData = async () => {
      await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({
          messages: chatMessages
        })
      });
    };

    sendData();
  }, []);

  return (
    <div>
      <button onClick={() => sendData()}>发送</button>
    </div>
  );
}
