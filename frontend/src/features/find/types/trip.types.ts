export type RegionType = 
  | 'All' 
  | 'Northern' 
  | 'Central' 
  | 'Southern' 
  | 'Eastern' 
  | 'Western' 
  | 'Northeastern';

export interface TripItem {
  id: string;
  title: string;
  description: string;
  region: RegionType;
  currentMembers: number;
  maxMembers: number;
  dateRangeText: string;
  coverImageUrl: string;
}

export interface TripFilterQuery {
  region: RegionType;
  keyword?: string;
}
