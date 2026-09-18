export interface UserModel {
  id: string;
  username: string;
  displayName: string;
  email: string;
  passwordHash: string;
  avatarUrl?: string;
  isVerified: boolean;
  friendsCount: number;
  tripsCount: number;
  createdAt: Date;
  updatedAt: Date;
}
