import {watchedModel} from "src/model.js";
import {Status} from "src/constants.js";

import { parseRss } from "./parse-rss.js";
import { validateURL } from "./validate-url.js";
import { fetchFeeds } from "./fetch-feeds.js";

export const downloadRss = (url) => {
  return validateURL(url)
    .then((url) => {
      watchedModel.status = Status.LOADING;
      watchedModel.statusMessage = "";
      return url;
    })
    .then(fetchFeeds)
    .then(parseRss);
};