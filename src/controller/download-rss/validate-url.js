import {setLocale, string} from "yup";

import {watchedModel} from "src/model.js";

export const validateURL = (url) => {
  setLocale({
    string: {
      url: "Ссылка должна быть валидным URL",
    },
    mixed: {
      notOneOf: "RSS уже существует",
    }
  });
  const schema = string().url().notOneOf(watchedModel.downloadedSources);
  return schema.validate(url);
};