import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import express from "express";
import cors from "cors";
import { ENV } from "../config/env.js";
import { typeDefs } from "../graphql/gql.schema.js";
import { resolvers } from "../graphql/gql.resolvers.js";

export const GqlServer = async () => {
  try {
    const app = express();
    app.use(express.json());
    app.use(cors());

    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    await server.start();

    app.use("/graphql", expressMiddleware(server));

    app.listen(ENV.PORT, () =>
      console.log(`GraphQL Server running at port ${ENV.PORT}`)
    );
  } catch (error) {
    console.error("Server failed to start:", error);
  }
};
