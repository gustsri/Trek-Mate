import { Request, Response } from 'express';
import { tripService } from './trip.service';
import { sendSuccess } from '../../utils/apiResponse';

export const tripController = {
  getTrips: async (req: Request, res: Response) => {
    const trips = await tripService.getTrips(req.query);
    return sendSuccess(res, trips);
  },

  getTripById: async (req: Request, res: Response) => {
    const { id } = req.params;
    const trip = await tripService.getTripById(id);
    return sendSuccess(res, trip);
  },
};
