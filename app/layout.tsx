import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grit Training Co. - Hard Work. Community. Health.",
  description: "Transform your body and mind at Grit Training Co. Join a community dedicated to hard work, health, and excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}

