import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({ uri: "/api/v0/products/graphql" }),
  cache: new InMemoryCache(),
});

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      description
      author
      category
      image
      price
      rating
      reviews
    }
  }
`;
