import { Request, Response } from 'express';
import { userService } from './user.service';
import { sendSuccess } from '../../utils/apiResponse';

export const userController = {
  getProfile: async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await userService.getProfile(id);
    return sendSuccess(res, user);
  },

  getMedals: async (req: Request, res: Response) => {
    const { id } = req.params;
    const medals = await userService.getMedals(id);
    return sendSuccess(res, medals);
  },

  getHistory: async (req: Request, res: Response) => {
    const { id } = req.params;
    const history = await userService.getHistory(id);
    return sendSuccess(res, history);
  },
};
