import { Fonts } from '@/shared/styles/tokens';
import { ScreenLayout } from '@/shared/ui/layout';
import { Switch } from '@/shared/ui/Switch';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../shared/styles/theme';

export default function SettingsTab() {
  const { theme, mode, setMode } = useTheme();

  return (
    <ScreenLayout>
      <Text style={[styles.title, { color: theme.text }]}>Настройки</Text>
      <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
        <Switch
          value={mode === 'light'}
          label='Сменить тему'
          labelStyle={{ color: theme.text }}
          onValueChange={(on) => setMode(on ? 'light' : 'dark')}
        />
      </View>
    </ScreenLayout>
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
  title: {
    fontSize: Fonts.f18,
    marginBottom: 12,
  },
});
