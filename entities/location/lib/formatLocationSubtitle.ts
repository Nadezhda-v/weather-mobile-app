import { Location } from '@/shared/api';

export function formatLocationSubtitle(location: Location): string {
  return [location.country, location.admin1].filter(Boolean).join(' · ');
}
