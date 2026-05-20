import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Venezuela Mineral Resources',
  description: 'Interactive map of Venezuela mineral deposits',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
