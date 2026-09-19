'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon, type IconName } from '../ui/Icon';

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
  const pathname = usePathname();
  const tabs: { key: TabKey; label: string; href: string; icon: IconName }[] = [
    { key: 'home', label: 'Home', href: '/home', icon: 'home' },
    { key: 'explore', label: 'Explore', href: '/explore', icon: 'map' },
    { key: 'find', label: 'Find', href: '/find', icon: 'search' },
    { key: 'chat', label: 'Chat', href: '/chat', icon: 'chat' },
    { key: 'profile', label: 'Profile', href: '/profile', icon: 'user' },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-white/5 bg-[#142217]/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 text-[#f2eedf] backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-5 gap-2">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link className={`flex flex-col items-center gap-1 text-[10px] transition ${isActive ? 'text-[#f2eedf]' : 'text-[#8b9b8f]'}`} href={tab.href} key={tab.key}>
              <Icon name={tab.icon} size={25} strokeWidth={isActive ? 2.3 : 1.8} />
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
