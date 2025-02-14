import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthResponseT } from "../types/authType";
import { authFormSchema } from "../schemas/authFormSchemas";





export const signup = createAsyncThunk<AuthResponseT, FormData, { rejectValue: string}>(
    'auth/signup',
    async (formDAta: FormData, { rejectWithValue }) => {
        try {
            const data = authFormSchema.parse(Object.fromEntries(formDAta));
            return await authSer
        } catch (error) {
            
        }
    }
)