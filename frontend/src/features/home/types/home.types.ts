export interface PostAuthor {
  id: string;
  username: string;
  avatarUrl: string;
  locationName?: string;
}

export interface HomePost {
  id: string;
  author: PostAuthor;
  imageUrl: string;
  caption: string;
  likesCount: number;
  commentsCount: number;
  createdAt: string;
}

export interface QuickHighlight {
  id: string;
  title: string;
  subtitle?: string;
  memberCountText?: string;
  dateRangeText?: string;
  imageUrl: string;
}

export type FeedTabType = 'for-you' | 'friend';
