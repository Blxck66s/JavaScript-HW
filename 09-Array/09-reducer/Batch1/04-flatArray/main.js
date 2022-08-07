let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
];
// expected result: [0, 1, 2, 3, 4, 5]

result = flattened.reduce((sum, item) => sum.concat(item)); //?
result1 = flattened.reduce((sum, item) => {
  sum.push(...item);
  return sum;
}, []); //?
