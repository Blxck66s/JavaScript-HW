filterOutOdds = (...numbers) => {
  sum = numbers.reduce((sum, item) => {
    if (item % 2 == 0) {
      sum.push(item);
    }
    return sum;
  }, []);
  return sum;
};

filterOutOdds(2, 1, 3, 2, 10); //?
