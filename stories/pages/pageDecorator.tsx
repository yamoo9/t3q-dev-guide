import type { ReactElement } from 'react';
import { ThemeProvider } from '@/styles/theme';
import { Layout } from '@/components';

export const PageDecorator = ({ children }: { children?: ReactElement }) => (
  <ThemeProvider>
    <Layout>{children}</Layout>
  </ThemeProvider>
);
