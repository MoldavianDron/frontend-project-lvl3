import onChange from 'on-change';

import {Status} from "./constants.js";

const state = {
  asyncRSS: {status: Status.IDLE, context: null},
  feeds: [],
}

const watchedState = onChange(state, function(path, value, previousValue, applyData) {
  console.log(this)
  if (path === "error") {
    const input = document.getElementById("url-input");
    const errorOutputContainer = document.querySelector(".text-danger");
    if (value === null) {
      input.value = "";
      input.classList.remove("is-invalid");
      input.focus();
      errorOutputContainer.textContent = "";
      return;
    }
    input.classList.add("is-invalid");
    errorOutputContainer.textContent = value;
  }
});

export { watchedState };