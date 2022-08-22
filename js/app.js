const buttons = document.getElementsByClassName("btn-select");

for (const button of buttons) {
  button.addEventListener("click", function () {
    const playerName = button.previousElementSibling.innerText;

    // disable button when clicked
    button.setAttribute("disabled", true);
    button.style.backgroundColor = "gray";

    // create li
    const li = document.createElement("li");
    li.innerText = playerName;
    li.classList.add("ps-3");
    // add li
    const selectedContainer = document.getElementById("selected-container");
    selectedContainer.appendChild(li);
  });
}
