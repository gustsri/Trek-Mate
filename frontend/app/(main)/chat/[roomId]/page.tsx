import { ChatRoomScreen } from '@/features/chat/components/ChatRoomScreen';

export default async function ChatRoomPage({ params }: { params: Promise<{ roomId: string }> }) {
  const { roomId } = await params;
  return <ChatRoomScreen roomId={roomId} />;
}
