function makeWorker() {
  let name = "Pete";
  return function () {
    alert(name);
  };
}
let name = "John";
let work = makeWorker();
work(); // * pete เพราะ name โดนเปลี่ยนตอนเรียกใช้ function
