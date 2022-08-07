num = prompt("number digit calc ver 2");
count = 0;
ree = 0;

while (num) {
  remainder = num % 10;
  num = (num - remainder) / 10;
  ree = ree + remainder;
  count++;
}
alert(ree);
