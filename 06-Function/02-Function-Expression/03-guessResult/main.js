function magic() {
  return function (x) {
    return x * 42;
  };
}
const answer = magic();
console.log(answer); // * return เป็น function magic
console.log(answer(1337)); // ** return เป็นผลลัพของ magic 1337
console.log(magic(1337)(42)); // ***return เป็นผลคูณของ 42
