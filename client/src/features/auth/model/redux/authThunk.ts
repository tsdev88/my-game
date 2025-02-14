import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthResponseT, LoginT } from '../types/authType';
import { authFormSchema, loginFormSchema } from '../schemas/authFormSchemas';
import authService from '../../api/authService';

export const signup = createAsyncThunk<AuthResponseT, FormData, { rejectValue: string }>(
  'auth/signup',
  async (formDAta: FormData, { rejectWithValue }) => {
    try {
      const data = authFormSchema.parse(Object.fromEntries(formDAta));
      return await authService.signUp(data);
    } catch (error) {
      console.log(error);
      return rejectWithValue('Ошибка регистрации');
    }
  },
);

export const login = createAsyncThunk<AuthResponseT, FormData>(
  'auth/login',
  async (formData: FormData) => {
    try {
      const data = loginFormSchema.parse(Object.fromEntries(formData));
      return await authService.login(data);
    } catch (error) {
      console.log(error);
    }
  },
);

export const refresh = createAsyncThunk('auth/refresh', () => authService.refresh());
export const logout = createAsyncThunk('auth/logout', () => authService.logout());
