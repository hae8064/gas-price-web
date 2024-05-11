import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from './lib/registry';
import { GlobalStyle } from '@/GlobalStyle';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: '나만의 주유소',
    description: '내 주변 저렴한 주유소 및 평균 기름값'
};

export default function RootLayout({
    children
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
                <Script
                    strategy="beforeInteractive"
                    src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP}`}
                ></Script>
            </body>
        </html>
    );
}
