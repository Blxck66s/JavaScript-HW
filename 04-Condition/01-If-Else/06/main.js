x = +prompt("number1");
y = +prompt("number2");

// console.log(typeof x);

if (isNaN(x) || isNaN(y)) {
  alert("Invalid number");
} else {
  alert(x + y);
}
