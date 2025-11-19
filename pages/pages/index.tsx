import ChatUI from "../components/ChatUI";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
        fontFamily: "sans-serif"
      }}
    >
      <h1>Welcome to AN</h1>
      <ChatUI />
    </main>
  );
}
