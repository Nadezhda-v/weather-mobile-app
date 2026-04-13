import { fetchLocationCandidates } from '@/entities/location';
import { searchLocationDeps } from '../model/location.types';
import { DEFAULT_COUNT_LOCATIONS, DEFAULT_LANGUAGE } from '@/shared/constants';

export async function searchLocation(
  text: string,
  deps: searchLocationDeps,
): Promise<void> {
  const value = text.trim();
  if (value.length < 2) return;

  const {
    setSearchLoading,
    setSearchError,
    setSearchSuccess,
    setSearchFailure,
  } = deps;

  setSearchLoading(true);
  setSearchError(null);

  try {
    const list = await fetchLocationCandidates({
      name: value,
      count: DEFAULT_COUNT_LOCATIONS,
      language: DEFAULT_LANGUAGE,
      format: 'json',
    });
    setSearchSuccess(list);
  } catch (e) {
    setSearchFailure(
      e instanceof Error ? e.message : 'Не удалось выполнить поиск',
    );
  } finally {
    setSearchLoading(false);
  }
}
