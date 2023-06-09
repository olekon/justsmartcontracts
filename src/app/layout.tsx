import './globals.css';
import { Layout } from '@widgets/layout';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'JustSmartContracts',
  description: 'Your tool to interact with smart contracts',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}
