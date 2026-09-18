export interface CreateTripDto {
  title: string;
  description: string;
  region: string;
  maxMembers: number;
  dateRangeText: string;
}

export interface TripQueryDto {
  region?: string;
  keyword?: string;
}
