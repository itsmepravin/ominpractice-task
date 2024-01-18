import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Wrapper from "./_components/Wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OmniPractice Task",
  description: "Task for OmniPractice.co",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
