let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2](); // * เรียกใช้ function ที่อยู่ใน array อันที่ 2 ซึ่งมีค่าเป็น function
