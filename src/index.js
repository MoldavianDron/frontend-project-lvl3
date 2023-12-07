import {string, setLocale, ValidationError} from "yup";
import 'bootstrap/dist/css/bootstrap.min.css';

import { init } from "./init.js";
import {watchedState} from "./view.js";
import {Status} from "./constants.js";

init();

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const url = formData.get("url");
  validateURL(url);
});

setLocale({
  string: {
    url: "Ссылка должна быть валидным URL",
  }
})

const validateURL = (url) => {
  const schema = string().url();
  watchedState.asyncRSS.status = Status.LOADING;
  watchedState.asyncRSS.context = null;
  schema.validate(url)
    .then((url) => {
      if (watchedState.feeds.includes(url)) {
        throw new ValidationError("RSS уже существует");
      }
      watchedState.asyncRSS = {
        status: Status.SUCCESS,
        context: {
          displayMessage: "RSS успешно загружен",
        }
      }
      watchedState.feeds.push(url);
    })
    .catch((error) => {
      watchedState.asyncRSS = {
        status: Status.ERROR,
        context: {
          displayMessage: error.message,
        }
      }
    });
}