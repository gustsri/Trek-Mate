import { useState } from 'react';

export interface AuthState {
  isAuthenticated: boolean;
  userId: string | null;
  token: string | null;
}

// Global Auth State placeholder (can be swapped with Zustand or React Context)
export function useAuthStore() {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    userId: null,
    token: null,
  });

  return {
    authState,
    setAuthState,
  };
}
