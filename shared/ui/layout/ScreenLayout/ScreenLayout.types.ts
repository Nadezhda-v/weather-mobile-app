import type { PropsWithChildren } from 'react';
import { type StyleProp, type ViewStyle } from 'react-native';
import { type NativeSafeAreaViewProps } from 'react-native-safe-area-context';

export type ScreenLayoutProps = PropsWithChildren<{
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  edges?: NativeSafeAreaViewProps['edges'];
}>;
