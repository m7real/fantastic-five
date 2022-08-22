// Utility Functions

// for Multiple Use
function getFieldValueById(id) {
  const fieldElement = document.getElementById(id);
  const value = fieldElement.value;
  return parseInt(value);
}
function getTextElimentValueById(id) {
  const element = document.getElementById(id);
  const value = element.innerText;
  return parseInt(value);
}
function setTextElimentValueById(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}

// for Input Validation
function inputValidationById(id) {
  const inputField = document.getElementById(id);
  const inputValue = inputField.value;
  if (isNaN(inputValue)) {
    alert("Input Numbers Only");
    return false;
  } else if (inputValue < 0) {
    alert("Invalid Input");
    return false;
  } else if (inputValue === "") {
    alert("Input Field Can Not Be Empty");
    return false;
  }
}

// Event Listeners
const buttons = document.getElementsByClassName("btn-select");
for (const button of buttons) {
  button.addEventListener("click", function () {
    const selectedContainer = document.getElementById("selected-container");
    if (selectedContainer.childElementCount >= 5) {
      alert("You have already added 5 Players, Can't add more");
      return;
    }
    const playerName = button.previousElementSibling.innerText;

    // disable button when clicked
    button.setAttribute("disabled", true);
    button.style.backgroundColor = "gray";
    button.style.border = "none";

    // create li
    const li = document.createElement("li");
    li.innerText = playerName;
    li.classList.add("ps-3");
    li.classList.add("pb-3");
    // add li
    selectedContainer.appendChild(li);
  });
}

// calculate player expenses
document.getElementById("btn-calc").addEventListener("click", function () {
  // input validation
  if (inputValidationById("per-player-cost") === false) {
    return;
  }
  const playerNumber = document.getElementById("selected-container").childElementCount;
  const perPlayerCost = getFieldValueById("per-player-cost");
  const playerTotalCost = playerNumber * perPlayerCost;
  setTextElimentValueById("player-cost-total", playerTotalCost);
});

// calculate total cost
document.getElementById("btn-calc-total").addEventListener("click", function () {
  // input validation
  if (inputValidationById("manager-cost") === false || inputValidationById("coach-cost") === false) {
    return;
  }
  const playerTotalCost = getTextElimentValueById("player-cost-total");
  const managerCost = getFieldValueById("manager-cost");
  const coachCost = getFieldValueById("coach-cost");
  const totalCost = playerTotalCost + managerCost + coachCost;
  setTextElimentValueById("total-cost", totalCost);
});
