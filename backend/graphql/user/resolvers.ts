const queries = {}

const mutations = {
  createUser: (
    _: any,
    { email, password }: { email: string; password: string }
  ) => {
    return 'User created'
  },
}

export const resolvers = { queries, mutations }
