import type { MouseEventHandler } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const StyledHeader = styled.header`
  padding-bottom: 1em;
  border-bottom: 1px solid #c5cae9;

  h1 {
    margin-top: 0;
    color: ${({
      theme: {
        currentTheme: { primary },
      },
    }) => primary[500]};
  }
`;

export function Header() {
  const { isDarkMode, updateTheme } = useTheme();

  const handleChangeTheme: MouseEventHandler<HTMLButtonElement> = (e) => {
    updateTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <StyledHeader>
      <h1>헤더 콘텐츠</h1>
      <button type="button" onClick={handleChangeTheme}>
        테마 변경
      </button>
    </StyledHeader>
  );
}
