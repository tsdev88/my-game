import type {z} from "zod"
import type {categorySchema, questionsSchema} from '../schemas/categorySchema'

export type CategoryT = z.infer<typeof categorySchema>
export type questionsT = z.infer<typeof questionsSchema>

export type CategorySliceT = {
    categories: CategoryT[]
    music: questionsT[],
    sport: questionsT[],
    science: questionsT[],
    react: questionsT[],
    javascript: questionsT[],
    chosenQuestion: questionsT | null,
    error: string | null
    loading: boolean
}
