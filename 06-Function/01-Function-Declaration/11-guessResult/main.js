function sayHi(age) {
  if (age < 12) alert("Hi kid");
}
console.log(sayHi); // * ไม่มีอะไรเกิดขึ้นเพราะเรียกใช้ function แต่ไม่ได้ให้ค่ากับตัวแปรตอนเรียกใช้
console.log(sayHi(10)); // ** Hi kid เพราะ age = 10 ซึ่งน้อยกว่า 12 จึงสั่ง alert "Hi kid"

function sayHi(name) {
  if (name) {
    alert("Hi " + name);
    return;
  } else {
    return "Who are you";
  }
}
console.log(sayHi("John")); // ***   ได้ Hi John เพราะ name  เป็น true หลังจากได้ string มาเป็น 'john'
console.log(sayHi()); // ****  log ออกมาว่า who are you เพราะ name ไม่ได้เป็น true จึงลงมาทำตามที่ else กำหนด
