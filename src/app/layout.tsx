import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/ThemeContext';
import ColorPaletteSelector from '../components/ColorPaletteSelector';
import businessData from '../data/business_details.json';

export const metadata: Metadata = {
  title: businessData.seo.title,
  description: businessData.seo.description,
  keywords: businessData.seo.keywords.join(', '),
  authors: [{ name: businessData.companyName }],
  openGraph: {
    title: businessData.seo.title,
    description: businessData.seo.description,
    type: 'website',
    locale: 'en_IN',
    siteName: businessData.companyName,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <ThemeProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ColorPaletteSelector />
        </ThemeProvider>
      </body>
    </html>
  );
}
