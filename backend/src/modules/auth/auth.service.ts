import { LoginDto, RegisterDto } from './auth.dto';

export class AuthService {
  async login(_dto: LoginDto) {
    // Logic for verifying credentials and generating JWT
    return { token: 'mock-jwt-token', userId: 'usr-1' };
  }

  async register(_dto: RegisterDto) {
    // Logic for creating user account
    return { token: 'mock-jwt-token', userId: 'usr-new' };
  }
}

export const authService = new AuthService();
