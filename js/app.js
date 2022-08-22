const buttons = document.getElementsByClassName("btn-select");
for (const button of buttons) {
  button.addEventListener("click", function () {
    const playerName = button.previousElementSibling.innerText;
    button.setAttribute("disabled", true);
    button.style.backgroundColor = "gray";
  });
}
