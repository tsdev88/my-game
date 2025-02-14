import {z} from 'zod'

export const categorySchema = z.object({
    id: z.number(),
    name: z.string()
})

export const questionsSchema = z.object({
    id: z.number(),
    question: z.string(),
    answers: z.string(),
    correctAnswer: z.string(),
    score: z.number(),
    categoryId: z.number(),
})
