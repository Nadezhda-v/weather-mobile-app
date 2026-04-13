import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type {
  ForecastHistoryItem,
  Location,
} from '../../../shared/api/location/types';
import { MAX_HISTORY_LIST } from './location.constants';

interface LocationState {
  selectedLocation: Location | null;
  forecastHistory: ForecastHistoryItem[];
  query: string;
  searchResults: Location[];
  searchLoading: boolean;
  searchError: string | null;
  searchSkipNextDebounce: boolean;
}

export interface LocationActions {
  setSelectedLocation: (location: Location | null) => void;
  upsertForecastHistory: (item: ForecastHistoryItem) => void;
  clearForecastHistory: () => void;
  setQuery: (query: string) => void;
  setSearchLoading: (loading: boolean) => void;
  setSearchError: (message: string | null) => void;
  setSearchSuccess: (results: Location[]) => void;
  setSearchFailure: (message: string) => void;
  consumeSearchSkipNextDebounce: () => boolean;
  selectLocation: (location: Location) => void;
}

export const INITIAL_STATE: LocationState = {
  selectedLocation: null,
  forecastHistory: [],
  query: '',
  searchResults: [],
  searchLoading: false,
  searchError: null,
  searchSkipNextDebounce: false,
};

export const useLocationStore = create<LocationState & LocationActions>()(
  persist(
    (set) => ({
      ...INITIAL_STATE,
      setSelectedLocation: (location) => set({ selectedLocation: location }),
      upsertForecastHistory: (item) =>
        set((state) => {
          const withoutCurrent = state.forecastHistory.filter(
            (historyItem) => historyItem.location.id !== item.location.id,
          );
          return {
            forecastHistory: [item, ...withoutCurrent].slice(
              0,
              MAX_HISTORY_LIST,
            ),
          };
        }),
      clearForecastHistory: () => set({ forecastHistory: [] }),
      setQuery: (query) => set({ query }),
      setSearchLoading: (searchLoading) => set({ searchLoading }),
      setSearchError: (searchError) => set({ searchError }),
      setSearchSuccess: (searchResults) =>
        set({
          searchResults,
          searchError: null,
        }),
      setSearchFailure: (message) =>
        set({
          searchResults: [],
          searchError: message,
        }),
      consumeSearchSkipNextDebounce: () => {
        let shouldSkip = false;
        set((state) => {
          if (!state.searchSkipNextDebounce) return state;
          shouldSkip = true;
          return { searchSkipNextDebounce: false };
        });
        return shouldSkip;
      },
      selectLocation: (location) =>
        set({
          selectedLocation: location,
          query: location.name,
          searchResults: [],
          searchError: null,
          searchSkipNextDebounce: true,
        }),
    }),
    {
      name: 'location-search',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        forecastHistory: state.forecastHistory,
      }),
    },
  ),
);
