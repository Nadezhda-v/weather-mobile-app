import type { LocationActions } from '@/entities/location';
import {
  ForecastHistoryItem,
  LocationForecastResponse,
} from '@/shared/api/location/types';

export interface ForecastListProps {
  items: ForecastHistoryItem[];
}

export interface loadLocationForecastDeps {
  setForecast: (forecast: LocationForecastResponse | null) => void;
  setForecastLoading: (loading: boolean) => void;
  setForecastError: (message: string | null) => void;
  upsertForecastHistory: (item: ForecastHistoryItem) => void;
  setQuery: (query: string) => void;
}

export type searchLocationDeps = Pick<
  LocationActions,
  | 'setSearchLoading'
  | 'setSearchError'
  | 'setSearchSuccess'
  | 'setSearchFailure'
>;
