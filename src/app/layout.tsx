import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import { GlobalStyle } from "@/GlobalStyle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "나만의 주유소",
  description: "내 주변 저렴한 주유소 및 평균 기름값",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
