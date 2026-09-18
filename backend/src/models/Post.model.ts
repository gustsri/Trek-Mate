export interface PostModel {
  id: string;
  authorId: string;
  locationName: string;
  caption?: string;
  imageUrl: string;
  likesCount: number;
  commentsCount: number;
  createdAt: Date;
}
