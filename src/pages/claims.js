import Image from 'next/image';
import { Geist, Geist_Mono } from 'next/font/google';
import ClaimsScreen from '@/screen/ClaimsScreen';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Payroll() {
  return <ClaimsScreen />;
}
