import { Request, Response } from 'express';
import { chatService } from './chat.service';
import { sendSuccess } from '../../utils/apiResponse';

export const chatController = {
  getRooms: async (_req: Request, res: Response) => {
    const rooms = await chatService.getRooms('current-user');
    return sendSuccess(res, rooms);
  },

  sendMessage: async (req: Request, res: Response) => {
    const message = await chatService.sendMessage('current-user', req.body);
    return sendSuccess(res, message, 'Message sent', 201);
  },
};
