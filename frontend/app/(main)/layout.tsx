import React from 'react';
import { MobileContainer } from '@/components/layout/MobileContainer';
import { BottomTabBar, DesktopSidebar } from '@/components/navigation';

export default function MainAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MobileContainer>
      <div className="flex min-h-screen w-full">
        <DesktopSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <main className="min-h-0 flex-1 overflow-y-auto pb-20 lg:pb-0">
            {children}
          </main>
          <BottomTabBar />
        </div>
      </div>
    </MobileContainer>
  );
}
