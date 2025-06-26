import { Noto_Sans_KR, Noto_Serif } from 'next/font/google';
import './globals.css';

const NotoSans = Noto_Sans_KR({
  variable: '--font-sans',
  subsets: ['latin'],
});

const NotoSerif = Noto_Serif({
  variable: '--font-serif',
  subsets: ['latin'],
});

export const metadata = {
  title: '여인영 Marine',
  description: '안녕하세요. 여인영입니다.',
  applicationName: 'Marineyeong',
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'Frontend',
    'Web publisher',
    '프론트엔드',
    '웹 퍼블리셔',
    '리액트',
    '자바스크립트',
    'html',
    'css',
  ],
  authors: [{ name: '여인영', url: 'https://marineyeong.com' }],
  creator: '여인영',
  publisher: '여인영',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${NotoSans.variable} ${NotoSerif.variable} antialiased`}>{children}</body>
    </html>
  );
}
