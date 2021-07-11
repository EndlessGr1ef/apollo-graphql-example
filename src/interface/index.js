import { helloTypeDefs, helloResolvers } from './schema/hello.js'
import { booksTypeDefs, booksResolvers } from './schema/books.js'

export const typeDefs = [
    helloTypeDefs,
    booksTypeDefs
]

export const resolvers = [
    helloResolvers,
    booksResolvers
]