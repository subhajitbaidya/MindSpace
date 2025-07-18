import express from "express";
import cors from "cors";
import registerProxies from "../routes/registerproxies.js";

export function createServer() {
  const app = express();
  app.use(cors());

  app.get("/health", (req, res) => {
    res.send("Gateway active");
  });

  registerProxies(app);
  return app;
}
