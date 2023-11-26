import {merge} from "webpack-merge";

import wpCommon from "./webpack.common.js";

const wpProd = merge(wpCommon, {
  mode: "production",
});

export default wpProd;