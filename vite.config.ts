import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

 /* Adding this makes auto-open fail for some reason.
 Will still launch, but will not auto-open the page. */
// process.env.BROWSER = "chrome";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ fastRefresh: true})],
  // default, but needs to be updated if using SSR or similar
  appType: "spa",
  // where final build artifacts go
  publicDir: "public",
  server: {
    port: 9999,
    // exit if you can't get 9999
    strictPort: true,
    // auto open in default browser
    open: true,
    // allows requests from anywhere for local dev
    cors: true,
    // true is equivalent to the following default:
    // see https://github.com/expressjs/cors#configuration-options for more info
    // {
    //   "origin": "*",
    //   "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    //   "preflightContinue": false,
    //   "optionsSuccessStatus": 204
    // }
  },
  preview: {
    port: 9999,
  },
  // where temp build artifacts go
  build: {
    // these are both defaults, but I like having them explicit
    outDir: "build",
    assetsDir: "assets",
  },
  // CSS Modules config
  css: {
    modules: {

    }
  },
  // NOTE: Other config options are available if, for example, we need to make changes 
  // to the underlying Rollup configuration.
});
