const addOptionBtn = document.getElementById("add-option");
const option = document.getElementById("option-input");
const optionsDiv = document.getElementById("options");
const calculateBtn = document.getElementById("btn-calculate");

const addOptionHandler = () => {
  const newOption = option.cloneNode(true);
  optionsDiv.append(newOption);
};

const deleteOptionHandler = (event) => {
  if (event.target.classList.contains("btn-danger")) {
    event.target.closest(".row").remove();
  }
};

const buildOptionsArray = () => {
  const inputs = optionsDiv.querySelectorAll("input");
  const weights = optionsDiv.querySelectorAll("select");

  let resultArray = [];

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === "") {
      continue;
    }
    let tempArray = Array.from(
      { length: weights[i].value },
      (v) => inputs[i].value
    );
    resultArray = resultArray.concat(tempArray);
  }
  return resultArray;
};

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const showResultElement = (content) => {
  if (!content) {
    return;
  }
  const result = document.getElementById("result");
  result.textContent = content;
  result.classList.remove("d-none");
};

const calculateHandler = () => {
  const options = buildOptionsArray();
  const chosenOptionIndex = randomIntFromInterval(1, options.length);
  const chosenOption = options[chosenOptionIndex - 1];
  showResultElement(chosenOption);
};

addOptionBtn.addEventListener("click", addOptionHandler);
optionsDiv.addEventListener("click", deleteOptionHandler);
calculateBtn.addEventListener("click", calculateHandler);
