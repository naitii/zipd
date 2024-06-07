import { z } from 'zod'

export const userSchema = z.object({
  email: z.string().email(),
  password: z
    .string({ message: 'Invalid Password' })
    .min(6, { message: 'Password must be at least 6 characters long' }),
})
