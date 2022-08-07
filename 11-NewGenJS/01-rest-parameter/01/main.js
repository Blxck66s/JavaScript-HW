multiply = (...numbers) => {
  sum = numbers.reduce((sum, item) => sum * item, 1);
  return sum;
};

multiply(2, 2, 2); //?
