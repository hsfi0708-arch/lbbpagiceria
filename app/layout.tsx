import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Marching Competition",
  description: "Landing page for marching competition with nationalism theme",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
