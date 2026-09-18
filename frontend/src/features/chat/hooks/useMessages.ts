import { useState } from 'react';
import { ChatMessage } from '../types/chat.types';

export function useMessages(roomId?: string) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState<string>('');

  return {
    messages,
    inputText,
    setInputText
  };
}
