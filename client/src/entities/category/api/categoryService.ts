import type { AxiosInstance } from "axios";
import type { CategoryT } from "../model/types/categoryTypes";
import { categorySchema } from "../model/schemas/categorySchema";
import { ZodError } from "zod";
import axiosInstance from "../../../shared/api/lib/axiosInstance";


class CategoryService{
    constructor(private readonly client: AxiosInstance) {}

    async getCategory(): Promise<CategoryT[]> {
        try {
            const res = await this.client.get('/categories')
            return categorySchema.array().parse(res.data)
        } catch (error) {
            if(error instanceof ZodError) {
                console.error('Validation error in categoryService', error.issues)
            }
            throw error
        }
    }
}

export default new CategoryService(axiosInstance)