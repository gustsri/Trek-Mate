'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ScreenHeader } from '@/components/navigation/ScreenHeader';
import { Icon } from '@/components/ui/Icon';
import { demoPins } from '@/mocks/demoData';
import type { MapLocationPin } from '../types/explore.types';

function MapSurface({ selectedPin, onSelect }: { selectedPin: MapLocationPin | null; onSelect: (pin: MapLocationPin) => void }) {
  return (
    <div className="relative min-h-[calc(100vh-13rem)] overflow-hidden rounded-[2rem] bg-[#e7e2d0] shadow-inner lg:min-h-[calc(100vh-15rem)]">
      <div className="absolute inset-0 opacity-75" style={{ backgroundImage: 'radial-gradient(circle at 14px 14px, #294531 0 12px, transparent 12.7px), radial-gradient(circle at 46px 46px, #294531 0 7px, transparent 7.8px)', backgroundPosition: '0 0, 12px 12px', backgroundSize: '68px 68px' }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(242,238,223,.18)_58%,rgba(242,238,223,.75)_100%)]" />
      {demoPins.map((pin, index) => {
        const positions = ['left-[13%] top-[20%]', 'left-[45%] top-[31%]', 'left-[70%] top-[54%]', 'left-[35%] top-[70%]', 'left-[78%] top-[25%]'];
        return <button aria-label={`Open ${pin.name}`} className={`absolute ${positions[index]} z-10 grid h-11 w-11 place-items-center rounded-full bg-[#ff5a5f] text-[#18241b] shadow-lg transition hover:scale-110 ${selectedPin?.id === pin.id ? 'ring-4 ring-[#f2eedf] ring-offset-2 ring-offset-[#ff5a5f]' : ''}`} key={pin.id} onClick={() => onSelect(pin)} type="button"><Icon name="location" size={25} /></button>;
      })}
      <div className="absolute right-5 top-5 grid h-24 w-24 place-items-center rounded-full bg-[#f2eedf]/90 text-[#18241b] shadow-lg backdrop-blur"><div className="relative h-12 w-12 rounded-full border-4 border-[#18241b]"><span className="absolute -top-5 left-1/2 -translate-x-1/2 font-bold">N</span><span className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-bold">S</span><span className="absolute -left-5 top-1/2 -translate-y-1/2 font-bold">W</span><span className="absolute -right-5 top-1/2 -translate-y-1/2 font-bold">E</span><span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#18241b]" /></div></div>
      <div className="absolute bottom-5 right-5 flex flex-col overflow-hidden rounded-full bg-[#f2eedf]/90 shadow-lg"><button aria-label="Zoom in" className="grid h-12 w-12 place-items-center text-2xl text-[#18241b]" onClick={() => undefined} type="button">+</button><button aria-label="Zoom out" className="grid h-12 w-12 place-items-center border-t border-[#18241b]/15 text-2xl text-[#18241b]" onClick={() => undefined} type="button">−</button></div>
    </div>
  );
}

export function ExploreScreen() {
  const [search, setSearch] = useState('');
  const [selectedPin, setSelectedPin] = useState<MapLocationPin | null>(null);
  const filteredPins = useMemo(() => demoPins.filter((pin) => !search || pin.name.toLowerCase().includes(search.toLowerCase())), [search]);

  return (
    <div className="min-h-full bg-[#0e1811] text-[#f2eedf]">
      <ScreenHeader onSearchChange={setSearch} searchPlaceholder="Where you want to go ?" searchValue={search} title="Explore" />
      <main className="px-4 pb-8 pt-7 lg:px-8 lg:pt-8"><div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_22rem]"><MapSurface onSelect={setSelectedPin} selectedPin={selectedPin} /><aside className="hidden space-y-4 xl:block"><div className="rounded-[1.75rem] bg-[#142217] p-5"><p className="text-xs uppercase tracking-[0.18em] text-[#8b9b8f]">Explore nearby</p><div className="mt-4 space-y-2">{filteredPins.map((pin) => <button className={`flex w-full items-center gap-3 rounded-2xl p-2 text-left transition ${selectedPin?.id === pin.id ? 'bg-[#2d5a3c]' : 'hover:bg-white/5'}`} key={pin.id} onClick={() => setSelectedPin(pin)} type="button"><span className="h-12 w-12 rounded-xl bg-cover bg-center" style={{ backgroundImage: `url(${pin.thumbnailUrl})` }} /><span><span className="block text-sm font-medium">{pin.name}</span><span className="text-xs text-[#8b9b8f]">{pin.region}</span></span></button>)}</div></div></aside></div>{selectedPin && <div className="fixed inset-x-3 bottom-24 z-20 rounded-[1.75rem] bg-[#142217]/95 p-4 shadow-2xl backdrop-blur-xl lg:absolute lg:inset-x-auto lg:bottom-8 lg:right-8 lg:w-80"><div className="flex gap-3"><span className="h-16 w-16 rounded-2xl bg-cover bg-center" style={{ backgroundImage: `url(${selectedPin.thumbnailUrl})` }} /><div className="min-w-0"><h2 className="font-semibold">{selectedPin.name}</h2><p className="mt-1 text-sm text-[#8b9b8f]">{selectedPin.region} · 19°C · Moderate</p></div><button aria-label="Close location preview" className="ml-auto self-start rounded-full p-1 text-[#8b9b8f]" onClick={() => setSelectedPin(null)} type="button"><Icon name="x" size={18} /></button></div><Link className="mt-4 flex items-center justify-center rounded-full bg-[#f2eedf] px-4 py-3 text-sm font-semibold text-[#18241b]" href={`/explore/${selectedPin.id}`}>View destination</Link></div>}</main>
    </div>
  );
}
