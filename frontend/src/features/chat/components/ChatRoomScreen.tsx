'use client';

import { useMemo, useState } from 'react';
import { ScreenHeader } from '@/components/navigation/ScreenHeader';
import { Avatar } from '@/components/ui/Avatar';
import { Icon } from '@/components/ui/Icon';
import { demoAvatar, demoMessages, demoRooms } from '@/mocks/demoData';

export function ChatRoomScreen({ roomId }: { roomId: string }) {
  const room = demoRooms.find((item) => item.id === roomId) ?? demoRooms[0];
  const [messages, setMessages] = useState(demoMessages);
  const [draft, setDraft] = useState('');
  const visibleMessages = useMemo(() => messages.filter((message) => message.roomId === room.id), [messages, room.id]);

  function sendMessage() {
    const text = draft.trim();
    if (!text) return;
    setMessages((current) => [...current, { id: `message-${Date.now()}`, roomId: room.id, senderId: 'usr-1', text, sentAt: 'now', isMe: true }]);
    setDraft('');
  }

  return (
      <div className="flex min-h-full flex-col bg-[#050906] text-[#f2eedf]"><ScreenHeader backHref="/chat" title={room.title} /><main className="flex-1 px-4 pb-32 pt-6 lg:mx-auto lg:w-full lg:max-w-4xl lg:px-8"><div className="mb-5 flex items-center gap-3 text-sm text-[#8b9b8f]"><Avatar alt={room.title} size="sm" src={demoAvatar} /><span>{room.isGroup ? 'Group trip chat' : 'Direct chat'}</span><span className="ml-auto rounded-full bg-[#2d5a3c] px-3 py-1 text-xs text-[#f2eedf]">● Active</span></div><div className="space-y-4">{visibleMessages.map((message) => <div className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`} key={message.id}><div className={`max-w-[82%] rounded-[1.4rem] px-5 py-3 text-lg leading-tight ${message.isMe ? 'rounded-br-md bg-[#496d4e]' : 'rounded-bl-md bg-[#203a28]'}`}><p>{message.text}</p><p className="mt-1 text-right text-[10px] text-[#c2cec1]/70">{message.sentAt}</p></div></div>)}</div></main><form className="fixed inset-x-0 bottom-0 z-20 flex gap-3 bg-[#050906]/95 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl lg:static lg:mx-auto lg:w-full lg:max-w-4xl lg:bg-transparent" noValidate onSubmit={(event) => { event.preventDefault(); sendMessage(); }}><button aria-label="Add attachment (coming soon)" className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#496d4e] text-[#18241b]" disabled type="button"><Icon name="plus" size={24} /></button><input aria-label="Message" className="min-w-0 flex-1 rounded-full bg-[#203a28] px-5 text-lg text-[#f2eedf] outline-none placeholder:text-[#879084] focus:ring-2 focus:ring-[#b9d1b7]" onChange={(event) => setDraft(event.target.value)} placeholder="Aa" value={draft} /><button aria-label="Send message" className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#f2eedf] text-[#18241b] disabled:opacity-40" disabled={!draft.trim()} type="submit"><Icon name="paper-plane" size={22} /></button></form></div>
  );
}
