import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Power Plan Support",
  description: "Power Plan Support - Next.js with TypeScript and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
