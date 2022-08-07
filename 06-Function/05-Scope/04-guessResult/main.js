let x = 1;
function func() {
  console.log(x); // * 1 เพราะ x =2 ยังไม่ถูกเรียกใช้จนกว่าจะ log x1 เสร็จ
  x = 2;
}
func();
