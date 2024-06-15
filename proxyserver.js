const { createProxyMiddleware } = require("http-proxy-middleware");
const url = "https://expense-tracker-three-alpha.vercel.app/graphql";
module.exports = function (app) {
  app.use(
    createProxyMiddleware({
      pathFilter: "/graphql",
      changeOrigin: true,
      target: url,
      ws: true,
      secure: true,
    })
  );
};