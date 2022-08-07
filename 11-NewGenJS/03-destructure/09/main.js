let user = {
  name: "John",
  years: 27,
};

let { name, years: age, isAdmin = true } = user;

name;
age;
isAdmin;
