import { Fonts } from '@/shared/styles/tokens';
import { Switch } from '@/shared/ui/Switch';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../shared/styles/theme';

export default function SettingsTab() {
  const { theme, mode, setMode } = useTheme();

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background }]}
      edges={['top']}
    >
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.title, { color: theme.text }]}>Настройки</Text>
        <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
          <Switch
            value={mode === 'light'}
            label='Сменить тему'
            labelStyle={{ color: theme.text }}
            onValueChange={(on) => setMode(on ? 'light' : 'dark')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    width: '100%',
  },
  container: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  safeArea: {
    flex: 1,
  },
  title: {
    fontSize: Fonts.f18,
    marginBottom: 12,
  },
});
