let alphabets = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
// expected result: ['a', 'b', 'c', 'e', 'd']

let result = alphabets.reduce((sum, item) => {
  if (!sum.includes(item)) {
    sum.push(item);
  }
  return sum;
}, []); //?
