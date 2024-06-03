import { z } from 'zod'
import { userSchema } from '../validation/user'
import prismaClient from '../prisma/client'
import { createHmac, randomBytes } from 'crypto'

class UserService {
  public static async createUser(user: { user: z.infer<typeof userSchema> }) {
    const { email, password } = user.user
    const salt = randomBytes(16).toString('hex')
    const hashedPwd = createHmac('sha512', salt).update(password).digest('hex')

    return prismaClient.user.create({
      data: {
        email: email,
        password: hashedPwd,
        salt: salt,
      },
    })
  }
}

export default UserService
