import React from 'react';

export type TabKey = 'home' | 'explore' | 'find' | 'chat' | 'profile';

export interface BottomTabBarProps {
  activeTab?: TabKey;
  onSelectTab?: (tab: TabKey) => void;
}

// 5 Navigation Tabs from the UI mockups:
// 1. Home
// 2. Explore (Map/Pin icon)
// 3. Find (Search icon)
// 4. Chat (Chat bubble with dots)
// 5. Profile (Avatar image)
export const BottomTabBar: React.FC<BottomTabBarProps> = () => {
  return null;
};
