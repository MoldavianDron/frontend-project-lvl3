import 'bootstrap/dist/css/bootstrap.min.css';

import downloadRss from "./download-rss/index.js";
import { init } from "./init.js";
import {watchedState} from "./view.js";
import {Status} from "./constants.js";

init();

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const url = formData.get("url");
  downloadRss(url)
    .then((rssObject) => {
      watchedState.asyncRSS = {
        status: Status.SUCCESS,
        context: {
          displayMessage: "RSS успешно загружен",
          rss: rssObject,
        }
      }
      watchedState.downloadedFeeds.push(url);
    })
    .catch((error) => {
      watchedState.asyncRSS = {
        status: Status.ERROR,
        context: {
          displayMessage: error.message,
        }
      }
    });
});