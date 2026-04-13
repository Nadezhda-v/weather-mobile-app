import { formatLocationSubtitle, useLocationStore } from '@/entities/location';
import type { Location } from '@/shared/api';
import { useTheme } from '@/shared/styles/theme';
import { Fonts } from '@/shared/styles/tokens';
import { useCallback } from 'react';
import { FlatList, Keyboard, Pressable, StyleSheet, Text } from 'react-native';

export const ResultsList = () => {
  const { theme } = useTheme();
  const {
    searchError,
    searchLoading,
    query,
    searchResults,
    selectLocation,
    selectedLocation,
  } = useLocationStore((state) => state);

  const showNoResultsHint =
    searchResults.length === 0 &&
    !searchLoading &&
    query.trim().length >= 2 &&
    !searchError &&
    (!selectedLocation || selectedLocation.name.trim() !== query.trim());

  const renderItem = useCallback(
    ({ item }: { item: Location }) => (
      <Pressable
        accessibilityRole='button'
        onPress={() => {
          Keyboard.dismiss();
          selectLocation(item);
        }}
        style={({ pressed }) => [
          styles.row,
          { borderBottomColor: theme.cardBackground },
          pressed && styles.rowPressed,
        ]}
      >
        <Text style={[styles.rowTitle, { color: theme.text }]}>
          {item.name}
        </Text>
        <Text style={[styles.rowSub, { color: theme.text }]}>
          {formatLocationSubtitle(item)}
        </Text>
      </Pressable>
    ),
    [selectLocation, theme.cardBackground, theme.text],
  );

  if (searchResults.length > 0) {
    return (
      <FlatList
        data={searchResults}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        style={styles.list}
        keyboardShouldPersistTaps='always'
      />
    );
  }

  if (showNoResultsHint) {
    return (
      <Text style={[styles.hint, { color: theme.text }]}>
        Ничего не найдено
      </Text>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  hint: {
    fontSize: Fonts.f14,
    marginTop: 16,
    opacity: 0.7,
  },
  list: {
    alignSelf: 'stretch',
    marginTop: 16,
    width: '100%',
  },
  row: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 12,
  },
  rowPressed: {
    opacity: 0.7,
  },
  rowSub: {
    fontSize: Fonts.f12,
    marginTop: 4,
    opacity: 0.75,
  },
  rowTitle: {
    fontSize: Fonts.f16,
    fontWeight: '600',
  },
});
