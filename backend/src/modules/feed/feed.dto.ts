export interface CreatePostDto {
  locationName: string;
  caption?: string;
  imageUrl: string;
}

export interface FeedQueryDto {
  tab?: 'for-you' | 'friend';
  page?: number;
  limit?: number;
}
