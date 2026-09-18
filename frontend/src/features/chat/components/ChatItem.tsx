import React from 'react';
import { ChatRoomItem } from '../types/chat.types';

export interface ChatItemProps {
  room?: ChatRoomItem;
  onClick?: () => void;
}

export const ChatItem: React.FC<ChatItemProps> = () => {
  return null;
};
