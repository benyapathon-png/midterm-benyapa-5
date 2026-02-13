import { z } from 'zod'

export const registerValidator = z.object({
    username: z.string
})