import { z } from 'zod';
import { authResponseSchema, userSchema } from '../schemas/authSchemas';

export type UserT = z.infer<typeof userSchema>;
export type AuthResponseT = z.infer<typeof authResponseSchema>;


export type AuthSliceT = {
  userData: UserT | null;
  accessToken: string;
  status: 'logged' | 'logging' | 'guest';
  error: string | null;
};
