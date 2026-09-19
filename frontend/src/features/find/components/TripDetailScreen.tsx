'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ScreenHeader } from '@/components/navigation/ScreenHeader';
import { Avatar } from '@/components/ui/Avatar';
import { Icon } from '@/components/ui/Icon';
import { demoAvatar, demoPosts, demoTrips } from '@/mocks/demoData';

export function TripDetailScreen({ tripId }: { tripId: string }) {
  const trip = demoTrips.find((item) => item.id === tripId) ?? demoTrips[0];
  const [requested, setRequested] = useState(false);
  return <div className="min-h-full bg-[#050906] text-[#f2eedf]"><ScreenHeader backHref="/find" title="Trip detail" /><main className="pb-12"><div className="relative h-[45vh] min-h-80 bg-cover bg-center lg:h-[52vh]" style={{ backgroundImage: `linear-gradient(0deg, #050906 2%, rgba(5,9,6,.08) 70%), url(${trip.coverImageUrl})` }}><div className="absolute inset-x-5 bottom-8 mx-auto max-w-5xl"><span className="rounded-full bg-[#f2eedf] px-3 py-1 text-xs font-semibold text-[#18241b]">{trip.region}</span><h1 className="mt-3 text-4xl font-semibold lg:text-6xl">{trip.title}</h1><p className="mt-2 max-w-xl text-[#d5ddcf]">{trip.description}</p></div></div><div className="mx-auto grid max-w-5xl gap-8 px-5 lg:grid-cols-[1.4fr_.8fr] lg:px-8"><section><div className="grid grid-cols-2 gap-3 sm:grid-cols-3"><Info label="Date" value={trip.dateRangeText} icon="calendar" /><Info label="Meet" value="Bangkok" icon="location" /><Info label="Seats" value={`${trip.currentMembers}/${trip.maxMembers}`} icon="users" /></div><div className="mt-8"><h2 className="text-2xl font-semibold">About this trip</h2><p className="mt-3 leading-7 text-[#aebcaf]">A community trip for people who want to explore slowly, share the route, and make the journey memorable. Details can be connected to the trip API later without changing this presentation layer.</p></div><div className="mt-8"><h2 className="text-2xl font-semibold">Trip mates</h2><div className="mt-4 flex items-center gap-3"><Avatar alt="Thanakrit" size="lg" src={demoAvatar} /><Avatar alt="Mate" size="lg" src={demoPosts[0].author.avatarUrl} /><span className="grid h-12 w-12 place-items-center rounded-full border border-dashed border-[#7d8c7e] text-xl text-[#b9d1b7]">+{trip.maxMembers - trip.currentMembers}</span><span className="text-sm text-[#9ba99d]">{trip.currentMembers} joined</span></div></div></section><aside className="h-fit rounded-[1.75rem] bg-[#142217] p-5 lg:sticky lg:top-8"><p className="text-sm text-[#9ba99d]">Ready to go?</p><h2 className="mt-1 text-2xl font-semibold">Join this trip</h2><button className="mt-5 w-full rounded-xl bg-[#f2eedf] px-5 py-3.5 font-semibold text-[#18241b]" onClick={() => setRequested(true)} type="button">{requested ? 'Request sent' : 'Request to join'}</button><Link className="mt-3 flex w-full items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm" href="/chat/room-1">Message organiser</Link></aside></div></main></div>;
}

function Info({ icon, label, value }: { icon: 'calendar' | 'location' | 'users'; label: string; value: string }) {
  return <div className="rounded-2xl bg-[#142217] p-4"><Icon name={icon} size={22} /><p className="mt-3 text-xs text-[#8b9b8f]">{label}</p><p className="mt-1 text-sm font-semibold">{value}</p></div>;
}
