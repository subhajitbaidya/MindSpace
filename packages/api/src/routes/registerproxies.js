import { ProxyService } from "../services/proxyservice.js";
import { serviceURL } from "../config/service_url.js";

function registerProxies(app) {
  Object.entries(serviceURL).forEach(([key, target]) => {
    const proxy = new ProxyService(key, target);
    app.use(`/api/v0/${key}`, proxy.getMiddleware());
  });
}

export default registerProxies;
