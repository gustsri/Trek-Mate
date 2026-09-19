'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ScreenHeader } from '@/components/navigation/ScreenHeader';
import { Avatar } from '@/components/ui/Avatar';
import { Icon } from '@/components/ui/Icon';
import { demoRooms } from '@/mocks/demoData';

export function ChatScreen() {
  const [search, setSearch] = useState('');
  const rooms = useMemo(() => demoRooms.filter((room) => !search || `${room.title} ${room.lastMessage}`.toLowerCase().includes(search.toLowerCase())), [search]);

  return (
    <div className="min-h-full bg-[#050906] text-[#f2eedf]"><ScreenHeader onSearchChange={setSearch} searchPlaceholder="Search friends or trips" searchValue={search} title="Chat" /><main className="pb-10 pt-3 lg:px-8 lg:pt-8"><div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-[#0d150f]">{rooms.map((room) => <Link className="flex items-center gap-5 border-b border-white/10 px-5 py-5 transition hover:bg-white/5 lg:px-7" href={`/chat/${room.id}`} key={room.id}><Avatar alt={room.title} size="lg" src={room.avatarUrls[0]} /><div className="min-w-0 flex-1"><h2 className="truncate text-xl font-semibold">{room.title}</h2><p className="mt-1 truncate text-base text-[#8b9b8f]">{room.lastMessage}</p></div><div className="flex flex-col items-end gap-2 text-sm text-[#8b9b8f]"><span>{room.lastMessageTime}</span>{room.unreadCount > 0 && <span className="grid h-7 min-w-7 place-items-center rounded-full bg-[#f2eedf] px-2 font-semibold text-[#18241b]">{room.unreadCount}</span>}</div></Link>)}</div><Link aria-label="Start a new chat" className="fixed bottom-24 right-5 grid h-16 w-16 place-items-center rounded-full bg-[#f2eedf] text-[#18241b] shadow-xl lg:bottom-8 lg:right-10" href="/social"><Icon name="plus" size={31} /></Link></main></div>
  );
}
