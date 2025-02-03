const { createRequestHandler } = require("@remix-run/cloudflare-pages");

const handleRequest = createRequestHandler({
  getLoadContext() {
    // Whatever you return here will be passed as `context` to your loaders.
  },
});

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event));
});