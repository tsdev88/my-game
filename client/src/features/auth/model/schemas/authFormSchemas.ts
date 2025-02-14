import { z } from "zod";

export const authFormSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
})