export interface Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation?: number;
  feature_code?: string;
  country_code?: string;
  timezone?: string;
  population?: number;
  country?: string;
  admin1?: string;
  admin2?: string;
  admin3?: string;
  admin4?: string;
  postcodes?: string[];
}

export interface GeocodingSearchResponse {
  results?: Location[];
  generationtime_ms?: number;
  error?: boolean;
  reason?: string;
}

export interface ForecastCurrentWeather {
  time: string;
  icon?: string;
  temperature?: number;
  windSpeed?: number;
}

export interface LocationForecastResponse {
  latitude: number;
  longitude: number;
  timezone: string;
  current?: ForecastCurrentWeather;
}

export interface ForecastHistoryItem {
  location: Location;
  forecast: LocationForecastResponse;
  updatedAt: string;
}

export type SearchLocationsParams = {
  name: string;
  count?: number;
  language?: string;
  countryCode?: string;
  format?: 'json';
};

export interface ForecastJson {
  reason?: string;
  properties?: {
    timeseries?: Array<{
      time: string;
      data?: {
        instant?: {
          details?: {
            air_temperature?: number;
            wind_speed?: number;
            symbol_code?: string;
          };
        };
        next_1_hours?: {
          summary?: {
            symbol_code?: string;
          };
        };
      };
    }>;
  };
}
