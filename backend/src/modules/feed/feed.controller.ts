import { Request, Response } from 'express';
import { feedService } from './feed.service';
import { sendSuccess } from '../../utils/apiResponse';

export const feedController = {
  getHighlights: async (_req: Request, res: Response) => {
    const highlights = await feedService.getHighlights();
    return sendSuccess(res, highlights);
  },

  getFeed: async (req: Request, res: Response) => {
    const posts = await feedService.getFeedPosts(req.query);
    return sendSuccess(res, posts);
  },
};
