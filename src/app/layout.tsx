import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Web Interface Playgoround | Fauzi Al Aziz",
    template: "%s | Fauzi Al Aziz",
  },
  description: "A playground for UI exploration by Fauzi Al Aziz",
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
