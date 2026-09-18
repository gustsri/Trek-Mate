export class ExploreService {
  async getPins() {
    // Returns map pins for Thailand exploration view
    return [
      { id: 'pin-1', name: 'Mae Tia Waterfall', latitude: 18.5, longitude: 98.6 },
      { id: 'pin-2', name: 'Phu Soi Dao', latitude: 17.7, longitude: 100.9 },
      { id: 'pin-3', name: 'Doi Khun Tan', latitude: 18.4, longitude: 99.2 },
    ];
  }
}

export const exploreService = new ExploreService();
