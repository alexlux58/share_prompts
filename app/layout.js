import "./globals.css";

export const metadata = {
  title: "Share Prompts",
  description: "Chat GPT prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
