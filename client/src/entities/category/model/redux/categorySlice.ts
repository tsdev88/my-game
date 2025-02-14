import { createSlice } from '@reduxjs/toolkit';
import type { CategorySliceT } from '../types/categoryTypes';
import { getCategories } from './categoryThunks';

const initialState: CategorySliceT = {
  categories: [],
  error: null,
  loading: false,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},

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
  },
});

export default categorySlice.reducer;
