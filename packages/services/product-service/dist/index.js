import { GqlServer } from "./server/gql.server.js";
import { ConnectionPool } from "./db/pg.connect.js";
const startService = async () => {
    try {
        await ConnectionPool.connect();
        await GqlServer();
    }
    catch (error) {
        console.error("service is down", error);
        process.exit(1);
    }
};
startService();
ConnectionPool.on("connect", () => {
    console.log("PG connected");
});
//# sourceMappingURL=index.js.map