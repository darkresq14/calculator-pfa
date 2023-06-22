import Footer from '../components/footer';
import Header from '../components/header';
import './globals.css';
import { Inter } from 'next/font/google';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Calculator PFA',
  description: 'Calculator tarif orar PFA impozit real sau norma de venit',
  authors: [
    {
      name: 'Razvan Bielz',
      url: 'https://www.linkedin.com/in/razvan-bielz/',
    },
  ],
  creator: 'Razvan Bielz',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">
              {children}
              <TailwindIndicator />
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
