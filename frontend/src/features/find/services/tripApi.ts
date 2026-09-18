import { TripItem, TripFilterQuery } from '../types/trip.types';

export const tripApi = {
  getTrips: async (query?: TripFilterQuery): Promise<TripItem[]> => {
    // Placeholder for backend API call (e.g. GET /api/trips?region=...&keyword=...)
    return [];
  },

  getTripById: async (id: string): Promise<TripItem | null> => {
    // Placeholder for backend API call (e.g. GET /api/trips/:id)
    return null;
  }
};
