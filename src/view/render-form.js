import {Status} from "src/constants.js";

export const renderForm = (status) => {
  const input = document.getElementById("url-input");
  const submitButton = document.querySelector('[type="submit"]');
  
  switch(status) {
    case Status.LOADING:
      input.classList.remove("is-invalid");
      input.setAttribute("disabled", "");
      submitButton.setAttribute("disabled", "");
      return;
    case Status.ERROR:
      input.removeAttribute("disabled");
      submitButton.removeAttribute("disabled");
      input.classList.add("is-invalid");
      return;
    case Status.SUCCESS:
      input.removeAttribute("disabled");
      submitButton.removeAttribute("disabled");
      input.value = "";
      input.focus();
      return;
    default:
      return;
  }
};