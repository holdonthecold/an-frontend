"use client";  // 标记为客户端代码

import { useEffect } from 'react';

export default function Page() {
  // 使用 useEffect 异步触发 fetch 请求
  useEffect(() => {
    const sendData = async () => {
      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          body: JSON.stringify({
            messages: chatMessages
          })
        });
        // 你可以在这里处理响应数据
      } catch (error) {
        console.error("请求失败", error);
      }
    };

    sendData();  // 在 useEffect 内部调用异步请求
  }, []);  // 只会在组件挂载时执行一次

  return (
    <div>
      <button onClick={() => sendData()}>发送</button>
    </div>
  );
}
