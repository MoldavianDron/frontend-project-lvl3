import { renderForm } from "./render-form.js";
import { renderStatusMessage } from "./render-status-message.js";

export const render = (path, value) => {
  if (path === "status") {
    renderForm(value);
    renderStatusMessage(path, value);
  }
  
  if (path === "statusMessage") {
    renderStatusMessage(path, value);
  }
};
