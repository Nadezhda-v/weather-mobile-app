import type { FC } from 'react';
import type { SvgProps } from 'react-native-svg';

declare const require: (path: string) => { default: FC<SvgProps> };

export const weatherIcons = {
  clearsky_day: require('./clearsky_day.svg').default,
  clearsky_night: require('./clearsky_night.svg').default,
  clearsky_polartwilight: require('./clearsky_polartwilight.svg').default,
  cloudy: require('./cloudy.svg').default,
  fair_day: require('./fair_day.svg').default,
  fair_night: require('./fair_night.svg').default,
  fair_polartwilight: require('./fair_polartwilight.svg').default,
  fog: require('./fog.svg').default,
  heavyrain: require('./heavyrain.svg').default,
  heavyrainandthunder: require('./heavyrainandthunder.svg').default,
  heavyrainshowers_day: require('./heavyrainshowers_day.svg').default,
  heavyrainshowers_night: require('./heavyrainshowers_night.svg').default,
  heavyrainshowers_polartwilight:
    require('./heavyrainshowers_polartwilight.svg').default,
  heavyrainshowersandthunder_day:
    require('./heavyrainshowersandthunder_day.svg').default,
  heavyrainshowersandthunder_night:
    require('./heavyrainshowersandthunder_night.svg').default,
  heavyrainshowersandthunder_polartwilight:
    require('./heavyrainshowersandthunder_polartwilight.svg').default,
  heavysleet: require('./heavysleet.svg').default,
  heavysleetandthunder: require('./heavysleetandthunder.svg').default,
  heavysleetshowers_day: require('./heavysleetshowers_day.svg').default,
  heavysleetshowers_night: require('./heavysleetshowers_night.svg').default,
  heavysleetshowers_polartwilight:
    require('./heavysleetshowers_polartwilight.svg').default,
  heavysleetshowersandthunder_day:
    require('./heavysleetshowersandthunder_day.svg').default,
  heavysleetshowersandthunder_night:
    require('./heavysleetshowersandthunder_night.svg').default,
  heavysleetshowersandthunder_polartwilight:
    require('./heavysleetshowersandthunder_polartwilight.svg').default,
  heavysnow: require('./heavysnow.svg').default,
  heavysnowandthunder: require('./heavysnowandthunder.svg').default,
  heavysnowshowers_day: require('./heavysnowshowers_day.svg').default,
  heavysnowshowers_night: require('./heavysnowshowers_night.svg').default,
  heavysnowshowers_polartwilight:
    require('./heavysnowshowers_polartwilight.svg').default,
  heavysnowshowersandthunder_day:
    require('./heavysnowshowersandthunder_day.svg').default,
  heavysnowshowersandthunder_night:
    require('./heavysnowshowersandthunder_night.svg').default,
  heavysnowshowersandthunder_polartwilight:
    require('./heavysnowshowersandthunder_polartwilight.svg').default,
  lightrain: require('./lightrain.svg').default,
  lightrainandthunder: require('./lightrainandthunder.svg').default,
  lightrainshowers_day: require('./lightrainshowers_day.svg').default,
  lightrainshowers_night: require('./lightrainshowers_night.svg').default,
  lightrainshowers_polartwilight:
    require('./lightrainshowers_polartwilight.svg').default,
  lightrainshowersandthunder_day:
    require('./lightrainshowersandthunder_day.svg').default,
  lightrainshowersandthunder_night:
    require('./lightrainshowersandthunder_night.svg').default,
  lightrainshowersandthunder_polartwilight:
    require('./lightrainshowersandthunder_polartwilight.svg').default,
  lightsleet: require('./lightsleet.svg').default,
  lightsleetandthunder: require('./lightsleetandthunder.svg').default,
  lightsleetshowers_day: require('./lightsleetshowers_day.svg').default,
  lightsleetshowers_night: require('./lightsleetshowers_night.svg').default,
  lightsleetshowers_polartwilight:
    require('./lightsleetshowers_polartwilight.svg').default,
  lightsnow: require('./lightsnow.svg').default,
  lightsnowandthunder: require('./lightsnowandthunder.svg').default,
  lightsnowshowers_day: require('./lightsnowshowers_day.svg').default,
  lightsnowshowers_night: require('./lightsnowshowers_night.svg').default,
  lightsnowshowers_polartwilight:
    require('./lightsnowshowers_polartwilight.svg').default,
  lightssleetshowersandthunder_day:
    require('./lightssleetshowersandthunder_day.svg').default,
  lightssleetshowersandthunder_night:
    require('./lightssleetshowersandthunder_night.svg').default,
  lightssleetshowersandthunder_polartwilight:
    require('./lightssleetshowersandthunder_polartwilight.svg').default,
  lightssnowshowersandthunder_day:
    require('./lightssnowshowersandthunder_day.svg').default,
  lightssnowshowersandthunder_night:
    require('./lightssnowshowersandthunder_night.svg').default,
  lightssnowshowersandthunder_polartwilight:
    require('./lightssnowshowersandthunder_polartwilight.svg').default,
  partlycloudy_day: require('./partlycloudy_day.svg').default,
  partlycloudy_night: require('./partlycloudy_night.svg').default,
  partlycloudy_polartwilight: require('./partlycloudy_polartwilight.svg')
    .default,
  rain: require('./rain.svg').default,
  rainandthunder: require('./rainandthunder.svg').default,
  rainshowers_day: require('./rainshowers_day.svg').default,
  rainshowers_night: require('./rainshowers_night.svg').default,
  rainshowers_polartwilight: require('./rainshowers_polartwilight.svg').default,
  rainshowersandthunder_day: require('./rainshowersandthunder_day.svg').default,
  rainshowersandthunder_night: require('./rainshowersandthunder_night.svg')
    .default,
  rainshowersandthunder_polartwilight:
    require('./rainshowersandthunder_polartwilight.svg').default,
  sleet: require('./sleet.svg').default,
  sleetandthunder: require('./sleetandthunder.svg').default,
  sleetshowers_day: require('./sleetshowers_day.svg').default,
  sleetshowers_night: require('./sleetshowers_night.svg').default,
  sleetshowers_polartwilight: require('./sleetshowers_polartwilight.svg')
    .default,
  sleetshowersandthunder_day: require('./sleetshowersandthunder_day.svg')
    .default,
  sleetshowersandthunder_night: require('./sleetshowersandthunder_night.svg')
    .default,
  sleetshowersandthunder_polartwilight:
    require('./sleetshowersandthunder_polartwilight.svg').default,
  snow: require('./snow.svg').default,
  snowandthunder: require('./snowandthunder.svg').default,
  snowshowers_day: require('./snowshowers_day.svg').default,
  snowshowers_night: require('./snowshowers_night.svg').default,
  snowshowers_polartwilight: require('./snowshowers_polartwilight.svg').default,
  snowshowersandthunder_day: require('./snowshowersandthunder_day.svg').default,
  snowshowersandthunder_night: require('./snowshowersandthunder_night.svg')
    .default,
  snowshowersandthunder_polartwilight:
    require('./snowshowersandthunder_polartwilight.svg').default,
} as const satisfies Record<string, FC<SvgProps>>;
