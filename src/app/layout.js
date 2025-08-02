'use client';

import { Poppins, Nunito } from 'next/font/google';
import './globals.css';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata = {
  title: 'Chellamay Baby Shop',
  description: 'Your One-Stop Shop for Quality Baby Products in Tenkasi',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
