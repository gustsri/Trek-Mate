export interface SendMessageDto {
  roomId: string;
  text: string;
}

export interface CreateChatRoomDto {
  participantIds: string[];
  isGroup: boolean;
  name?: string;
}
