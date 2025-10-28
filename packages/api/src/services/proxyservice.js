import { createProxyMiddleware } from "http-proxy-middleware";

// builder class for proxies
export class ProxyService {
  constructor(route, target) {
    this.route = route;
    this.target = target;
  }

  getMiddleware() {
    return createProxyMiddleware({
      target: this.target,
      changeOrigin: true,
      pathRewrite: {
        [`^/api/v0/${this.route}`]: "",
      },
      logLevel: "debug",
      onError: (err, req, res) => {
        console.error(`[${this.route}] Proxy Error:`, err.message);
        res.status(500).json({ error: `${this.route} service unavailable` });
      },
    });
  }
}
