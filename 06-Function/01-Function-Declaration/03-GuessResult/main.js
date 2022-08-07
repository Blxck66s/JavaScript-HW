let message = "Welcome to Thailand";

function logMessage(message) {
  message = "Hello everybody";
  console.log(message); // * Hello everybody เพราะอยู่ในฟังชั่นและอยู่ไกล้กว่า
}

logMessage(message);
console.log(message); // ** เพราะไม่ได้เรียกใช้ function จึงไม่ได้มีการเปลี่ยนค่าของ message

let name = "John";

function sayHi(input) {
  console.log(name); // *** ดึงname จากข้างนอกมาจึงเป็น john
  name = input;
}

sayHi();
console.log(name); // **** เพราะ name โดนเปลี่ยนให้ = input แต่ input ยังไม่ได้กำหนดตัวแปรว่าเป็นอะไรมีค่าเท่ากับอะไรจึงเป็น undefined
