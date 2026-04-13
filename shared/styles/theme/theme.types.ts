export interface ThemeColors {
  text: string;
  background: string;
  cardBackground: string;
  placeholder: string;
}

export type ThemeMode = 'light' | 'dark';

export interface ThemeContextValue {
  theme: ThemeColors;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}
