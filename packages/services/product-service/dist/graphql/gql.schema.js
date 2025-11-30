export const typeDefs = `#graphql
  type Book {
  id: Int!
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


type Query {
  books: [Book!]!
}

type Mutation {
 createBook(input: AddBook!): Book!
}
`;
//# sourceMappingURL=gql.schema.js.map