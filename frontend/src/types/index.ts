export * from '../features/home/types/home.types';
export * from '../features/explore/types/explore.types';
export * from '../features/find/types/trip.types';
export * from '../features/chat/types/chat.types';
export * from '../features/profile/types/profile.types';

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  timestamp: string;
}
