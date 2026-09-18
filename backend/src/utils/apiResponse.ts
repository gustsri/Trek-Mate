import { Response } from 'express';

export function sendSuccess<T>(res: Response, data: T, message: string = 'Success', statusCode: number = 200) {
  return res.status(statusCode).json({
    success: true,
    data,
    message,
    timestamp: new Date().toISOString(),
  });
}

export function sendError(res: Response, message: string = 'Error', statusCode: number = 400) {
  return res.status(statusCode).json({
    success: false,
    message,
    timestamp: new Date().toISOString(),
  });
}
