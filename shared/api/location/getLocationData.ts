import { roundCoord } from '@/shared/lib/roundCoord';
import { FORECAST_BASE_URL } from '../config';
import type { ForecastJson, Location, LocationForecastResponse } from './types';

export async function getLocationData(
  data: Location,
): Promise<LocationForecastResponse> {
  const latitude = roundCoord(data.latitude);
  const longitude = roundCoord(data.longitude);

  const params = new URLSearchParams({
    lat: String(latitude),
    lon: String(longitude),
  });

  const url = `${FORECAST_BASE_URL}?${params.toString()}`;

  const response = await fetch(url, {
    headers: {
      'User-Agent': process.env.EXPO_PUBLIC_METNO_USER_AGENT || '',
    },
  });

  const forecast = JSON.parse(await response.text()) as ForecastJson;

  if (!response.ok) throw new Error('Ошибка при получении данных');

  const currentTimeseries = forecast.properties?.timeseries?.[0];
  const instantDetails = currentTimeseries?.data?.instant?.details;

  if (!currentTimeseries || !instantDetails)
    throw new Error('Ошибка при получении данных');

  return {
    latitude: data.latitude,
    longitude: data.longitude,
    timezone: data.timezone ?? 'UTC',
    current: {
      time: currentTimeseries.time,
      temperature_2m: instantDetails.air_temperature,
      wind_speed_10m: instantDetails.wind_speed,
    },
  };
}
