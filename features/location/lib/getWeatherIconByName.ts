import { weatherIcons } from '@/assets/icons/weather';

export type WeatherIconName = keyof typeof weatherIcons;

export const getWeatherIconByName = (name?: string) => {
  if (!name || !(name in weatherIcons)) return null;

  return weatherIcons[name as WeatherIconName];
};
