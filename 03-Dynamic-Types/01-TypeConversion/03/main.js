let a = undefined;
let b = " ";
let c = !b;

let d = Boolean(a);
let e = Boolean(b);
let f = Boolean(c);

console.log(d); //false undefined เป็น falsy
console.log(e); //true string เป็น true
console.log(f); //false ! คือทำให้ค่าข้างขวาเป็นค่า boolean ตรงข้าม จึงเป็น false
