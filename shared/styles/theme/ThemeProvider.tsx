import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react';

import { darkTheme, lightTheme } from './theme';
import type { ThemeColors } from './theme.types';

export type ThemeMode = 'light' | 'dark';

type ThemeContextValue = {
  theme: ThemeColors;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<ThemeMode>('dark');

  const theme = mode === 'dark' ? darkTheme : lightTheme;

  const value = useMemo(
    () => ({
      theme,
      mode,
      setMode,
    }),
    [theme, mode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error('useTheme must be used within ThemeProvider');

  return ctx;
}

export const useSetThemeMode = () => {
  const { setMode } = useTheme();
  return useCallback(
    (isLight: boolean) => setMode(isLight ? 'light' : 'dark'),
    [setMode]
  );
}
