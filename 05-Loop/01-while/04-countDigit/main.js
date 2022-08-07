num = prompt("number digit calc");
count = 0;

while (num) {
  remainder = num % 10;
  num = (num - remainder) / 10;
  count++;
}
alert(count);
