import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import { Providers } from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "책 문장 일기",
  description: "책 속 문장으로 나의 하루를 기록하는 웹 애플리케이션",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps): React.ReactElement => {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-dvh bg-muted text-foreground antialiased">
        <Providers>
          <div className="min-h-dvh w-full bg-background px-5 md:mx-auto md:max-w-93.75">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
