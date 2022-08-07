let john = { name: "John", age: 27 };
let jo = { name: "Jo", age: 21 };
let jin = { name: "Jin", age: 25 };

let arr = [john, jo, jin];

console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33

function getAverageAge(arr) {
  summ = arr.reduce((sum, item) => (sum = sum + item.age), 0);
  console.log(summ);
  summ = summ / arr.length;
  return summ;
} //?
