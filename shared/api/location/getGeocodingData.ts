import { DEFAULT_COUNT_LOCATIONS, DEFAULT_LANGUAGE } from '@/shared/constants';
import { GEOCODING_BASE_URL } from '../config';

import type { GeocodingSearchResponse, SearchLocationsParams } from './types';

export async function getGeocodingData(
  params: SearchLocationsParams,
): Promise<GeocodingSearchResponse> {
  const {
    name,
    count = DEFAULT_COUNT_LOCATIONS,
    language = DEFAULT_LANGUAGE,
    countryCode,
    format = 'json',
  } = params;

  const trimmed = name.trim();
  if (trimmed.length < 2) return { results: [] };

  const searchParams = new URLSearchParams({
    name: trimmed,
    count: String(count),
    language,
    format,
  });

  if (countryCode) searchParams.set('countryCode', countryCode);

  const url = `${GEOCODING_BASE_URL}/search?${searchParams.toString()}`;
  const response = await fetch(url);
  const data = (await response.json()) as GeocodingSearchResponse;

  if (!response.ok || data.error)
    throw new Error(data.reason ?? `Geocoding failed (${response.status})`);

  return data;
}
