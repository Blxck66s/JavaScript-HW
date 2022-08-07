const arry = [2, 3, 5, 7, 11];

squareArr = (arr) => {
  let newarr = [];
  arr.forEach((item) => {
    item = item ** 2;
    newarr.push(item);
  });
  return newarr;
};

console.log(squareArr(arry)); // [4, 9, 25, 49, 121]

console.log(arry);
