import { gql } from 'apollo-server-koa'

const books = [
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
    },
    {
        title: "Jurassic Park",
        author: "Michael Crichton",
    },
  ]

export const booksTypeDefs = gql`
   type Book {
       title: String
       author: String
   }
   extend type Query {
       books: [Book]
   }
`;
  
export const booksResolvers = {
    Query: {
        books: () => books,
    },
};
