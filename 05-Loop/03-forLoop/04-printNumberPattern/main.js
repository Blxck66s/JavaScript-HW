let a = "";

// Print * 4
// for (let i = 1; i < 9; i++) {
//   a = a + i;
//   a = a + " ";
//   console.log(`${a}`);
// }

// Print * 1
for (let i = 1; i < 9; i++) {
  for (let j = 1; j <= i; j++) {
    a = a + j + " ";
  }
  a = a + "\n";
}
console.log(`${a}`);
