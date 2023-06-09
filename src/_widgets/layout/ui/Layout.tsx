import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

type TProps = {
  children: ReactNode;
};

export const Layout = ({ children }: TProps) => {
  return (
    <html lang="en">
      <body>
        {' '}
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
};
