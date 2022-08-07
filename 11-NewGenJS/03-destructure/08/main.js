agecheck = ({ firstName, lastName, age }) => {
  if (age > 18) {
    return `Hi ${firstName}-${lastName}`; //?
  } else return "No"; //?
};

obj1 = {
  firstName: "front",
  lastName: "end",
  age: 20,
};
obj2 = { firstName: "Back", lastName: "end", age: 18 };

agecheck(obj1); //?

agecheck(obj2); //?
