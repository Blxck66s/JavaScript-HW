let a = undefined;
let b = null;
let c = b + "4 2";

let d = +a;
let e = +b;
let f = +c;

console.log(d); //NaN undefined เป็นเลข = NaN
console.log(e); //0 Null มีค่าในตัวเลขเป็น 0
console.log(f); //NaN Null+string 4 2 มีค่าเป็น NaN
