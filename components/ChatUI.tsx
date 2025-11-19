import { useState } from "react";

export default function ChatUI() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    setMessages([...messages, "🧑: " + input]);

    // 调用你的 API（未来我们会连接到后端/AI）
    const reply = "🤖：这是 AN 的测试回复：" + input;

    setMessages((prev) => [...prev, reply]);
    setInput("");
  };

  return (
    <div style={{ width: "100%", maxWidth: "600px" }}>
      <div
        style={{
          border: "1px solid #ddd",
          padding: "10px",
          borderRadius: "8px",
          height: "300px",
          overflowY: "auto",
          marginBottom: "10px"
        }}
      >
        {messages.map((msg, idx) => (
          <div key={idx} style={{ margin: "5px 0" }}>
            {msg}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          style={{ flex: 1, padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Say something…"
        />
        <button
          onClick={sendMessage}
          style={{
            padding: "8px 14px",
            borderRadius: "6px",
            background: "#0070f3",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
