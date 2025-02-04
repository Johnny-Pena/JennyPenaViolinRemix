import { createRequestHandler } from "@remix-run/cloudflare-pages";

const handleRequest = createRequestHandler({
  getLoadContext() {
    // Whatever you return here will be passed as `context` to your loaders.
  },
});

export default {
  async fetch(request, env, ctx) {
    return handleRequest(request, env, ctx);
  },
};