import { createProxyMiddleware, RequestHandler } from 'http-proxy-middleware';
import { BASE_URL, POST_TODOS } from './contants';

module.exports = function(app: { use: (arg0: RequestHandler) => void; }) {
  app.use(createProxyMiddleware(POST_TODOS, { target: BASE_URL }));
};
