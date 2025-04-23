import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mike Amato | STEAM Educator & Engineer',
  description: 'Portfolio of Mike Amato – STEM Educator, Engineer, and Ed‑Tech Consultant.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
