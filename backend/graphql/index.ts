import { ApolloServer } from '@apollo/server'
import { User } from './user'
import { Url } from './url'

async function gqlServer() {
  const typeDefs = `
    
    ${User.typeDefs}
    ${Url.typeDefs}

    type Query {
        hello: String
        ${User.queries}
        ${Url.queries}
    }

    type Mutation {
        ${User.mutation}
        ${Url.mutations}
    }
  `
  const resolvers = {
    Query: {
      ...User.resolvers.queries,
      ...Url.resolvers.queries,
    },
    Mutation: {
      ...User.resolvers.mutations,
      ...Url.resolvers.mutations,
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
