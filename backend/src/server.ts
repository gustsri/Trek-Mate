import express from 'express';
import cors from 'cors';
import { appConfig } from './config/app.config';
import { requestLogger } from './middlewares/logger.middleware';
import { errorHandler } from './middlewares/error.middleware';

import { authController } from './modules/auth/auth.controller';
import { userController } from './modules/users/user.controller';
import { tripController } from './modules/trips/trip.controller';
import { feedController } from './modules/feed/feed.controller';
import { exploreController } from './modules/explore/explore.controller';
import { chatController } from './modules/chat/chat.controller';

const app = express();

app.use(cors({ origin: appConfig.clientUrl }));
app.use(express.json());
app.use(requestLogger);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'trek-mate-api' });
});

// Auth endpoints
app.post('/api/auth/login', authController.login);
app.post('/api/auth/register', authController.register);

// Users / Profile endpoints
app.get('/api/users/:id', userController.getProfile);
app.get('/api/users/:id/medals', userController.getMedals);
app.get('/api/users/:id/history', userController.getHistory);

// Trips / Find endpoints
app.get('/api/trips', tripController.getTrips);
app.get('/api/trips/:id', tripController.getTripById);

// Feed / Home endpoints
app.get('/api/feed/highlights', feedController.getHighlights);
app.get('/api/feed', feedController.getFeed);

// Explore endpoints
app.get('/api/explore/pins', exploreController.getPins);

// Chat endpoints
app.get('/api/chat/rooms', chatController.getRooms);
app.post('/api/chat/messages', chatController.sendMessage);

// Global Error Handler
app.use(errorHandler);

if (process.env.NODE_ENV !== 'test') {
  app.listen(appConfig.port, () => {
    console.log(`[Trek-Mate API] Server running on http://localhost:${appConfig.port}`);
  });
}

export default app;
