import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthResponseT } from '../types/authType';
import { authFormSchema } from '../schemas/authFormSchemas';
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

export const refresh = createAsyncThunk('auth/refresh', () => authService.refresh());
