import type {AuthSliceT} from "../types/authType";
import type {PayloadAction} from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit";
import {refresh, signup} from "./authThunk";


const initialState: AuthSliceT = {
    status: 'logging',
    userData: null,
    accessToken: '',
    error: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken(state, action: PayloadAction<string>) {
            state.accessToken = action.payload
        },
        clearAccessToken(state) {
            state.accessToken = '';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signup.fulfilled, (state, action) => {
            state.status = 'logging';
            state.accessToken = action.payload.accessToken;
            state.userData = action.payload.user;
        });
        builder.addCase(signup.rejected, (state, action) => {
            state.error = action.payload ?? 'Какая то ошибка';
            state.status = 'guest';
            state.accessToken = '';
            state.userData = null;
        });
        builder.addCase(refresh.fulfilled, (state, action) => {
            state.status = 'logged';
            state.accessToken = action.payload.accessToken;
            state.userData = action.payload.user;
        });
        builder.addCase(refresh.rejected, (state, action) => {
            state.error = action.error.message ?? 'Ошибка аутенфекации';
            state.status = 'guest';
            state.accessToken = '';
            state.userData = null;
        });
    }
})


export default authSlice.reducer;

export const {clearAccessToken, setAccessToken} = authSlice.actions;
