import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

// Health check route
app.get("/api/v0", (req, res) => {
  res.send("API Gateway is running");
});

// Proxy for Auth Service
app.use(
  "/api/v0/auth",
  createProxyMiddleware({
    target: "http://localhost:5001",
    changeOrigin: true,
    pathRewrite: {
      "^/api/v0/auth": "/auth", // ✅ Keep `/auth` path at target
    },
    onError: (err, req, res) => {
      console.error("Auth service proxy error:", err.message);
      res.status(500).json({ error: "Auth service unavailable" });
    },
  })
);

app.listen(PORT, () => {
  console.log(`API Gateway running at http://localhost:${PORT}`);
});
