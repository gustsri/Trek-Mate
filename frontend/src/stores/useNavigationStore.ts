import { useState } from 'react';
import { TabKey } from '../components/navigation/BottomTabBar';

export function useNavigationStore(initialTab: TabKey = 'home') {
  const [activeTab, setActiveTab] = useState<TabKey>(initialTab);

  return {
    activeTab,
    setActiveTab,
  };
}
