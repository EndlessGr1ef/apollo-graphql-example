import { gql } from 'apollo-server-koa'
export const helloTypeDefs = gql`
type Query {
    hello: String
  }
`;

export const helloResolvers = {
 Query: {
    hello: () => "hello world!",
 },
};
