'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ScreenHeader } from '@/components/navigation/ScreenHeader';
import { Avatar } from '@/components/ui/Avatar';
import { Icon, type IconName } from '@/components/ui/Icon';
import { demoHighlights, demoPosts, demoTrips } from '@/mocks/demoData';
import type { FeedTabType, HomePost } from '../types/home.types';

const actions: { label: string; href: string; icon: IconName }[] = [
  { label: 'Add Yours', href: '/trips/create', icon: 'plus' },
  { label: 'History', href: '/history', icon: 'clock' },
  { label: 'Social', href: '/social', icon: 'users' },
  { label: 'Watchlist', href: '/watchlist', icon: 'bookmark' },
  { label: 'Medal', href: '/medal', icon: 'medal' },
];

function PostCard({ post }: { post: HomePost }) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] bg-[#0d1a11] shadow-[0_14px_35px_rgba(0,0,0,0.24)]">
      <div className="relative aspect-[0.84] min-h-[360px] bg-cover bg-center" style={{ backgroundImage: `linear-gradient(0deg, rgba(5, 14, 8, .16), rgba(5, 14, 8, .04)), url(${post.imageUrl})` }}>
        <div className="absolute inset-x-3 top-3 flex items-center gap-3 rounded-full bg-[#122016]/95 px-3 py-2.5 backdrop-blur-md">
          <Avatar alt={post.author.username} size="md" src={post.author.avatarUrl} />
          <div className="min-w-0 leading-tight"><p className="truncate text-sm font-medium text-[#f2eedf]">{post.author.username}</p><p className="truncate text-xs text-[#8b9b8f]">{post.author.locationName}</p></div>
          <button aria-label="More post options" className="ml-auto rounded-full p-2 text-[#f2eedf]" onClick={() => undefined} type="button"><Icon name="more" size={24} /></button>
        </div>
      </div>
      <div className="flex items-center gap-4 px-4 py-4 text-[#f2eedf]"><span className="flex items-center gap-1.5 text-sm"><Icon name="heart" size={23} /><span className="text-xs text-[#a9b2a6]">{post.likesCount}</span></span><span className="flex items-center gap-1.5 text-sm"><Icon name="comment" size={23} /><span className="text-xs text-[#a9b2a6]">{post.commentsCount}</span></span><div className="ml-auto leading-tight text-right"><p className="text-sm font-medium">{post.author.username}</p><p className="text-xs text-[#8b9b8f]">{post.caption} · {post.createdAt}</p></div></div>
    </article>
  );
}

export function HomeScreen() {
  const [activeTab, setActiveTab] = useState<FeedTabType>('friend');
  const [search, setSearch] = useState('');
  const visibleHighlights = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return demoHighlights;
    return demoHighlights.filter((item) => `${item.title} ${item.subtitle ?? ''}`.toLowerCase().includes(query));
  }, [search]);

  return (
    <div className="min-h-full bg-[#0e1811] text-[#f2eedf]">
      <ScreenHeader onSearchChange={setSearch} searchPlaceholder="Search trails, trips, or friends" searchValue={search} title="Home" />
      <main className="px-4 pb-8 pt-7 lg:px-8 lg:pt-8">
        <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_18rem] xl:gap-7">
          <div className="min-w-0">
            <section aria-label="Trip highlights" className="overflow-x-auto pb-2 lg:grid lg:grid-cols-2 lg:gap-5 lg:overflow-visible">
              {(visibleHighlights.length ? visibleHighlights : demoHighlights).map((item) => (
                <Link className="relative mr-4 inline-block h-32 w-[17.5rem] overflow-hidden rounded-[1.5rem] bg-cover bg-center shadow-lg lg:mr-0 lg:h-40 lg:w-full" href={`/trips/${item.id.replace('highlight-', 'trip-')}`} key={item.id} style={{ backgroundImage: `linear-gradient(0deg, rgba(5, 14, 8, .9), rgba(5, 14, 8, .05) 75%), url(${item.imageUrl})` }}>
                  <span className="absolute inset-x-4 bottom-3"><span className="flex items-end justify-between gap-2"><span className="text-lg font-semibold leading-none">{item.title}</span>{item.memberCountText && <span className="text-sm font-medium">♙ {item.memberCountText}</span>}</span>{item.dateRangeText && <span className="mt-1 block text-right text-[10px] text-[#c3cbbf]">{item.dateRangeText}</span>}{item.subtitle && <span className="mt-1 block truncate text-[10px] text-[#c3cbbf]">{item.subtitle}</span>}</span>
                </Link>
              ))}
            </section>

            <section aria-label="Quick actions" className="mt-7 grid grid-cols-5 gap-2 lg:max-w-2xl">
              {actions.map((action) => <Link className="flex min-w-0 flex-col items-center gap-2 text-center text-[11px] text-[#f2eedf] transition hover:text-white" href={action.href} key={action.label}><span className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#f2eedf]"><Icon name={action.icon} size={27} /></span><span className="truncate">{action.label}</span></Link>)}
            </section>

            <section className="-mx-4 mt-7 rounded-t-[2rem] bg-[#142217] px-4 pb-8 pt-5 lg:mx-0 lg:rounded-[2rem] lg:px-6">
              <div className="flex items-center justify-between gap-4"><h2 className="text-xl font-semibold">Feed</h2><div className="flex items-center gap-1 rounded-full bg-[#0e1811]/40 p-1 text-sm text-[#8b9b8f]" role="tablist">{(['for-you', 'friend'] as FeedTabType[]).map((tab) => <button aria-selected={activeTab === tab} className={`rounded-full px-4 py-2 transition ${activeTab === tab ? 'bg-[#253529] text-[#f2eedf] shadow-inner' : ''}`} key={tab} onClick={() => setActiveTab(tab)} role="tab" type="button">{tab === 'for-you' ? 'For you' : 'Friend'}</button>)}</div></div>
              <div className="mt-5 grid gap-6 lg:grid-cols-2">{demoPosts.map((post) => <PostCard key={post.id} post={post} />)}</div>
            </section>
          </div>

          <aside className="hidden space-y-5 xl:block">
            <section className="trek-pattern rounded-[1.75rem] p-5"><p className="text-xs uppercase tracking-[0.18em] text-[#8b9b8f]">This week</p><h2 className="mt-2 text-2xl font-semibold">Find your next view.</h2><p className="mt-2 text-sm leading-6 text-[#b4beb2]">Small trips, good company, and one more reason to leave early.</p><Link className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#f2eedf] px-4 py-2 text-sm font-medium text-[#18241b]" href="/find">Browse trips <Icon name="arrow-right" size={17} /></Link></section>
            <section className="rounded-[1.75rem] border border-white/10 bg-[#142217] p-5"><div className="flex items-center justify-between"><h2 className="font-semibold">Popular nearby</h2><Link className="text-xs text-[#b9d1b7]" href="/explore">View map</Link></div><div className="mt-4 space-y-3">{demoTrips.slice(0, 3).map((trip) => <Link className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-white/5" href={`/trips/${trip.id}`} key={trip.id}><span className="h-12 w-12 rounded-xl bg-cover bg-center" style={{ backgroundImage: `url(${trip.coverImageUrl})` }} /><span className="min-w-0"><span className="block truncate text-sm font-medium">{trip.title}</span><span className="block text-xs text-[#8b9b8f]">{trip.currentMembers}/{trip.maxMembers} mates</span></span></Link>)}</div></section>
          </aside>
        </div>
      </main>
    </div>
  );
}
