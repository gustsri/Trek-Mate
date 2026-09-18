import { UserProfile, UserMedal, TripHistoryItem, UserPostItem } from '../types/profile.types';

export const profileApi = {
  getMyProfile: async (): Promise<UserProfile | null> => {
    // Placeholder for backend API call (e.g. GET /api/users/me)
    return null;
  },

  getMedals: async (userId: string): Promise<UserMedal[]> => {
    // Placeholder for backend API call (e.g. GET /api/users/:id/medals)
    return [];
  },

  getHistory: async (userId: string): Promise<TripHistoryItem[]> => {
    // Placeholder for backend API call (e.g. GET /api/users/:id/history)
    return [];
  },

  getUserPosts: async (userId: string): Promise<UserPostItem[]> => {
    // Placeholder for backend API call (e.g. GET /api/users/:id/posts)
    return [];
  }
};
