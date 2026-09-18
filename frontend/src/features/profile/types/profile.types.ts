export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  avatarUrl: string;
  isVerified: boolean;
  friendsCount: number;
  tripsCount: number;
}

export interface UserMedal {
  id: string;
  title: string;
  badgeType: 'number-one' | 'golden-route' | 'tunnel' | string;
  iconUrl?: string;
  unlockedAt?: string;
}

export interface TripHistoryItem {
  id: string;
  destinationName: string;
  dateRangeText: string;
  coverImageUrl: string;
}

export interface UserPostItem {
  id: string;
  locationName: string;
  caption?: string;
  imageUrl: string;
  createdAt: string;
}
