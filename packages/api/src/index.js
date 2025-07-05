import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

// Health check route
app.get("/", (req, res) => {
  res.send("API Gateway is running");
});

// Proxy for Auth Service
app.use(
  "/auth",
  createProxyMiddleware({
    target: "http://localhost:5001",
    changeOrigin: true,
    pathRewrite: {
      "^/auth": "",
    },
    onError: (err, req, res) => {
      console.error("Auth service proxy error:", err);
      res.status(500).json({ error: "Auth service unavailable" });
    },
  })
);

// Proxy for Book Service
app.use(
  "/books",
  createProxyMiddleware({
    target: "http://localhost:5002",
    changeOrigin: true,
    pathRewrite: {
      "^/books": "",
    },
    onError: (err, req, res) => {
      console.error("Books service proxy error:", err);
      res.status(500).json({ error: "Books service unavailable" });
    },
  })
);

// Global error handler (should be last)
app.use((err, req, res, next) => {
  console.error("Global error:", err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`API Gateway running at http://localhost:${PORT}`);
});
