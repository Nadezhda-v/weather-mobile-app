import type { Location, SearchLocationsParams } from '@/shared/api';

import { getGeocodingData } from '@/shared/api/location';

export async function fetchLocationCandidates(
  params: SearchLocationsParams,
): Promise<Location[]> {
  const data = await getGeocodingData(params);
  return data.results ?? [];
}
