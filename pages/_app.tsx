// import 'modern-normalize/modern-normalize.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/styles/theme';
import { Layout } from '@/components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
