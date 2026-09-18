export class UserService {
  async getProfile(userId: string) {
    // Logic to retrieve user profile details
    return {
      id: userId,
      username: 'thanakrit_bost',
      displayName: 'Thanakrit Anusornwutt',
      isVerified: true,
      friendsCount: 40,
      tripsCount: 5,
    };
  }

  async getMedals(_userId: string) {
    return [];
  }

  async getHistory(_userId: string) {
    return [];
  }
}

export const userService = new UserService();
