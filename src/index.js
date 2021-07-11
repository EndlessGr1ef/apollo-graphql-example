import { ApolloServer  } from "apollo-server-koa";
import { typeDefs, resolvers} from './interface/index.js'
// import { booksTypeDefs, booksResolvers } from './interface/schema/books.js'
import Koa from 'koa'

const app = new Koa()

/**
 * Create Apollo server.
 */

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.applyMiddleware({ app });

const port = '3000';

app.listen(port, () => {
    console.log(`server start at localhost:${port}`)
});