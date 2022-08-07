const obj = { prop: 5, prop2: 10 };
let a, b;
({ prop: a, prop2: b } = obj);

console.log(a);
console.log(b);
