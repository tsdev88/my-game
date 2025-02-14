import { AxiosInstance } from 'axios';
import { LoginFormT, SignUpFormT } from '../model/types/authFormTypes';
import { AuthResponseT } from '../model/types/authType';
import { authResponseSchema } from '../model/schemas/authSchemas';
import { ZodError } from 'zod';
import axiosInstance from '../../../shared/api/lib/axiosInstance';

class AuthService {
  constructor(private readonly client: AxiosInstance) {}
  async signUp(data: SignUpFormT): Promise<AuthResponseT> {
    try {
      const response = await this.client.post('/auth/signup', data);
      return authResponseSchema.parse(response.data);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log('Ошибка зода', error.issues);
      }
      throw error;
    }
  }
  async refresh(): Promise<AuthResponseT> {
    try {
      const response = await this.client.get('token/refresh');
      return authResponseSchema.parse(response.data);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log('Ошибка зода', error.issues);
      }
      throw error;
    }
  }

  async login(data: LoginFormT): Promise<AuthResponseT> {
    try {
      const response = await this.client.post('/auth/login', data);
      return authResponseSchema.parse(response.data);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log('Ошибка зода', error.issues);
      }
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      await this.client.get('/auth/logout');
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        console.log('Validation error in auth service', error.issues);
      }
      throw error;
    }
  }
}

export default new AuthService(axiosInstance);
