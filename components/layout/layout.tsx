import type { ReactElement } from 'react';
import { Footer } from './footer';
import { Header } from './header';

interface LayoutProps {
  children?: ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
