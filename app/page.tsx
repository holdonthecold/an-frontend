await fetch("/api/chat", {
  method: "POST",
  body: JSON.stringify({
    messages: chatMessages
  })
});
