export interface ChatRoomModel {
  id: string;
  name?: string;
  isGroup: boolean;
  participantIds: string[];
  lastMessage?: string;
  lastMessageAt?: Date;
  createdAt: Date;
}
