import { z } from "zod";
import type { authFormSchema } from "../schemas/authFormSchemas";


export type SignUpFormT = z.infer<typeof authFormSchema>;