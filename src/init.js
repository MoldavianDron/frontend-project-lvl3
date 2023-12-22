import i18next from "i18next";

export function renderInitialView() {
  // Get the root element (body)
  const root = document.body;
  root.classList.add("d-flex", "flex-column", "min-vh-100");
  
  // Create the main element
  const mainElement = document.createElement("main");
  mainElement.classList.add("flex-grow-1");
  
  // Create the first section
  const firstSection = document.createElement("section");
  firstSection.classList.add("container-fluid", "bg-dark", "p-5");
  
  const rowDiv = document.createElement("div");
  rowDiv.classList.add("row");
  
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("col-md-10", "col-lg-8", "mx-auto", "text-white");
  
  const h1Element = document.createElement("h1");
  h1Element.classList.add("display-3", "mb-0");
  h1Element.textContent = i18next.t("header");
  
  const leadParagraph = document.createElement("p");
  leadParagraph.classList.add("lead");
  leadParagraph.textContent = i18next.t("lead-paragraph");
  
  const formElement = document.createElement("form");
  formElement.classList.add("rss-form", "text-body");
  
  const formRowDiv = document.createElement("div");
  formRowDiv.classList.add("row");
  
  const formUrlCol = document.createElement("div");
  formUrlCol.classList.add("col");
  
  const formFloatingDiv = document.createElement("div");
  formFloatingDiv.classList.add("form-floating");
  
  const urlInput = document.createElement("input");
  urlInput.id = "url-input";
  urlInput.autofocus = true;
  urlInput.required = true;
  urlInput.name = "url";
  urlInput.setAttribute("aria-label", "url");
  urlInput.classList.add("form-control", "w-100");
  urlInput.placeholder = i18next.t("input-placeholder");
  urlInput.autocomplete = "off";
  
  const urlInputLabel = document.createElement("label");
  urlInputLabel.setAttribute("for", "url-input");
  urlInputLabel.textContent = i18next.t("input-label");
  
  const colAutoDiv = document.createElement("div");
  colAutoDiv.classList.add("col-auto");
  
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.setAttribute("aria-label", "add");
  submitButton.classList.add("h-100", "btn", "btn-lg", "btn-primary", "px-sm-5");
  submitButton.textContent = i18next.t("submit");
  
  // Append elements to construct the form
  formFloatingDiv.appendChild(urlInput);
  formFloatingDiv.appendChild(urlInputLabel);
  formUrlCol.appendChild(formFloatingDiv);
  formRowDiv.appendChild(formUrlCol);
  formRowDiv.appendChild(colAutoDiv);
  colAutoDiv.appendChild(submitButton);
  formElement.appendChild(formRowDiv);
  
  const exampleParagraph = document.createElement("p");
  exampleParagraph.classList.add("mt-2", "mb-0", "text-secondary");
  exampleParagraph.textContent = i18next.t("example-paragraph");
  
  const feedbackParagraph = document.createElement("p");
  feedbackParagraph.classList.add("feedback", "m-0", "position-absolute", "small");
  
  // Append elements to construct the first section
  contentDiv.appendChild(h1Element);
  contentDiv.appendChild(leadParagraph);
  contentDiv.appendChild(formElement);
  contentDiv.appendChild(exampleParagraph);
  contentDiv.appendChild(feedbackParagraph);
  rowDiv.appendChild(contentDiv);
  firstSection.appendChild(rowDiv);
  
  // Create the second section
  const secondSection = document.createElement("section");
  secondSection.classList.add("container-fluid", "container-xxl", "p-5");
  
  const secondRowDiv = document.createElement("div");
  secondRowDiv.classList.add("row");
  
  const postsCol = document.createElement("div");
  postsCol.classList.add("col-md-10", "col-lg-8", "order-1", "mx-auto", "posts");
  
  const feedsCol = document.createElement("div");
  feedsCol.classList.add("col-md-10", "col-lg-4", "mx-auto", "order-0", "order-lg-1", "feeds");
  
  // Append elements to construct the second section
  secondRowDiv.appendChild(postsCol);
  secondRowDiv.appendChild(feedsCol);
  secondSection.appendChild(secondRowDiv);
  
  // Create the footer
  const footer = document.createElement("footer");
  footer.classList.add("footer", "border-top", "py-3", "mt-5", "bg-light");
  
  const footerContainer = document.createElement("div");
  footerContainer.classList.add("container-xl");
  
  const footerText = document.createElement("div");
  footerText.classList.add("text-center");
  footerText.innerHTML = 'created by <a href="https://ru.hexlet.io/professions/frontend/projects/11" target="_blank">Hexlet</a>';
  
  // Append elements to construct the footer
  footerContainer.appendChild(footerText);
  footer.appendChild(footerContainer);
  
  // Append sections and footer to the main element
  mainElement.appendChild(firstSection);
  mainElement.appendChild(secondSection);
  
  // Append the main element and footer to the root (body)
  root.appendChild(mainElement);
  root.appendChild(footer);
};