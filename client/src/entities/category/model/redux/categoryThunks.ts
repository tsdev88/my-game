import {createAsyncThunk} from '@reduxjs/toolkit';
import categoryService from '../../api/categoryService';

export const getCategories = createAsyncThunk('category/getCategory', () => categoryService.getCategory());

export const getMusic = createAsyncThunk('category/getMusic', () => categoryService.getMusic())
export const getSport = createAsyncThunk('category/getSport', () => categoryService.getSport())
export const getScience = createAsyncThunk('category/getScience', () => categoryService.getScience())
export const getReact = createAsyncThunk('category/getReact', () => categoryService.getReact())
export const getJavascript = createAsyncThunk('category/getJavascript', () => categoryService.getJavascript())

