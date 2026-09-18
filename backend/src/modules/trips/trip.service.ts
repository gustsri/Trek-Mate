import { TripQueryDto } from './trip.dto';

export class TripService {
  async getTrips(_query?: TripQueryDto) {
    // Logic to query trips filtered by region/keyword
    return [];
  }

  async getTripById(_id: string) {
    return null;
  }
}

export const tripService = new TripService();
