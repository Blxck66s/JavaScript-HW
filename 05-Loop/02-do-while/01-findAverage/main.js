let input;
let sum;
let count;
do {
  input = prompt("gimme number");
  if (!(input == null || input.trim() == "" || input == 0 || isNaN(input))) {
    sum = sum + +input;
    count++;
  }
} while (!(input == null || input.trim() == "" || input == 0 || isNaN(input)));
if (count > 0) {
  console.log(sum);
  console.log(sum / count);
}
