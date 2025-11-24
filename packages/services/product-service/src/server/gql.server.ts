import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import express from "express";
import cors from "cors";
import { ENV } from "../config/env.js";
import { typeDefs } from "../graphql/schema.js";
import { resolvers } from "../graphql/resolvers.js";
import { connectDB } from "../db/connect.mongodb.js";

export const GqlServer = async () => {
  try {
    const app = express();
    app.use(express.json());
    app.use(cors());
    await connectDB();

    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    await server.start();

    app.use(
      "/graphql/books",
      expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.authorization }),
      })
    );

    app.listen(ENV.PORT, () =>
      console.log(`🚀 GraphQL Server running at port ${ENV.PORT}`)
    );
  } catch (error) {
    console.error("❌ Server failed to start:", error);
  }
};
