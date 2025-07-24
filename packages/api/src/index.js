import dotenv from "dotenv";
import { createServer } from "./server/server.js";
import cluster from "cluster";
import os from "os";

dotenv.config();

const PORT = process.env.PORT || 8080;

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;
  console.log(`Master ${process.pid} running with ${numCPUs} workers`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  const app = createServer();
  app.listen(PORT, () => {
    console.log(`Worker ${process.pid} running at http://localhost:${PORT}`);
  });
}
