'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoLockup } from '../brand/LogoLockup';
import { Icon, type IconName } from '../ui/Icon';

const navigation: { href: string; label: string; icon: IconName }[] = [
  { href: '/home', label: 'Home', icon: 'home' },
  { href: '/explore', label: 'Explore', icon: 'map' },
  { href: '/find', label: 'Find trips', icon: 'search' },
  { href: '/chat', label: 'Chat', icon: 'chat' },
  { href: '/profile', label: 'Profile', icon: 'user' },
];

export function DesktopSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-white/5 bg-[#101d14] px-5 py-7 text-[#f2eedf] lg:flex xl:w-72 xl:px-7">
      <LogoLockup inverse />
      <p className="mt-2 text-sm text-[#8b9b8f]">Walk farther together.</p>

      <nav aria-label="Primary navigation" className="mt-12 space-y-2">
        {navigation.map((item) => {
          const active = pathname === item.href || (item.href !== '/home' && pathname.startsWith(item.href));
          return (
            <Link className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${active ? 'bg-[#2d5a3c] text-[#f2eedf]' : 'text-[#9ba79c] hover:bg-white/5 hover:text-[#f2eedf]'}`} href={item.href} key={item.href}>
              <Icon name={item.icon} size={22} strokeWidth={active ? 2.2 : 1.8} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-10 border-t border-white/10 pt-7">
        <p className="px-4 text-[11px] uppercase tracking-[0.18em] text-[#718073]">Your trailboard</p>
        <div className="mt-3 space-y-1 text-sm text-[#9ba79c]">
          <Link className="flex items-center gap-3 rounded-xl px-4 py-2 hover:bg-white/5 hover:text-[#f2eedf]" href="/history"><Icon name="clock" size={19} /> History</Link>
          <Link className="flex items-center gap-3 rounded-xl px-4 py-2 hover:bg-white/5 hover:text-[#f2eedf]" href="/watchlist"><Icon name="bookmark" size={19} /> Watchlist</Link>
          <Link className="flex items-center gap-3 rounded-xl px-4 py-2 hover:bg-white/5 hover:text-[#f2eedf]" href="/medal"><Icon name="medal" size={19} /> Medals</Link>
        </div>
      </div>

      <Link className="mt-auto flex items-center justify-center gap-2 rounded-full bg-[#f2eedf] px-5 py-3 font-medium text-[#18241b] transition hover:bg-white" href="/trips/create">
        <Icon name="plus" size={20} /> Create trip
      </Link>
    </aside>
  );
}
