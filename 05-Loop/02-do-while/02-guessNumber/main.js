input = prompt("1-99");
input2 = 0;
count = 0;

if (input <= 1 || input >= 99) {
  alert("Invalid Range");
} else {
  do {
    input2 = prompt("guess it !");
    count++;
    if (input2 == input) {
      alert(`Correct !~ u guess ${count} times !~`);
    } else if (+input2 > +input) {
      alert(
        `your number is higher !~ u guess ${count} times now Try harder !~`
      );
    } else if (+input2 < +input) {
      alert(`your number is lower !~ u guess ${count} times now Try harder !~`);
    }
  } while (input2 !== input);
}
