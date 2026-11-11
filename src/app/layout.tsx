import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/footer/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { CookieBanner } from '@/components/ui/CookieBanner';
import { CommandPalette } from '@/components/ui/CommandPalette';

export const metadata: Metadata = {
  title: 'SAHIX | Engineering Tomorrow’s Digital World',
  description: 'Future-driven software development company delivering cutting-edge web, mobile, AI, and distributed cloud solutions to businesses worldwide.',
  keywords: ['software development', 'Next.js', 'React', 'AI', 'cloud solutions', 'mobile apps', 'SAHIX', 'enterprise software'],
  openGraph: {
    title: 'SAHIX | Digital Software & Future-Driven Development',
    description: 'We craft high-quality digital solutions that help businesses grow, scale, and innovate in a fast-changing world.',
    type: 'website',
    locale: 'en_US',
    siteName: 'SAHIX Digital Software',
  },
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-slate-900 min-h-screen flex flex-col font-sans selection:bg-[#FF6B00] selection:text-white antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <CommandPalette />
        <WhatsAppButton />
        <CookieBanner />
        <Footer />
      </body>
    </html>
  );
}
