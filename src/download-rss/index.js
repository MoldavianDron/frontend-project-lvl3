import { parseRss } from "./parse-rss.js";
import { validateURL } from "./validate-url.js";
import { fetchFeeds } from "./fetch-feeds.js";

import {watchedState} from "src/view.js";
import {Status} from "src/constants.js";

export default (url) => {
  return validateURL(url)
    .then((url) => {
      watchedState.asyncRSS = {
        status: Status.LOADING,
        context: null
      }
      return url;
    })
    .then(fetchFeeds)
    .then(parseRss);
}