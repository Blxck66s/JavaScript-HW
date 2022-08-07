x = +prompt("whats the number ?");

x >= 80
  ? alert("Grade A !~")
  : x >= 70 && x <= 79
  ? alert("Grade B !~")
  : x >= 60 && x <= 69
  ? alert("Grade C !~")
  : x >= 50 && x <= 59
  ? alert("Grade D !~")
  : x < 50
  ? alert("Grade F !~")
  : alert(`invalid number`);
