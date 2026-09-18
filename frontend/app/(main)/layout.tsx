import React from 'react';
import { MobileContainer } from '@/components/layout/MobileContainer';
import { BottomTabBar } from '@/components/navigation/BottomTabBar';

export default function MainAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MobileContainer>
      <main className="flex-1 w-full overflow-y-auto">
        {children}
      </main>
      <BottomTabBar />
    </MobileContainer>
  );
}
