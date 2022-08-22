const buttons = document.getElementsByClassName("btn-select");
const selectedContainer = document.getElementById("selected-container");

for (const button of buttons) {
  button.addEventListener("click", function () {
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
    // add li
    selectedContainer.appendChild(li);
  });
}
