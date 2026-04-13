import { useTheme } from '@/shared/styles/theme';
import { Fonts } from '@/shared/styles/tokens';
import { ScreenLayout } from '@/shared/ui/layout';
import { StyleSheet, Text } from 'react-native';

export default function HomeTab() {
  const { theme } = useTheme();

  return (
    <ScreenLayout>
      <Text style={[styles.title, { color: theme.text }]}>Home Screen</Text>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: Fonts.f18,
  },
});
