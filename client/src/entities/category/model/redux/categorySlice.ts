import {createSlice} from '@reduxjs/toolkit';
import type {CategorySliceT} from '../types/categoryTypes';
import {getCategories, getJavascript, getMusic, getReact, getScience, getSport} from './categoryThunks';

const initialState: CategorySliceT = {
    categories: [],
    music: [],
    sport: [],
    science: [],
    react: [],
    javascript: [],
    chosenQuestion: null,
    error: null,
    loading: false,
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setSelected(state, action) {
            state.chosenQuestion = action.payload;
        }
    },

    extraReducers(builder) {
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
        });
        builder.addCase(getCategories.rejected, (state, action) => {
            state.error = action.error.message ?? 'неизвестная ошибка';
        });
        builder.addCase(getCategories.pending, (state) => {
            state.error = null;
            state.loading = true;
        });

        builder.addCase(getMusic.fulfilled, (state, action) => {
            state.music = action.payload;
        }).addCase(getMusic.rejected, (state, action) => {
            state.error = action.error.message ?? 'неизвестная ошибка';
            console.log(action.error.message)
        }).addCase(getMusic.pending, (state) => {
            state.error = null;
            state.loading = true;
        });

        builder.addCase(getSport.fulfilled, (state, action) => {
            state.sport = action.payload;
        });
        builder.addCase(getScience.fulfilled, (state, action) => {
            state.science = action.payload;

        });
        builder.addCase(getReact.fulfilled, (state, action) => {
            state.react = action.payload;

        });
        builder.addCase(getJavascript.fulfilled, (state, action) => {
            state.javascript = action.payload;

        });
    },
});

export const {setSelected} = categorySlice.actions;
export default categorySlice.reducer;
