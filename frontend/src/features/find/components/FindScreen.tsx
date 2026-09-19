'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ScreenHeader } from '@/components/navigation/ScreenHeader';
import { Icon } from '@/components/ui/Icon';
import { allRegions, demoTrips } from '@/mocks/demoData';
import type { RegionType } from '../types/trip.types';

export function FindScreen() {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState<RegionType>('All');
  const trips = useMemo(() => demoTrips.filter((trip) => {
    const matchesRegion = region === 'All' || trip.region === region;
    const query = search.trim().toLowerCase();
    return matchesRegion && (!query || `${trip.title} ${trip.description}`.toLowerCase().includes(query));
  }), [region, search]);

  return (
    <div className="trek-pattern min-h-full text-[#f2eedf]">
      <ScreenHeader onSearchChange={setSearch} searchValue={search} title="Find" />
      <main className="px-4 pb-10 pt-7 lg:px-8">
        <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-wrap">{allRegions.map((item) => <button aria-pressed={region === item} className={`shrink-0 rounded-full border px-5 py-2.5 text-sm transition ${region === item ? 'border-[#2d5a3c] bg-[#2d5a3c] text-[#f2eedf]' : 'border-[#6f7b70] text-[#c4cbbf] hover:border-[#f2eedf]'}`} key={item} onClick={() => setRegion(item)} type="button">{item}</button>)}</div>
        {trips.length ? <div className="mt-6 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">{trips.map((trip) => <Link className="group relative min-h-52 overflow-hidden rounded-[1.75rem] bg-cover bg-center shadow-lg" href={`/trips/${trip.id}`} key={trip.id} style={{ backgroundImage: `linear-gradient(0deg, rgba(4, 12, 7, .93), rgba(4, 12, 7, .05) 70%), url(${trip.coverImageUrl})` }}><div className="absolute inset-x-5 bottom-4"><div className="flex items-end justify-between gap-3"><div><h2 className="text-2xl font-semibold group-hover:text-white">{trip.title}</h2><p className="mt-1 line-clamp-1 text-sm text-[#b4beb2]">{trip.description}</p></div><span className="shrink-0 text-right"><span className="flex items-center gap-1 text-lg"><Icon name="users" size={19} /> {trip.currentMembers}/{trip.maxMembers}</span><span className="block text-xs text-[#b4beb2]">{trip.dateRangeText}</span></span></div></div></Link>)}</div> : <div className="mt-8 rounded-[1.75rem] border border-dashed border-white/20 p-10 text-center"><h2 className="text-xl font-semibold">No trips found</h2><p className="mt-2 text-sm text-[#8b9b8f]">Try another region or search term.</p><button className="mt-5 rounded-full bg-[#f2eedf] px-5 py-3 text-sm font-medium text-[#18241b]" onClick={() => { setSearch(''); setRegion('All'); }} type="button">Clear filters</button></div>}
      </main>
    </div>
  );
}
