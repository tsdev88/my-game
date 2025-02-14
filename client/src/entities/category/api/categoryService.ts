import type {AxiosInstance} from "axios";
import type {CategoryT, questionsT} from "../model/types/categoryTypes";
import {categorySchema, questionsSchema} from "../model/schemas/categorySchema";
import {ZodError} from "zod";
import axiosInstance from "../../../shared/api/lib/axiosInstance";


class CategoryService {
    constructor(private readonly client: AxiosInstance) {
    }

    async getCategory(): Promise<CategoryT[]> {
        try {
            const res = await this.client.get('/categories')
            return categorySchema.array().parse(res.data)
        } catch (error) {
            if (error instanceof ZodError) {
                console.error('Validation error in categoryService', error.issues)
            }
            throw error
        }
    }

    async getMusic(): Promise<questionsT[]> {
        try {
            const res = await this.client.get('/questions/music')
            return questionsSchema.array().parse(res.data)
        } catch (error) {
            if (error instanceof ZodError) {
                console.error('Validation error in categoryService', error.issues)
            }
            throw error
        }
    }

    async getSport(): Promise<questionsT[]> {
        try {
            const res = await this.client.get('/questions/sport')
            return questionsSchema.array().parse(res.data)
        } catch (error) {
            if (error instanceof ZodError) {
                console.error('Validation error in categoryService', error.issues)
            }
            throw error
        }
    }

    async getScience(): Promise<questionsT[]> {
        try {
            const res = await this.client.get('/questions/science')
            return questionsSchema.array().parse(res.data)
        } catch (error) {
            if (error instanceof ZodError) {
                console.error('Validation error in categoryService', error.issues)
            }
            throw error
        }
    }

    async getReact(): Promise<questionsT[]> {
        try {
            const res = await this.client.get('/questions/react')
            return questionsSchema.array().parse(res.data)
        } catch (error) {
            if (error instanceof ZodError) {
                console.error('Validation error in categoryService', error.issues)
            }
            throw error
        }
    }

    async getJavascript(): Promise<questionsT[]> {
        try {
            const res = await this.client.get('/questions/javascript')
            return questionsSchema.array().parse(res.data)
        } catch (error) {
            if (error instanceof ZodError) {
                console.error('Validation error in categoryService', error.issues)
            }
            throw error
        }
    }
}

export default new CategoryService(axiosInstance)
