import type { ForecastHistoryItem } from '@/shared/api/location/types';
import { useTheme } from '@/shared/styles/theme';
import { Fonts } from '@/shared/styles/tokens';
import { useCallback } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ForecastListProps } from '../model/location.types';

function ItemSeparator() {
  return <View style={styles.separator} />;
}

export function ForecastList({ items }: ForecastListProps) {
  const { theme } = useTheme();

  const renderItem = useCallback(
    ({ item }: { item: ForecastHistoryItem }) => (
      <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
        <View>
          <Text style={[styles.title, { color: theme.text }]}>
            {item.location.name}
          </Text>
          <Text style={[styles.item, { color: theme.text }]}>
            {`${item.forecast.current?.temperature_2m ?? '-'}°C`}
          </Text>
        </View>
      </View>
    ),
    [theme.cardBackground, theme.text],
  );

  if (items.length === 0) return null;

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => String(item.location.id)}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparator}
      contentContainerStyle={styles.content}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    height: 116,
    justifyContent: 'center',
    paddingHorizontal: 26,
    paddingVertical: 10,
  },
  content: {
    marginTop: 14,
    paddingBottom: 8,
  },
  item: {
    fontSize: Fonts.f18,
    marginTop: 6,
    opacity: 0.85,
  },
  list: {
    alignSelf: 'stretch',
    width: '100%',
  },
  separator: {
    height: 16,
  },
  title: {
    fontSize: Fonts.f16,
  },
});
