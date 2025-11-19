export const metadata = {
  title: "An Chat",
  description: "A simple interface for chatting with An backend",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          background: "#f7f7f7",
        }}
      >
        {children}
      </body>
    </html>
  );
}
