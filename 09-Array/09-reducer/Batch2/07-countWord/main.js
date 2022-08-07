let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

let result = names.reduce((sum, item) => {
  currentkey = sum[item];
  if (!currentkey) {
    sum[item] = 1;
  } else {
    sum[item] += 1;
  }

  return sum;
}, {}); //?
