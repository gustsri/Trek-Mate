import { ChatRoomItem, ChatMessage } from '../types/chat.types';

export const chatApi = {
  getChatRooms: async (): Promise<ChatRoomItem[]> => {
    // Placeholder for backend API call (e.g. GET /api/chat/rooms)
    return [];
  },

  getRoomMessages: async (roomId: string): Promise<ChatMessage[]> => {
    // Placeholder for backend API call (e.g. GET /api/chat/rooms/:roomId/messages)
    return [];
  },

  sendMessage: async (roomId: string, text: string): Promise<ChatMessage | null> => {
    // Placeholder for backend API or WebSocket emit
    return null;
  }
};
