import { useTheme } from '@/shared/styles/theme';
import { Switch } from '@/shared/ui/Switch';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const { theme, mode, setMode } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>ghb</Text>
      <Switch
        value={mode === 'light'}
        onValueChange={(on) => setMode(on ? 'light' : 'dark')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 24,
  },
  title: {
    fontSize: 18,
  },
});
