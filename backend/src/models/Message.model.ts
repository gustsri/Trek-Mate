export interface MessageModel {
  id: string;
  roomId: string;
  senderId: string;
  text: string;
  readByUserIds: string[];
  createdAt: Date;
}
