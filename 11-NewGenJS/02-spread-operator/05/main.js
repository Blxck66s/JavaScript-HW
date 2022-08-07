removeRandom = (arr) => {
  position = Math.floor(Math.random() * arr.length);
  arr.splice(position, 1);
  return arr;
};

a = [1, 2, 3, 4, 5];

removeRandom(a); //?
