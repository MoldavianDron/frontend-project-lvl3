import {setLocale, string} from "yup";

import {watchedState} from "../view.js";

export const validateURL = (url) => {
  setLocale({
    string: {
      url: "Ссылка должна быть валидным URL",
    },
    mixed: {
      notOneOf: "RSS уже существует",
    }
  });
  const schema = string().url().notOneOf(watchedState.downloadedFeeds);
  return schema.validate(url);
}