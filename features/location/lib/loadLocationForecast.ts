import { getLocationData } from '@/shared/api';
import type { Location } from '@/shared/api';
import { loadLocationForecastDeps } from '../model/location.types';

export async function loadLocationForecast(
  location: Location,
  deps: loadLocationForecastDeps,
): Promise<void> {
  const {
    setForecast,
    setForecastLoading,
    setForecastError,
    upsertForecastHistory,
    setQuery,
  } = deps;

  setForecastLoading(true);
  setForecastError(null);

  try {
    const forecastData = await getLocationData(location);
    setForecast(forecastData);
    upsertForecastHistory({
      location,
      forecast: forecastData,
      updatedAt: new Date().toISOString(),
    });
    setQuery('');
  } catch (e) {
    setForecast(null);
    setForecastError(
      e instanceof Error ? e.message : 'Не удалось загрузить прогноз',
    );
  } finally {
    setForecastLoading(false);
  }
}
