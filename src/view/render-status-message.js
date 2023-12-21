import {Status} from "src/constants.js";

const onStatusUpdate = (status) => {
  const statusMessageContainer = document.querySelector(".feedback");
  
  switch(status) {
    case Status.LOADING:
      statusMessageContainer.classList.remove("text-success");
      statusMessageContainer.classList.remove("text-danger");
      return;
    case Status.ERROR:
      statusMessageContainer.classList.remove("text-success");
      statusMessageContainer.classList.add("text-danger");
      return;
    case Status.SUCCESS:
      statusMessageContainer.classList.add("text-success");
      return;
    default:
      return;
  }
}

const onMessageUpdate = (msg) => {
  const statusMessageContainer = document.querySelector(".feedback");
  statusMessageContainer.textContent = msg;
};

const statusMessageRenderFunctions = {
  "status": onStatusUpdate,
  "statusMessage": onMessageUpdate,
};

export const renderStatusMessage = (path, value) => {
  const renderFunction = statusMessageRenderFunctions[path];
  renderFunction(value);
};