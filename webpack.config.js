import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from "html-webpack-plugin";
import BrowserSyncWebpackPlugin from "browser-sync-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const wpConfig = {
  entry: {
    "bundle.min": "./src/index.js"
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "../index.html"
    }),
    new BrowserSyncWebpackPlugin({
      host: "localhost",
      port: 3000,
      files: ['./*.html'],
      server: {baseDir: ["./"]}
    })
  ],
  watch: true,
  mode: "development",
}

export default wpConfig;