import type { Metadata } from "next";
import { Nanum_Myeongjo } from "next/font/google";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import { Providers } from "./providers";
import "./globals.css";

const pretendard = localFont({
  src: "../../public/fonts/subset-PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
});

const nanumMyeongjo = Nanum_Myeongjo({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-nanum-myeongjo",
  display: "swap",
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
    <html lang="ko" className={`${pretendard.variable} ${nanumMyeongjo.variable}`}>
      <body className="h-dvh overflow-hidden bg-background text-foreground antialiased">
        <Providers>
          <div className="h-dvh w-full overflow-hidden bg-gray-50 md:mx-auto md:max-w-93.75">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
