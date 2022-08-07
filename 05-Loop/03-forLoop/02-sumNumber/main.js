a = 0;
odd = 0;
even = 0;
c2 = 0;
c3 = 0;
aa = 0;

for (let i = 1; i <= 100; i++) {
  a = a + i;

  if (i % 2 == 0) {
    even = even + i;
    c2 = c2 + i ** 2;
  } else if (i % 2 !== 0) {
    odd = odd + i;
  }
  if (i % 3 == 0) {
    c3 = c3 + i ** 2;
  }
  aa = c2 - c3;
}
console.log(`all number ${a}`);
console.log(`even number ${even}`);
console.log(`odd number ${odd}`);
console.log(`last sum number ${aa}`);
