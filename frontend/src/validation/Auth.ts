import { z } from 'zod'

export const FormSchema = z.object({
  email: z.string().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, {
    message: 'Enter Valid Email Address',
  }),
  password: z
    .string()
    .min(6, {
      message: 'Password must be at least 6 characters.',
    })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, {
      message:
        'Password must contain at least one uppercase letter, one lowercase letter, and one number.',
    }),
})
