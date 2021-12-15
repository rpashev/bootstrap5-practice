const addOptionBtn = document.getElementById("add-option");
const option = document.getElementById("option-input");
const optionsDiv = document.getElementById("options");

const addOptionHandler = () => {
  const newOption = option.cloneNode(true);
  optionsDiv.append(newOption);
};

addOptionBtn.addEventListener("click", addOptionHandler);
