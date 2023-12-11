import onChange from 'on-change';

import {Status} from "./constants.js";

const state = {
  asyncRSS: {status: Status.IDLE, context: null},
  downloadedFeeds: [],
}

const clearStatusMessage = (statusMessageContainer, prevState) => {
  statusMessageContainer.textContent = "";
  if (prevState === Status.SUCCESS) {
    statusMessageContainer.classList.remove("text-success");
  }
  
  if (prevState === Status.ERROR) {
    statusMessageContainer.classList.remove("text-danger")
  }
}

const clearUrlInputBorder = (input, prevState) => {
  if (prevState === Status.ERROR) {
    input.classList.remove("is-invalid");
  }
}

const processError = (context, previousState) => {
  const input = document.getElementById("url-input");
  const statusMessageContainer = document.querySelector(".feedback");
  const submitButton = document.querySelector('[type="submit"]');
  if (previousState === Status.IDLE) {
    input.classList.add("is-invalid");
    statusMessageContainer.classList.add("text-danger");
    statusMessageContainer.textContent = context.displayMessage;
  }
  if (previousState === Status.LOADING) {
    input.removeAttribute("disabled");
    submitButton.removeAttribute("disabled");
    input.classList.add("is-invalid");
    statusMessageContainer.classList.add("text-danger");
    statusMessageContainer.textContent = context.displayMessage;
  }
  
  if (previousState === Status.SUCCESS) {
    statusMessageContainer.classList.remove("text-success");
    statusMessageContainer.classList.add("text-danger");
    statusMessageContainer.textContent = context.displayMessage;
  }
  
  if (previousState === Status.ERROR) {
    statusMessageContainer.textContent = context.displayMessage;
  }
}

const processSuccess = (context) => {
  const input = document.getElementById("url-input");
  const statusMessageContainer = document.querySelector(".feedback");
  const submitButton = document.querySelector('[type="submit"]');
  input.removeAttribute("disabled");
  input.value = "";
  input.focus();
  submitButton.removeAttribute("disabled");
  statusMessageContainer.classList.add("text-success");
  statusMessageContainer.textContent = context.displayMessage;
}

const processLoading = (context, previousState) => {
  const input = document.getElementById("url-input");
  const statusMessageContainer = document.querySelector(".feedback");
  const submitButton = document.querySelector('[type="submit"]');
  clearUrlInputBorder(input, previousState);
  clearStatusMessage(statusMessageContainer, previousState);
  input.setAttribute("disabled", "");
  submitButton.setAttribute("disabled", "");
}

const watchedState = onChange(state, function(path, value, previousValue, applyData) {
  const status = value.status;
  const prevStatus = previousValue.status;
  const context = value.context;
  if (path === "asyncRSS") {
    switch (status) {
      case Status.IDLE:
        return;
      case Status.ERROR:
        processError(context, prevStatus);
        return;
      case Status.LOADING:
        processLoading(context, prevStatus);
        return;
      case Status.SUCCESS:
        processSuccess(context, prevStatus);
        return;
      default:
        break;
    }
  }
});

export { watchedState };