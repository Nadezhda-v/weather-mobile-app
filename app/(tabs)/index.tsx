import { useTheme } from '@/shared/styles/theme';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeTab() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    gap: 24,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 18,
  },
});
