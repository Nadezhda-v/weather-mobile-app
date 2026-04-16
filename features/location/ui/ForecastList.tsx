import type { ForecastHistoryItem } from '@/shared/api/location/types';
import { useTheme } from '@/shared/styles/theme';
import { Fonts } from '@/shared/styles/tokens';
import { useCallback } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { ForecastListProps } from '../model/location.types';
import { getWeatherIconByName } from '../lib/getWeatherIconByName';
import { useRouter } from 'expo-router';

function ItemSeparator() {
  return <View style={styles.separator} />;
}

export function ForecastList({ items }: ForecastListProps) {
  const { theme } = useTheme();
  const router = useRouter();

  const renderItem = useCallback(
    ({ item }: { item: ForecastHistoryItem }) => {
      const Icon = getWeatherIconByName(item.forecast.current?.icon);

      return (
        <Pressable
          onPress={() =>
            router.push({
              pathname: '/location/[id]',
              params: { id: String(item.location.id) },
            })
          }
        >
          <View
            style={[styles.card, { backgroundColor: theme.cardBackground }]}
          >
            <View>
              <Text style={[styles.title, { color: theme.text }]}>
                {item.location.name}
              </Text>
              <Text style={[styles.item, { color: theme.text }]}>
                {`${item.forecast.current?.temperature ?? '-'}°C`}
              </Text>
            </View>
            {Icon && (
              <View style={styles.iconContainer}>
                <Icon width={82} height={82} />
              </View>
            )}
          </View>
        </Pressable>
      );
    },
    [router, theme.cardBackground, theme.text],
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
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    height: 120,
    justifyContent: 'space-between',
    paddingHorizontal: 26,
    paddingVertical: 10,
  },
  content: {
    marginVertical: 16,
    paddingBottom: 8,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    fontSize: Fonts.f20,
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
