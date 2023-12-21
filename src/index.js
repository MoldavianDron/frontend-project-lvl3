import 'bootstrap/dist/css/bootstrap.min.css';

import { downloadRss } from "./controller/download-rss/index.js";
import { init } from "./init.js";
import {watchedModel} from "./model.js";
import {Status} from "./constants.js";

init();

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const url = formData.get("url");
  downloadRss(url)
    .then((rssObject) => {
      watchedModel.status = Status.SUCCESS;
      watchedModel.statusMessage = "RSS успешно загружен";
      watchedModel.downloadedSources.push(url);
      watchedModel.rssObjects.push(rssObject);
    })
    .catch((error) => {
      watchedModel.status = Status.ERROR;
      watchedModel.statusMessage = error.message;
    });
});