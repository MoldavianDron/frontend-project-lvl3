import {setLocale, string} from "yup";
import i18next from "i18next";

import {watchedModel} from "src/model.js";

export const validateURL = (url) => {
  setLocale({
    string: {
      url: i18next.t("errors.no-valid-url"),
    },
    mixed: {
      notOneOf: i18next.t("errors.rss-exists"),
    }
  });
  const schema = string().url().notOneOf(watchedModel.downloadedSources);
  return schema.validate(url);
};