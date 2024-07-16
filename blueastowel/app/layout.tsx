import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import WhatsAppButton from '@/components/ui-kit/whatsapp-button';
import 'yet-another-react-lightbox/styles.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BlueasTowel',
  description: 'A towel website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          'to-stone-300 flex flex-col min-h-screen max-w-7xl mx-auto'
        )}
      >
        <div className="flex-grow">{children}</div>
        {/* <Footer /> */}
        <WhatsAppButton /> {/* add the WhatsAppButton component */}
      </body>
    </html>
  );
}
