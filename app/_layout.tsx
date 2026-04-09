import { ThemeProvider, useTheme } from '@/shared/styles/theme';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function ThemedStack() {
  const { theme } = useTheme();

  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: theme.background,
        },
        headerShown: false,
      }}
    />
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ThemedStack />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
