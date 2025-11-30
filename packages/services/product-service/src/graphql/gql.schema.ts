export const typeDefs = `#graphql
  type Book {
  
  title: String!
  author: String!
  price: Float!
  category: String!
  rating: Float!
  reviews: Int!
  image: String!
  description: String!
}

input AddBook {
  title: String!
  author: String!
  price: Float!
  category: String!
  rating: Float!
  reviews: Int!
  image: String!
  description: String!
}

input AddBooksBulkInput {
  books: [AddBook!]!
}



type Query {
  books: [Book!]!
}

type Mutation {
 createBook(input: AddBook!): Book!
 createBooksBulk(input: AddBooksBulkInput!): [Book!]!
}
`;
