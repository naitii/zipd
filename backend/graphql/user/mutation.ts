export const mutation = `#graphql
    createUser(user: AuthUserInput!): ID!
    loginUser(user: AuthUserInput!): String!
`
