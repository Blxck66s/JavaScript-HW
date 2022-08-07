x = +prompt("number 1");
y = +prompt("number 2");
z = +prompt("number 3");

if (x <= y && y <= z) {
  alert(`${x},${y},${z}`);
} else if (x <= z && z <= y) {
  alert(`${x},${z},${y}`);
} else if (y <= x && x <= z) {
  alert(`${y},${x},${z}`);
} else if (y <= z && z <= x) {
  alert(`${y},${z},${x}`);
} else if (z <= x && x <= y) {
  alert(`${z},${x},${y}`);
} else if (z <= y && y <= x) {
  alert(`${z},${y},${x}`);
}
