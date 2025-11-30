import { GqlServer } from "./server/gql.server.js";
import { connectDB, closeDB } from "./db/connect.mongodb.js";

const startService = async () => {
  try {
    await connectDB().then(() => console.log("MongoDB connected"));
    await GqlServer();
  } catch (error) {
    console.error("service is down", error);
    process.exit(1);
  }
};

startService();

process.on("SIGINT", async () => {
  console.log("Exiting service - Closing MongoDB…");
  await closeDB();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("Exiting service → Closing MongoDB…");
  await closeDB();
  process.exit(0);
});
