import { ApolloServer } from '@apollo/server'
import { User } from './user'

async function gqlServer() {
  const typeDefs = `
    type Query {
        hello: String
        ${User.queries}
    }

    type Mutation {
        ${User.mutation}
    }
  `
  const resolvers = {
    Query: {
      ...User.resolvers.queries,
    },
    Mutation: {
      ...User.resolvers.mutations,
    },
  }

  const gqlserver = new ApolloServer({
    typeDefs,
    resolvers,
  })

  await gqlserver.start()

  return gqlserver
}

export default gqlServer
