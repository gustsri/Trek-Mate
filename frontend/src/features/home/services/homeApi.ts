import { HomePost, QuickHighlight, FeedTabType } from '../types/home.types';

export const homeApi = {
  getHighlights: async (): Promise<QuickHighlight[]> => {
    // Placeholder for backend API call (e.g. GET /api/feed/highlights)
    return [];
  },

  getFeed: async (tab: FeedTabType): Promise<HomePost[]> => {
    // Placeholder for backend API call (e.g. GET /api/feed?tab=...)
    return [];
  }
};
