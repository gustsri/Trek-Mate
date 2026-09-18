export interface UpdateProfileDto {
  displayName?: string;
  avatarUrl?: string;
}

export interface UserStatsDto {
  friendsCount: number;
  tripsCount: number;
}
