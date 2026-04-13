import { useLocationStore } from '@/entities/location';
import { useCallback, useEffect } from 'react';

import { searchLocation } from '../lib/searchLocation';
import { SEARCH_DEBOUNCE_MS } from '../model/location.constants';

import { useSelectedLocation } from './useSelectedLocation';

export const useLocationSearch = () => {
  const {
    query,
    forecastHistory,
    upsertForecastHistory,
    setSearchLoading,
    setSearchError,
    setSearchSuccess,
    setSearchFailure,
    consumeSearchSkipNextDebounce,
  } = useLocationStore((state) => state);

  const { forecast, forecastError, forecastLoading } = useSelectedLocation();

  const handleSearch = useCallback(
    (text: string) =>
      searchLocation(text, {
        setSearchLoading,
        setSearchError,
        setSearchSuccess,
        setSearchFailure,
      }),
    [setSearchFailure, setSearchLoading, setSearchError, setSearchSuccess],
  );

  useEffect(() => {
    const handle = setTimeout(() => {
      if (consumeSearchSkipNextDebounce()) return;

      handleSearch(query);
    }, SEARCH_DEBOUNCE_MS);

    return () => clearTimeout(handle);
  }, [consumeSearchSkipNextDebounce, query, handleSearch]);

  return {
    forecast,
    forecastError,
    forecastHistory,
    forecastLoading,
  };
};
