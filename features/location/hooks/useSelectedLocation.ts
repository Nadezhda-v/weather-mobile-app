import { useLocationStore } from '@/entities/location';
import type { LocationForecastResponse } from '@/shared/api';
import { useEffect, useState } from 'react';

import { loadLocationForecast } from '../lib/loadLocationForecast';

export function useSelectedLocation() {
  const { selectedLocation, upsertForecastHistory, setQuery } =
    useLocationStore((state) => state);
  const [forecast, setForecast] = useState<LocationForecastResponse | null>(
    null,
  );
  const [forecastLoading, setForecastLoading] = useState(false);
  const [forecastError, setForecastError] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedLocation) return;

    loadLocationForecast(selectedLocation, {
      setForecast,
      setForecastLoading,
      setForecastError,
      upsertForecastHistory,
      setQuery,
    });
  }, [selectedLocation, setForecast, setQuery, upsertForecastHistory]);

  return {
    forecast,
    forecastError,
    forecastLoading,
  };
}
