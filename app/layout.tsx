import type { Metadata } from "next";
import "./globals.css";

import "@fontsource/titan-one";


import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";

import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";

export const metadata: Metadata = {
  title: "Srashti Chauhan | Full Stack Developer",
  description:
    "Apple × Pinterest inspired interactive developer portfolio.",
  icons: {
    icon: "/assets/branding/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}