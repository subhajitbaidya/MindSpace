import express from "express";
import registerProxies from "../routes/registerproxies.js";

export function createServer() {
  const app = express();

  app.get("/health", (req, res) => {
    res.send("Gateway active");
  });

  registerProxies(app);
  return app;
}
