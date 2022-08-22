// Utility Functions
function getFieldValueById(id) {
  const element = document.getElementById(id);
  const value = element.value;
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

    // create li
    const li = document.createElement("li");
    li.innerText = playerName;
    li.classList.add("ps-3");
    li.classList.add("pb-3");
    // add li
    selectedContainer.appendChild(li);
  });
}

document.getElementById("btn-calc").addEventListener("click", function () {
  const playerNumber = document.getElementById("selected-container").childElementCount;
  const perPlayerCost = getFieldValueById("per-player-cost");
  const playerTotalCost = playerNumber * perPlayerCost;
  setTextElimentValueById("player-cost-total", playerTotalCost);
});

document.getElementById("btn-calc-total").addEventListener("click", function () {
  const playerTotalCost = getTextElimentValueById("player-cost-total");
  const managerCost = getFieldValueById("manager-cost");
  const coachCost = getFieldValueById("coach-cost");
  const totalCost = playerTotalCost + managerCost + coachCost;
  setTextElimentValueById("total-cost", totalCost);
});
