const array1 = [1, 2, 30, 400];
// result: [2, 4, 60, 800]
result1 = array1.map((item) => (item = item * 2)); //?

const array2 = [1, 2, 3, 4];
// result: ["1", "2", "3", "4"]]
result2 = array2.map((item) => (item = String(item))); //?

const array3 = [1, "1", 2, {}];
// result: ["number", "string", "number", "object"]
result3 = array3.map((item) => (item = typeof item)); //?

const array4 = ["apple", "banana", "orange"];
// result: ["APPLE", "BANANA", "ORANGE"]
result4 = array4.map((item) => (item = item.toUpperCase())); //?

const array5 = [1, 3, 4, 5, 6, 7, 8];
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
result5 = array5.map((item) => {
  if (item % 2 !== 0) {
    return "odd";
  } else return "even";
}); //?

const array6 = [1, -3, 2, 8, -4, 5];
// result: [1, 3, 2, 8, 4, 5]
result6 = array6.map((item) => {
  if (item < 0) {
    return item - item - item;
  } else return item;
}); //?

const array7 = [100, 200.25, 300.84, 400.3];
// result: ["100.00", "200.25", "300.84", "400.30"]
result7 = array7.map((item) => (item = String(item.toFixed(2)))); //?

const array8 = [0, 5, 10, 7, 6, 5, 0];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
result8 = array8.map((item) => {
  month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (item = month[item]);
}); //?

const array9 = [1, 16, 81, 256, 625, 1296];
// result: [1, 2, 3, 4, 5, 6]
result9 = array9.map((item) => (item = Math.sqrt(Math.sqrt(item)))); //?

const array10 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
// result: ["apple", "banana", "watermelon"]
result10 = array10.map((item) => (item = item.name)); //?

const array11 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
// result: [14, 18, 32]
result11 = array11.map((item) => (item = item.age)); //?

const array12 = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" },
];
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]
result12 = array12.map((item) => (item = item.name + " " + item.surname)); //?

const array13 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" },
];
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]
result13 = array13.map((item) => {
  current_year = 2022;
  let age = current_year - item.birth.slice(0, 4);

  return { ...item, age: age };
  // item.age = age;
  //return item;
}); //?

const array14 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
];
result14 = array14.map((item) => {
  let day = item.birth.slice(-2); //?
  let mth = item.birth.slice(5, 7); //?
  let mthname = month[mth - 1].toLowerCase();
  let year = item.birth.slice(0, 4); //?
  return `<tr><td>${item.name}</td><td>${day} ${mthname} ${year}</td></tr>`;
}); //?
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]
month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
