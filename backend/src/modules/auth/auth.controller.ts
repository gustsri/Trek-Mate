import { Request, Response } from 'express';
import { authService } from './auth.service';
import { sendSuccess } from '../../utils/apiResponse';

export const authController = {
  login: async (req: Request, res: Response) => {
    const result = await authService.login(req.body);
    return sendSuccess(res, result, 'Login successful');
  },

  register: async (req: Request, res: Response) => {
    const result = await authService.register(req.body);
    return sendSuccess(res, result, 'Registration successful', 201);
  },
};
