import type { ReactElement } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { px2rem } from '@/utils';
import { Header } from './header';
import { Footer } from './footer';

interface LayoutProps {
  children?: ReactElement;
}

const StyledLayout = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  ${({ theme: { breakpoints, spacings } }) => {
    return css`
      max-width: ${px2rem(breakpoints.xl)};
      margin-top: ${px2rem(spacings.xxl)};
    `;
  }}
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  );
}
