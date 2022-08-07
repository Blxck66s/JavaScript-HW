let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let calsalaries = (obj) => {
  let sum = 0;
  for (key in obj) {
    sum = sum + obj[key];
  }
  return sum;
};

console.log(calsalaries(salaries));
