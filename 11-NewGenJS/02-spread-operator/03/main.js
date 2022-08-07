data = (fname, lastname, ...hobby) => {
  arr = [fname, lastname, ...hobby];
  arr = arr + [, hobby.length];
  return arr;
};

data("ken", "za", "swim", "run", "fly"); //?

data1 = (Firstname, Lastname, ...Hobby) => {
  return (arr = { Firstname, Lastname, Hobby, hobbies: Hobby.length });
};
data1("ken", "za", "swim", "run", "fly"); //?
