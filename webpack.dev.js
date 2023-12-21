import {merge} from "webpack-merge";
import BrowserSyncWebpackPlugin from "browser-sync-webpack-plugin";

import wpCommon from "./webpack.common.js";

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
});

export default wpDev;