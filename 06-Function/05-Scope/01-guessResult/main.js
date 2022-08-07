let name = "John";
function sayHi() {
  alert("Hi, " + name);
}
name = "Pete";
sayHi(); // * pete เพราะ name โดนเปลี่ยนก่อนเรียกใช้ function
