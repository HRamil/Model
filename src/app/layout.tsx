import Header from "@/components/header";
import type { Metadata } from "next";

//style
import '@/style/globals.scss'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}</body>
    </html>
  );
}
