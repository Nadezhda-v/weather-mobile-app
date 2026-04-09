import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react';

import { darkTheme, lightTheme } from './theme';
import type { ThemeContextValue, ThemeMode } from './theme.types';

const ThemeContext = createContext<ThemeContextValue | null>(null);
const THEME_KEY = 'themeMode';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [mode, setModeState] = useState<ThemeMode>('dark');
  const [isReady, setIsReady] = useState(false);

  const theme = mode === 'dark' ? darkTheme : lightTheme;

  useEffect(() => {
    let isMounted = true;

    (async () => {
      const saved = await AsyncStorage.getItem(THEME_KEY);
      if (!isMounted) return;
      if (saved === 'light' || saved === 'dark') setModeState(saved);
      if (isMounted) setIsReady(true);
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  const setMode = useCallback((nextMode: ThemeMode) => {
    setModeState(nextMode);
    AsyncStorage.setItem(THEME_KEY, nextMode);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      mode,
      setMode,
    }),
    [theme, mode],
  );

  if (!isReady) return null;

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');

  return ctx;
};
