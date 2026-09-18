import { SendMessageDto } from './chat.dto';

export class ChatService {
  async getRooms(_userId: string) {
    return [
      { id: 'room-1', title: 'Kamut', lastMessage: 'เรา โอ๊ด ฟอส มูมู่', lastMessageTime: '16:04', unreadCount: 1 },
      { id: 'room-2', title: 'Phu Kra Dung', lastMessage: 'CHK : ไปวันไหน', lastMessageTime: '1:00', unreadCount: 0 },
      { id: 'room-3', title: 'Kongpop Lai', lastMessage: 'me : ไม่น่าจะว่างนะวันนั้น', lastMessageTime: 'Yesterday', unreadCount: 0 },
      { id: 'room-4', title: 'Monalisao', lastMessage: 'Hello', lastMessageTime: 'Sunday', unreadCount: 0 },
    ];
  }

  async sendMessage(senderId: string, dto: SendMessageDto) {
    return {
      id: `msg-${Date.now()}`,
      roomId: dto.roomId,
      senderId,
      text: dto.text,
      sentAt: new Date().toISOString(),
    };
  }
}

export const chatService = new ChatService();
