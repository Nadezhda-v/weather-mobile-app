import { useTheme } from '@/shared/styles/theme';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenLayoutProps } from './ScreenLayout.types';
import { DEFAULT_EDGES } from './ScreenLayout.constants';

export function ScreenLayout({
  children,
  contentContainerStyle,
  style,
  edges = DEFAULT_EDGES,
}: ScreenLayoutProps) {
  const { theme } = useTheme();

  return (
    <SafeAreaView
      edges={edges}
      style={[styles.safeArea, { backgroundColor: theme.background }, style]}
    >
      <View
        style={[
          styles.container,
          { backgroundColor: theme.background },
          contentContainerStyle,
        ]}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  safeArea: {
    flex: 1,
  },
});
