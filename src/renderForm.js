const setAttributesToElement = (element, attributeEntries) => {
  attributeEntries.forEach(([name, value]) => element.setAttribute(name, value))
};

const formInputAttributesEntries = [
  ["type", "email"],
  ["id", "exampleInputEmail1"],
  ["aria-describedby", "emailHelp"],
  ["placeholder", "Enter email"],
];

const submitFormButtonAttributesEntries = [
  ["type", "submit"],
]

export const renderForm = () => {
  const form = document.createElement("form");
  form.className = "d-flex";
  
  const input = document.createElement("input");
  input.className = "form-control";
  setAttributesToElement(input, formInputAttributesEntries)
  
  const button = document.createElement("button");
  button.textContent = "Добавить";
  button.className = "btn btn-primary";
  setAttributesToElement(button, submitFormButtonAttributesEntries);
  
  form.appendChild(input);
  form.appendChild(button);
  return form;
};