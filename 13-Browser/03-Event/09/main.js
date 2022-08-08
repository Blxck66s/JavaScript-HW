input = document.querySelector("input");
button = document.querySelector("button");
p = document.querySelector("p");

button.addEventListener("click", function check() {
  if (!input.value) {
    p.innerHTML = "Phone Number is required";
    p.style.color = "red";
    input.style.border = "2px solid red";
  } else if (isNaN(input.value)) {
    p.innerHTML = "Phone Number is invalid";
    p.style.color = "red";
    input.style.border = "2px solid red";
  } else if (input.value.length !== 10) {
    p.innerHTML = "Invalid length";
    p.style.color = "red";
    input.style.border = "2px solid red";
  } else {
    alert("Your number is valid");
    input.style.border = "1px solid black";
    p.innerHTML = "";
  }
  input.value = "";
});
