import {  z } from 'zod';

export const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  score: z.number(),
});

export const authResponseSchema = z.object({
  user: userSchema,
  accessToken: z.string(),
});


