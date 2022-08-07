function isEmptyObject(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

const user_1 = { name: "ken" };
const user_2 = { name: "kken", age: 24 };
const user_3 = {};

console.log(isEmptyObject(user_1));
console.log(isEmptyObject(user_2));
console.log(isEmptyObject(user_3));
