doubleAndReturnArgs = (arr, ...numbers) => {
  numbers = numbers.reduce((a, c) => {
    a.push(c * 2);
    return a;
  }, []);
  numbers; //?
  NewArr = [...arr, ...numbers];
  return NewArr;
};

doubleAndReturnArgs([1, 2, 3], 4, 4); //?
// expexted result: [1, 2, 3, 8, 8]
doubleAndReturnArgs([2], 10, 4); //?
// expexted result: [2, 20, 8]
