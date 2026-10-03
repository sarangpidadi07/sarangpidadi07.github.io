import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sarangpidadi07.github.io"),
  title: {
    default: "Sarang Pidadi — Full-Stack Software Engineer",
    template: "%s — Sarang Pidadi",
  },
  description:
    "Full-stack software engineer building scalable web applications, SaaS platforms, and business software with TypeScript, React, Next.js, Node.js, PostgreSQL, and Supabase.",
  authors: [{ name: "Sarang Pidadi" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Sarang Pidadi — Full-Stack Software Engineer",
    description:
      "Full-stack software engineer focused on scalable SaaS products, enterprise applications, and business software.",
    url: "https://sarangpidadi07.github.io",
    siteName: "Sarang Pidadi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
