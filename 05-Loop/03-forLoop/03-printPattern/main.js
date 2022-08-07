let aa = "*";
let a = "";

// Print * 4
// for (let i = 0; i < 4; i++) {
//   a = a + aa;
//   a = a + "  ";
//   console.log(`${a}`);
// }

// Print * 1
for (let i = 0; i < 4; i++) {
  for (let j = 0; j <= i; j++) {
    a = a + "*  ";
  }
  a = a.trimEnd();
  a = a + "\n";
}
console.log(a);
