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

  public static async loginUser(user: { user: z.infer<typeof userSchema> }) {
    const { email, password } = user.user
    const userRecord = await this.getUserByEmail(email)

    if (!userRecord) {
      throw new Error('User not found')
    }

    const hashedPwd = createHmac('sha512', userRecord.salt)
      .update(password)
      .digest('hex')

    if (hashedPwd !== userRecord.password) {
      throw new Error('Invalid password')
    }

    return 'Logged in'
  }

  public static async getUserByEmail(email: string) {
    const userRecord = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    })
    return userRecord
  }

  public static async checkUser(id: number) {
    const userRecord = await prismaClient.user.findUnique({
      where: {
        id: id,
      },
    })
    return userRecord ? true : false
  }
}

export default UserService
