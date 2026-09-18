export interface ChatParticipant {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface ChatRoomItem {
  id: string;
  title: string;
  isGroup: boolean;
  avatarUrls: string[];
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
}

export interface ChatMessage {
  id: string;
  roomId: string;
  senderId: string;
  text: string;
  sentAt: string;
  isMe: boolean;
}
