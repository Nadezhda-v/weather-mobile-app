import { Colors } from '../tokens';
import { ThemeColors } from './theme.types';

export const lightTheme: ThemeColors = {
  background: Colors.secondaryBackground,
  text: Colors.secondaryTextColor,
  cardBackground: Colors.cardBackgroundLight,
  placeholder: Colors.placeholderDark,
};

export const darkTheme: ThemeColors = {
  background: Colors.primaryBackground,
  text: Colors.primaryTextColor,
  cardBackground: Colors.cardBackgroundDark,
  placeholder: Colors.placeholderLight,
};
