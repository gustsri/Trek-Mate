import { useState } from 'react';
import { ChatRoomItem } from '../types/chat.types';

export function useChatRooms() {
  const [rooms, setRooms] = useState<ChatRoomItem[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return {
    rooms,
    searchQuery,
    setSearchQuery,
    isLoading
  };
}
