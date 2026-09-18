export type Region =
  | 'All'
  | 'Northern'
  | 'Central'
  | 'Southern'
  | 'Eastern'
  | 'Western'
  | 'Northeastern';

export interface UserSummary {
  id: string;
  username: string;
  displayName: string;
  avatarUrl?: string;
  isVerified: boolean;
}

export interface TripSummary {
  id: string;
  title: string;
  region: Region;
  currentMembers: number;
  maxMembers: number;
  dateRangeText: string;
}
