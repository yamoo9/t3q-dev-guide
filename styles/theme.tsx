import { ReactElement, useMemo, useState } from 'react';
import {
  css,
  Global,
  ThemeProvider as EmotionThemeProvider,
} from '@emotion/react';

/* THEME -------------------------------------------------------------------- */

const common = {
  breakpoints: {
    sm: 480,
    md: 960,
    lg: 1280,
    xl: 1440,
  },
  colors: {
    white: '#fff',
    black: '#000',
    blue: {
      100: 'hsl(209, 78%, 90%)',
      200: 'hsl(209, 78%, 80%)',
      300: 'hsl(209, 78%, 60%)',
      400: 'hsl(209, 78%, 60%)',
      500: 'hsl(209, 78%, 50%)',
      600: 'hsl(209, 78%, 40%)',
      700: 'hsl(209, 78%, 30%)',
      800: 'hsl(209, 78%, 20%)',
      900: 'hsl(209, 78%, 10%)',
    },
    yellow: {
      100: 'hsl(50, 78%, 90%)',
      200: 'hsl(50, 78%, 80%)',
      300: 'hsl(50, 78%, 60%)',
      400: 'hsl(50, 78%, 60%)',
      500: 'hsl(50, 78%, 50%)',
      600: 'hsl(50, 78%, 40%)',
      700: 'hsl(50, 78%, 30%)',
      800: 'hsl(50, 78%, 20%)',
      900: 'hsl(50, 78%, 10%)',
    },
  },
  typography: {
    xxs: 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 28,
    xxl: 36,
  },
  spacings: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
};

const { breakpoints, colors, typography, spacings } = common;

/* THEME TYPES -------------------------------------------------------------- */

const lightTheme = {
  background: colors.white,
  forground: colors.black,
  primary: colors.blue,
};

const darkTheme = {
  background: colors.black,
  forground: colors.white,
  primary: colors.yellow,
};

/* COMPONENT ---------------------------------------------------------------- */

export const ThemeProvider = ({ children }: { children?: ReactElement }) => {
  const [themeType, setThemeType] = useState('light');
  const theme = useMemo(() => {
    const isDarkMode = themeType === 'dark';
    const currentTheme = isDarkMode ? darkTheme : lightTheme;
    return {
      breakpoints,
      isDarkMode,
      currentTheme,
      updateTheme: setThemeType,
      typography,
      spacings,
    };
  }, [themeType]);

  return (
    <EmotionThemeProvider theme={theme}>
      <Global
        styles={css`
          body {
            background: ${theme.currentTheme.background};
            color: ${theme.currentTheme.forground};
          }
        `}
      />
      {children}
    </EmotionThemeProvider>
  );
};
