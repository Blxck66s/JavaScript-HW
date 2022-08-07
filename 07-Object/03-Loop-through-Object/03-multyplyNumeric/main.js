let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
console.log(menu);

let multiplyNumeric = (obj, num) => {
  for (key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] = obj[key] * num;
    }
  }
};

console.log(multiplyNumeric(menu, 3));

console.log(menu);
