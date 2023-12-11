import {merge} from "webpack-merge";
import BrowserSyncWebpackPlugin from "browser-sync-webpack-plugin";
import {fileURLToPath} from "url";
import path from "path";

import wpCommon from "./webpack.common.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const wpDev = merge(wpCommon, {
  plugins: [
    new BrowserSyncWebpackPlugin({
      host: "localhost",
      port: 3000,
      files: ['./*.html'],
      server: {baseDir: ["./"]}
    })
  ],
  watch: true,
  mode: "development",
  resolve: {
    alias: {
      "src": path.resolve(__dirname, "src")
    }
  }
});

export default wpDev;