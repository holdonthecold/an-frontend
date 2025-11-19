export default function Page() {
  async function sendMessage() {
    await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({
        messages: chatMessages
      })
    });
  }

  return (
    <div>
      <button onClick={sendMessage}>发送</button>
    </div>
  );
}
