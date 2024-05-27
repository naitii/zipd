import express from 'express'
import { expressMiddleware } from '@apollo/server/express4'
import bodyParser from 'body-parser'
import cors from 'cors'
import gqlServer from './graphql'

async function startServer() {
  const app = express()
  const port = 3000

  app.use(cors())
  app.use(bodyParser.json())

  app.use('/graphql', expressMiddleware(await gqlServer()))

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
}

startServer()
