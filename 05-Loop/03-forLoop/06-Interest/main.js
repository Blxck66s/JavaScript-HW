let a = 100000;
let percent = 2.5;
let percentnum;
let fix = 100000;
for (let i = 1; i < 11; i++) {
  a = a + (a * percent) / 100;
  console.log(`year ${i} your total is ${a}`);
}
