button = document.querySelector("button");
button.onclick = function () {
  alert("Form is submitted");
};
button.onclick = null;

button.addEventListener("click", alert("Form is submitted"));
