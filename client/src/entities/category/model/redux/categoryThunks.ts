import { createAsyncThunk } from '@reduxjs/toolkit';
import categoryService from '../../api/categoryService';

export const getCategories = createAsyncThunk('category/getCategory', () => categoryService.getCategory());
