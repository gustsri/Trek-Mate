export interface TripModel {
  id: string;
  creatorId: string;
  title: string;
  description: string;
  region: string;
  currentMembers: number;
  maxMembers: number;
  dateRangeText: string;
  coverImageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
