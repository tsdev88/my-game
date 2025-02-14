import { z } from "zod";
import type { authFormSchema, loginFormSchema } from "../schemas/authFormSchemas";


export type SignUpFormT = z.infer<typeof authFormSchema>;
export type LoginFormT = z.infer<typeof loginFormSchema>;