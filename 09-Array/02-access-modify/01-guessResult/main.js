const arr = [1, 2, 4];
const newArr = arr;

arr[0] = 3;
console.log(newArr[0]); // * ได้ 3 เพราะ arr ตำแหน่งที่ 0 ประกาศใหม่ให้เป็น 3
