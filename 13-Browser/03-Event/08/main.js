button = document.getElementsByTagName("button");
button[0].addEventListener("click", function (event) {
  if (button[0].textContent === "hide") {
    button[0].textContent = "show";
  } else if (button[0].textContent === "show") {
    button[0].textContent = "hide";
  }
});
