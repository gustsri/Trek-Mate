import dotenv from 'dotenv';
dotenv.config();

export const appConfig = {
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
  jwt: {
    secret: process.env.JWT_SECRET || 'trek-mate-dev-secret',
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  },
};
