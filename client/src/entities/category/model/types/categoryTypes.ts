import type {z} from "zod"
import type {categorySchema} from '../schemas/categorySchema'

export type CategoryT = z.infer<typeof categorySchema>

export type CategorySliceT = {
    categories: CategoryT[]
    error: string | null
    loading: boolean 
}