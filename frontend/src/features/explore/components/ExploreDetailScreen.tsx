'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ScreenHeader } from '@/components/navigation/ScreenHeader';
import { Icon } from '@/components/ui/Icon';
import { demoImages, demoPins } from '@/mocks/demoData';

export function ExploreDetailScreen({ pinId }: { pinId: string }) {
  const pin = demoPins.find((item) => item.id === pinId) ?? demoPins[0];
  const [saved, setSaved] = useState(false);
  return <div className="min-h-full bg-[#050906] text-[#f2eedf]"><ScreenHeader backHref="/explore" title="Explore" /><main className="pb-12"><div className="relative h-80 bg-cover bg-center lg:h-[52vh]" style={{ backgroundImage: `linear-gradient(0deg, #050906 0%, rgba(5,9,6,.05) 75%), url(${pin.thumbnailUrl ?? demoImages.forest})` }}><div className="absolute bottom-8 inset-x-5 mx-auto max-w-5xl"><span className="rounded-full bg-[#f2eedf] px-3 py-1 text-xs font-semibold text-[#18241b]">{pin.region}</span><h1 className="mt-3 text-4xl font-semibold lg:text-6xl">{pin.name}</h1></div></div><div className="mx-auto max-w-5xl px-5 lg:px-8"><div className="-mt-3 grid gap-3 sm:grid-cols-3"><Weather icon="sun" label="Weather" value="24° C" /><Weather icon="location" label="Altitude" value="1,633 m" /><Weather icon="clock" label="Best time" value="06:00" /></div><section className="mt-9 grid gap-8 lg:grid-cols-[1.4fr_.8fr]"><div><h2 className="text-2xl font-semibold">About this destination</h2><p className="mt-3 leading-7 text-[#aebcaf]">A scenic destination for a thoughtful day outdoors. Save it to your watchlist or explore community trips heading here.</p><div className="mt-8 rounded-[1.5rem] bg-[#142217] p-5"><div className="flex items-center justify-between"><h3 className="text-xl font-semibold">Community rating</h3><span className="text-2xl font-semibold">4.8/5</span></div><div className="mt-4 h-2 overflow-hidden rounded-full bg-[#2c3e30]"><div className="h-full w-[88%] rounded-full bg-[#d4af37]" /></div><p className="mt-3 text-sm text-[#9ba99d]">Loved for the view, shade, and cool weather.</p></div></div><aside className="h-fit rounded-[1.75rem] bg-[#f2eedf] p-5 text-[#18241b] lg:sticky lg:top-8"><div className="flex items-start justify-between"><div><p className="text-sm text-[#637065]">Plan your visit</p><h2 className="mt-1 text-2xl font-semibold">{pin.name}</h2></div><button aria-label="Save destination" className="rounded-full bg-[#dfe5d9] p-3" onClick={() => setSaved((value) => !value)} type="button"><Icon name="bookmark" size={22} /></button></div><Link className="mt-5 flex w-full items-center justify-center rounded-xl bg-[#18241b] px-5 py-3.5 font-semibold text-[#f2eedf]" href="/find">Find a trip</Link><button className="mt-3 w-full rounded-xl border border-[#b6c1b4] px-5 py-3 text-sm" onClick={() => setSaved(true)} type="button">{saved ? 'Saved to watchlist' : 'Add to watchlist'}</button></aside></section></div></main></div>;
}

function Weather({ icon, label, value }: { icon: 'sun' | 'location' | 'clock'; label: string; value: string }) {
  return <div className="rounded-2xl bg-[#142217] p-4"><Icon name={icon} size={22} /><p className="mt-3 text-xs text-[#8b9b8f]">{label}</p><p className="mt-1 text-sm font-semibold">{value}</p></div>;
}
