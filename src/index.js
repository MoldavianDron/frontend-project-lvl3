import 'bootstrap/dist/css/bootstrap.min.css';
import i18next from "i18next";

import { downloadRss } from "./controller/download-rss/index.js";
import { renderInitialView } from "./init.js";
import {watchedModel} from "./model.js";
import {Status} from "./constants.js";
import {en} from "./locales/en.js";
import {ru} from "./locales/ru.js";

document.addEventListener("DOMContentLoaded", () => {
  i18next.init({
    "lng": "en",
    "resources": {
      "en": {
        "translation": en,
      },
      "ru": {
        "translation": ru,
      },
    }
  }, function () {
    renderInitialView();
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const url = formData.get("url");
      downloadRss(url)
        .then((rssObject) => {
          watchedModel.status = Status.SUCCESS;
          watchedModel.statusMessage = i18next.t("success");
          watchedModel.downloadedSources.push(url);
          watchedModel.rssObjects.push(rssObject);
        })
        .catch((error) => {
          watchedModel.status = Status.ERROR;
          watchedModel.statusMessage = error.message;
        });
    });
  });
});