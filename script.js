const addOptionBtn = document.getElementById("add-option");
const option = document.getElementById("option-input");
const optionsDiv = document.getElementById("options");

const addOptionHandler = () => {
  const newOption = option.cloneNode(true);
  optionsDiv.append(newOption);
};

const deleteOptionHandler = (event) => {
  if (event.target.classList.contains("btn-danger")) {
    event.target.closest(".row").remove();
  }
};

addOptionBtn.addEventListener("click", addOptionHandler);
optionsDiv.addEventListener("click", deleteOptionHandler);
