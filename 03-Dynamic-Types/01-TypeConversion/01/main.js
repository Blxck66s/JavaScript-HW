let a = undefined;
let b = 2;
let c = a++;

let d = String(a);
let e = String(b);
let f = String(c);

console.log(d); //NaN พราะ underfined +1 เลยเป็น NaN ก่อนที่จะแปลง string
console.log(e); //2 เพราะเป็น num
console.log(f); //NaN  เพราะ undefined +1 เลยเป็น NaN ทำอะไรกับมันก็เป็น NaN
