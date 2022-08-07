const square = (n) => {
  n ** 2;
};

console.log(square(7)); // * undefined เพราะไมไ่ด้ return ค่ากลับไปเนื่องจากใช้ {}

const calcCircleArea = (r) => Math.PI * r ** 2;
console.log(calcCircleArea(3)); // ** return ค่า r กลับไปเพราะ คำนวนคำตอบใน return มาแล้ว
