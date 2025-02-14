import {  z } from 'zod';

export const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  score: z.number(),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export const authResponseSchema = z.object({
  user: userSchema,
  accessToken: z.string(),
});


