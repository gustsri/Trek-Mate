import { Request, Response } from 'express';
import { exploreService } from './explore.service';
import { sendSuccess } from '../../utils/apiResponse';

export const exploreController = {
  getPins: async (_req: Request, res: Response) => {
    const pins = await exploreService.getPins();
    return sendSuccess(res, pins);
  },
};
