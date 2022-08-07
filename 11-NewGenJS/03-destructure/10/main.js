let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
let salaries1 = {};

topSalaries = (salaries) => {
  if (Object.keys(salaries).length !== 0) {
    x = Object.values(salaries);
    max = Math.max(...x);
    for (let [key, value] of Object.entries(salaries)) {
      if (value == max) {
        select = key;
        return select;
      }
    }
  } else return "null";
};

console.log(topSalaries(salaries)); //?
