import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SmoothScrollProvider } from "@/components/shared/SmoothScrollProvider";
import "../styles/globals.css";
import localFont from 'next/font/local'

const interTight = localFont({
  src: [
    {
      path: '../../public/fonts/InterTight-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/InterTight-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/InterTight-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/InterTight-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Monitize",
  description: "Production-grade Next.js 15 architecture baseline"
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={interTight.variable}>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
