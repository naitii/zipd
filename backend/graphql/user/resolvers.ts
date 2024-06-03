import { z } from 'zod'
import { userSchema } from '../../validation/user'
import UserService from '../../services/user'

const queries = {}

const mutations = {
  createUser: async (_: any, user: { user: z.infer<typeof userSchema> }) => {
    const res = await UserService.createUser(user)
    return res.id
  },

  loginUser: async (_: any, user: { user: z.infer<typeof userSchema> }) => {
    const res = await UserService.loginUser(user)
    return res
  },
}

export const resolvers = { queries, mutations }
