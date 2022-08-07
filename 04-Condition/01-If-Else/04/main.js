let x = prompt("number check !");

if (x == null || x == "" || x.trim() == "" || isNaN(x)) {
  alert("Invalid number");
} else if (x > 0) {
  alert("Positive number");
} else if (x == 0) {
  alert("Zero");
} else {
  alert("Negative number");
}
