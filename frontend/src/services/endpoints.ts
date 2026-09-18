export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
  },
  FEED: {
    HIGHLIGHTS: '/feed/highlights',
    POSTS: '/feed/posts',
  },
  EXPLORE: {
    PINS: '/explore/pins',
    LOCATION_DETAILS: (id: string) => `/explore/pins/${id}`,
  },
  TRIPS: {
    LIST: '/trips',
    DETAILS: (id: string) => `/trips/${id}`,
    JOIN: (id: string) => `/trips/${id}/join`,
  },
  CHAT: {
    ROOMS: '/chat/rooms',
    MESSAGES: (roomId: string) => `/chat/rooms/${roomId}/messages`,
  },
  USERS: {
    PROFILE: (id: string) => `/users/${id}`,
    MEDALS: (id: string) => `/users/${id}/medals`,
    HISTORY: (id: string) => `/users/${id}/history`,
    POSTS: (id: string) => `/users/${id}/posts`,
  },
} as const;
