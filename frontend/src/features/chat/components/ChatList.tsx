import React from 'react';
import { ChatRoomItem } from '../types/chat.types';

export interface ChatListProps {
  rooms?: ChatRoomItem[];
  onSelectRoom?: (room: ChatRoomItem) => void;
}

export const ChatList: React.FC<ChatListProps> = () => {
  return null;
};
