import { useLocationStore } from '@/entities/location';
import { useTheme } from '@/shared/styles/theme';
import { Fonts } from '@/shared/styles/tokens';
import { SearchInput } from '@/shared/ui/SearchInput';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { useLocationSearch } from '../hooks/useLocationSearch';
import { ForecastList } from './ForecastList';
import { ResultsList } from './ResultsList';

export const LocationSearch = () => {
  const { forecastError, forecastHistory, forecastLoading } =
    useLocationSearch();
  const { theme } = useTheme();
  const { query, setQuery, searchError, searchLoading } = useLocationStore(
    (state) => state,
  );

  const shouldShowForecastLoading = forecastLoading && query.trim().length > 0;

  return (
    <View style={styles.root}>
      <SearchInput
        placeholder='Поиск по городу...'
        value={query}
        onChangeText={setQuery}
        returnKeyType='search'
        autoCorrect={false}
        autoCapitalize='none'
      />
      {(searchLoading || shouldShowForecastLoading) && (
        <ActivityIndicator color={theme.text} style={styles.loader} />
      )}
      {searchError ? (
        <Text style={[styles.error, { color: theme.text }]}>{searchError}</Text>
      ) : null}
      {forecastError ? (
        <Text style={[styles.error, { color: theme.text }]}>
          {forecastError}
        </Text>
      ) : null}
      <ResultsList />
      <ForecastList items={forecastHistory} />
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    fontSize: Fonts.f14,
    marginTop: 12,
  },
  loader: {
    marginTop: 16,
  },
  root: {
    alignSelf: 'stretch',
    flex: 1,
    width: '100%',
  },
});
